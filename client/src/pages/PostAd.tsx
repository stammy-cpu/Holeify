import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Upload, Image as ImageIcon, MapPin, Tag, DollarSign, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";
import { CATEGORIES } from "@/lib/categories";
import { NIGERIA_LOCATIONS } from "@/lib/locations";
import { getBrands, hasBrands } from "@/lib/brands";

export default function PostAd() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  
  // State for dynamic dropdowns
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedState, setSelectedState] = useState("");
  
  // Derived data
  const categoryData = CATEGORIES.find(c => c.name === selectedCategory);
  const subCategoryData = categoryData?.subcategories.find(s => s.name === selectedSubCategory);
  const hasItems = subCategoryData?.items && subCategoryData.items.length > 0;
  const locationData = NIGERIA_LOCATIONS.find(l => l.state === selectedState);
  
  // Brand Data
  const effectiveCategoryForBrands = hasItems ? selectedItem : selectedSubCategory;
  const showBrands = effectiveCategoryForBrands && hasBrands(effectiveCategoryForBrands);
  const brandList = showBrands ? getBrands(effectiveCategoryForBrands) : [];
  const selectedBrandData = brandList.find(b => b.name === selectedBrand);
  const showModels = selectedBrandData && selectedBrandData.models && selectedBrandData.models.length > 0;

  // Mock image upload simulation
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setImages([...images, imageUrl]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Ad Posted Successfully!",
        description: "Your listing is now live.",
      });
      setLocation("/profile");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />

      <main className="container mx-auto max-w-3xl px-4 py-10">
        <div className="mb-8 text-center">
          <h1 className="font-heading text-3xl font-bold text-gray-900">Post an Ad</h1>
          <p className="text-gray-500 mt-2">Sell your items to thousands of people in Nigeria</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Step 1: Category */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Tag className="w-5 h-5 text-primary" />
                Category
              </CardTitle>
              <CardDescription>Select the best category for your item</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Main Category</Label>
                  <Select 
                    required 
                    value={selectedCategory} 
                    onValueChange={setSelectedCategory}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[300px]">
                      {CATEGORIES.map((cat) => (
                        <SelectItem key={cat.id} value={cat.name}>
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Sub-Category</Label>
                  <Select 
                    disabled={!selectedCategory}
                    value={selectedSubCategory}
                    onValueChange={(val) => {
                      setSelectedSubCategory(val);
                      setSelectedBrand(""); // Reset brand when subcategory changes
                      setSelectedModel(""); // Reset model
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Sub-Category" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[300px]">
                      {categoryData?.subcategories.map((sub, idx) => (
                        <SelectItem key={idx} value={sub.name}>
                          {sub.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {hasItems && (
                  <div className="space-y-2 col-span-1 md:col-span-2 animate-in fade-in slide-in-from-top-2">
                    <Label>Item Type</Label>
                    <Select 
                      disabled={!selectedSubCategory}
                      value={selectedItem}
                      onValueChange={(val) => {
                        setSelectedItem(val);
                        setSelectedBrand(""); 
                        setSelectedModel("");
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Type" />
                      </SelectTrigger>
                      <SelectContent className="max-h-[300px]">
                        {subCategoryData?.items?.map((item, idx) => (
                          <SelectItem key={idx} value={item.name}>
                            {item.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>

              {/* Dynamic Brand & Model Selection */}
              {showBrands && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 animate-in fade-in slide-in-from-top-2">
                  <div className="space-y-2">
                    <Label>Brand</Label>
                    <Select 
                      required 
                      value={selectedBrand}
                      onValueChange={(val) => {
                        setSelectedBrand(val);
                        setSelectedModel(""); // Reset model when brand changes
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Brand" />
                      </SelectTrigger>
                      <SelectContent className="max-h-[300px]">
                        {brandList.map((brand, idx) => (
                          <SelectItem key={idx} value={brand.name}>
                            {brand.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {showModels && (
                    <div className="space-y-2 animate-in fade-in slide-in-from-left-2">
                      <Label>Model</Label>
                      <Select 
                        required 
                        value={selectedModel}
                        onValueChange={setSelectedModel}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Model" />
                        </SelectTrigger>
                        <SelectContent className="max-h-[300px]">
                          {selectedBrandData.models?.map((model, idx) => (
                            <SelectItem key={idx} value={model}>
                              {model}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Step 2: Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Item Details
              </CardTitle>
              <CardDescription>Describe your item in detail</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="e.g., iPhone 14 Pro Max 256GB Gold" required />
                <p className="text-xs text-gray-400">Include brand, model, and key features.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe the condition, features, and reason for selling..." 
                  className="min-h-[150px]"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Condition</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">Brand New</SelectItem>
                      <SelectItem value="used-like-new">Used - Like New</SelectItem>
                      <SelectItem value="used-good">Used - Good</SelectItem>
                      <SelectItem value="used-fair">Used - Fair</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="features">Features</Label>
                  <Input id="features" placeholder="e.g. Waterproof, 5G, Dual Sim (separate with comma)" />
                </div>
                {!showBrands && (
                  <div className="space-y-2">
                    <Label>Brand (Optional)</Label>
                    <Input placeholder="e.g. Apple, Samsung, Toyota" />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Step 3: Price */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-primary" />
                Price
              </CardTitle>
              <CardDescription>Set a competitive price</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-w-xs">
                <Label htmlFor="price">Price (₦)</Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-500 font-bold">₦</span>
                  <Input id="price" type="number" placeholder="0.00" className="pl-8" required />
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <input type="checkbox" id="negotiable" className="rounded border-gray-300 text-primary focus:ring-primary" />
                  <label htmlFor="negotiable" className="text-sm text-gray-600">Negotiable</label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 4: Images */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-primary" />
                Photos
              </CardTitle>
              <CardDescription>Add up to 10 photos. First photo is the cover.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Upload Button */}
                <div className="relative border-2 border-dashed border-gray-300 rounded-xl hover:bg-gray-50 transition-colors flex flex-col items-center justify-center h-32 cursor-pointer group">
                  <input 
                    type="file" 
                    accept="image/*" 
                    className="absolute inset-0 opacity-0 cursor-pointer z-10"
                    onChange={handleImageUpload}
                  />
                  <Upload className="w-8 h-8 text-gray-400 group-hover:text-primary mb-2 transition-colors" />
                  <span className="text-xs text-gray-500 font-medium">Add Photo</span>
                </div>

                {/* Image Previews */}
                {images.map((src, idx) => (
                  <div key={idx} className="relative h-32 rounded-xl overflow-hidden border border-gray-200 group">
                    <img src={src} alt="Preview" className="w-full h-full object-cover" />
                    <button 
                      type="button"
                      onClick={() => setImages(images.filter((_, i) => i !== idx))}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                  </div>
                ))}
                
                {/* Placeholders */}
                {Array.from({ length: Math.max(0, 3 - images.length) }).map((_, i) => (
                   <div key={`placeholder-${i}`} className="h-32 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                     <ImageIcon className="w-8 h-8 text-gray-200" />
                   </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Step 5: Location */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>State</Label>
                  <Select 
                    required 
                    value={selectedState}
                    onValueChange={setSelectedState}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select State" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[300px]">
                      {NIGERIA_LOCATIONS.map((loc) => (
                        <SelectItem key={loc.state} value={loc.state}>
                          {loc.state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>City / Area</Label>
                  <Select disabled={!selectedState}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select City" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[300px]">
                      {locationData?.cities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center gap-4 pt-4">
            <Button type="button" variant="outline" className="h-12 px-8 text-lg" onClick={() => setLocation('/')}>Cancel</Button>
            <Button type="submit" className="h-12 flex-1 text-lg font-bold bg-primary hover:bg-primary/90" disabled={isSubmitting}>
              {isSubmitting ? "Posting..." : "Post Ad Now"}
            </Button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}