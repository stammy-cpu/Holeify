import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { UserProvider } from "@/lib/userContext";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ListingDetails from "@/pages/ListingDetails";
import Profile from "@/pages/Profile";
import Listings from "@/pages/Listings";
import Categories from "@/pages/Categories";
import CategoryView from "@/pages/CategoryView";
import SubCategoryView from "@/pages/SubCategoryView";
import Blog from "@/pages/Blog";
import Register from "@/pages/auth/Register";
import Login from "@/pages/auth/Login";
import PostAd from "@/pages/PostAd";
import CreateStore from "@/pages/store/CreateStore";
import VerifyStore from "@/pages/store/VerifyStore";
import StorePublic from "@/pages/store/StorePublic";
import Chat from "@/pages/Chat";

import Pricing from "@/pages/Pricing";
import Safety from "@/pages/Safety";

import { MobileNav } from "@/components/layout/MobileNav";
import { FloatingChatButton } from "@/components/ui/FloatingChatButton";
import Dashboard from "@/pages/store/Dashboard";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/listings" component={Listings} />
      <Route path="/categories" component={Categories} />
      <Route path="/category/:id" component={CategoryView} />
      <Route path="/category/:id/:subId" component={SubCategoryView} />
      <Route path="/blog" component={Blog} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/post-ad" component={PostAd} />
      <Route path="/create-store" component={CreateStore} />
      <Route path="/verify-store" component={VerifyStore} />
      <Route path="/store/:storeCode" component={StorePublic} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/listing/:id" component={ListingDetails} />
      <Route path="/profile" component={Profile} />
      <Route path="/chat" component={Chat} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/safety" component={Safety} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
          <MobileNav />
          <FloatingChatButton />
        </TooltipProvider>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
