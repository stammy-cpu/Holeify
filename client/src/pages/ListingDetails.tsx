import { useRoute, Link } from "wouter";
import { mockListings, StoreItem } from "@/lib/mockData";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { MapPin, Star, Heart, Share2, Phone, Mail, Eye, Printer, AlertCircle, CheckCircle2, ShoppingBag, MessageCircle, User, ArrowRight, ChevronLeft, ChevronRight, Copy, Clock, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import useEmblaCarousel from 'embla-carousel-react';
import { ListingCard } from "@/components/ui/ListingCard";

export default function ListingDetails() {
  const [match, params] = useRoute("/listing/:id");
  const id = params?.id;
  const listing = mockListings.find((l) => l.id === id);
  const { toast } = useToast();
  const [selectedItem, setSelectedItem] = useState<StoreItem | null>(null);
  const [showPhone, setShowPhone] = useState(false);
  
  // Carousel state
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  const scrollTo = (index: number) => emblaApi && emblaApi.scrollTo(index);
  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  useEffect(() => {
    if (listing) {
      document.title = `${listing.title} - Holeify`;
    }
  }, [listing]);

  if (!listing) {
    return <div className="flex items-center justify-center h-screen">Listing not found</div>;
  }

  const images = listing.gallery && listing.gallery.length > 0 
    ? listing.gallery 
    : [listing.image];

  const shareStoreOnWhatsApp = () => {
    const text = `*Check out this listing on Holeify!* \n\n🏠 *${listing.title}*\n📍 ${listing.location}\n\nView here:`;
    const url = window.location.href;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />

      <main className="container mx-auto max-w-7xl px-4 lg:px-8 py-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN - MAIN CONTENT */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Image Gallery */}
            <div className="relative w-full bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group">
              <div className="overflow-hidden aspect-[16/10]" ref={emblaRef}>
                <div className="flex h-full">
                  {images.map((src, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0 relative">
                       <img 
                        src={src} 
                        alt={`${listing.title} - Image ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Slider Controls */}
              {images.length > 1 && (
                <>
                  <button 
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm text-gray-900 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all"
                    onClick={scrollPrev}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm text-gray-900 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all"
                    onClick={scrollNext}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-md text-xs font-bold shadow-sm">
                    {selectedIndex + 1} / {images.length}
                  </div>
                  <button className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-md shadow-sm hover:bg-white">
                    <Share2 className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>

            {/* Main Details Section (Moved from Right Sidebar) */}
            <div className="bg-white p-0 md:p-0 rounded-none shadow-none border-none">
               <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" /> <span>Private</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> <span>4 years ago</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" /> <span>3164 Views</span>
                  </div>
               </div>

               <h1 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">{listing.title}</h1>
               
               <div className="flex flex-wrap gap-2 mb-6">
                 <Badge variant="outline" className="border-[#E57E51] text-[#E57E51] hover:bg-[#E57E51] hover:text-white transition-colors rounded-md px-3 py-1 font-normal text-sm">
                    {listing.category}
                 </Badge>
                 <Badge variant="outline" className="border-gray-200 text-gray-500 rounded-md px-3 py-1 font-normal text-sm">
                    Details
                 </Badge>
               </div>

               <div className="flex items-center gap-2 text-gray-500 mb-6">
                  <MapPin className="w-4 h-4 text-[#E57E51]" /> 
                  <span className="underline decoration-dotted decoration-gray-400 underline-offset-4">{listing.location}</span>
                  <span className="text-[#E57E51] text-sm cursor-pointer hover:underline">See map</span>
               </div>

               <div className="text-3xl font-bold text-gray-900 mb-8">
                 {listing.price}
               </div>

               <div className="mb-8">
                 <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">Description</h3>
                 <p className="text-gray-600 leading-relaxed text-base whitespace-pre-line">
                   {listing.description || "No description available for this listing."}
                   <br /><br />
                   We are TangibleDesign – a group of developers with experience in managing successful websites and e-commerce shops. We know how hard it is for you or your clients to gain a competitive advantage.
                 </p>
               </div>

               <div className="mb-8">
                 <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">Features</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
                   {['1 year warranty', 'Free shipping', 'On the guarantee', 'Secure ordering', 'Original box', 'Charger included'].map((feature, i) => (
                     <div key={i} className="flex items-center gap-2 text-gray-600">
                       <CheckCircle2 className="w-4 h-4 text-[#E57E51]" />
                       <span>{feature}</span>
                     </div>
                   ))}
                 </div>
               </div>
            </div>
            
            {/* Reviews Section */}
            <div className="pt-8 border-t border-gray-100">
              <div className="flex items-center gap-3 mb-8">
                <h2 className="font-heading text-2xl font-bold text-gray-900">2 Reviews</h2>
                <div className="flex text-yellow-400">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
              </div>
              
              <div className="space-y-8 mb-10">
                 {/* Review 1 */}
                 <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-bold text-gray-900">Emily Rees</h4>
                          <span className="text-sm text-gray-400">2 years ago</span>
                        </div>
                        <div className="flex text-yellow-400 text-xs">
                          {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Excellent! I'm absolutely satisfied with the overall experience. It's rare to find such dedication to customer satisfaction these days.
                      </p>
                      <div className="flex gap-3 mt-4">
                        <Button variant="outline" size="sm" className="h-8 text-xs gap-1"><span className="font-bold">15</span> Likes</Button>
                        <Button variant="outline" size="sm" className="h-8 text-xs gap-1"><span className="font-bold">8</span> Dislikes</Button>
                      </div>
                    </div>
                 </div>

                 {/* Review 2 */}
                 <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                      <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-bold text-gray-900">Jacob Austin</h4>
                          <span className="text-sm text-gray-400">2 years ago</span>
                        </div>
                        <div className="flex text-yellow-400 text-xs">
                          {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Phenomenal! From the user-friendly approach to the outstanding results, everything about this experience was first-rate.
                      </p>
                    </div>
                 </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-6">Add a Review</h3>
                <div className="flex items-center gap-2 mb-6">
                   <span className="text-sm text-gray-500">Your Rating:</span>
                   <div className="flex text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6" />)}
                   </div>
                </div>
                <textarea 
                  className="w-full min-h-[120px] p-4 rounded-lg border border-gray-200 focus:border-[#E57E51] focus:ring-1 focus:ring-[#E57E51] outline-none resize-none mb-4 text-sm"
                  placeholder="Write your review"
                ></textarea>
                <Button className="bg-[#E57E51] hover:bg-[#d66d40] text-white border-none px-8">
                   Submit Review
                </Button>
              </div>
            </div>

            {/* More from this user Section */}
             {listing.items && listing.items.length > 0 && (
              <section className="pt-8 border-t border-gray-100">
                 <div className="flex items-center justify-between mb-6">
                  <h2 className="font-heading text-2xl font-bold text-gray-900">More from this user</h2>
                  <Button className="bg-[#E57E51] hover:bg-[#d66d40] text-white border-none">
                    Display all from {listing.author}
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {listing.items.map((item) => (
                    <ListingCard 
                      key={item.id} 
                      listing={{
                        id: item.id,
                        title: item.name,
                        category: listing.category, // Inherit from main listing
                        price: item.price,
                        image: item.image,
                        location: listing.location, // Inherit
                        rating: 5.0, // Mock
                        reviews: 12, // Mock
                        author: listing.author,
                        authorImage: listing.authorImage,
                        gallery: [item.image] // Just use the main image for gallery
                      }} 
                    />
                  ))}
                </div>
              </section>
            )}

            {/* You May Also Like Section */}
            <section className="pt-8 border-t border-gray-100">
                 <div className="flex items-center justify-between mb-6">
                  <h2 className="font-heading text-2xl font-bold text-gray-900">You may also like...</h2>
                  <Button variant="outline">
                    Start a new search
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {mockListings
                    .filter(l => l.id !== listing.id) // Exclude current listing
                    .sort(() => 0.5 - Math.random()) // Shuffle
                    .slice(0, 3) // Take 3
                    .map((item) => (
                    <ListingCard 
                      key={item.id} 
                      listing={item} 
                    />
                  ))}
                </div>
              </section>

          </div>

          {/* RIGHT COLUMN - SIDEBAR */}
          <div className="lg:col-span-1 space-y-6">
             
             {/* User Card */}
             <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4 mb-6">
                   <div className="relative">
                     <img src={listing.authorImage} alt={listing.author} className="h-14 w-14 rounded-full object-cover border border-gray-200" />
                     <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                   </div>
                   <div>
                      <h3 className="font-bold text-gray-900 text-lg">{listing.author}</h3>
                      <div className="text-xs text-gray-500 space-y-1 mt-1">
                         <p>Member since: 5 years</p>
                         <p>Account type: private</p>
                         <p className="text-green-600 flex items-center gap-1 mt-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> User is online now!</p>
                      </div>
                   </div>
                </div>
                
                <div className="flex items-start gap-3 text-sm text-gray-500 mb-4 pl-1">
                   <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                   <span>70 Washington Street</span>
                </div>

                <Link href="/profile">
                  <a className="text-[#E57E51] text-sm font-bold hover:underline pl-1 block mb-2">See all ads</a>
                </Link>
             </div>

             {/* Contact Box */}
             <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
                <div className="flex items-center gap-3 bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                   <div className="h-10 w-10 rounded-lg border border-gray-200 flex items-center justify-center bg-white">
                     <Phone className="w-5 h-5 text-gray-400" />
                   </div>
                   <div className="flex-1 font-mono font-bold text-lg text-gray-700 tracking-wider">
                     {showPhone ? "+234 812 345 6789" : "123 *******"}
                   </div>
                   <Button 
                     size="icon" 
                     className={`rounded-full ${showPhone ? 'bg-gray-200 text-gray-600' : 'bg-[#E57E51] text-white hover:bg-[#d66d40]'}`}
                     onClick={() => setShowPhone(!showPhone)}
                   >
                     <Eye className="w-4 h-4" />
                   </Button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                   <Link href="/chat">
                     <Button className="bg-[#E57E51] hover:bg-[#d66d40] text-white border-none h-12 text-base font-medium w-full">
                        <MessageCircle className="w-4 h-4 mr-2" /> Chat
                     </Button>
                   </Link>
                   <Button className="bg-[#E57E51] hover:bg-[#d66d40] text-white border-none h-12 text-base font-medium" onClick={() => setShowPhone(!showPhone)}>
                      <Phone className="w-4 h-4 mr-2" /> Call
                   </Button>
                </div>
             </div>

             {/* Social Chat */}
             <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
                <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 -mx-2 rounded-lg transition-colors" onClick={shareStoreOnWhatsApp}>
                   <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                     <MessageCircle className="w-5 h-5" />
                   </div>
                   <span className="font-medium text-gray-700">Chat via WhatsApp</span>
                </div>
             </div>

             {/* Safety Tips Box */}
             <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-green-600" /> Safety Tips
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 shrink-0"></span>
                    <span>Don't pay in advance, including for delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 shrink-0"></span>
                    <span>Meet the seller at a safe public place</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 shrink-0"></span>
                    <span>Inspect the item and ensure it's exactly what you want</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 shrink-0"></span>
                    <span>On delivery, check that the item delivered is what was inspected</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 shrink-0"></span>
                    <span>Only pay when you're satisfied</span>
                  </li>
                </ul>
             </div>

             {/* Actions Row */}
             <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex justify-center gap-4 mb-6">
                   <Button variant="outline" size="icon" className="rounded-full w-10 h-10 border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50">
                      <Heart className="w-5 h-5" />
                   </Button>
                   <Button variant="outline" size="icon" className="rounded-full w-10 h-10 border-gray-200 text-gray-400 hover:text-blue-500 hover:border-blue-200 hover:bg-blue-50">
                      <Share2 className="w-5 h-5" />
                   </Button>
                   <Button variant="outline" size="icon" className="rounded-full w-10 h-10 border-gray-200 text-gray-400 hover:text-gray-900 hover:border-gray-300 hover:bg-gray-50" onClick={handlePrint}>
                      <Printer className="w-5 h-5" />
                   </Button>
                </div>
                <div className="text-center">
                   <button className="text-red-400 text-sm hover:underline flex items-center justify-center gap-1 w-full">
                      <AlertCircle className="w-4 h-4" /> Report abuse
                   </button>
                </div>
             </div>

             {/* Featured Widget */}
             <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-100 font-bold text-gray-900">Featured listings</div>
                <div className="p-4">
                   <div className="group cursor-pointer">
                      <div className="h-40 w-full rounded-lg overflow-hidden mb-3 relative">
                         <img src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Featured" />
                         <div className="absolute top-2 right-2 bg-yellow-400 text-white text-xs font-bold px-2 py-0.5 rounded">Featured</div>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-1 group-hover:text-[#E57E51] transition-colors">Mercedes-Benz S-Class</h4>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                          <MapPin className="w-3 h-3" /> New York, NY, USA
                      </div>
                      <div className="font-bold text-gray-900">$150,000</div>
                   </div>
                </div>
             </div>

          </div>
        </div>
      </main>

      <Footer />

      {/* Item Detail Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden rounded-2xl">
          {selectedItem && (
            <>
              <div className="relative h-64 w-full bg-gray-100">
                 <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-full object-cover" />
                 <div className="absolute top-4 right-4">
                   <Button size="icon" variant="secondary" className="rounded-full bg-white/90 text-gray-900" onClick={() => setSelectedItem(null)}>
                     X
                   </Button>
                 </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                     <h2 className="font-heading text-2xl font-bold text-gray-900">{selectedItem.name}</h2>
                     <div className="text-gray-500 text-sm flex items-center gap-2 mt-1">
                        <MapPin className="w-4 h-4" /> {listing.location}
                     </div>
                  </div>
                  <div className="text-right">
                     <p className="text-2xl font-bold text-[#E57E51]">{selectedItem.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {selectedItem.description || "No description available."}
                </p>

                <Button className="w-full h-12 text-lg bg-[#E57E51] hover:bg-[#d66d40] text-white border-none">
                   View Details
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
