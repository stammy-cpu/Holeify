import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, TrendingUp, Zap, Crown, Store, Rocket, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />

      <main>
        {/* Hero Section */}
        <div className="bg-[#1a1a1a] text-white py-20">
          <div className="container mx-auto max-w-7xl px-4 text-center">
            <Badge className="bg-[#E57E51] text-white mb-6 px-4 py-1 text-sm font-bold uppercase tracking-wider border-none">
              Sell Faster
            </Badge>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Boost Your Sales with <br/> Premium Tools
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10">
              Whether you're selling one item or running a full business, our premium tools help you reach more buyers and sell 10x faster.
            </p>
          </div>
        </div>

        <div className="container mx-auto max-w-6xl px-4 py-16 -mt-10">
          <Tabs defaultValue="promotions" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-2 h-14 bg-white p-1 shadow-lg rounded-full">
                <TabsTrigger 
                  value="promotions" 
                  className="rounded-full text-base font-bold data-[state=active]:bg-[#E57E51] data-[state=active]:text-white h-12 transition-all"
                >
                  Promote Ad
                </TabsTrigger>
                <TabsTrigger 
                  value="subscriptions" 
                  className="rounded-full text-base font-bold data-[state=active]:bg-[#E57E51] data-[state=active]:text-white h-12 transition-all"
                >
                  Store Packages
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Ad Promotions Content */}
            <TabsContent value="promotions" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Single Ad Promotions</h2>
                <p className="text-gray-500">Give your individual listings a power boost to get seen by more people.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Basic Plan */}
                <Card className="border-gray-200 shadow-sm hover:shadow-md transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-2xl font-bold">Bump Up</CardTitle>
                    <CardDescription>Refresh your ad to the top</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">₦2,000</span>
                      <span className="text-gray-500"> / once</span>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span>Moves ad to top of category</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span>One-time refresh</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span>Good for quick sales</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full h-12 font-bold border-blue-200 text-blue-700 hover:bg-blue-50">Select Bump Up</Button>
                  </CardFooter>
                </Card>

                {/* Top Ad Plan - Featured */}
                <Card className="border-[#E57E51] shadow-xl relative transform md:-translate-y-4">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E57E51] text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                  <CardHeader>
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-[#E57E51] mb-4">
                      <Crown className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-2xl font-bold">Top Ad</CardTitle>
                    <CardDescription>Stay at the top for 7 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">₦7,500</span>
                      <span className="text-gray-500"> / week</span>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-[#E57E51] shrink-0" />
                        <span><strong>Pinned</strong> at top of search results</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-[#E57E51] shrink-0" />
                        <span><strong>10x</strong> more views on average</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-[#E57E51] shrink-0" />
                        <span>Gold "Top Ad" badge</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-[#E57E51] shrink-0" />
                        <span>Includes 2 free Bump Ups</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full h-12 font-bold bg-[#E57E51] hover:bg-[#d66d40] text-white shadow-lg shadow-orange-200">Get Top Ad</Button>
                  </CardFooter>
                </Card>

                {/* Premium Plan */}
                <Card className="border-gray-200 shadow-sm hover:shadow-md transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-4">
                      <Rocket className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-2xl font-bold">Premium</CardTitle>
                    <CardDescription>Maximum visibility package</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">₦15,000</span>
                      <span className="text-gray-500"> / month</span>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span>Features on <strong>Homepage</strong></span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span>Top Ad status for 30 days</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span>Highlighted with border</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span>Email newsletter feature</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full h-12 font-bold border-purple-200 text-purple-700 hover:bg-purple-50">Go Premium</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* Store Subscription Content */}
            <TabsContent value="subscriptions" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Store Subscriptions</h2>
                <p className="text-gray-500">Professional tools for businesses to manage inventory and grow their brand.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Basic Store */}
                <Card className="border-gray-200 shadow-sm hover:shadow-md transition-all">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">Starter Store</CardTitle>
                    <CardDescription>For small businesses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">₦10,000</span>
                      <span className="text-gray-500"> / month</span>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span>Verified Badge</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span>Up to <strong>50</strong> active listings</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span>Basic store page</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span>Standard support</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full h-12 font-bold">Choose Starter</Button>
                  </CardFooter>
                </Card>

                {/* Pro Store */}
                <Card className="border-blue-500 shadow-xl bg-slate-900 text-white relative transform md:-translate-y-4">
                   <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Best Value
                  </div>
                  <CardHeader>
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-blue-400 mb-4">
                      <Store className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-2xl font-bold">Pro Store</CardTitle>
                    <CardDescription className="text-gray-400">For growing businesses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">₦25,000</span>
                      <span className="text-gray-400"> / month</span>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                        <span><strong>Verified Badge</strong> & Trust Seal</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                        <span>Up to <strong>500</strong> active listings</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                        <span>Premium Store Design (Cover + Tabs)</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                        <span>5 Free Top Ads monthly</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                        <span>Analytics Dashboard</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full h-12 font-bold bg-blue-600 hover:bg-blue-700 text-white border-none">Upgrade to Pro</Button>
                  </CardFooter>
                </Card>

                {/* Enterprise Store */}
                <Card className="border-gray-200 shadow-sm hover:shadow-md transition-all">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">Enterprise</CardTitle>
                    <CardDescription>For large dealerships</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">₦75,000</span>
                      <span className="text-gray-500"> / month</span>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span><strong>Unlimited</strong> listings</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span>Dedicated Account Manager</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span>API Access for bulk upload</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span>Website linkage</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span>20 Free Top Ads monthly</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full h-12 font-bold">Contact Sales</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Trust Badge Section */}
          <div className="mt-24 bg-white rounded-2xl border border-gray-100 p-12 text-center shadow-sm">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure Payments & Verified Sellers</h3>
            <p className="text-gray-500 max-w-2xl mx-auto mb-8">
              We ensure a safe marketplace for everyone. All paid promotions and store subscriptions are processed securely. 
              Need help choosing a plan?
            </p>
            <Button variant="outline" className="font-bold">Contact Support</Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}