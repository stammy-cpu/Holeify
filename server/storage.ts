import { db } from "./db";
import { users, listings, messages, stores, favorites } from "@shared/schema";
import type { User, InsertUser, Listing, InsertListing, Message, InsertMessage, Store, InsertStore, Favorite, InsertFavorite } from "@shared/schema";
import { eq, and, desc, sql, like, or } from "drizzle-orm";

export interface IStorage {
  // User operations
  getUser(id: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: string, updates: Partial<InsertUser>): Promise<User | undefined>;

  // Listing operations
  getListing(id: string): Promise<Listing | undefined>;
  getListings(filters?: {
    category?: string;
    city?: string;
    state?: string;
    minPrice?: number;
    maxPrice?: number;
    search?: string;
    userId?: string;
    storeId?: string;
    status?: string;
  }): Promise<Listing[]>;
  createListing(listing: InsertListing): Promise<Listing>;
  updateListing(id: string, updates: Partial<InsertListing>): Promise<Listing | undefined>;
  deleteListing(id: string): Promise<boolean>;
  incrementListingViews(id: string): Promise<void>;

  // Store operations
  getStore(id: string): Promise<Store | undefined>;
  getStoreByCode(storeCode: string): Promise<Store | undefined>;
  getStoresByUser(userId: string): Promise<Store[]>;
  createStore(store: InsertStore): Promise<Store>;
  updateStore(id: string, updates: Partial<InsertStore>): Promise<Store | undefined>;

  // Message operations
  getMessage(id: string): Promise<Message | undefined>;
  getConversation(listingId: string, userId1: string, userId2: string): Promise<Message[]>;
  getUserConversations(userId: string): Promise<Message[]>;
  createMessage(message: InsertMessage): Promise<Message>;
  markMessageAsRead(id: string): Promise<void>;

  // Favorite operations
  getFavorites(userId: string): Promise<Listing[]>;
  addFavorite(favorite: InsertFavorite): Promise<Favorite>;
  removeFavorite(userId: string, listingId: string): Promise<boolean>;
  isFavorite(userId: string, listingId: string): Promise<boolean>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async updateUser(id: string, updates: Partial<InsertUser>): Promise<User | undefined> {
    const [user] = await db.update(users).set(updates).where(eq(users.id, id)).returning();
    return user;
  }

  // Listing operations
  async getListing(id: string): Promise<Listing | undefined> {
    const [listing] = await db.select().from(listings).where(eq(listings.id, id));
    return listing;
  }

  async getListings(filters?: {
    category?: string;
    city?: string;
    state?: string;
    minPrice?: number;
    maxPrice?: number;
    search?: string;
    userId?: string;
    storeId?: string;
    status?: string;
  }): Promise<Listing[]> {
    let query = db.select().from(listings);
    const conditions = [];

    if (filters?.category) {
      conditions.push(eq(listings.category, filters.category));
    }
    if (filters?.city) {
      conditions.push(eq(listings.city, filters.city));
    }
    if (filters?.state) {
      conditions.push(eq(listings.state, filters.state));
    }
    if (filters?.minPrice !== undefined) {
      conditions.push(sql`${listings.price} >= ${filters.minPrice}`);
    }
    if (filters?.maxPrice !== undefined) {
      conditions.push(sql`${listings.price} <= ${filters.maxPrice}`);
    }
    if (filters?.search) {
      conditions.push(
        or(
          like(listings.title, `%${filters.search}%`),
          like(listings.description, `%${filters.search}%`)
        )
      );
    }
    if (filters?.userId) {
      conditions.push(eq(listings.userId, filters.userId));
    }
    if (filters?.storeId) {
      conditions.push(eq(listings.storeId, filters.storeId));
    }
    if (filters?.status) {
      conditions.push(eq(listings.status, filters.status));
    } else {
      conditions.push(eq(listings.status, "active"));
    }

    if (conditions.length > 0) {
      query = query.where(and(...conditions)) as any;
    }

    return await query.orderBy(desc(listings.createdAt));
  }

