import { 
  Smartphone, Car, Home, Monitor, Armchair, Shirt, Dog, Sparkles, 
  Briefcase, Hammer, Wrench, Bike, Baby, Wheat, UserPlus, Utensils, 
  MapPin, UserCheck 
} from "lucide-react";

export interface Category {
  id: string;
  name: string;
  icon: any; // Lucide icon component
  count?: number;
  image?: string;
  subcategories: SubCategory[];
}

export interface SubCategory {
  name: string;
  count?: number;
  items?: SubSubCategory[]; // For nested levels like in Fashion
}

export interface SubSubCategory {
  name: string;
  count?: number;
}

export const CATEGORIES: Category[] = [
  {
    id: "mobile-phones-tablets",
    name: "Mobile Phones & Tablets",
    icon: Smartphone,
    count: 1250,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop",
    subcategories: [
      { name: "Mobile Phones", count: 850 },
      { name: "Tablets", count: 150 },
      { name: "Accessories for Phones & Tablets", count: 200 },
      { name: "Headphones", count: 40 },
      { name: "Smart Watches", count: 10 }
    ]
  },
  {
    id: "vehicles",
    name: "Vehicles",
    icon: Car,
    count: 840,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop",
    subcategories: [
      { name: "Cars", count: 500 },
      { name: "Car Services", count: 50 },
      { name: "Watercraft & Boats", count: 10 },
      { name: "Construction & Heavy Machinery", count: 20 },
      { name: "Buses & Minibuses", count: 30 },
      { name: "Motorcycles & Scooters", count: 80 },
      { name: "Vehicle Parts & Accessories", count: 150 }
    ]
  },
  {
    id: "property",
    name: "Property",
    icon: Home,
    count: 3200,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
    subcategories: [
      { name: "Commercial Property for Sale", count: 120 },
      { name: "Commercial Property for Rent", count: 150 },
      { name: "Event Centers, Venues & Workstations", count: 40 },
      { name: "Land & Plots for Sale", count: 500 },
      { name: "Land & Plots for Rent", count: 50 },
      { name: "Short Let", count: 300 },
      { name: "Houses & Apartments for Sale", count: 900 },
      { name: "Houses & Apartments for Rent", count: 1100 },
      { name: "New Builds", count: 40 }
    ]
  },
  {
    id: "electronics",
    name: "Electronics",
    icon: Monitor,
    count: 1800,
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=800&auto=format&fit=crop",
    subcategories: [
      { name: "Laptops & Computers", count: 600 },
      { name: "TV & DVD Equipment", count: 300 },
      { name: "Video Game Consoles", count: 150 },
      { name: "Audio & Music Equipment", count: 100 },
      { name: "Headphones", count: 80 },
      { name: "Photo & Video Cameras", count: 70 },
      { name: "Security & Surveillance", count: 50 },
      { name: "Networking Products", count: 40 },
      { name: "Printers & Scanners", count: 60 },
      { name: "Computer Monitors", count: 50 },
      { name: "Computer Hardware", count: 40 },
      { name: "Computer Accessories", count: 100 },
      { name: "Video Games", count: 120 },
      { name: "Software", count: 40 }
    ]
  },
  {
    id: "home-furniture",
    name: "Home, Furniture & Appliances",
    icon: Armchair,
    count: 950,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
    subcategories: [
      { name: "Furniture", count: 400 },
      { name: "Lighting", count: 50 },
      { name: "Storage & Organization", count: 30 },
      { name: "Home Accessories", count: 100 },
      { name: "Home Appliances", count: 200 },
      { name: "Kitchen Appliances", count: 80 },
      { name: "Kitchenware & Cookware", count: 50 },
      { name: "Household Chemicals", count: 20 },
      { name: "Garden Supplies", count: 20 }
    ]
  },
  {
    id: "fashion",
    name: "Fashion",
    icon: Shirt,
    count: 2500,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop",
    subcategories: [
      { 
        name: "Women's Fashion",
        count: 1200,
        items: [
          { name: "Clothing", count: 600 },
          { name: "Shoes", count: 200 },
          { name: "Clothing Accessories", count: 100 },
          { name: "Bags", count: 150 },
          { name: "Jewelry", count: 80 },
          { name: "Watches", count: 50 },
          { name: "Wedding Wear & Accessories", count: 20 }
        ] 
      },
      { 
        name: "Men's Fashion",
        count: 900,
        items: [
          { name: "Clothing", count: 500 },
          { name: "Shoes", count: 250 },
          { name: "Accessories", count: 100 },
          { name: "Watches", count: 50 }
        ] 
      },
      { 
        name: "Baby & Kids Fashion",
        count: 400,
        items: [
          { name: "Children's Clothing", count: 200 },
          { name: "Children's Shoes", count: 150 },
          { name: "Babies & Kids Accessories", count: 50 }
        ] 
      }
    ]
  },
  {
    id: "animals-pets",
    name: "Animals & Pets",
    icon: Dog,
    count: 150,
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop",
    subcategories: [
      { name: "Pets' Accessories", count: 20 },
      { name: "Cats & Kittens", count: 30 },
      { name: "Dogs & Puppies", count: 80 },
      { name: "Fish", count: 10 },
      { name: "Birds", count: 5 },
      { name: "Other Animals", count: 2 },
      { name: "Pet Services", count: 3 }
    ]
  },
  {
    id: "beauty-personal-care",
    name: "Beauty & Personal Care",
    icon: Sparkles,
    count: 600,
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop",
    subcategories: [
      { name: "Hair Beauty", count: 150 },
      { name: "Face Care", count: 100 },
      { name: "Oral Care", count: 20 },
      { name: "Body Care", count: 100 },
      { name: "Fragrance", count: 80 },
      { name: "Makeup", count: 60 },
      { name: "Sexual Wellness", count: 10 },
      { name: "Tools & Accessories", count: 30 },
      { name: "Vitamins & Supplements", count: 40 },
      { name: "Massagers", count: 5 },
      { name: "Health & Beauty Services", count: 5 }
    ]
  },
  {
    id: "services",
    name: "Services",
    icon: Briefcase,
    count: 450,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop",
    subcategories: [
      { name: "Building & Trade Services", count: 50 },
      { name: "Car Services", count: 40 },
      { name: "Computer & IT Services", count: 60 },
      { name: "Repair Services", count: 30 },
      { name: "Cleaning Services", count: 20 },
      { name: "Printing Services", count: 15 },
      { name: "Manufacturing Services", count: 10 },
      { name: "Photography & Video Services", count: 25 },
      { name: "Landscaping & Gardening Services", count: 10 },
      { name: "Other Services", count: 20 },
      { name: "Logistics Services", count: 15 },
      { name: "Legal Services", count: 10 },
      { name: "Tax & Financial Services", count: 10 },
      { name: "Recruitment Services", count: 5 },
      { name: "Rental Services", count: 10 },
      { name: "Chauffeur & Airport Transfer Services", count: 5 },
      { name: "Travel Agents & Tours", count: 15 },
      { name: "Classes & Courses", count: 20 },
      { name: "Child Care & Education Services", count: 10 },
      { name: "Health & Beauty Services", count: 20 },
      { name: "Fitness & Personal Training Services", count: 15 },
      { name: "Party, Catering & Event Services", count: 20 },
      { name: "DJ & Entertainment Services", count: 10 },
      { name: "Wedding Venues & Services", count: 5 }
    ]
  },
  {
    id: "repairs-construction",
    name: "Repairs & Construction",
    icon: Hammer,
    count: 300,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
    subcategories: [
      { name: "Electrical Equipment", count: 50 },
      { name: "Building Materials & Supplies", count: 80 },
      { name: "Plumbing & Water Systems", count: 40 },
      { name: "Electrical Hand Tools", count: 20 },
      { name: "Hand Tools", count: 15 },
      { name: "Measuring & Testing Tools", count: 10 },
      { name: "Hardware & Fasteners", count: 20 },
      { name: "Doors & Security", count: 30 },
      { name: "Windows & Glass", count: 20 },
      { name: "Other Repairs & Construction", count: 5 },
      { name: "Building & Trades Services", count: 5 },
      { name: "Repair Services", count: 5 }
    ]
  },
  {
    id: "commercial-equipment",
    name: "Commercial Equipment & Tools",
    icon: Wrench,
    count: 200,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
    subcategories: [
      { name: "Medical Equipment & Supplies", count: 40 },
      { name: "Safety Equipment & Protective Gear", count: 20 },
      { name: "Manufacturing Equipment", count: 30 },
      { name: "Manufacturing Materials & Supplies", count: 20 },
      { name: "Retail & Store Equipment", count: 30 },
      { name: "Restaurant & Catering Equipment", count: 20 },
      { name: "Stationery & Office Equipment", count: 20 },
      { name: "Salon & Beauty Equipment", count: 10 },
      { name: "Printing & Graphics Equipment", count: 5 },
      { name: "Stage & Event Equipment", count: 3 },
      { name: "Manufacturing Services", count: 2 }
    ]
  },
  {
    id: "leisure-activities",
    name: "Leisure & Activities",
    icon: Bike,
    count: 180,
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop",
    subcategories: [
      { name: "Sports Equipment", count: 60 },
      { name: "Massagers", count: 10 },
      { name: "Musical Instruments & Gear", count: 40 },
      { name: "Books & Table Games", count: 20 },
      { name: "Arts, Crafts & Awards", count: 10 },
      { name: "Outdoor Gear", count: 15 },
      { name: "Smoking Accessories", count: 5 },
      { name: "Music & Video", count: 10 },
      { name: "Fitness & Personal Training Services", count: 10 }
    ]
  },
  {
    id: "babies-kids",
    name: "Babies & Kids",
    icon: Baby,
    count: 350,
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    subcategories: [
      { name: "Toys, Games & Bikes", count: 100 },
      { name: "Children's Furniture", count: 30 },
      { name: "Children's Clothing", count: 80 },
      { name: "Children's Shoes", count: 40 },
      { name: "Babies & Kids Accessories", count: 30 },
      { name: "Baby Gear & Equipment", count: 40 },
      { name: "Care & Feeding", count: 10 },
      { name: "Maternity & Pregnancy", count: 10 },
      { name: "Transport & Safety", count: 5 },
      { name: "Playground Equipment", count: 3 },
      { name: "Child Care & Education Services", count: 2 }
    ]
  },
  {
    id: "food-agriculture",
    name: "Food, Agriculture & Farming",
    icon: Wheat,
    count: 400,
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=800&auto=format&fit=crop",
    subcategories: [
      { name: "Food & Beverages", count: 200 },
      { name: "Farm Animals", count: 50 },
      { name: "Feeds, Supplements & Seeds", count: 80 },
      { name: "Farm Machinery & Equipment", count: 40 },
      { name: "Farm Animal Feed & Supplements", count: 30 }
    ]
  },
  {
    id: "jobs",
    name: "Jobs",
    icon: UserPlus,
    count: 150,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop",
    subcategories: [
      { name: "Accounting & Finance Jobs", count: 10 },
      { name: "Administrative Jobs", count: 15 },
      { name: "Advertising & Marketing Jobs", count: 8 },
      { name: "Agriculture & Farming Jobs", count: 2 },
      { name: "Architecture & Design Jobs", count: 5 },
      { name: "Arts, Media & Entertainment Jobs", count: 4 },
      { name: "Banking Jobs", count: 6 },
      { name: "Construction & Skilled Trade Jobs", count: 10 },
      { name: "Customer Service Jobs", count: 12 },
      { name: "Driving & Transportation Jobs", count: 8 },
      { name: "Education & Teaching Jobs", count: 5 },
      { name: "Engineering Jobs", count: 6 },
      { name: "Government Jobs", count: 2 },
      { name: "Healthcare & Medical Jobs", count: 4 },
      { name: "Hospitality & Hotel Jobs", count: 8 },
      { name: "Human Resources Jobs", count: 3 },
      { name: "Information Technology (IT) Jobs", count: 15 },
      { name: "Insurance Jobs", count: 2 },
      { name: "Legal Jobs", count: 3 },
      { name: "Logistics & Supply Chain Jobs", count: 4 },
      { name: "Manufacturing & Production Jobs", count: 5 },
      { name: "NGO & Non-Profit Jobs", count: 2 },
      { name: "Oil & Gas Jobs", count: 1 },
      { name: "Real Estate Jobs", count: 3 },
      { name: "Retail Jobs", count: 5 },
      { name: "Sales Jobs", count: 10 },
      { name: "Science & Research Jobs", count: 1 },
      { name: "Security Jobs", count: 4 },
      { name: "Sports & Fitness Jobs", count: 2 },
      { name: "Telecommunications Jobs", count: 3 },
      { name: "Travel & Tourism Jobs", count: 2 },
      { name: "Warehouse Jobs", count: 5 },
      { name: "Writing & Editing Jobs", count: 4 }
    ]
  },
  {
    id: "food-ordering",
    name: "Food Ordering",
    icon: Utensils,
    count: 300,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop",
    subcategories: [
      { name: "Restaurants", count: 150 },
      { name: "Delivery", count: 100 },
      { name: "Takeaway", count: 50 }
    ]
  },
  {
    id: "places",
    name: "Places",
    icon: MapPin,
    count: 600,
    image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=800&auto=format&fit=crop",
    subcategories: [
      { name: "Gyms", count: 40 },
      { name: "Pharmacies", count: 50 },
      { name: "Studios", count: 20 },
      { name: "Hospitals", count: 30 },
      { name: "Clinics", count: 20 },
      { name: "Schools", count: 60 },
      { name: "Universities", count: 10 },
      { name: "Libraries", count: 5 },
      { name: "Cinemas", count: 10 },
      { name: "Theatres", count: 5 },
      { name: "Museums", count: 3 },
      { name: "Parks", count: 15 },
      { name: "Hotels", count: 100 },
      { name: "Bars", count: 80 },
      { name: "Nightclubs", count: 40 },
      { name: "Shopping Malls", count: 30 },
      { name: "Supermarkets", count: 60 },
      { name: "Markets", count: 22 }
    ]
  },
  {
    id: "freelancers",
    name: "Freelancers",
    icon: UserCheck,
    count: 250,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    subcategories: [
      { name: "Graphic Designers", count: 30 },
      { name: "Web Developers", count: 40 },
      { name: "Mobile App Developers", count: 20 },
      { name: "Writers & Editors", count: 25 },
      { name: "Translators", count: 10 },
      { name: "Photographers", count: 20 },
      { name: "Videographers", count: 15 },
      { name: "Social Media Managers", count: 20 },
      { name: "Digital Marketers", count: 25 },
      { name: "SEO Specialists", count: 10 },
      { name: "Data Analysts", count: 5 },
      { name: "Virtual Assistants", count: 10 },
      { name: "Tutors & Trainers", count: 5 },
      { name: "Voice-over Artists", count: 3 },
      { name: "Animators", count: 5 },
      { name: "Illustrators", count: 5 },
      { name: "Consultants", count: 10 },
      { name: "Legal Freelancers", count: 2 },
      { name: "Financial Freelancers", count: 3 },
      { name: "Health & Wellness Coaches", count: 5 }
    ]
  }
];
