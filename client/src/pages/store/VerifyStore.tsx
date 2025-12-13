import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShieldCheck, Upload, Building2, CreditCard, FileCheck } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";

export default function VerifyStore() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Application Submitted!",
        description: "We will review your documents and get back to you within 24 hours.",
      });
      setLocation("/profile");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />

      <main className="container mx-auto max-w-3xl px-4 py-10">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h1 className="font-heading text-3xl font-bold text-gray-900">Verify Your Store</h1>
          <p className="text-gray-500 mt-2">Get the blue badge, build trust, and boost your sales.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section 1: Identity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-primary" />
                Identity Verification
              </CardTitle>
              <CardDescription>Upload a valid government-issued ID</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Document Type</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select ID Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nin">NIN (National ID)</SelectItem>
                    <SelectItem value="passport">International Passport</SelectItem>
                    <SelectItem value="drivers">Driver's License</SelectItem>
                    <SelectItem value="voters">Voter's Card</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Upload ID Image</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition-colors">
                  <Upload className="w-8 h-8 text-gray-400 mb-2" />
                  <span className="text-sm font-medium text-gray-700">Click to upload front of ID</span>
                  <span className="text-xs text-gray-500 mt-1">JPG, PNG or PDF (Max 5MB)</span>
                  <input type="file" className="hidden" accept="image/*,.pdf" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 2: Business Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                Business Registration (Optional)
              </CardTitle>
              <CardDescription>For registered businesses (CAC)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="rcNumber">RC / BN Number</Label>
                <Input id="rcNumber" placeholder="e.g. RC123456" />
              </div>
              
              <div className="space-y-2">
                <Label>Upload CAC Certificate</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition-colors">
                  <Upload className="w-6 h-6 text-gray-400 mb-2" />
                  <span className="text-sm font-medium text-gray-700">Upload Certificate</span>
                  <input type="file" className="hidden" accept="image/*,.pdf" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 3: Bank Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-primary" />
                Bank Verification
              </CardTitle>
              <CardDescription>Link a bank account matching your name/business</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Bank Name</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Bank" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gtb">GTBank</SelectItem>
                      <SelectItem value="zenith">Zenith Bank</SelectItem>
                      <SelectItem value="access">Access Bank</SelectItem>
                      <SelectItem value="uba">UBA</SelectItem>
                      <SelectItem value="opay">OPay</SelectItem>
                      <SelectItem value="palmpay">PalmPay</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="accountNumber">Account Number</Label>
                  <Input id="accountNumber" placeholder="0123456789" maxLength={10} required />
                </div>
              </div>
              <div className="space-y-2">
                 <Label htmlFor="bvn">BVN (Bank Verification Number)</Label>
                 <Input id="bvn" placeholder="12345678901" maxLength={11} required />
                 <p className="text-xs text-gray-500">Your BVN is encrypted and only used for identity verification.</p>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center gap-4 pt-4">
            <Button type="button" variant="outline" className="h-12 px-8 text-lg" onClick={() => setLocation('/profile')}>Cancel</Button>
            <Button type="submit" className="h-12 flex-1 text-lg font-bold bg-green-600 hover:bg-green-700 text-white" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit for Verification"}
            </Button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}