  async createListing(insertListing: InsertListing): Promise<Listing> {
    const [listing] = await db.insert(listings).values(insertListing).returning();
    return listing;
  }

  async updateListing(id: string, updates: Partial<InsertListing>): Promise<Listing | undefined> {
    const [listing] = await db.update(listings)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(listings.id, id))
      .returning();
    return listing;
  }

  async deleteListing(id: string): Promise<boolean> {
    const result = await db.update(listings)
      .set({ status: "deleted" })
      .where(eq(listings.id, id));
    return result.rowCount !== null && result.rowCount > 0;
  }

  async incrementListingViews(id: string): Promise<void> {
    await db.update(listings)
      .set({ views: sql`${listings.views} + 1` })
      .where(eq(listings.id, id));
  }

  // Store operations
  async getStore(id: string): Promise<Store | undefined> {
    const [store] = await db.select().from(stores).where(eq(stores.id, id));
    return store;
  }

  async getStoreByCode(storeCode: string): Promise<Store | undefined> {
    const [store] = await db.select().from(stores).where(eq(stores.storeCode, storeCode));
    return store;
  }

  async getStoresByUser(userId: string): Promise<Store[]> {
    return await db.select().from(stores).where(eq(stores.userId, userId));
  }

  async createStore(insertStore: InsertStore): Promise<Store> {
    const [store] = await db.insert(stores).values(insertStore).returning();
    return store;
  }

  async updateStore(id: string, updates: Partial<InsertStore>): Promise<Store | undefined> {
    const [store] = await db.update(stores).set(updates).where(eq(stores.id, id)).returning();
    return store;
  }

  // Message operations
  async getMessage(id: string): Promise<Message | undefined> {
    const [message] = await db.select().from(messages).where(eq(messages.id, id));
    return message;
  }

  async getConversation(listingId: string, userId1: string, userId2: string): Promise<Message[]> {
    return await db.select().from(messages)
      .where(
        and(
          eq(messages.listingId, listingId),
          or(
            and(eq(messages.senderId, userId1), eq(messages.receiverId, userId2)),
            and(eq(messages.senderId, userId2), eq(messages.receiverId, userId1))
          )
        )
      )
      .orderBy(messages.createdAt);
  }

  async getUserConversations(userId: string): Promise<Message[]> {
    return await db.select().from(messages)
      .where(
        or(
          eq(messages.senderId, userId),
          eq(messages.receiverId, userId)
        )
      )
      .orderBy(desc(messages.createdAt));
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const [message] = await db.insert(messages).values(insertMessage).returning();
    return message;
  }

  async markMessageAsRead(id: string): Promise<void> {
    await db.update(messages).set({ isRead: true }).where(eq(messages.id, id));
  }

  // Favorite operations
  async getFavorites(userId: string): Promise<Listing[]> {
    const result = await db
      .select({
        listing: listings,
      })
      .from(favorites)
      .innerJoin(listings, eq(favorites.listingId, listings.id))
      .where(eq(favorites.userId, userId));
    
    return result.map((r: { listing: Listing }) => r.listing);
  }

  async addFavorite(insertFavorite: InsertFavorite): Promise<Favorite> {
    const [favorite] = await db.insert(favorites).values(insertFavorite).returning();
    return favorite;
  }

  async removeFavorite(userId: string, listingId: string): Promise<boolean> {
    const result = await db.delete(favorites)
      .where(
        and(
          eq(favorites.userId, userId),
          eq(favorites.listingId, listingId)
        )
      );
    return result.rowCount !== null && result.rowCount > 0;
  }

  async isFavorite(userId: string, listingId: string): Promise<boolean> {
    const [favorite] = await db.select().from(favorites)
      .where(
        and(
          eq(favorites.userId, userId),
          eq(favorites.listingId, listingId)
        )
      );
    return !!favorite;
  }
}

export const storage = new DatabaseStorage();
