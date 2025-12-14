import express from "express";
import session from "express-session";
import { neon } from "@neondatabase/serverless";
import bcrypt from "bcryptjs";
import { drizzle } from "drizzle-orm/neon-http";
import { eq, and, or, ilike, gte, lte, desc } from "drizzle-orm";
import * as schema from "../shared/schema";
import { insertUserSchema, insertListingSchema, insertStoreSchema, insertMessageSchema, insertFavoriteSchema } from "../shared/schema";
import { fromZodError } from "zod-validation-error";

const app = express();

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

declare module "express-session" {
  interface SessionData {
    userId?: string;
  }
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: process.env.SESSION_SECRET || "holeify-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    },
  })
);

const requireAuth = (req: any, res: any, next: any) => {
  if (!req.session.userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
};

app.post("/api/auth/register", async (req, res) => {
  try {
    const data = insertUserSchema.parse(req.body);
    const existing = await db.select().from(schema.users).where(eq(schema.users.email, data.email)).limit(1);
    if (existing.length > 0) {
      return res.status(400).json({ error: "Email already registered" });
    }
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const [user] = await db.insert(schema.users).values({ ...data, password: hashedPassword }).returning();
    req.session.userId = user.id;
    const { password, ...userWithoutPassword } = user;
    res.status(201).json(userWithoutPassword);
  } catch (error: any) {
    if (error.name === "ZodError") {
      return res.status(400).json({ error: fromZodError(error).toString() });
    }
    res.status(500).json({ error: "Failed to register user" });
  }
});

app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Invalid credentials" });
    }
    const [user] = await db.select().from(schema.users).where(eq(schema.users.email, email)).limit(1);
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    req.session.userId = user.id;
    const { password: _, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
  } catch (error) {
    res.status(500).json({ error: "Failed to log in" });
  }
});

app.post("/api/auth/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).json({ error: "Failed to log out" });
    res.json({ message: "Logged out successfully" });
  });
});

app.get("/api/auth/me", requireAuth, async (req, res) => {
  try {
    const [user] = await db.select().from(schema.users).where(eq(schema.users.id, req.session.userId!)).limit(1);
    if (!user) return res.status(404).json({ error: "User not found" });
    const { password, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

app.get("/api/listings", async (req, res) => {
  try {
    let query = db.select().from(schema.listings).where(eq(schema.listings.status, "active"));
    const listings = await query.orderBy(desc(schema.listings.createdAt));
    res.json(listings);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch listings" });
  }
});

app.get("/api/listings/:id", async (req, res) => {
  try {
    const [listing] = await db.select().from(schema.listings).where(eq(schema.listings.id, req.params.id)).limit(1);
    if (!listing) return res.status(404).json({ error: "Listing not found" });
    await db.update(schema.listings).set({ views: (listing.views || 0) + 1 }).where(eq(schema.listings.id, req.params.id));
    res.json(listing);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch listing" });
  }
});

app.post("/api/listings", requireAuth, async (req, res) => {
  try {
    const data = insertListingSchema.parse({ ...req.body, userId: req.session.userId });
    const [listing] = await db.insert(schema.listings).values(data as any).returning();
    res.status(201).json(listing);
  } catch (error: any) {
    if (error.name === "ZodError") {
      return res.status(400).json({ error: fromZodError(error).toString() });
    }
    res.status(500).json({ error: "Failed to create listing" });
  }
});

app.patch("/api/listings/:id", requireAuth, async (req, res) => {
  try {
    const [listing] = await db.select().from(schema.listings).where(eq(schema.listings.id, req.params.id)).limit(1);
    if (!listing) return res.status(404).json({ error: "Listing not found" });
    if (listing.userId !== req.session.userId) return res.status(403).json({ error: "Forbidden" });
    const [updated] = await db.update(schema.listings).set(req.body).where(eq(schema.listings.id, req.params.id)).returning();
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: "Failed to update listing" });
  }
});

app.delete("/api/listings/:id", requireAuth, async (req, res) => {
  try {
    const [listing] = await db.select().from(schema.listings).where(eq(schema.listings.id, req.params.id)).limit(1);
    if (!listing) return res.status(404).json({ error: "Listing not found" });
    if (listing.userId !== req.session.userId) return res.status(403).json({ error: "Forbidden" });
    await db.delete(schema.listings).where(eq(schema.listings.id, req.params.id));
    res.json({ message: "Listing deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete listing" });
  }
});

app.get("/api/stores/:id", async (req, res) => {
  try {
    const [store] = await db.select().from(schema.stores).where(eq(schema.stores.id, req.params.id)).limit(1);
    if (!store) return res.status(404).json({ error: "Store not found" });
    res.json(store);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch store" });
  }
});

app.get("/api/stores/code/:storeCode", async (req, res) => {
  try {
    const [store] = await db.select().from(schema.stores).where(eq(schema.stores.storeCode, req.params.storeCode)).limit(1);
    if (!store) return res.status(404).json({ error: "Store not found" });
    res.json(store);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch store" });
  }
});

app.post("/api/stores", requireAuth, async (req, res) => {
  try {
    const data = insertStoreSchema.parse({ ...req.body, userId: req.session.userId });
    const [store] = await db.insert(schema.stores).values(data).returning();
    res.status(201).json(store);
  } catch (error: any) {
    if (error.name === "ZodError") {
      return res.status(400).json({ error: fromZodError(error).toString() });
    }
    res.status(500).json({ error: "Failed to create store" });
  }
});

app.patch("/api/stores/:id", requireAuth, async (req, res) => {
  try {
    const [store] = await db.select().from(schema.stores).where(eq(schema.stores.id, req.params.id)).limit(1);
    if (!store) return res.status(404).json({ error: "Store not found" });
    if (store.userId !== req.session.userId) return res.status(403).json({ error: "Forbidden" });
    const [updated] = await db.update(schema.stores).set(req.body).where(eq(schema.stores.id, req.params.id)).returning();
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: "Failed to update store" });
  }
});

