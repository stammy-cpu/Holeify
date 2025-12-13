import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Send, Phone, MoreVertical, Search, Image as ImageIcon, Paperclip } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Mock Data for Chat
const conversations = [
  {
    id: "1",
    name: "Sarah Wilson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
    lastMessage: "Is the iPhone 13 still available?",
    time: "2m ago",
    unread: 2,
    online: true,
    product: "iPhone 13 Pro Max"
  },
  {
    id: "2",
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
    lastMessage: "Great, I can meet you tomorrow.",
    time: "1h ago",
    unread: 0,
    online: false,
    product: "MacBook Air M1"
  },
  {
    id: "3",
    name: "Jessica Barnes",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
    lastMessage: "Can you lower the price to $500?",
    time: "3h ago",
    unread: 0,
    online: true,
    product: "Sony PlayStation 5"
  },
  {
    id: "4",
    name: "David Kim",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
    lastMessage: "Thanks for the quick reply!",
    time: "1d ago",
    unread: 0,
    online: false,
    product: "Samsung Galaxy S21"
  }
];

const mockMessages = [
  { id: 1, sender: "them", text: "Hi, is this still available?", time: "10:30 AM" },
  { id: 2, sender: "me", text: "Yes, it is! Are you interested?", time: "10:32 AM" },
  { id: 3, sender: "them", text: "Yes, would you take $800 for it?", time: "10:35 AM" },
  { id: 4, sender: "me", text: "I can do $850. It's in perfect condition.", time: "10:36 AM" },
  { id: 5, sender: "them", text: "Okay, let me think about it.", time: "10:40 AM" },
  { id: 6, sender: "them", text: "Is the screen scratched at all?", time: "10:41 AM" },
];

export default function Chat() {
  const [activeChat, setActiveChat] = useState(conversations[0]);
  const [messages, setMessages] = useState(mockMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const msg = {
      id: messages.length + 1,
      sender: "me",
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, msg]);
    setNewMessage("");
    
    // Mock reply
    setTimeout(() => {
        setMessages(prev => [...prev, {
            id: prev.length + 1,
            sender: "them",
            text: "Sounds good! When can we meet?",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }])
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6 h-[calc(100vh-80px)]">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden h-[calc(100vh-140px)] flex">
          
          {/* Sidebar - Chat List */}
          <div className="w-full md:w-80 lg:w-96 border-r border-gray-200 flex flex-col bg-white">
            <div className="p-4 border-b border-gray-100">
              <h1 className="font-heading text-xl font-bold text-gray-900 mb-4">Messages</h1>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Search conversations..." 
                  className="pl-9 bg-gray-50 border-gray-200 focus-visible:ring-[#E57E51]"
                />
              </div>
            </div>
            
            <ScrollArea className="flex-1">
              <div className="divide-y divide-gray-50">
                {conversations.map((chat) => (
                  <div 
                    key={chat.id}
                    onClick={() => setActiveChat(chat)}
                    className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${activeChat.id === chat.id ? 'bg-orange-50/50 border-l-4 border-l-[#E57E51]' : 'border-l-4 border-l-transparent'}`}
                  >
                    <div className="flex gap-3">
                      <div className="relative">
                        <Avatar className="h-12 w-12 border border-gray-100">
                          <AvatarImage src={chat.avatar} />
                          <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        {chat.online && (
                          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-baseline mb-1">
                          <h3 className={`font-semibold truncate ${activeChat.id === chat.id ? 'text-[#E57E51]' : 'text-gray-900'}`}>
                            {chat.name}
                          </h3>
                          <span className="text-xs text-gray-400 flex-shrink-0">{chat.time}</span>
                        </div>
                        <p className="text-sm text-gray-500 truncate mb-1">{chat.lastMessage}</p>
                        <div className="flex items-center justify-between">
                           <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full truncate max-w-[120px]">
                             {chat.product}
                           </span>
                           {chat.unread > 0 && (
                            <Badge className="bg-[#E57E51] hover:bg-[#E57E51] h-5 w-5 p-0 flex items-center justify-center rounded-full text-[10px]">
                                {chat.unread}
                            </Badge>
                           )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
          
          {/* Main Chat Area */}
          <div className="hidden md:flex flex-1 flex-col bg-[#F9FAFB]">
            {/* Chat Header */}
            <div className="p-4 bg-white border-b border-gray-200 flex justify-between items-center shadow-sm z-10">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border border-gray-100">
                  <AvatarImage src={activeChat.avatar} />
                  <AvatarFallback>{activeChat.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="font-bold text-gray-900 flex items-center gap-2">
                    {activeChat.name}
                    {activeChat.online && <span className="w-2 h-2 bg-green-500 rounded-full"></span>}
                  </h2>
                  <p className="text-xs text-gray-500">Regarding: <span className="font-medium text-gray-700">{activeChat.product}</span></p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="text-gray-500 hover:text-[#E57E51]">
                  <Phone className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-500 hover:text-[#E57E51]">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            {/* Messages List */}
            <ScrollArea className="flex-1 p-6">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <span className="text-xs text-gray-400 bg-gray-200/50 px-3 py-1 rounded-full">Today</span>
                </div>
                
                {messages.map((msg) => (
                  <div 
                    key={msg.id} 
                    className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex max-w-[75%] ${msg.sender === 'me' ? 'flex-row-reverse' : 'flex-row'} gap-2`}>
                      <Avatar className="h-8 w-8 mt-1 border border-white shadow-sm">
                        <AvatarImage src={msg.sender === 'me' ? "https://github.com/shadcn.png" : activeChat.avatar} />
                        <AvatarFallback>{msg.sender === 'me' ? 'Me' : activeChat.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      
                      <div>
                        <div 
                          className={`p-3.5 rounded-2xl shadow-sm text-sm ${
                            msg.sender === 'me' 
                              ? 'bg-[#E57E51] text-white rounded-tr-none' 
                              : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                          }`}
                        >
                          {msg.text}
                        </div>
                        <span className={`text-[10px] text-gray-400 mt-1 block ${msg.sender === 'me' ? 'text-right' : 'text-left'}`}>
                          {msg.time}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-200">
              <form onSubmit={handleSendMessage} className="flex items-end gap-2">
                <div className="flex gap-2 mb-2">
                   <Button type="button" variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600 h-10 w-10 rounded-full bg-gray-50">
                     <Paperclip className="h-5 w-5" />
                   </Button>
                   <Button type="button" variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600 h-10 w-10 rounded-full bg-gray-50">
                     <ImageIcon className="h-5 w-5" />
                   </Button>
                </div>
                <Input 
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..." 
                  className="flex-1 bg-gray-50 border-gray-200 focus-visible:ring-[#E57E51] min-h-[44px]"
                />
                <Button 
                  type="submit" 
                  className="bg-[#E57E51] hover:bg-[#d66d40] text-white rounded-xl h-[44px] px-6 shadow-md transition-transform active:scale-95"
                  disabled={!newMessage.trim()}
                >
                  <Send className="h-4 w-4 mr-2" /> Send
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}