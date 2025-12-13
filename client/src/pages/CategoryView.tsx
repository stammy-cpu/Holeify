import { useRoute, Link, useLocation } from "wouter";
import { CATEGORIES } from "@/lib/categories";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChevronRight, ArrowLeft, Search, TrendingUp, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { mockListings } from "@/lib/mockData";
import { ListingCard } from "@/components/ui/ListingCard";
import { useState } from "react";

export default function CategoryView() {
  const [match, params] = useRoute("/category/:id");
  const [, setLocation] = useLocation();
  const categoryId = params?.id;
  const [searchQuery, setSearchQuery] = useState("");
  
  const category = CATEGORIES.find(c => c.id === categoryId);

  // Mock featured listings for this category
  const categoryListings = mockListings
    .filter(l => l.category === category?.name || l.category === "Electronics") // Fallback for demo
    .slice(0, 4);

  if (!category) {
    return <div className="min-h-screen flex items-center justify-center">Category not found</div>;
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      setLocation(`/listings?q=${encodeURIComponent(searchQuery)}&category=${encodeURIComponent(category.name)}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      
      {/* Hero Section with Pattern */}
      <div className="relative bg-gray-900 text-white py-16 overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-10">
           <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
           </svg>
        </div>
        
        <div className="container mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/categories"><a className="hover:text-white transition-colors">Categories</a></Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium border-b border-[#E57E51] pb-0.5">{category.name}</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center backdrop-blur-md border border-white/10 shadow-2xl">
                <category.icon className="w-12 h-12 text-[#E57E51]" />
              </div>
              <div>
                <h1 className="font-heading text-4xl md:text-5xl font-bold mb-3 tracking-tight">{category.name}</h1>
                <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
                  Browse {category.count?.toLocaleString()} verified listings in {category.name}. 
                  Find the best deals from trusted sellers.
                </p>
              </div>
            </div>

            {/* Category-Specific Search */}
            <div className="w-full md:w-auto md:min-w-[350px]">
              <form onSubmit={handleSearch} className="relative group">
                <Input 
                  placeholder={`Search in ${category.name}...`} 
                  className="h-14 pl-12 pr-4 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:bg-white/20 transition-all rounded-xl"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-4 top-4 w-6 h-6 text-gray-400 group-focus-within:text-[#E57E51] transition-colors" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 lg:px-8 py-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Left Sidebar - Quick Stats or Filters could go here */}
          <div className="hidden lg:block lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
               <h3 className="font-heading font-bold text-gray-900 mb-4 flex items-center gap-2">
                 <TrendingUp className="w-5 h-5 text-[#E57E51]" /> Trending Now
               </h3>
               <div className="space-y-3">
                 {category.subcategories.slice(0, 5).map((sub, idx) => (
                   <div key={idx} className="flex items-center justify-between text-sm group cursor-pointer">
                     <span className="text-gray-600 group-hover:text-[#E57E51] transition-colors">{sub.name}</span>
                     <span className="text-xs bg-gray-50 text-gray-400 px-2 py-1 rounded-full">{sub.count || '100+'}</span>
                   </div>
                 ))}
               </div>
            </div>

            <div className="bg-[#E57E51]/5 p-6 rounded-xl border border-[#E57E51]/10">
               <h3 className="font-bold text-[#E57E51] mb-2">Post an Ad in {category.name}</h3>
               <p className="text-sm text-gray-600 mb-4">Have something to sell? Reach thousands of buyers today.</p>
               <Link href="/post-ad">
                 <Button className="w-full bg-[#E57E51] hover:bg-[#d66d40] text-white font-bold">Post Ad Now</Button>
               </Link>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">Explore Sub-Categories</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-16">
              {category.subcategories.map((sub, idx) => {
                const hasItems = sub.items && sub.items.length > 0;
                const subSlug = sub.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                
                const href = hasItems 
                  ? `/category/${category.id}/${subSlug}`
                  : `/listings?category=${encodeURIComponent(category.name)}&subcategory=${encodeURIComponent(sub.name)}`;

                return (
                  <Link key={idx} href={href}>
                    <a className="group bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#E57E51]/30 transition-all hover:-translate-y-1 block h-full">
                      <div className="flex justify-between items-start mb-3">
                        <div className="h-10 w-10 rounded-lg bg-gray-50 text-gray-400 flex items-center justify-center group-hover:bg-[#E57E51] group-hover:text-white transition-colors duration-300">
                           {/* Ideally specific icons per subcategory, using generic for now */}
                           <ChevronRight className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold bg-gray-50 text-gray-500 px-2 py-1 rounded-md group-hover:bg-orange-50 group-hover:text-[#E57E51] transition-colors">
                          {sub.count}
                        </span>
                      </div>
                      
                      <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#E57E51] transition-colors">
                        {sub.name}
                      </h3>
                      <p className="text-xs text-gray-400">
                        {hasItems ? `${sub.items?.length} types available` : 'View all listings'}
                      </p>
                    </a>
                  </Link>
                );
              })}
            </div>

            {/* Featured Listings in this Category */}
            <div className="border-t border-gray-100 pt-10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-gray-900">Featured in {category.name}</h2>
                  <p className="text-gray-500 text-sm mt-1">Top rated listings you might like</p>
                </div>
                <Link href={`/listings?category=${encodeURIComponent(category.name)}`}>
                  <Button variant="outline" className="hidden sm:flex">View All Ads</Button>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryListings.map(listing => (
                  <ListingCard key={listing.id} listing={listing} />
                ))}
              </div>
              
              <div className="mt-8 sm:hidden">
                <Link href={`/listings?category=${encodeURIComponent(category.name)}`}>
                  <Button variant="outline" className="w-full">View All Ads</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-gray-200 pt-8">
          <Link href="/categories">
            <a className="inline-flex items-center text-gray-500 hover:text-gray-900 font-medium transition-colors hover:bg-gray-100 px-4 py-2 rounded-lg -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to all categories
            </a>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}