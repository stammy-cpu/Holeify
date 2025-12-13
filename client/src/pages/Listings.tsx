import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ListingCard } from "@/components/ui/ListingCard";
import { mockListings } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Search, MapPin, Filter, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation, useSearch } from "wouter";
import { parseSearchQuery, filterListings, SearchFilters } from "@/lib/searchLogic";
import { Badge } from "@/components/ui/badge";
import { CATEGORIES } from "@/lib/categories";
import { NIGERIA_LOCATIONS } from "@/lib/locations";
import { getBrands, hasBrands } from "@/lib/brands";

export default function Listings() {
  const [priceRange, setPriceRange] = useState([5000000]);
  const [location, setLocation] = useLocation();
  const searchStr = useSearch(); // "q=cheap+iphone"
  const params = new URLSearchParams(searchStr);
  const query = params.get("q") || "";

  const [filteredListings, setFilteredListings] = useState(mockListings);
  const [activeFilters, setActiveFilters] = useState<SearchFilters & { subcategory?: string, brand?: string, model?: string, city?: string }>({ query: "" });
  
  // Derived subcategories based on active category
  const selectedCategoryData = activeFilters.category 
    ? CATEGORIES.find(c => c.name === activeFilters.category) 
    : null;

  // Derived locations based on active state
  const selectedLocationData = activeFilters.location && activeFilters.location !== "All Nigeria"
    ? NIGERIA_LOCATIONS.find(l => l.state === activeFilters.location)
    : null;

  // Derived brands based on active subcategory
  const showBrands = activeFilters.subcategory && hasBrands(activeFilters.subcategory);
  const brandList = showBrands ? getBrands(activeFilters.subcategory!) : [];
  const selectedBrandData = brandList.find(b => b.name === activeFilters.brand);
  const showModels = selectedBrandData && selectedBrandData.models && selectedBrandData.models.length > 0;

  useEffect(() => {
    if (query) {
      const filters = parseSearchQuery(query);
      setActiveFilters(filters);
      const results = filterListings(mockListings, filters);
      setFilteredListings(results);
    } else {
      setFilteredListings(mockListings);
      setActiveFilters({ query: "" });
    }
  }, [query]);

  // Parse filters from URL params on mount or when they change
  useEffect(() => {
    const categoryParam = params.get("category");
    const subcategoryParam = params.get("subcategory");
    const locationParam = params.get("location");
    const typeParam = params.get("type"); // Using 'type' as subcategory filter sometimes
    
    if (categoryParam || locationParam || subcategoryParam || typeParam) {
      setActiveFilters(prev => ({
        ...prev,
        category: categoryParam || prev.category,
        subcategory: subcategoryParam || typeParam || prev.subcategory,
        location: locationParam || prev.location
      }));
    }
  }, [searchStr]);

  // Re-filter when activeFilters change
  useEffect(() => {
     // Debounce slightly or just run
     const results = filterListings(mockListings, activeFilters);
     setFilteredListings(results);
  }, [activeFilters]);

  const clearSearch = () => {
    setLocation('/listings');
    setActiveFilters({ query: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />

      {/* Page Header */}
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">Explore Listings</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Discover the best businesses, properties, and items for sale across Nigeria.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 lg:px-8 py-10">
        {/* AI Search Feedback */}
        {query && (
          <div className="mb-8 bg-white p-4 rounded-xl border border-primary/20 shadow-sm flex flex-wrap items-center gap-3 animate-in fade-in slide-in-from-top-2">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <Search className="w-4 h-4 text-primary" />
              Showing results for: <span className="font-bold text-gray-900">"{query}"</span>
            </div>
            
            <div className="h-4 w-px bg-gray-200 hidden md:block"></div>
            
            <div className="flex flex-wrap gap-2">
              {activeFilters.category && (
                <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-100">
                  Category: {activeFilters.category}
                </Badge>
              )}
              {activeFilters.subcategory && (
                <Badge variant="secondary" className="bg-purple-50 text-purple-700 border-purple-100">
                  Subcategory: {activeFilters.subcategory}
                </Badge>
              )}
              {activeFilters.brand && (
                <Badge variant="secondary" className="bg-indigo-50 text-indigo-700 border-indigo-100">
                  Brand: {activeFilters.brand}
                </Badge>
              )}
              {activeFilters.model && (
                <Badge variant="secondary" className="bg-pink-50 text-pink-700 border-pink-100">
                  Model: {activeFilters.model}
                </Badge>
              )}
              {activeFilters.location && (
                <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-100">
                  <MapPin className="w-3 h-3 mr-1" /> {activeFilters.location}
                </Badge>
              )}
              {activeFilters.city && activeFilters.city !== "All Cities" && (
                <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-100">
                  <MapPin className="w-3 h-3 mr-1" /> {activeFilters.city}
                </Badge>
              )}
              {activeFilters.maxPrice && (
                <Badge variant="secondary" className="bg-yellow-50 text-yellow-700 border-yellow-100">
                  Under ₦{activeFilters.maxPrice.toLocaleString()}
                </Badge>
              )}
              {activeFilters.condition && (
                <Badge variant="secondary" className="bg-purple-50 text-purple-700 border-purple-100">
                  Condition: {activeFilters.condition}
                </Badge>
              )}
            </div>

            <Button variant="ghost" size="sm" className="ml-auto h-8 text-gray-400 hover:text-red-500" onClick={clearSearch}>
              <X className="w-4 h-4 mr-1" /> Clear Search
            </Button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar Filters */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-primary" />
                <h3 className="font-heading font-bold text-lg text-gray-900">Filters</h3>
              </div>

              <div className="space-y-6">
                {/* Search */}
                <div className="space-y-2">
                  <Label>Keywords</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      placeholder="What are you looking for?" 
                      className="pl-9" 
                      value={activeFilters.query}
                      onChange={(e) => setActiveFilters(prev => ({ ...prev, query: e.target.value }))}
                    />
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <Label>Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Select 
                      value={activeFilters.location}
                      onValueChange={(v) => setActiveFilters(prev => ({ ...prev, location: v, city: undefined }))}
                    >
                      <SelectTrigger className="pl-9">
                        <SelectValue placeholder="Select State" />
                      </SelectTrigger>
                      <SelectContent className="max-h-[300px]">
                        <SelectItem value="All Nigeria">All Nigeria</SelectItem>
                        {NIGERIA_LOCATIONS.map((loc) => (
                          <SelectItem key={loc.state} value={loc.state}>
                            {loc.state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* City Filter (Dynamic) */}
                {selectedLocationData && (
                   <div className="space-y-2 animate-in fade-in slide-in-from-left-2">
                     <Label>City / Area</Label>
                     <Select 
                       value={activeFilters.city}
                       onValueChange={(v) => setActiveFilters(prev => ({ ...prev, city: v }))}
                     >
                       <SelectTrigger>
                         <SelectValue placeholder="Select City" />
                       </SelectTrigger>
                       <SelectContent className="max-h-[300px]">
                         <SelectItem value="All Cities">All Cities in {selectedLocationData.state}</SelectItem>
                         {selectedLocationData.cities.map((city, idx) => (
                           <SelectItem key={idx} value={city}>{city}</SelectItem>
                         ))}
                       </SelectContent>
                     </Select>
                   </div>
                )}

                {/* Category */}
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select 
                    value={activeFilters.category}
                    onValueChange={(v) => setActiveFilters(prev => ({ ...prev, category: v === "all" ? undefined : v }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[300px]">
                      <SelectItem value="all">All Categories</SelectItem>
                      {CATEGORIES.map((cat) => (
                        <SelectItem key={cat.id} value={cat.name}>
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Subcategory (Dynamic) */}
                {selectedCategoryData && (
                   <div className="space-y-2 animate-in fade-in slide-in-from-left-2">
                     <Label>Sub-Category</Label>
                     <Select 
                       disabled={!activeFilters.category}
                       value={activeFilters.subcategory}
                       onValueChange={(v) => setActiveFilters(prev => ({ ...prev, subcategory: v, brand: undefined, model: undefined }))}
                     >
                       <SelectTrigger>
                         <SelectValue placeholder="Select Sub-Category" />
                       </SelectTrigger>
                       <SelectContent>
                         {selectedCategoryData.subcategories.map((sub, idx) => (
                           <SelectItem key={idx} value={sub.name}>{sub.name}</SelectItem>
                         ))}
                       </SelectContent>
                     </Select>
                   </div>
                )}

                {/* Brand Filter (Dynamic) */}
                {showBrands && (
                  <div className="space-y-2 animate-in fade-in slide-in-from-left-2">
                    <Label>Brand</Label>
                    <Select 
                      value={activeFilters.brand}
                      onValueChange={(v) => setActiveFilters(prev => ({ ...prev, brand: v, model: undefined }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Any Brand" />
                      </SelectTrigger>
                      <SelectContent className="max-h-[300px]">
                        {brandList.map((brand, idx) => (
                          <SelectItem key={idx} value={brand.name}>{brand.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Model Filter (Dynamic) */}
                {showModels && (
                  <div className="space-y-2 animate-in fade-in slide-in-from-left-2">
                    <Label>Model</Label>
                    <Select 
                      value={activeFilters.model}
                      onValueChange={(v) => setActiveFilters(prev => ({ ...prev, model: v }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Any Model" />
                      </SelectTrigger>
                      <SelectContent className="max-h-[300px]">
                        {selectedBrandData.models?.map((model, idx) => (
                          <SelectItem key={idx} value={model}>{model}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Universal Filters */}
                <div className="space-y-6">
                  {/* Condition Filter */}
                  <div className="space-y-2">
                    <Label>Condition</Label>
                    <Select 
                      value={activeFilters.condition} 
                      onValueChange={(v) => setActiveFilters(prev => ({ ...prev, condition: v as any }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Any Condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">Brand New</SelectItem>
                        <SelectItem value="used">Used</SelectItem>
                        <SelectItem value="refurbished">Refurbished</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Seller Type */}
                  <div className="space-y-2">
                    <Label>Seller Type</Label>
                    <Select 
                      value={activeFilters.sellerType}
                      onValueChange={(v) => setActiveFilters(prev => ({ ...prev, sellerType: v as any }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Any Seller" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="business">Business / Store</SelectItem>
                        <SelectItem value="individual">Individual</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                {/* Price Range */}
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <Label>Max Price</Label>
                    <span className="text-sm text-gray-500 font-medium">₦{priceRange[0].toLocaleString()}</span>
                  </div>
                  <Slider 
                    defaultValue={[activeFilters.maxPrice || 5000000]} 
                    max={10000000} 
                    step={100000} 
                    onValueChange={(v) => {
                      setPriceRange(v);
                      setActiveFilters(prev => ({ ...prev, maxPrice: v[0] }));
                    }}
                    className="py-4"
                  />
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <Label>Features</Label>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="verified" 
                      checked={activeFilters.verifiedOnly}
                      onCheckedChange={(c) => setActiveFilters(prev => ({ ...prev, verifiedOnly: c as boolean }))}
                    />
                    <Label htmlFor="verified" className="font-normal cursor-pointer">Verified Stores Only</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="deals" 
                      checked={activeFilters.hasPromo}
                      onCheckedChange={(c) => setActiveFilters(prev => ({ ...prev, hasPromo: c as boolean }))}
                    />
                    <Label htmlFor="deals" className="font-normal cursor-pointer">Has Promo Codes</Label>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90" onClick={() => {
                  const results = filterListings(mockListings, activeFilters);
                  setFilteredListings(results);
                }}>
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Listings Grid */}
          <div className="lg:col-span-3">
            {/* Quick Filters Chips */}
            <div className="mb-6 flex flex-wrap gap-2">
              <Button 
                variant={activeFilters.maxPrice && activeFilters.maxPrice <= 50000 ? "default" : "outline"} 
                size="sm" 
                className="rounded-full"
                onClick={() => {
                  setActiveFilters(prev => ({ ...prev, maxPrice: 50000 }));
                  setPriceRange([50000]);
                }}
              >
                Under ₦50k
              </Button>
              <Button 
                variant={activeFilters.verifiedOnly ? "default" : "outline"} 
                size="sm" 
                className="rounded-full"
                onClick={() => setActiveFilters(prev => ({ ...prev, verifiedOnly: !prev.verifiedOnly }))}
              >
                Verified Stores
              </Button>
              <Button 
                variant={activeFilters.condition === 'new' ? "default" : "outline"} 
                size="sm" 
                className="rounded-full"
                onClick={() => setActiveFilters(prev => ({ ...prev, condition: prev.condition === 'new' ? undefined : 'new' }))}
              >
                Brand New Only
              </Button>
              <Button 
                variant={activeFilters.sellerType === 'business' ? "default" : "outline"} 
                size="sm" 
                className="rounded-full"
                onClick={() => setActiveFilters(prev => ({ ...prev, sellerType: prev.sellerType === 'business' ? undefined : 'business' }))}
              >
                Business Sellers
              </Button>
            </div>

            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-500"><span className="font-bold text-gray-900">{filteredListings.length}</span> results found</p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-[180px] h-10">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest Listings</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {filteredListings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredListings.map((listing) => (
                  <ListingCard key={listing.id} listing={listing} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-gray-400 mb-4">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  We couldn't find any matches for "<strong>{query}</strong>". Try adjusting your search terms or filters.
                </p>
                <Button variant="outline" className="mt-6" onClick={clearSearch}>Clear All Filters</Button>
              </div>
            )}

            {filteredListings.length > 9 && (
              <div className="flex justify-center mt-12">
                 <Button variant="outline" size="lg" className="px-8">Load More</Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}