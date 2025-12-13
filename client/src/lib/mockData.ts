import { ListingProps } from "@/components/ui/ListingCard";
import stockIphone from '@assets/stock_images/iphone_15_pro_max_1621e1cb.jpg';
import stockSamsung from '@assets/stock_images/samsung_galaxy_s24_u_22ec7713.jpg';
import stockMacbook from '@assets/stock_images/macbook_pro_m3_d5555737.jpg';
import stockSofa from '@assets/stock_images/modern_living_room_s_461f2429.jpg';
import stockBenz from '@assets/stock_images/mercedes_benz_gle_2a606e2c.jpg';
import stockCamry from '@assets/stock_images/toyota_camry_eca2392f.jpg';
import stockPizza from '@assets/stock_images/pizza_76bb5a54.jpg';
import stockApartment from '@assets/stock_images/luxury_apartment_int_cd954194.jpg';
import stockWashingMachine from '@assets/stock_images/modern_washing_machi_51ce8e7f.jpg';
import stockOfficeChair from '@assets/stock_images/ergonomic_office_cha_0eb3901d.jpg';
import stockTV from '@assets/stock_images/modern_flat_screen_t_9f039100.jpg';
import stockBurger from '@assets/stock_images/fast_food_burger_mea_de44cf40.jpg';

export interface PromoCode {
  code: string;
  description: string;
  discount: string;
  expires?: string;
}

export interface StoreItem {
  id: string;
  code: string;
  name: string;
  price: string;
  image: string;
  description?: string;
}

export interface ExtendedListingProps extends ListingProps {
  storeCode: string;
  codes?: PromoCode[];
  items?: StoreItem[];
  description?: string;
  phone?: string;
  website?: string;
  hours?: string;
  verified?: boolean;
  gallery?: string[];
  condition?: 'New' | 'Used' | 'Refurbished';
  sellerType?: 'Individual' | 'Business';
  brand?: string;
  features?: string[];
  subcategory?: string;
}

