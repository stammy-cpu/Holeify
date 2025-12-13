import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Search, Plus, Menu, Bell, MessageCircle, User, LogOut, ChevronDown, LayoutDashboard, ShieldCheck, CreditCard } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useUser } from "@/lib/userContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const { user, logout } = useUser();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto max-w-7xl flex h-20 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-1 group">
            {/* Search Lens "O" Icon */}
            <div className="relative flex items-center justify-center w-10 h-10">
               <Search className="w-8 h-8 text-primary stroke-[3px] group-hover:scale-110 transition-transform" />
            </div>
            <span className="font-heading text-2xl font-bold tracking-tight text-gray-900 group-hover:text-primary transition-colors">
              Holeify
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Home</Link>
          <Link href="/listings" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Explore</Link>
          <Link href="/categories" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Categories</Link>
          <Link href="/chat" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Messages</Link>
          <Link href="/safety" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Trust & Safety</Link>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <Button variant="ghost" size="icon" className="relative text-gray-500 hover:text-[#E57E51]">
                <Bell className="w-6 h-6" />
                <span className="absolute top-1 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
              </Button>
              
              <Link href="/post-ad">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-lg shadow-primary/20 font-bold mr-2">
                  <Plus className="mr-2 h-4 w-4" /> Post Ad
                </Button>
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 pl-2 pr-4 rounded-full border border-gray-100 hover:bg-gray-50">
                    <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-200">
                      <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                    </div>
                    <span className="font-bold text-sm text-gray-700">{user.name.split(' ')[0]}</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    <Link href="/dashboard">Seller Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MessageCircle className="mr-2 h-4 w-4" />
                    <Link href="/chat">Messages</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <Link href="/pricing">Pricing</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="text-red-600 focus:text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" className="font-bold text-gray-600 hover:text-primary hover:bg-transparent">
                  Sign In
                </Button>
              </Link>
              <Link href="/register">
                <Button variant="outline" className="font-bold border-primary text-primary hover:bg-primary hover:text-white rounded-full px-6">
                  Register
                </Button>
              </Link>
              <Link href="/post-ad">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-lg shadow-primary/20 font-bold">
                  <Plus className="mr-2 h-4 w-4" /> Post Ad
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-medium">Home</Link>
                <Link href="/listings" className="text-lg font-medium">Explore</Link>
                <Link href="/categories" className="text-lg font-medium">Categories</Link>
                
                <div className="border-t pt-4 mt-4 flex flex-col gap-3">
                  {user ? (
                    <>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200">
                          <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                        </div>
                        <span className="font-bold text-gray-900">{user.name}</span>
                      </div>
                      <Link href="/dashboard">
                         <Button variant="outline" className="w-full justify-start"><LayoutDashboard className="mr-2 h-4 w-4" /> Dashboard</Button>
                      </Link>
                      <Link href="/profile">
                         <Button variant="outline" className="w-full justify-start"><User className="mr-2 h-4 w-4" /> My Profile</Button>
                      </Link>
                      <Link href="/chat">
                         <Button variant="outline" className="w-full justify-start"><MessageCircle className="mr-2 h-4 w-4" /> Messages</Button>
                      </Link>
                      <Link href="/post-ad">
                        <Button className="w-full bg-primary text-white">Post an Ad</Button>
                      </Link>
                      <Button variant="ghost" className="w-full justify-start text-red-600" onClick={logout}>
                        <LogOut className="mr-2 h-4 w-4" /> Log out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link href="/login">
                         <Button variant="outline" className="w-full border-primary text-primary">Sign In</Button>
                      </Link>
                      <Link href="/register">
                         <Button className="w-full bg-primary text-white">Register</Button>
                      </Link>
                      <Link href="/post-ad">
                        <Button className="w-full bg-primary text-white">Post an Ad</Button>
                      </Link>
                    </>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
