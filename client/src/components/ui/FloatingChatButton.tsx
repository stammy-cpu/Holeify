import { MessageCircle } from "lucide-react";
import { Link } from "wouter";
import { useUser } from "@/lib/userContext";

export function FloatingChatButton() {
  const { user } = useUser();

  // Only show for logged in users, or maybe show for all to prompt login?
  // Usually chat is for logged in users.
  if (!user) return null;

  return (
    <Link href="/chat">
      <a className="fixed bottom-20 right-4 md:bottom-8 md:right-8 z-50 bg-[#E57E51] hover:bg-[#d66d40] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group">
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out font-bold">
          Chat
        </span>
      </a>
    </Link>
  );
}
