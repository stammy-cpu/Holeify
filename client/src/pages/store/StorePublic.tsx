import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Calendar, Star, ShieldCheck, Grid, Heart, Store, Phone, Mail, Share2, ArrowLeft, Clock, ThumbsUp, UserCheck, Flag, MessageCircle, Search } from "lucide-react";
import { mockListings } from "@/lib/mockData";
import { ListingCard } from "@/components/ui/ListingCard";
import { Link, useRoute } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";

export default function StorePublic() {
  const [, params] = useRoute("/store/:storeCode");
  const { toast } = useToast();
  const storeCode = params?.storeCode || "UNKNOWN";

  // Simulate fetching store data based on code
  const store = {
    name: "Chidi Electronics",
    code: storeCode,
    description: "Your number one plug for all things Apple, Samsung, and Gaming. We deliver nationwide with warranty. Trusted by over 5,000 customers across Nigeria.",
    location: "Computer Village, Ikeja, Lagos",
    joined: "September 2023",
    avatar: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1000&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1550009158-9ebf69056955?q=80&w=1200&auto=format&fit=crop",
    verified: true,
    phone: "+234 812 345 6789",
    email: "sales@chidielectronics.com",
    rating: 4.9,
    reviewCount: 128,
    followers: 1240,
    responseRate: "98%",
    responseTime: "Within 1 hour",
    openingHours: {
      mon_fri: "09:00 AM - 06:00 PM",
      sat: "10:00 AM - 04:00 PM",
      sun: "Closed"
    }
  };

  // Filter listings for this store (mock)
  const storeListings = mockListings.slice(0, 6);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied",
      description: "Store link copied to clipboard",
    });
  };

  const handleFollow = () => {
    toast({
      title: "Success",
      description: `You are now following ${store.name}`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      
      <main className="container mx-auto max-w-7xl px-4 lg:px-8 py-8">
        <Link href="/listings">
          <Button variant="ghost" className="mb-6 pl-0 hover:pl-2 transition-all text-gray-500 hover:text-primary">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Listings
          </Button>
        </Link>

        {/* Store Hero Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          {/* Cover Image */}
          <div className="h-48 md:h-64 bg-gray-200 relative group">
             <img src={store.coverImage} alt="Cover" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
             <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-md rounded-lg px-3 py-1 text-white font-mono text-xs border border-white/20">
               Store Code: {store.code}
             </div>
          </div>
          
          <div className="px-6 md:px-10 pb-8">
            <div className="relative flex flex-col md:flex-row md:justify-between md:items-end -mt-16 mb-8 gap-6">
               {/* Profile Info */}
               <div className="flex items-end gap-6">
                 <div className="relative">
                   <Avatar className="h-32 w-32 border-4 border-white shadow-lg shrink-0 bg-white">
                     <AvatarImage src={store.avatar} alt={store.name} className="object-cover" />
                     <AvatarFallback className="text-2xl font-bold bg-primary/10 text-primary">CE</AvatarFallback>
                   </Avatar>
                   {store.verified && (
                     <div className="absolute bottom-2 right-2 bg-blue-500 text-white rounded-full p-1.5 border-2 border-white shadow-sm" title="Verified Store">
                       <ShieldCheck className="w-4 h-4" />
                     </div>
                   )}
                 </div>
                 
                 <div className="mb-1 pb-1">
                   <h1 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                     {store.name}
                   </h1>
                   <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                     <span className="flex items-center gap-1.5">
                       <MapPin className="w-4 h-4 text-gray-400" /> {store.location}
                     </span>
                     <span className="flex items-center gap-1.5">
                       <Star className="w-4 h-4 text-yellow-500 fill-current" /> 
                       <span className="font-bold text-gray-900">{store.rating}</span> 
                       <span className="text-gray-400">({store.reviewCount} reviews)</span>
                     </span>
                     <span className="flex items-center gap-1.5">
                       <UserCheck className="w-4 h-4 text-gray-400" /> 
                       <span className="font-bold text-gray-900">{store.followers}</span> Followers
                     </span>
                   </div>
                 </div>
               </div>

               {/* Action Buttons */}
               <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
                 <Button variant="outline" className="gap-2 border-gray-300 hover:border-primary hover:text-primary" onClick={handleShare}>
                   <Share2 className="w-4 h-4" /> Share
                 </Button>
                 <Button variant="outline" className="gap-2 border-gray-300 hover:border-primary hover:text-primary" onClick={handleFollow}>
                   <Heart className="w-4 h-4" /> Follow
                 </Button>
                 <Button className="gap-2 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                   <MessageCircle className="w-4 h-4" /> Chat with Seller
                 </Button>
               </div>
            </div>

            {/* Main Content Tabs */}
            <Tabs defaultValue="listings" className="w-full">
              <TabsList className="w-full justify-start h-12 bg-gray-100/50 p-1 rounded-xl mb-8">
                <TabsTrigger value="listings" className="rounded-lg px-6 data-[state=active]:bg-white data-[state=active]:shadow-sm">Listings</TabsTrigger>
                <TabsTrigger value="about" className="rounded-lg px-6 data-[state=active]:bg-white data-[state=active]:shadow-sm">About Store</TabsTrigger>
                <TabsTrigger value="reviews" className="rounded-lg px-6 data-[state=active]:bg-white data-[state=active]:shadow-sm">Reviews ({store.reviewCount})</TabsTrigger>
              </TabsList>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Content Area */}
                <div className="lg:col-span-2">
                  
                  <TabsContent value="listings" className="mt-0">
                    <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                       <div className="relative flex-1 max-w-md">
                         <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                         <Input placeholder="Search in this store..." className="pl-9 border-gray-200 bg-gray-50 focus:bg-white transition-colors" />
                       </div>
                       <div className="text-sm text-gray-500 font-medium ml-4 hidden sm:block">
                         Showing {storeListings.length} items
                       </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {storeListings.map(item => (
                        <ListingCard key={item.id} listing={item} />
                      ))}
                    </div>
                    
                    <div className="mt-10 text-center">
                      <Button variant="outline" className="px-8">Load More Products</Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="about" className="mt-0">
                    <Card className="border-gray-100 shadow-sm">
                      <CardHeader>
                         <CardTitle>About {store.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {store.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {['Electronics', 'Smartphones', 'Laptops', 'Gaming', 'Accessories', 'Gadgets'].map((tag, i) => (
                            <Badge key={i} variant="secondary" className="px-3 py-1 text-sm">{tag}</Badge>
                          ))}
                        </div>
                        
                        <div className="pt-6 border-t border-gray-100">
                          <h4 className="font-bold text-gray-900 mb-4">Why buy from us?</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex gap-3">
                              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                <ShieldCheck className="w-5 h-5" />
                              </div>
                              <div>
                                <h5 className="font-bold text-gray-900">Verified Business</h5>
                                <p className="text-sm text-gray-500">Registered and verified for your safety.</p>
                              </div>
                            </div>
                            <div className="flex gap-3">
                              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                <ThumbsUp className="w-5 h-5" />
                              </div>
                              <div>
                                <h5 className="font-bold text-gray-900">Quality Guarantee</h5>
                                <p className="text-sm text-gray-500">All products come with standard warranty.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="reviews" className="mt-0">
                    <Card className="border-gray-100 shadow-sm mb-6">
                      <CardContent className="p-8">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                          <div className="text-center md:text-left">
                             <div className="text-5xl font-black text-gray-900 mb-2">{store.rating}</div>
                             <div className="flex text-yellow-400 justify-center md:justify-start mb-2">
                               {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                             </div>
                             <p className="text-gray-500">Based on {store.reviewCount} reviews</p>
                          </div>
                          
                          <div className="flex-1 w-full space-y-2">
                             {[5,4,3,2,1].map((star) => (
                               <div key={star} className="flex items-center gap-3">
                                 <span className="text-sm font-bold text-gray-500 w-3">{star}</span>
                                 <div className="h-2 flex-1 bg-gray-100 rounded-full overflow-hidden">
                                   <div 
                                     className="h-full bg-yellow-400 rounded-full" 
                                     style={{width: star === 5 ? '80%' : star === 4 ? '15%' : '2%'}}
                                   ></div>
                                 </div>
                               </div>
                             ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="space-y-4">
                      {[1, 2, 3].map((review) => (
                        <Card key={review} className="border-gray-100 shadow-sm">
                          <CardContent className="p-6">
                             <div className="flex justify-between items-start mb-4">
                               <div className="flex gap-3">
                                 <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                                   <img src={`https://i.pravatar.cc/150?u=${review}`} alt="Reviewer" />
                                 </div>
                                 <div>
                                   <h5 className="font-bold text-gray-900">Customer Name</h5>
                                   <div className="flex text-yellow-400 text-xs">
                                     {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                                   </div>
                                 </div>
                               </div>
                               <span className="text-xs text-gray-400">2 days ago</span>
                             </div>
                             <p className="text-gray-600 text-sm">
                               Great service! The item arrived exactly as described and the delivery was super fast. Would definitely recommend this seller to anyone looking for quality gadgets.
                             </p>
                          </CardContent>
                        </Card>
                      ))}
                      <Button variant="outline" className="w-full">Load More Reviews</Button>
                    </div>
                  </TabsContent>
                </div>

                {/* Right Sidebar */}
                <div className="space-y-6">
                  {/* Contact Card */}
                  <Card className="border-gray-100 shadow-sm overflow-hidden">
                    <div className="bg-gray-900 p-4 text-white font-bold flex items-center gap-2">
                      <Store className="w-4 h-4" /> Store Details
                    </div>
                    <CardContent className="p-6 space-y-5">
                      <div className="flex items-start gap-3">
                         <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                           <Phone className="w-4 h-4" />
                         </div>
                         <div>
                           <p className="text-xs text-gray-500 font-bold uppercase mb-0.5">Phone Number</p>
                           <p className="font-medium text-gray-900">{store.phone}</p>
                           <p className="text-xs text-green-600 mt-1">Available on WhatsApp</p>
                         </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                         <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                           <Mail className="w-4 h-4" />
                         </div>
                         <div>
                           <p className="text-xs text-gray-500 font-bold uppercase mb-0.5">Email Address</p>
                           <p className="font-medium text-gray-900 truncate max-w-[200px]">{store.email}</p>
                         </div>
                      </div>

                      <div className="flex items-start gap-3">
                         <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                           <Calendar className="w-4 h-4" />
                         </div>
                         <div>
                           <p className="text-xs text-gray-500 font-bold uppercase mb-0.5">Member Since</p>
                           <p className="font-medium text-gray-900">{store.joined}</p>
                         </div>
                      </div>
                      
                      <Button className="w-full bg-primary hover:bg-primary/90">Contact Seller</Button>
                    </CardContent>
                  </Card>

                  {/* Opening Hours */}
                  <Card className="border-gray-100 shadow-sm">
                    <CardHeader className="pb-3">
                       <CardTitle className="text-base flex items-center gap-2">
                         <Clock className="w-4 h-4 text-gray-400" /> Opening Hours
                       </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm">
                       <div className="flex justify-between items-center pb-2 border-b border-gray-50">
                         <span className="text-gray-600">Mon - Fri</span>
                         <span className="font-bold text-gray-900">{store.openingHours.mon_fri}</span>
                       </div>
                       <div className="flex justify-between items-center pb-2 border-b border-gray-50">
                         <span className="text-gray-600">Saturday</span>
                         <span className="font-bold text-gray-900">{store.openingHours.sat}</span>
                       </div>
                       <div className="flex justify-between items-center">
                         <span className="text-gray-600">Sunday</span>
                         <span className="font-bold text-red-500">{store.openingHours.sun}</span>
                       </div>
                    </CardContent>
                  </Card>

                  {/* Performance Stats */}
                  <Card className="border-gray-100 shadow-sm">
                    <CardHeader className="pb-3">
                       <CardTitle className="text-base flex items-center gap-2">
                         <Grid className="w-4 h-4 text-gray-400" /> Store Performance
                       </CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 gap-4">
                       <div className="bg-gray-50 p-3 rounded-lg text-center">
                          <div className="text-xl font-bold text-gray-900">{store.responseRate}</div>
                          <div className="text-xs text-gray-500">Response Rate</div>
                       </div>
                       <div className="bg-gray-50 p-3 rounded-lg text-center">
                          <div className="text-xl font-bold text-gray-900">1hr</div>
                          <div className="text-xs text-gray-500">Reply Time</div>
                       </div>
                       <div className="bg-gray-50 p-3 rounded-lg text-center col-span-2">
                          <div className="text-xl font-bold text-green-600">Very Good</div>
                          <div className="text-xs text-gray-500">Buyer Satisfaction</div>
                       </div>
                    </CardContent>
                  </Card>
                  
                  <div className="text-center">
                    <button className="text-gray-400 text-xs hover:text-red-500 flex items-center justify-center gap-1 mx-auto transition-colors">
                      <Flag className="w-3 h-3" /> Report this store
                    </button>
                  </div>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
