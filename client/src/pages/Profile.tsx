import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Calendar, Star, Settings, ShieldCheck, Grid, Heart, Store, AlertCircle, Plus, Package, MessageSquare, LogOut, User, LayoutDashboard, Bell } from "lucide-react";
import { mockListings } from "@/lib/mockData";
import { ListingCard } from "@/components/ui/ListingCard";
import { Link, useLocation } from "wouter";
import { useState } from "react";

export default function Profile() {
  const [location, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState("dashboard");

  // Mock user data
  const hasStore = true; 
  const isVerified = true; 
  
  const user = {
    name: "Chidi Okonjo",
    email: "chidi@example.com",
    role: isVerified ? "Verified Seller" : "Unverified Seller",
    location: "Lekki, Lagos",
    joined: "September 2023",
    avatar: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1000&auto=format&fit=crop",
    storeName: "Chidi Electronics",
    storeCode: "HLY-8921"
  };

  const myListings = mockListings.slice(0, 2);
  const favorites = mockListings.slice(2, 4);

  const SidebarItem = ({ icon: Icon, label, id, active }: { icon: any, label: string, id: string, active?: boolean }) => (
    <button 
      onClick={() => setActiveTab(id)}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-medium mb-1
        ${active 
          ? "bg-[#E57E51]/10 text-[#E57E51]" 
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
        }`}
    >
      <Icon className={`w-5 h-5 ${active ? "text-[#E57E51]" : "text-gray-400"}`} />
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      
      <main className="container mx-auto max-w-7xl px-4 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mb-6">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="relative">
                  <Avatar className="h-24 w-24 border-4 border-gray-50 mb-4">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>CO</AvatarFallback>
                  </Avatar>
                  {isVerified && (
                    <div className="absolute bottom-3 right-0 bg-blue-500 text-white p-1 rounded-full border-2 border-white">
                      <ShieldCheck className="w-3 h-3" />
                    </div>
                  )}
                </div>
                <h2 className="font-bold text-xl text-gray-900">{user.name}</h2>
                <p className="text-sm text-gray-500 mb-1">{user.storeName}</p>
                <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50 mt-1">
                  {user.role}
                </Badge>
              </div>
              
              <div className="border-t border-gray-100 pt-4 pb-2">
                <SidebarItem icon={LayoutDashboard} label="Dashboard" id="dashboard" active={activeTab === "dashboard"} />
                <SidebarItem icon={Package} label="My Ads" id="ads" active={activeTab === "ads"} />
                <SidebarItem icon={MessageSquare} label="Messages" id="messages" active={activeTab === "messages"} />
                <SidebarItem icon={Heart} label="Favorites" id="favorites" active={activeTab === "favorites"} />
                <SidebarItem icon={Settings} label="Settings" id="settings" active={activeTab === "settings"} />
              </div>

              <div className="border-t border-gray-100 pt-4 mt-2">
                <button className="w-full flex items-center gap-3 px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors text-sm font-medium">
                  <LogOut className="w-5 h-5" /> Log Out
                </button>
              </div>
            </div>

            {/* Store Code Card */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 text-white shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Store className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Store Code</p>
                  <p className="font-mono text-xl font-bold">{user.storeCode}</p>
                </div>
              </div>
              <Link href={`/store/${user.storeCode}`}>
                <Button className="w-full bg-white text-black hover:bg-gray-100 font-bold text-sm h-10">
                  View Public Store
                </Button>
              </Link>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            
            {/* Header Area */}
            <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
                <p className="text-gray-500">Welcome back, Chidi! Here's what's happening with your store.</p>
              </div>
              <Link href="/post-ad">
                <Button className="bg-[#E57E51] hover:bg-[#d66d40] text-white shadow-lg shadow-[#E57E51]/20 h-11 px-6 font-bold rounded-lg">
                  <Plus className="w-5 h-5 mr-2" /> Post New Ad
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            {activeTab === "dashboard" && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Package className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Active Ads</p>
                      <h3 className="text-2xl font-bold text-gray-900">12</h3>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">New Messages</p>
                      <h3 className="text-2xl font-bold text-gray-900">5</h3>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-yellow-50 text-yellow-600 flex items-center justify-center">
                      <Star className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Rating</p>
                      <h3 className="text-2xl font-bold text-gray-900">4.9</h3>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                   <h2 className="font-bold text-lg text-gray-900 mb-4">Recent Listings</h2>
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {myListings.map(item => (
                       <ListingCard key={item.id} listing={item} />
                     ))}
                     
                     {/* Create New Listing Card */}
                     <Link href="/post-ad">
                       <div className="border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center h-full min-h-[350px] cursor-pointer hover:border-[#E57E51] hover:bg-[#E57E51]/5 transition-all group bg-white">
                         <div className="h-16 w-16 rounded-full bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-[#E57E51] group-hover:text-white transition-colors duration-300 shadow-sm">
                           <Plus className="w-8 h-8 text-gray-400 group-hover:text-white" />
                         </div>
                         <h3 className="font-bold text-gray-900 text-lg group-hover:text-[#E57E51] transition-colors">Create New Listing</h3>
                         <p className="text-gray-500 text-sm mt-2 text-center px-8">Start selling your items to thousands of people today</p>
                       </div>
                     </Link>
                   </div>
                </div>
              </>
            )}

            {activeTab === "ads" && (
              <div>
                <h2 className="font-bold text-xl text-gray-900 mb-6">My Listings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   {myListings.map(item => (
                     <ListingCard key={item.id} listing={item} />
                   ))}
                   <Link href="/post-ad">
                     <div className="border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center h-full min-h-[350px] cursor-pointer hover:border-[#E57E51] hover:bg-[#E57E51]/5 transition-all group bg-white">
                       <div className="h-16 w-16 rounded-full bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-[#E57E51] group-hover:text-white transition-colors duration-300 shadow-sm">
                         <Plus className="w-8 h-8 text-gray-400 group-hover:text-white" />
                       </div>
                       <h3 className="font-bold text-gray-900 text-lg group-hover:text-[#E57E51] transition-colors">Create New Listing</h3>
                     </div>
                   </Link>
                </div>
              </div>
            )}

            {activeTab === "favorites" && (
              <div>
                <h2 className="font-bold text-xl text-gray-900 mb-6">Saved Items</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   {favorites.map(item => (
                     <ListingCard key={item.id} listing={item} />
                   ))}
                </div>
              </div>
            )}

            {activeTab === "messages" && (
              <div className="bg-white rounded-xl border border-gray-100 p-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-500 mb-4">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No Messages Yet</h3>
                <p className="text-gray-500">Messages from interested buyers will appear here.</p>
              </div>
            )}

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}