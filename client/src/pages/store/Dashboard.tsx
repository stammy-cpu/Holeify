import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, Eye, MousePointerClick, MessageCircle, DollarSign, TrendingUp, Plus, Settings, Package } from "lucide-react";
import { Link } from "wouter";
import { mockListings } from "@/lib/mockData";

const data = [
  { name: 'Mon', views: 400, clicks: 240 },
  { name: 'Tue', views: 300, clicks: 139 },
  { name: 'Wed', views: 200, clicks: 980 },
  { name: 'Thu', views: 278, clicks: 390 },
  { name: 'Fri', views: 189, clicks: 480 },
  { name: 'Sat', views: 239, clicks: 380 },
  { name: 'Sun', views: 349, clicks: 430 },
];

export default function Dashboard() {
  const myListings = mockListings.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      
      <main className="container mx-auto max-w-7xl px-4 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="font-heading text-3xl font-bold text-gray-900">Seller Dashboard</h1>
            <p className="text-gray-500">Welcome back, Chidi! Here's what's happening with your store.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <Settings className="w-4 h-4" /> Settings
            </Button>
            <Link href="/post-ad">
              <Button className="bg-[#E57E51] hover:bg-[#d66d40] text-white gap-2 shadow-lg shadow-[#E57E51]/20">
                <Plus className="w-4 h-4" /> Post New Ad
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                  <Eye className="w-6 h-6" />
                </div>
                <span className="text-green-600 text-sm font-bold flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full">
                  <TrendingUp className="w-3 h-3" /> +12%
                </span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">12.5k</div>
              <p className="text-sm text-gray-500">Total Views</p>
            </CardContent>
          </Card>

          <Card className="border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                  <MousePointerClick className="w-6 h-6" />
                </div>
                <span className="text-green-600 text-sm font-bold flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full">
                  <TrendingUp className="w-3 h-3" /> +5%
                </span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">1,240</div>
              <p className="text-sm text-gray-500">Total Clicks</p>
            </CardContent>
          </Card>

          <Card className="border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="text-gray-400 text-sm font-bold bg-gray-50 px-2 py-1 rounded-full">
                  0%
                </span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">48</div>
              <p className="text-sm text-gray-500">New Inquiries</p>
            </CardContent>
          </Card>

          <Card className="border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-green-50 rounded-lg text-green-600">
                  <DollarSign className="w-6 h-6" />
                </div>
                <Link href="/post-ad">
                  <Button size="sm" variant="ghost" className="h-8 text-xs text-primary hover:text-primary/80">
                    Promote Ads <ArrowUpRight className="w-3 h-3 ml-1" />
                  </Button>
                </Link>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">Active</div>
              <p className="text-sm text-gray-500">Subscription Plan</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart Section */}
          <div className="lg:col-span-2">
            <Card className="border-gray-100 shadow-sm h-full">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-900">Performance Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                      <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                      <Tooltip 
                        contentStyle={{backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                        cursor={{fill: '#f9fafb'}}
                      />
                      <Bar dataKey="views" fill="#E57E51" radius={[4, 4, 0, 0]} barSize={30} />
                      <Bar dataKey="clicks" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={30} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Listings */}
          <div className="lg:col-span-1">
            <Card className="border-gray-100 shadow-sm h-full">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-bold text-gray-900">Recent Listings</CardTitle>
                <Link href="/profile">
                  <Button variant="ghost" size="sm" className="text-xs h-8">View All</Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myListings.map((item) => (
                    <div key={item.id} className="flex gap-3 items-center p-3 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                      <div className="h-12 w-12 rounded-md overflow-hidden bg-gray-100 shrink-0">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900 text-sm truncate">{item.title}</h4>
                        <p className="text-xs text-gray-500 truncate">{item.price} • {Math.floor(Math.random() * 500)} views</p>
                      </div>
                      <Button size="icon" variant="ghost" className="h-8 w-8 text-gray-400 hover:text-primary">
                        <ArrowUpRight className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                  
                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 mt-6">
                    <h4 className="font-bold text-blue-900 text-sm mb-1">Boost your visibility</h4>
                    <p className="text-blue-700 text-xs mb-3">Get up to 10x more views by promoting your listings.</p>
                    <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white border-none">
                      Boost Listings
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
