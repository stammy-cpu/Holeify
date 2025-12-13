import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Store, MapPin, Phone, Mail, Upload, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";

export default function CreateStore() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedCode = "HLY-" + Math.floor(1000 + Math.random() * 9000);
      toast({
        title: "Store Created Successfully!",
        description: `Your store is now live. Your Store Code is ${generatedCode}.`,
        duration: 5000,
      });
      setLocation("/profile");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />

      <main className="container mx-auto max-w-2xl px-4 py-10">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
            <Store className="w-8 h-8" />
          </div>
          <h1 className="font-heading text-3xl font-bold text-gray-900">Create Your Store</h1>
          <p className="text-gray-500 mt-2">Start selling to thousands of customers in minutes. It's free!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Store Details</CardTitle>
              <CardDescription>Tell customers about your business</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="storeName">Store Name</Label>
                <Input id="storeName" placeholder="e.g. Chidi Electronics" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="What do you sell? Tell customers about your products and services..." 
                  className="min-h-[100px]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Store Categories (Select all that apply)</Label>
                <div className="grid grid-cols-2 gap-3 border rounded-lg p-4">
                  {["Electronics & Gadgets", "Fashion & Clothing", "Real Estate", "Vehicles & Parts", "Home & Furniture", "Food & Dining", "Services"].map((cat) => (
                    <div key={cat} className="flex items-center space-x-2">
                      <input type="checkbox" id={`cat-${cat}`} className="rounded border-gray-300 text-primary focus:ring-primary" />
                      <label htmlFor={`cat-${cat}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {cat}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <Label>Opening Hours</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label className="text-xs text-gray-500">Mon - Fri</Label>
                    <Input placeholder="e.g. 9AM - 6PM" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs text-gray-500">Saturday</Label>
                    <Input placeholder="e.g. 10AM - 4PM" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs text-gray-500">Sunday</Label>
                    <Input placeholder="e.g. Closed" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>How can customers reach you?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="phone" placeholder="+234..." className="pl-10" required />
                  </div>
                  <p className="text-xs text-gray-500">We'll send an OTP to verify this number.</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Business Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="email" type="email" placeholder="store@example.com" className="pl-10" required />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Store Address</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input id="address" placeholder="Shop 45, Computer Village, Ikeja" className="pl-10" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label>City / Location</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select City" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lagos">Lagos</SelectItem>
                    <SelectItem value="abuja">Abuja</SelectItem>
                    <SelectItem value="ph">Port Harcourt</SelectItem>
                    <SelectItem value="ibadan">Ibadan</SelectItem>
                    <SelectItem value="kano">Kano</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3 items-start">
            <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
            <div>
              <h4 className="font-bold text-blue-900 text-sm">Instant Activation</h4>
              <p className="text-blue-700 text-sm mt-1">
                Your store will go live immediately as an <strong>Unverified Store</strong>. You can verify later to get the blue badge and more visibility.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <Button type="button" variant="outline" className="h-12 px-8 text-lg" onClick={() => setLocation('/profile')}>Cancel</Button>
            <Button type="submit" className="h-12 flex-1 text-lg font-bold bg-primary hover:bg-primary/90" disabled={isSubmitting}>
              {isSubmitting ? "Creating Store..." : "Create Store Now"}
            </Button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}
