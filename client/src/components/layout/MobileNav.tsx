import { Link, useLocation } from "wouter";
import { Home, Search, PlusCircle, MessageCircle, User } from "lucide-react";
import { useUser } from "@/lib/userContext";

export function MobileNav() {
  const [location] = useLocation();
  const { user } = useUser();

  const isActive = (path: string) => location === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 z-50 md:hidden safe-area-bottom">
      <div className="flex justify-between items-center">
        <Link href="/" className={`flex flex-col items-center gap-1 p-2 ${isActive('/') ? 'text-[#E57E51]' : 'text-gray-500'}`}>
          <Home className="w-6 h-6" />
          <span className="text-[10px] font-medium">Home</span>
        </Link>
        
        <Link href="/listings" className={`flex flex-col items-center gap-1 p-2 ${isActive('/listings') ? 'text-[#E57E51]' : 'text-gray-500'}`}>
          <Search className="w-6 h-6" />
          <span className="text-[10px] font-medium">Explore</span>
        </Link>

        <Link href="/post-ad" className="flex flex-col items-center gap-1 -mt-6">
          <div className="bg-[#E57E51] rounded-full p-3 shadow-lg border-4 border-gray-50">
            <PlusCircle className="w-7 h-7 text-white" />
          </div>
          <span className="text-[10px] font-medium text-gray-500">Sell</span>
        </Link>

        <Link href="/chat" className={`flex flex-col items-center gap-1 p-2 ${isActive('/chat') ? 'text-[#E57E51]' : 'text-gray-500'}`}>
          <MessageCircle className="w-6 h-6" />
          <span className="text-[10px] font-medium">Chat</span>
        </Link>

        <Link href={user ? "/profile" : "/login"} className={`flex flex-col items-center gap-1 p-2 ${isActive('/profile') || isActive('/login') ? 'text-[#E57E51]' : 'text-gray-500'}`}>
          <User className="w-6 h-6" />
          <span className="text-[10px] font-medium">{user ? 'Profile' : 'Login'}</span>
        </Link>
      </div>
    </div>
  );
}
