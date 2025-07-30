
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RotateCcw, CheckCircle, ArrowRight } from "lucide-react";

const TwoDToThreeDConversion = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <RotateCcw className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            2D to 3D Conversion
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
            Transform your existing 2D drawings into comprehensive 3D models for better visualization and analysis.
          </p>
          <Badge className="bg-white text-green-600 hover:bg-green-50">
            Conversion Service
          </Badge>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Upgrade Your 2D Drawings to 3D
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Convert your legacy 2D drawings into modern 3D models that provide better visualization, 
                improved understanding, and enhanced design capabilities.
              </p>
              <div className="space-y-4">
                {[
                  "Legacy drawing modernization",
                  "Enhanced visualization",
                  "Design validation",
                  "Manufacturing optimization"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-800 mb-6 text-center">
                Conversion Process
              </h3>
              <div className="space-y-4">
                {[
                  { from: "2D Drawings", to: "3D Models" },
                  { from: "Sketches", to: "Parametric Models" },
                  { from: "Plans", to: "Assemblies" }
                ].map((conversion, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-slate-600 font-medium">{conversion.from}</span>
                    <ArrowRight className="h-5 w-5 text-green-600" />
                    <span className="text-slate-800 font-semibold">{conversion.to}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Convert Your Drawings?
          </h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your 2D to 3D conversion requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Phone:</span>
              <span>+91-9964442892</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Email:</span>
              <span>sevyayantra@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TwoDToThreeDConversion;
