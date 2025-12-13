import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CATEGORIES } from "@/lib/categories";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

export default function Categories() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />

      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h1 className="font-heading text-4xl font-bold mb-4">Browse All Categories</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Select a category to find exactly what you're looking for.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <Link key={cat.id} href={`/category/${cat.id}`}>
              <a className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col h-full cursor-pointer relative">
                <div className="h-48 w-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/30 transition-colors"></div>
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white p-4">
                    <div className="h-14 w-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 group-hover:bg-[#E57E51] transition-colors">
                      <cat.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-center drop-shadow-md">
                      {cat.name}
                    </h3>
                    <p className="text-white/90 font-medium mt-1 text-sm drop-shadow-sm">
                      {cat.count?.toLocaleString()} ads
                    </p>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col items-center text-center flex-grow bg-white">
                  <div className="w-full">
                    <div className="flex items-center justify-center text-sm font-bold text-gray-500 group-hover:text-[#E57E51] transition-colors">
                      View {cat.subcategories.length} Subcategories
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}