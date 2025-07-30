
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, CheckCircle, Cog, Wrench } from "lucide-react";

const ReverseEngineering = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <Search className="h-8 w-8 text-orange-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Reverse Engineering
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
            Create detailed CAD models from existing physical parts and components for redesign or manufacturing.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Our Reverse Engineering Process
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Search, title: "Analysis", description: "Detailed measurement and analysis of existing parts" },
              { icon: Cog, title: "Modeling", description: "Create accurate 3D CAD models" },
              { icon: Wrench, title: "Optimization", description: "Improve design for better performance" },
              { icon: CheckCircle, title: "Validation", description: "Verify accuracy and functionality" }
            ].map((step, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Reverse Engineering Services?</h2>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <span>📞 +91-9964442892</span>
            <span>✉️ sevyayantra@gmail.com</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReverseEngineering;
