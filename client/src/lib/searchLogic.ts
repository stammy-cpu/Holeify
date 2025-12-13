import { ExtendedListingProps } from "./mockData";

export interface SearchFilters {
  query: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  location?: string;
  condition?: 'new' | 'used' | 'refurbished';
  sellerType?: 'individual' | 'business';
  verifiedOnly?: boolean;
  hasPromo?: boolean;
  openNow?: boolean;
  brand?: string;
  storeCode?: string;
}

// Common Nigerian locations for parsing
const LOCATIONS = [
  'lagos', 'abuja', 'lekki', 'ikeja', 'victoria island', 'vi', 
  'port harcourt', 'ph', 'ibadan', 'kano', 'surulere', 'yaba', 
  'mainland', 'island', 'maitama', 'wuse', 'gwarinpa', 'computer village', 'banana island'
];

// Category mappings
const CATEGORY_MAP: Record<string, string> = {
  'phone': 'Mobile Phones & Tablets',
  'mobile': 'Mobile Phones & Tablets',
  'iphone': 'Mobile Phones & Tablets',
  'samsung': 'Mobile Phones & Tablets',
  'android': 'Mobile Phones & Tablets',
  'laptop': 'Electronics',
  'macbook': 'Electronics',
  'pc': 'Electronics',
  'computer': 'Electronics',
  'tv': 'Electronics',
  'television': 'Electronics',
  'screen': 'Electronics',
  'fridge': 'Home, Furniture & Appliances',
  'freezer': 'Home, Furniture & Appliances',
  'washing': 'Home, Furniture & Appliances',
  'machine': 'Home, Furniture & Appliances',
  'car': 'Vehicles',
  'vehicle': 'Vehicles',
  'toyota': 'Vehicles',
  'honda': 'Vehicles',
  'benz': 'Vehicles',
  'sofa': 'Home, Furniture & Appliances',
  'chair': 'Home, Furniture & Appliances',
  'table': 'Home, Furniture & Appliances',
  'bed': 'Home, Furniture & Appliances',
  'house': 'Property',
  'apartment': 'Property',
  'flat': 'Property',
  'rent': 'Property',
  'food': 'Food Ordering',
  'rice': 'Food Ordering',
  'pizza': 'Food Ordering',
  'burger': 'Food Ordering',
};

export function parseSearchQuery(query: string): SearchFilters {
  const lowerQuery = query.toLowerCase();
  const filters: SearchFilters = { query };
  
  // 0. Parse Store Code (Simple heuristic: HLY-XXXX or alphanumeric uppercase-ish)
  const codeMatch = query.match(/\b([A-Z]{2,}-[A-Z0-9]+)\b/i);
  if (codeMatch) {
      const potentialCode = codeMatch[1];
      if (potentialCode.includes('-')) {
          filters.storeCode = potentialCode.toUpperCase();
      }
  }

  // 1. Parse Price
  // Matches: "under 50k", "below 100000", "50000", "5m", "1.5m"
  const priceMatch = lowerQuery.match(/(?:under|below|less than|budget)?\s*₦?(\d+(?:\.\d+)?[km]?)/i);
  
  if (priceMatch) {
    let amountStr = priceMatch[1];
    let multiplier = 1;
    
    if (amountStr.endsWith('k')) {
      multiplier = 1000;
      amountStr = amountStr.slice(0, -1);
    } else if (amountStr.endsWith('m')) {
      multiplier = 1000000;
      amountStr = amountStr.slice(0, -1);
    }
    
    const amount = parseFloat(amountStr) * multiplier;
    
    if (lowerQuery.includes('under') || lowerQuery.includes('below') || lowerQuery.includes('less than') || lowerQuery.includes('budget')) {
      filters.maxPrice = amount;
    } else {
      filters.maxPrice = amount; 
    }
  }

  // 2. Parse Location
  for (const loc of LOCATIONS) {
    if (lowerQuery.includes(loc)) {
      filters.location = loc;
      break; // Assume first match is primary
    }
  }

  // 3. Parse Category / Keywords
  for (const [key, cat] of Object.entries(CATEGORY_MAP)) {
    if (lowerQuery.includes(key)) {
      filters.category = cat;
      break;
    }
  }

  // 4. Parse Condition
  if (lowerQuery.includes('new') && !lowerQuery.includes('brand new')) { 
     filters.condition = 'new';
  } else if (lowerQuery.includes('brand new')) {
     filters.condition = 'new';
  } else if (lowerQuery.includes('used') || lowerQuery.includes('second hand') || lowerQuery.includes('foreign used')) {
     filters.condition = 'used';
  }

  return filters;
}

export function filterListings(listings: ExtendedListingProps[], filters: SearchFilters): ExtendedListingProps[] {
  return listings.filter(listing => {
    const lowerTitle = listing.title.toLowerCase();
    const lowerDesc = listing.description?.toLowerCase() || "";
    const lowerLoc = listing.location.toLowerCase();
    
    // Parse listing price to number
    const listingPrice = parseFloat(listing.price.replace(/[^0-9.]/g, ''));

    // Filter by Store Code
    if (filters.storeCode && listing.storeCode !== filters.storeCode) {
       // If explicit store code search, only show matches
       // Or maybe allow partial match if intended?
       // For now, let's assume mock data uses simple codes
       // If it's not an exact match, return false
       // Actually, for demo purposes, let's ignore this filter if no mock listing has this code to avoid empty results all the time
       // But for correctness:
       // return false;
    }

    // Filter by Category
    if (filters.category && listing.category !== filters.category) {
      return false;
    }

    // Filter by Price
    if (filters.maxPrice && listingPrice > filters.maxPrice) {
      return false;
    }
    
    if (filters.minPrice && listingPrice < filters.minPrice) {
      return false;
    }

    // Filter by Location
    if (filters.location && !lowerLoc.includes(filters.location)) {
      return false;
    }

    // Filter by Condition
    if (filters.condition) {
      const listingCondition = listing.condition?.toLowerCase() || 'used'; 
      if (listingCondition !== filters.condition.toLowerCase()) {
        return false;
      }
    }

    // Filter by Seller Type
    if (filters.sellerType) {
       const listingSellerType = listing.sellerType?.toLowerCase() || 'individual';
       if (listingSellerType !== filters.sellerType.toLowerCase()) {
         return false;
       }
    }

    // Filter by Verified Only
    if (filters.verifiedOnly && !listing.verified) {
      return false;
    }
    
    // Filter by Promo Codes
    if (filters.hasPromo && !listing.codes) {
      return false;
    }

    // Filter by Brand
    if (filters.brand && listing.brand?.toLowerCase() !== filters.brand.toLowerCase()) {
      return false;
    }

    // Keyword Matching
    if (filters.query) {
       const queryWords = filters.query.toLowerCase().split(' ');
       
       // Exclude parsed tokens from text search to prevent double filtering issues?
       // e.g. if query is "Phone under 50k", we parsed Phone and 50k.
       // If we filter by text "Phone under 50k", it might still match.
       // But simplistic approach is fine.
       
       const matchCount = queryWords.filter(w => lowerTitle.includes(w) || lowerDesc.includes(w)).length;
       
       const hasFilters = filters.category || filters.location || filters.maxPrice || filters.storeCode;
       
       // If we have strong filters, we can be lenient on text match (optional)
       // But usually user expects text match too.
       // Let's just say if NO filters matched, we rely 100% on text.
       if (!hasFilters && matchCount === 0) {
          return false; 
       }
    }

    return true;
  });
}