export const mockListings: ExtendedListingProps[] = [
  // ELECTRONICS - PHONES
  {
    id: "1",
    storeCode: "SLOT-IPHONE",
    title: "iPhone 15 Pro Max 256GB",
    category: "Mobile Phones & Tablets",
    subcategory: "Mobile Phones",
    price: "₦1,850,000",
    image: stockIphone,
    location: "Computer Village, Ikeja",
    rating: 4.9,
    reviews: 342,
    author: "Slot Systems",
    authorImage: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=1000&auto=format&fit=crop",
    featured: true,
    verified: true,
    condition: "New",
    sellerType: "Business",
    brand: "Apple",
    description: "Brand new iPhone 15 Pro Max. Natural Titanium. 1 Year Apple Warranty. Available for immediate pickup or delivery.",
    gallery: [
      stockIphone,
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1696426790390-f953b336d33b?q=80&w=1000&auto=format&fit=crop"
    ],
    items: [
      { id: "p1", code: "IP15PM-256", name: "iPhone 15 Pro Max 256GB", price: "₦1,850,000", image: stockIphone },
      { id: "p2", code: "IP15PM-512", name: "iPhone 15 Pro Max 512GB", price: "₦2,100,000", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop" }
    ]
  },
  {
    id: "2",
    storeCode: "SAMSUNG-HUB",
    title: "Samsung Galaxy S24 Ultra",
    category: "Mobile Phones & Tablets",
    subcategory: "Mobile Phones",
    price: "₦1,950,000",
    image: stockSamsung,
    location: "Victoria Island, Lagos",
    rating: 4.8,
    reviews: 120,
    author: "Samsung Hub",
    authorImage: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1000&auto=format&fit=crop",
    verified: true,
    condition: "New",
    sellerType: "Business",
    brand: "Samsung",
    description: "The ultimate Galaxy AI phone. Titanium Grey. 12GB RAM, 512GB Storage. Free Galaxy Buds with purchase.",
    gallery: [
      stockSamsung,
      "https://images.unsplash.com/photo-1707812283170-771d6a236b27?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610945265064-f4d215f0e2f4?q=80&w=1000&auto=format&fit=crop"
    ],
    items: [
       { id: "s1", code: "S24U-512", name: "Galaxy S24 Ultra", price: "₦1,950,000", image: stockSamsung }
    ]
  },
  // ELECTRONICS - LAPTOPS
  {
    id: "3",
    storeCode: "MAC-STORE",
    title: "MacBook Pro M3 14-inch",
    category: "Electronics",
    subcategory: "Laptops & Computers",
    price: "₦2,600,000",
    image: stockMacbook,
    location: "Lekki Phase 1, Lagos",
    rating: 5.0,
    reviews: 89,
    author: "iStore Nigeria",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    featured: true,
    verified: true,
    condition: "New",
    sellerType: "Business",
    brand: "Apple",
    description: "Supercharged by M3. Space Black. 8GB Unified Memory, 512GB SSD. Perfect for creators.",
    gallery: [
      stockMacbook,
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1000&auto=format&fit=crop"
    ],
    items: [
      { id: "m1", code: "MBP-M3-14", name: "MacBook Pro M3 14\"", price: "₦2,600,000", image: stockMacbook }
    ]
  },
  {
    id: "4",
    storeCode: "DELL-WRLD",
    title: "Dell XPS 15 9530",
    category: "Electronics",
    subcategory: "Laptops & Computers",
    price: "₦2,200,000",
    image: "https://images.unsplash.com/photo-1593642632823-8f78536788c6?q=80&w=1000&auto=format&fit=crop",
    location: "Wuse 2, Abuja",
    rating: 4.7,
    reviews: 45,
    author: "Abuja Computers",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
    condition: "New",
    sellerType: "Business",
    brand: "Dell",
    description: "High performance Windows laptop. OLED Display, i9 Processor, 32GB RAM, 1TB SSD.",
    gallery: [
      "https://images.unsplash.com/photo-1593642632823-8f78536788c6?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  // ELECTRONICS - TV
  {
    id: "5",
    storeCode: "LG-SHP",
    title: "LG OLED C3 65-inch TV",
    category: "Electronics",
    subcategory: "TV & DVD Equipment",
    price: "₦1,800,000",
    image: stockTV,
    location: "Alaba Int'l Market, Lagos",
    rating: 4.9,
    reviews: 210,
    author: "LG Official Store",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
    featured: true,
    verified: true,
    condition: "New",
    sellerType: "Business",
    brand: "LG",
    description: "The world's #1 OLED TV. Perfect blacks, infinite contrast. Great for gaming with 120Hz refresh rate.",
    gallery: [
      stockTV,
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509281373149-e957c629640d?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "6",
    storeCode: "SONY-CTR",
    title: "Sony Bravia 55\" 4K Smart TV",
    category: "Electronics",
    subcategory: "TV & DVD Equipment",
    price: "₦950,000",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=1000&auto=format&fit=crop",
    location: "Port Harcourt",
    rating: 4.6,
    reviews: 78,
    author: "Electronics Giant",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
    condition: "New",
    sellerType: "Business",
    brand: "Sony",
    description: "Google TV built-in. X1 Processor. Triluminos Pro display for vivid colors.",
    gallery: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577979749830-f1d742b96791?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  // HOME APPLIANCES
  {
    id: "7",
    storeCode: "KITCHEN-HQ",
    title: "Samsung Double Door Fridge",
    category: "Home, Furniture & Appliances",
    subcategory: "Home Appliances",
    price: "₦1,200,000",
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=1000&auto=format&fit=crop",
    location: "Surulere, Lagos",
    rating: 4.8,
    reviews: 150,
    author: "Home Essentials",
    authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
    verified: true,
    condition: "New",
    sellerType: "Business",
    brand: "Samsung",
    description: "Side-by-Side Refrigerator with Twin Cooling Plus. 617L Capacity. Digital Inverter Technology.",
    gallery: [
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571175443880-49e1d58b7948?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "8",
    storeCode: "LAUNDRY-PRO",
    title: "LG 10kg Front Load Washer",
    category: "Home, Furniture & Appliances",
    subcategory: "Home Appliances",
    price: "₦650,000",
    image: stockWashingMachine,
    location: "Yaba, Lagos",
    rating: 4.7,
    reviews: 92,
    author: "Fouani Nigeria",
    authorImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop",
    condition: "New",
    sellerType: "Business",
    brand: "LG",
    description: "AI DD™ Motor. Steam Technology. TurboWash 360. Energy efficient washing machine.",
    gallery: [
      stockWashingMachine,
      "https://images.unsplash.com/photo-1626806775351-538af940bf4d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  // FURNITURE
  {
    id: "9",
    storeCode: "LUX-SOFA",
    title: "L-Shaped Sectional Sofa",
    category: "Home, Furniture & Appliances",
    subcategory: "Furniture",
    price: "₦850,000",
    image: stockSofa,
    location: "Maitama, Abuja",
    rating: 4.9,
    reviews: 56,
    author: "Abuja Interiors",
    authorImage: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1000&auto=format&fit=crop",
    featured: true,
    condition: "New",
    sellerType: "Business",
    description: "Modern grey fabric sectional sofa. Comfortable memory foam cushions. Solid wood frame.",
    gallery: [
      stockSofa,
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "10",
    storeCode: "OFFICE-NG",
    title: "Ergonomic Office Chair",
    category: "Home, Furniture & Appliances",
    subcategory: "Furniture",
    price: "₦150,000",
    image: stockOfficeChair,
    location: "Ikeja, Lagos",
    rating: 4.5,
    reviews: 203,
    author: "Workplace Solutions",
    authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
    condition: "New",
    sellerType: "Business",
    description: "High-back mesh chair with lumbar support and adjustable headrest. Perfect for long work hours.",
    gallery: [
      stockOfficeChair,
      "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  // CARS
  {
    id: "11",
    storeCode: "AUTO-MART",
    title: "Toyota Camry 2021 XSE",
    category: "Vehicles",
    subcategory: "Cars",
    price: "₦28,000,000",
    image: stockCamry,
    location: "Berger, Lagos",
    rating: 4.8,
    reviews: 40,
    author: "Coscharis Motors",
    authorImage: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1000&auto=format&fit=crop",
    verified: true,
    condition: "Used",
    sellerType: "Business",
    brand: "Toyota",
    description: "Foreign Used. Clean Title. Panoramic Roof, Red Leather Interior, V6 Engine.",
    gallery: [
      stockCamry,
      "https://images.unsplash.com/photo-1583121274602-3e2820c698d9?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "12",
    storeCode: "BENZ-DLR",
    title: "Mercedes-Benz GLE 450 2022",
    category: "Vehicles",
    subcategory: "Cars",
    price: "₦85,000,000",
    image: stockBenz,
    location: "Banana Island, Lagos",
    rating: 5.0,
    reviews: 15,
    author: "Luxury Drives",
    authorImage: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1000&auto=format&fit=crop",
    featured: true,
    condition: "New",
    sellerType: "Business",
    brand: "Mercedes-Benz",
    description: "Brand New. AMG Line. Night Package. Burmester Sound System. 3rd Row Seating.",
    gallery: [
      stockBenz,
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  // APARTMENTS
  {
    id: "13",
    storeCode: "LEKKI-RENTS",
    title: "2 Bedroom Serviced Flat",
    category: "Property",
    subcategory: "Houses & Apartments for Rent",
    price: "₦4,500,000/yr",
    image: stockApartment,
    location: "Ikate, Lekki",
    rating: 4.6,
    reviews: 28,
    author: "Lagos Property",
    authorImage: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1000&auto=format&fit=crop",
    verified: true,
    sellerType: "Business",
    description: "Recently renovated. 24/7 Power. Swimming Pool and Gym access. Service charge: ₦1M.",
    gallery: [
      stockApartment,
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  // FOOD
  {
    id: "14",
    storeCode: "DOMINOS-L",
    title: "Domino's Pizza Deals",
    category: "Food Ordering",
    subcategory: "Delivery",
    price: "₦8,500",
    image: stockPizza,
    location: "Multiple Locations",
    rating: 4.7,
    reviews: 1200,
    author: "Domino's Nigeria",
    authorImage: "https://images.unsplash.com/photo-1554151228-14d9def656ec?q=80&w=1000&auto=format&fit=crop",
    description: "Buy one Large Pizza get one Medium Free. Promo valid all week.",
    gallery: [
      stockPizza,
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop"
    ],
    items: [
      { id: "f1", code: "PEP-PIZZA", name: "Pepperoni Feast", price: "₦8,500", image: stockPizza }
    ]
  },
  {
    id: "15",
    storeCode: "CHICKEN-REP",
    title: "Chicken Republic Meal",
    category: "Food Ordering",
    subcategory: "Takeaway",
    price: "₦3,500",
    image: stockBurger,
    location: "Nationwide",
    rating: 4.5,
    reviews: 3500,
    author: "Chicken Republic",
    authorImage: "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1000&auto=format&fit=crop",
    description: "Refuel Meal: Rice, Chicken, and Drink. The people's favorite.",
    gallery: [
      stockBurger,
      "https://images.unsplash.com/photo-1626082927389-d318477be9a2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=1000&auto=format&fit=crop"
    ],
    items: [
      { id: "cr1", code: "REFUEL-MAX", name: "Refuel Max Meal", price: "₦3,500", image: stockBurger }
    ]
  }
];
