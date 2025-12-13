import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Top 10 Best Places to Live in Lagos 2025",
      excerpt: "From Lekki to Ikeja, discover the most secure and vibrant neighborhoods for young professionals and families.",
      image: "https://images.unsplash.com/photo-1569931727785-c37a96d139a2?q=80&w=2070&auto=format&fit=crop",
      category: "Real Estate",
      author: "Chidi Okonjo",
      date: "Nov 23, 2025"
    },
    {
      id: 2,
      title: "How to Verify a Used Car Before Buying in Abuja",
      excerpt: "Don't get scammed. Here is the ultimate checklist for inspecting 'Tokunbo' and Nigerian-used cars.",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop",
      category: "Automotive",
      author: "Musa Ibrahim",
      date: "Nov 20, 2025"
    },
    {
      id: 3,
      title: "Starting a Business in Nigeria: The Ultimate Guide",
      excerpt: "Learn about CAC registration, tax requirements, and finding the perfect shop location for your new venture.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
      category: "Business",
      author: "Sarah Adebayo",
      date: "Nov 18, 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />

      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl font-bold mb-4">Holeify Blog</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Insights, tips, and news about the Nigerian marketplace.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex flex-col">
              <div className="h-56 overflow-hidden relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                   <Badge className="bg-primary text-white border-none">{post.category}</Badge>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-medium">
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                </div>
                <h2 className="font-heading text-xl font-bold text-gray-900 mb-3 leading-snug hover:text-primary cursor-pointer transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>
                <a href="#" className="inline-flex items-center text-primary font-bold hover:underline mt-auto">
                  Read Article <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
