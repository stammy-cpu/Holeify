import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/ui/Hero";
import { ListingCard } from "@/components/ui/ListingCard";
import { mockListings } from "@/lib/mockData";
import { ArrowRight, Smartphone, Laptop, Tv, Armchair, Car, Home as HomeIcon, CheckCircle2, Search, MousePointerClick, Star, Utensils, Briefcase, TrendingUp, Zap, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  // Filter listings for sections
  const trendingListings = mockListings.slice(0, 4);
  const verifiedListings = mockListings.slice(4, 8);
  const dealsListings = mockListings.filter(l => parseInt(l.price.replace(/[^0-9]/g, '')) < 100000).slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />

        {/* Categories Section */}
        <section className="py-16 container mx-auto max-w-7xl px-4 lg:px-8 -mt-10 relative z-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
            <div className="flex justify-between items-end mb-8">
              <div>
                 <h2 className="font-heading text-2xl font-bold text-gray-900">Hot Categories</h2>
                 <p className="text-gray-500 text-sm">Most popular items right now</p>
              </div>
              <Link href="/categories" className="text-primary font-bold text-sm hover:underline flex items-center gap-1">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-6">
               <CategoryBox icon={<Smartphone className="h-6 w-6" />} title="Phones" count="5.2k" />
               <CategoryBox icon={<Laptop className="h-6 w-6" />} title="Computers" count="3.1k" />
               <CategoryBox icon={<Car className="h-6 w-6" />} title="Vehicles" count="4.5k" />
               <CategoryBox icon={<HomeIcon className="h-6 w-6" />} title="Property" count="1.5k" />
               <CategoryBox icon={<Armchair className="h-6 w-6" />} title="Furniture" count="2.4k" />
               <CategoryBox icon={<Tv className="h-6 w-6" />} title="Electronics" count="850" />
               <CategoryBox icon={<Briefcase className="h-6 w-6" />} title="Jobs" count="1.2k" />
            </div>
          </div>
        </section>

        {/* Trending Section */}
        <section className="py-12">
          <div className="container mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <div className="bg-orange-100 p-2 rounded-full">
                  <TrendingUp className="w-5 h-5 text-[#E57E51]" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-gray-900">Trending in Lagos</h2>
                  <p className="text-gray-500 text-sm">Most viewed listings today</p>
                </div>
              </div>
              <Button variant="ghost" className="text-[#E57E51] hover:text-[#d66d40]">View All</Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>
        </section>

        {/* Verified Cars Section */}
        <section className="py-16 bg-gray-100/50">
          <div className="container mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-gray-900">Verified Sellers</h2>
                  <p className="text-gray-500 text-sm">Shop with confidence from trusted stores</p>
                </div>
              </div>
              <Button variant="ghost" className="text-blue-600 hover:text-blue-700">View All Verified</Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {verifiedListings.map((listing) => (
                <ListingCard key={listing.id} listing={{...listing, featured: true}} />
              ))}
            </div>
          </div>
        </section>

        {/* Best Deals Section */}
        <section className="py-12">
          <div className="container mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <div className="bg-green-100 p-2 rounded-full">
                  <Zap className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-gray-900">Best Deals under ₦100k</h2>
                  <p className="text-gray-500 text-sm">Grab them before they're gone</p>
                </div>
              </div>
              <Button variant="ghost" className="text-green-600 hover:text-green-700">View All Deals</Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {dealsListings.length > 0 ? dealsListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              )) : (
                <div className="col-span-4 text-center py-8 text-gray-500">No deals found at the moment.</div>
              )}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="container mx-auto max-w-7xl px-4 lg:px-8">
             <div className="text-center mb-16">
               <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">How Holeify Works</h2>
               <p className="text-gray-500">Simple steps to get started with our marketplace.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               <StepCard 
                 icon={<Search className="h-8 w-8 text-primary" />} 
                 step="01" 
                 title="Search Items" 
                 desc="Find phones, laptops, cars, or apartments easily using our smart search."
               />
               <StepCard 
                 icon={<MousePointerClick className="h-8 w-8 text-primary" />} 
                 step="02" 
                 title="Contact Seller" 
                 desc="Call or WhatsApp verified sellers directly to negotiate."
               />
               <StepCard 
                 icon={<CheckCircle2 className="h-8 w-8 text-primary" />} 
                 step="03" 
                 title="Safe Deal" 
                 desc="Meet in a public place, inspect your item, and pay safely."
               />
             </div>
          </div>
        </section>

        {/* Trusted Brands Section */}
        <section className="py-16 bg-white border-t border-gray-100 overflow-hidden">
          <div className="container mx-auto max-w-7xl px-4 lg:px-8 mb-10 text-center">
             <h2 className="font-heading text-2xl font-bold text-gray-900">Trusted Brands</h2>
             <p className="text-gray-500 text-sm mt-1">Find products from the world's best manufacturers</p>
          </div>
          
          <div className="relative w-full overflow-hidden group">
            <style>
              {`
                @keyframes scroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                  animation: scroll 30s linear infinite;
                }
                .group:hover .animate-scroll {
                  animation-play-state: paused;
                }
              `}
            </style>
            <div className="flex gap-16 w-max animate-scroll px-4">
               {/* Brand Logos (Doubled for infinite loop) */}
               {["Apple", "Samsung", "Toyota", "Mercedes", "Nike", "Adidas", "Sony", "LG", "Dell", "HP", "Canon", "Rolex", "Lexus", "Honda", "Gucci", "Zara", "Apple", "Samsung", "Toyota", "Mercedes", "Nike", "Adidas", "Sony", "LG", "Dell", "HP", "Canon", "Rolex", "Lexus", "Honda", "Gucci", "Zara"].map((brand, i) => (
                 <div key={i} className="flex items-center justify-center min-w-[100px]">
                    <span className="text-2xl font-black text-gray-300 hover:text-[#E57E51] transition-colors duration-300 cursor-pointer select-none">{brand}</span>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent"></div>
          
          <div className="container mx-auto max-w-7xl px-4 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
             <div className="max-w-2xl">
               <h2 className="font-heading text-4xl font-bold mb-6">Grow your business with Holeify</h2>
               <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                 Sell phones, electronics, or food to thousands of customers in your city. It's free to start.
               </p>
               <div className="flex flex-col sm:flex-row gap-4">
                 <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 rounded-xl shadow-lg shadow-primary/20">
                   Register Your Business
                 </Button>
               </div>
             </div>
             
             <div className="hidden md:block relative">
                {/* Abstract visual element */}
                <div className="w-64 h-64 bg-white/10 rounded-full backdrop-blur-3xl absolute -top-10 -right-10 animate-pulse"></div>
                <div className="w-48 h-48 bg-primary/20 rounded-full backdrop-blur-3xl absolute bottom-0 left-0"></div>
             </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function CategoryBox({ icon, title, count }: { icon: React.ReactNode; title: string; count: string }) {
  return (
    <Link href="/listings" className="group flex flex-col items-center text-center p-3 md:p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100 cursor-pointer">
      <div className="text-gray-400 group-hover:text-primary transition-colors mb-2 md:mb-3 group-hover:scale-110 duration-300 scale-90 md:scale-100">
        {icon}
      </div>
      <span className="font-bold text-gray-900 mb-0.5 md:mb-1 block text-sm md:text-base">{title}</span>
      <span className="text-[10px] md:text-xs text-gray-400 group-hover:text-gray-500">{count} ads</span>
    </Link>
  );
}

function StepCard({ icon, step, title, desc }: { icon: React.ReactNode; step: string; title: string; desc: string }) {
  return (
    <div className="relative p-8 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 transition-colors text-center group">
       <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full border border-gray-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
         {icon}
       </div>
       <div className="mt-6">
         <span className="block text-4xl font-black text-gray-100 mb-4">{step}</span>
         <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">{title}</h3>
         <p className="text-gray-500 leading-relaxed">{desc}</p>
       </div>
    </div>
  );
}
