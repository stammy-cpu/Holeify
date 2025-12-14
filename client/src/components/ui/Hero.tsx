import { Search, MapPin, Grid, Car, Home, Briefcase, ShoppingBag, Utensils, Hash, ArrowRight, TrendingUp, Clock, Smartphone, Laptop, Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocation } from "wouter";
import { useState, useRef, useEffect } from "react";
import { mockListings } from "@/lib/mockData";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { NIGERIA_LOCATIONS } from "@/lib/locations";
import { cn } from "@/lib/utils";

import heroBg from "@assets/stock_images/modern_dark_luxury_r_42d8e38f.jpg";

export function Hero() {
  const [searchType, setSearchType] = useState<'keyword' | 'storeCode'>('keyword');
  const [query, setQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [openLocation, setOpenLocation] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [, setLocation] = useLocation();
  const searchRef = useRef<HTMLDivElement>(null);

  const keywords = ["Jobs", "Phones", "Cars", "Laptops", "Houses", "Fashion"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % keywords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Handle clicking outside to close suggestions
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = () => {
    if (searchType === 'storeCode' && query) {
      const listing = mockListings.find(l => l.storeCode.toLowerCase() === query.toLowerCase());
      if (listing) {
        setLocation(`/listing/${listing.id}`);
      } else {
        alert("Store code not found!");
      }
    } else {
      let url = '/listings';
      const params = new URLSearchParams();
      if (query) params.append('q', query);
      if (selectedLocation) params.append('location', selectedLocation);
      
      if (params.toString()) {
        url += `?${params.toString()}`;
      }
      setLocation(url);
    }
  };

  return (
    <div className="relative w-full h-[600px] bg-gray-900 overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
         <img src={heroBg} alt="Background" className="w-full h-full object-cover opacity-40" />
         <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/90"></div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 lg:px-8 relative z-10 text-center">
         {/* Top Badge */}
         <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 text-green-400 rounded-full px-4 py-1.5 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-wide text-white">Over 5,000+ Verified Listings</span>
         </div>

         {/* Main Heading */}
         <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-[1.1] tracking-tight">
            Discover Amazing <br/>
            <div className="h-[1.1em] overflow-hidden inline-block align-bottom">
               <AnimatePresence mode="wait">
                 <motion.div
                   key={keywords[index]}
                   initial={{ y: 50, opacity: 0 }}
                   animate={{ y: 0, opacity: 1 }}
                   exit={{ y: -50, opacity: 0 }}
                   transition={{ duration: 0.5, ease: "circOut" }}
                   className="text-primary inline-block"
                 >
                   {keywords[index]}
                 </motion.div>
               </AnimatePresence>
            </div>
            <span className="text-white block mt-2">in Nigeria</span>
         </h1>

         {/* Subheading */}
         <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Find the best businesses, properties, and items for sale.<br className="hidden sm:block"/>
            Connect directly with verified sellers on Holeify.
         </p>

         {/* Search Box */}
         <div className="max-w-3xl mx-auto bg-white rounded-2xl p-2 shadow-2xl" ref={searchRef}>
            {/* Tabs */}
            <div className="flex border-b border-gray-100 mb-2 px-4 pt-2 gap-6">
                <button 
                  onClick={() => setSearchType('keyword')}
                  className={`text-sm font-bold pb-2 transition-colors border-b-2 ${searchType === 'keyword' ? 'text-gray-900 border-black' : 'text-gray-400 border-transparent hover:text-gray-600'}`}
                >
                  What are you looking for?
                </button>
                <button 
                  onClick={() => setSearchType('storeCode')}
                  className={`text-sm font-bold pb-2 transition-colors border-b-2 ${searchType === 'storeCode' ? 'text-gray-900 border-black' : 'text-gray-400 border-transparent hover:text-gray-600'}`}
                >
                  Enter Store Code
                </button>
            </div>

            <div className="flex flex-col md:flex-row gap-2 p-1">
               {searchType === 'keyword' ? (
                  <>
                     <div className="flex-1 flex items-center h-12 px-3 bg-gray-50 rounded-xl md:bg-transparent md:rounded-none">
                        <Search className="w-5 h-5 text-gray-400 mr-3" />
                        <input 
                          className="w-full bg-transparent border-none focus:ring-0 text-gray-900 placeholder:text-gray-400 font-medium h-full outline-none"
                          placeholder="Example: Iphone 17pro"
                          value={query}
                          onChange={(e) => {
                            setQuery(e.target.value);
                            setIsSearchFocused(true);
                          }}
                          onFocus={() => setIsSearchFocused(true)}
                        />
                     </div>
                     
                     <div className="w-px bg-gray-200 h-8 my-auto hidden md:block"></div>

                     <div className="flex-1 flex items-center h-12 px-3 bg-gray-50 rounded-xl md:bg-transparent md:rounded-none">
                        <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                        <Popover open={openLocation} onOpenChange={setOpenLocation}>
                        <PopoverTrigger asChild>
                          <button className={cn("w-full text-left bg-transparent border-none focus:ring-0 font-medium h-full outline-none truncate text-base", selectedLocation ? "text-gray-900" : "text-gray-400")}>
                             {selectedLocation || "All Nigeria"}
                          </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[300px] p-0 h-[300px]" align="start">
                          <Command>
                            <CommandInput placeholder="Search city..." />
                            <CommandList>
                              <CommandEmpty>No location found.</CommandEmpty>
                              <CommandGroup heading="Suggestions">
                                <CommandItem onSelect={() => { setSelectedLocation("All Nigeria"); setOpenLocation(false); }}>
                                  All Nigeria
                                </CommandItem>
                              </CommandGroup>
                              {NIGERIA_LOCATIONS.map((group) => (
                                <CommandGroup key={group.state} heading={group.state}>
                                  {group.cities.map((city) => (
                                    <CommandItem key={city} onSelect={() => { setSelectedLocation(`${city}, ${group.state}`); setOpenLocation(false); }}>
                                      {city}
                                    </CommandItem>
                                  ))}
                                </CommandGroup>
                              ))}
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                     </div>
                  </>
               ) : (
                  <div className="flex-1 flex items-center h-12 px-3">
                      <Hash className="w-5 h-5 text-gray-400 mr-3" />
                      <input 
                        className="w-full bg-transparent border-none focus:ring-0 text-gray-900 placeholder:text-gray-400 font-medium h-full outline-none"
                        placeholder="Enter Store Code (e.g. TECH-HUB)"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                      />
                   </div>
               )}

               <Button 
                  onClick={handleSearch}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8 rounded-xl font-bold text-base shadow-lg shadow-primary/30 mt-2 md:mt-0"
               >
                  Search
               </Button>
            </div>

            {/* Suggestions Dropdown */}
              {isSearchFocused && searchType === 'keyword' && query.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-4 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 z-40 text-left mx-auto max-w-3xl">
                    <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Suggestions</div>
                    <div className="space-y-1">
                       {['iPhone 15', 'Toyota Camry', 'Lekki Apartment'].map(item => (
                         <div key={item} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors" onClick={() => setQuery(item)}>
                            <Search className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-700 font-medium">{item}</span>
                         </div>
                       ))}
                    </div>
                </div>
              )}
         </div>

         {/* Popular Tags */}
         <div className="mt-8 flex flex-wrap justify-center items-center gap-4 text-sm text-gray-400">
            <span className="font-bold text-white">Popular:</span>
            <a href="/category/mobile-phones-tablets" className="hover:text-white transition-colors border-b border-white/20 hover:border-white pb-px">iPhone 15</a>
            <a href="/category/laptops-computers" className="hover:text-white transition-colors border-b border-white/20 hover:border-white pb-px">MacBooks</a>
            <a href="/category/electronics" className="hover:text-white transition-colors border-b border-white/20 hover:border-white pb-px">Gaming</a>
            <a href="/category/vehicles" className="hover:text-white transition-colors border-b border-white/20 hover:border-white pb-px">Used Cars</a>
         </div>

      </div>
    </div>
  );
}
