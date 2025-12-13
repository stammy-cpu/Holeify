import { useRoute, Link, useLocation } from "wouter";
import { CATEGORIES } from "@/lib/categories";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChevronRight, ArrowLeft, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { mockListings } from "@/lib/mockData";
import { ListingCard } from "@/components/ui/ListingCard";
import { useState } from "react";

export default function SubCategoryView() {
  const [match, params] = useRoute("/category/:id/:subId");
  const [, setLocation] = useLocation();
  const categoryId = params?.id;
  const subId = params?.subId;
  const [searchQuery, setSearchQuery] = useState("");
  
  const category = CATEGORIES.find(c => c.id === categoryId);
  
  const subcategory = category?.subcategories.find(s => {
    const slug = s.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    return slug === subId;
  });

  // Mock listings for this subcategory
  const subCategoryListings = mockListings
    .slice(0, 3); // Just grab some for demo

  if (!category || !subcategory) {
    return <div className="min-h-screen flex items-center justify-center">Subcategory not found</div>;
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      setLocation(`/listings?q=${encodeURIComponent(searchQuery)}&category=${encodeURIComponent(category.name)}&subcategory=${encodeURIComponent(subcategory.name)}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/categories" className="hover:text-white transition-colors">Categories</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/category/${category.id}`} className="hover:text-white transition-colors">{category.name}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium border-b border-[#E57E51] pb-0.5">{subcategory.name}</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex items-center gap-6">
               <div className="h-16 w-16 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10">
                <category.icon className="w-8 h-8 text-[#E57E51]" />
              </div>
              <div>
                <h1 className="font-heading text-3xl md:text-4xl font-bold mb-2">{subcategory.name}</h1>
                <p className="text-gray-300 text-lg">
                  Choose a specific type below or search within {subcategory.name}
                </p>
              </div>
            </div>

            <div className="w-full md:w-auto md:min-w-[300px]">
              <form onSubmit={handleSearch} className="relative group">
                <Input 
                  placeholder={`Search ${subcategory.name}...`} 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:bg-white/20 transition-all rounded-lg pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400 group-focus-within:text-[#E57E51] transition-colors" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          
          {/* Left Sidebar - Filters */}
          <div className="hidden lg:block lg:col-span-1 space-y-6">
             <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-bold text-gray-900">Filters</h3>
                  <Filter className="w-4 h-4 text-gray-400" />
                </div>
                <div className="space-y-2">
                   <div className="text-sm font-medium text-gray-700 mb-2">Type</div>
                   {subcategory.items?.map((item, idx) => (
                      <Link 
                        key={idx} 
                        href={`/listings?category=${encodeURIComponent(category.name)}&subcategory=${encodeURIComponent(subcategory.name)}&type=${encodeURIComponent(item.name)}`}
                        className="flex items-center justify-between text-sm text-gray-500 hover:text-[#E57E51] py-1.5 group cursor-pointer"
                      >
                           <span>{item.name}</span>
                           <span className="text-xs bg-gray-50 px-2 py-0.5 rounded-full group-hover:bg-orange-50">{item.count}</span>
                      </Link>
                   ))}
                </div>
             </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">Specific Categories</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-16">
              {subcategory.items?.map((item, idx) => (
                <Link 
                  key={idx} 
                  href={`/listings?category=${encodeURIComponent(category.name)}&subcategory=${encodeURIComponent(subcategory.name)}&type=${encodeURIComponent(item.name)}`}
                  className="group bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#E57E51]/30 transition-all hover:-translate-y-1 block h-full relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 bg-gray-50 px-3 py-1 rounded-bl-xl text-xs font-bold text-gray-400 group-hover:bg-orange-50 group-hover:text-[#E57E51] transition-colors">
                      {item.count} ads
                    </div>
                    
                    <h3 className="font-heading text-lg font-bold text-gray-900 mb-2 group-hover:text-[#E57E51] transition-colors pr-8">
                      {item.name}
                    </h3>
                    
                    <div className="flex items-center text-sm text-gray-500 group-hover:text-gray-700">
                      <span>Browse listings</span>
                      <ChevronRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </div>
                </Link>
              ))}
            </div>

            {/* Popular in Subcategory */}
            <div className="border-t border-gray-100 pt-10">
               <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading text-2xl font-bold text-gray-900">Popular in {subcategory.name}</h2>
                <Link href={`/listings?category=${encodeURIComponent(category.name)}&subcategory=${encodeURIComponent(subcategory.name)}`}>
                  <Button variant="outline">View All Ads</Button>
                </Link>
              </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {subCategoryListings.map(listing => (
                  <ListingCard key={listing.id} listing={listing} />
                ))}
              </div>
            </div>
          </div>

        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8">
          <Link href={`/category/${category.id}`} className="inline-flex items-center text-gray-500 hover:text-gray-900 font-medium transition-colors hover:bg-gray-100 px-4 py-2 rounded-lg -ml-4">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to {category.name}
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}