app.get("/api/messages/conversations", requireAuth, async (req, res) => {
  try {
    const messages = await db.select().from(schema.messages).where(
      or(eq(schema.messages.senderId, req.session.userId!), eq(schema.messages.receiverId, req.session.userId!))
    ).orderBy(desc(schema.messages.createdAt));
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch conversations" });
  }
});

app.post("/api/messages", requireAuth, async (req, res) => {
  try {
    const data = insertMessageSchema.parse({ ...req.body, senderId: req.session.userId });
    const [message] = await db.insert(schema.messages).values(data).returning();
    res.status(201).json(message);
  } catch (error: any) {
    if (error.name === "ZodError") {
      return res.status(400).json({ error: fromZodError(error).toString() });
    }
    res.status(500).json({ error: "Failed to send message" });
  }
});

app.get("/api/favorites", requireAuth, async (req, res) => {
  try {
    const favorites = await db.select().from(schema.favorites).where(eq(schema.favorites.userId, req.session.userId!));
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch favorites" });
  }
});

app.post("/api/favorites", requireAuth, async (req, res) => {
  try {
    const data = insertFavoriteSchema.parse({ ...req.body, userId: req.session.userId });
    const [favorite] = await db.insert(schema.favorites).values(data).returning();
    res.status(201).json(favorite);
  } catch (error: any) {
    if (error.name === "ZodError") {
      return res.status(400).json({ error: fromZodError(error).toString() });
    }
    res.status(500).json({ error: "Failed to add favorite" });
  }
});

app.delete("/api/favorites/:listingId", requireAuth, async (req, res) => {
  try {
    await db.delete(schema.favorites).where(
      and(eq(schema.favorites.userId, req.session.userId!), eq(schema.favorites.listingId, req.params.listingId))
    );
    res.json({ message: "Favorite removed" });
  } catch (error) {
    res.status(500).json({ error: "Failed to remove favorite" });
  }
});

app.get("/api/favorites/:listingId/check", requireAuth, async (req, res) => {
  try {
    const [fav] = await db.select().from(schema.favorites).where(
      and(eq(schema.favorites.userId, req.session.userId!), eq(schema.favorites.listingId, req.params.listingId))
    ).limit(1);
    res.json({ isFavorite: !!fav });
  } catch (error) {
    res.status(500).json({ error: "Failed to check favorite" });
  }
});

export default app;
