import { Search, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                <span className="font-heading font-black text-xl">H</span>
              </div>
              <span className="font-heading text-2xl font-bold tracking-tight">
                Holeify
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Nigeria's #1 marketplace. Connecting buyers and sellers in Lagos, Abuja, Port Harcourt, and beyond. Reliable, fast, and secure.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">About Holeify</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Press & News</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Browse Listings</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sell on Holeify</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Verification</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Safety Tips</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">Get the latest deals and updates from your city.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border-none rounded-lg px-4 py-2 w-full text-white placeholder:text-gray-500 focus:ring-1 focus:ring-primary"
              />
              <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-gray-500 text-sm">© 2025 Holeify Nigeria. All rights reserved.</p>
          <div className="flex gap-6 text-gray-500 text-sm">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
