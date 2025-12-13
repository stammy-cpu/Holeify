import { Heart, MapPin, Eye, Repeat, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";
import useEmblaCarousel from 'embla-carousel-react';
import { useState, useEffect, MouseEvent, useRef, PointerEvent } from "react";

export interface ListingProps {
  id: string;
  title: string;
  category: string;
  price: string;
  image: string;
  location: string;
  rating: number;
  reviews: number;
  author: string;
  authorImage: string;
  featured?: boolean;
  storeCode?: string;
  gallery?: string[];
  views?: number;
}

export function ListingCard({ listing }: { listing: ListingProps }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [_, setLocation] = useLocation();
  
  // Drag detection refs
  const startX = useRef(0);
  const startY = useRef(0);
  const isDragging = useRef(false);
  
  const images = listing.gallery && listing.gallery.length > 0 ? listing.gallery : [listing.image];
  const viewCount = listing.views || Math.floor(Math.random() * 5000) + 500;

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', () => setCurrentSlide(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);

  const scrollPrev = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (emblaApi) emblaApi.scrollNext();
  };

  const handlePointerDown = (e: PointerEvent) => {
    startX.current = e.clientX;
    startY.current = e.clientY;
    isDragging.current = false;
  };

  const handlePointerUp = (e: PointerEvent) => {
    const diffX = Math.abs(e.clientX - startX.current);
    const diffY = Math.abs(e.clientY - startY.current);
    // If moved more than 5px, consider it a drag
    if (diffX > 5 || diffY > 5) {
      isDragging.current = true;
    }
  };

  const handleCardClick = (e: MouseEvent) => {
    // If it was a drag/swipe, don't navigate
    if (isDragging.current) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    setLocation(`/listing/${listing.id}`);
  };

  return (
    <div className="block h-full group cursor-pointer" onClick={handleCardClick}>
      <Card className="overflow-hidden border-none shadow-sm rounded-xl bg-white h-full transition-all duration-300 hover:shadow-md">
        {/* Image Container with Swiper */}
        <div 
          className="relative aspect-[4/3] overflow-hidden group/slider bg-gray-100"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
        >
          <div className="h-full w-full" ref={emblaRef}>
             <div className="flex h-full">
               {images.map((src, idx) => (
                 <div key={idx} className="flex-[0_0_100%] min-w-0 relative h-full">
                    <img 
                      src={src} 
                      alt={`${listing.title} - ${idx}`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                 </div>
               ))}
             </div>
          </div>
          
          {/* Navigation Arrows - Show on Hover */}
          {images.length > 1 && (
            <>
              <button 
                onClick={scrollPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-1.5 rounded-full opacity-0 group-hover/slider:opacity-100 transition-opacity z-20 shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={scrollNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-1.5 rounded-full opacity-0 group-hover/slider:opacity-100 transition-opacity z-20 shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}
        </div>

        {/* Content */}
        <CardContent className="p-4">
          <h3 className="font-heading font-bold text-gray-900 text-lg mb-1 truncate">
            {listing.title}
          </h3>
          
          <div className="flex items-center text-gray-500 text-xs mb-3">
            <MapPin className="h-3 w-3 mr-1 text-gray-400 shrink-0" />
            <span className="truncate">{listing.location}</span>
          </div>

          <div className="text-green-600 font-bold text-lg mb-4">
            {listing.price}
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-50">
             <div className="flex gap-2">
               <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full bg-gray-50 text-gray-400 hover:text-primary hover:bg-primary/10">
                 <Eye className="h-4 w-4" />
               </Button>
               <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full bg-gray-50 text-gray-400 hover:text-primary hover:bg-primary/10">
                 <Repeat className="h-4 w-4" />
               </Button>
               <Button 
                 size="icon" 
                 variant="ghost" 
                 className="h-8 w-8 rounded-full bg-gray-50 text-gray-400 hover:text-red-500 hover:bg-red-50"
                 onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                 }}
               >
                 <Heart className="h-4 w-4" />
               </Button>
             </div>
             
             <div className="text-xs text-gray-400">
               {viewCount} Views
             </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
