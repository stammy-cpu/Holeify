import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ShieldCheck, AlertTriangle, Lock, Eye, Flag, Phone, MapPin, CreditCard } from "lucide-react";

export default function Safety() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />

      <main>
        {/* Hero Section */}
        <div className="bg-green-900 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="container mx-auto max-w-4xl px-4 text-center relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-800 rounded-full mb-6 shadow-lg border-4 border-green-700">
              <ShieldCheck className="w-10 h-10 text-green-100" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Trust & Safety Center
            </h1>
            <p className="text-green-100 text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              Your safety is our top priority. Learn how to protect yourself and trade securely on Holeify.
            </p>
          </div>
        </div>

        <div className="container mx-auto max-w-6xl px-4 py-16 -mt-10">
          
          {/* Top Tips Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-2">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                  <MapPin className="w-7 h-7" />
                </div>
                <CardTitle className="text-xl font-bold">Meet in Public</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                Always meet in safe, public locations like malls or stations. Avoid secluded spots or private homes.
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-2">
                <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center text-red-600 mx-auto mb-4">
                  <CreditCard className="w-7 h-7" />
                </div>
                <CardTitle className="text-xl font-bold">No Prepayments</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                Never pay for items or delivery in advance. Only pay after you have inspected the item.
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-2">
                <div className="w-14 h-14 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-600 mx-auto mb-4">
                  <Eye className="w-7 h-7" />
                </div>
                <CardTitle className="text-xl font-bold">Inspect Carefully</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                Check the item thoroughly before paying. Ensure it matches the description and works as expected.
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Buyer Safety */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                   <h2 className="font-heading text-3xl font-bold text-gray-900">Safety for Buyers</h2>
                   <div className="h-px bg-gray-200 flex-1"></div>
                </div>
                
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border-b border-gray-100">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 font-bold text-gray-800">
                        <div className="flex items-center gap-3">
                           <AlertTriangle className="w-5 h-5 text-orange-500" />
                           How to spot a scam ad?
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6 text-gray-600 leading-relaxed">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>The price is too good to be true.</li>
                          <li>The seller refuses to meet in person or pushes for shipping.</li>
                          <li>Photos look like stock images or are very low quality.</li>
                          <li>The seller asks for payment via untraceable methods (crypto, gift cards).</li>
                          <li>The description is written in poor English or looks automated.</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border-b border-gray-100">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 font-bold text-gray-800">
                        <div className="flex items-center gap-3">
                           <Lock className="w-5 h-5 text-green-600" />
                           Safe payment methods
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6 text-gray-600 leading-relaxed">
                         The safest way to pay is <strong>Cash on Delivery</strong> or instant bank transfer <strong>AFTER</strong> you have physically inspected the item. Avoid paying for "delivery fees" before the item arrives. Holeify does not hold payments or offer escrow services.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="border-b border-gray-100">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 font-bold text-gray-800">
                        <div className="flex items-center gap-3">
                           <Phone className="w-5 h-5 text-blue-600" />
                           Communication tips
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6 text-gray-600 leading-relaxed">
                         Keep conversations within the Holeify chat system when possible. Be wary of sellers who immediately ask to move to WhatsApp or email. Never share your OTPs or passwords with anyone, even if they claim to be Holeify support.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </section>

              {/* Seller Safety */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                   <h2 className="font-heading text-3xl font-bold text-gray-900">Safety for Sellers</h2>
                   <div className="h-px bg-gray-200 flex-1"></div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                   <ul className="space-y-6">
                     <li className="flex gap-4">
                       <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold">1</div>
                       <div>
                         <h4 className="font-bold text-gray-900 mb-1">Verify Buyer Identity</h4>
                         <p className="text-gray-600">Check the buyer's profile. If it's brand new with no photo, proceed with caution.</p>
                       </div>
                     </li>
                     <li className="flex gap-4">
                       <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold">2</div>
                       <div>
                         <h4 className="font-bold text-gray-900 mb-1">Full Payment on Spot</h4>
                         <p className="text-gray-600">Don't accept partial payments or promises. Ensure you receive the full amount before handing over the item.</p>
                       </div>
                     </li>
                     <li className="flex gap-4">
                       <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold">3</div>
                       <div>
                         <h4 className="font-bold text-gray-900 mb-1">Beware of Fake Transfers</h4>
                         <p className="text-gray-600">Always confirm the money has actually landed in your bank account app. Don't trust SMS alerts alone, as they can be faked.</p>
                       </div>
                     </li>
                   </ul>
                </div>
              </section>

            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-1 space-y-8">
              
              <div className="bg-red-50 border border-red-100 p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4 text-red-800 font-bold text-lg">
                  <Flag className="w-6 h-6" /> Report a Problem
                </div>
                <p className="text-red-700 mb-6 text-sm">
                  If you see a suspicious ad or user, please report it immediately to help keep our community safe.
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white border-none">
                   Report an Issue
                </Button>
              </div>

              <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl">
                <h3 className="font-bold text-blue-900 mb-4">Contact Support</h3>
                <p className="text-blue-700 mb-6 text-sm">
                  Need help? Our support team is available 24/7 to assist you with any safety concerns.
                </p>
                <Button variant="outline" className="w-full border-blue-300 text-blue-700 hover:bg-blue-100">
                   Contact Us
                </Button>
              </div>

            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}