import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RotateCcw } from "lucide-react";

const ReverseEngineeringConversionDrawings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <RotateCcw className="h-8 w-8 text-purple-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Reverse Engineering And Conversion Drawings</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
            Expert reverse engineering services and technical drawing conversion for legacy systems and components.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Professional Reverse Engineering Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Complete reverse engineering solutions from physical components to detailed CAD models and technical drawings.
          </p>
        </div>
      </section>

      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Transform Your Legacy Components</h2>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <span>📞 +91-9480922892</span>
            <span>✉️ Info@sevya.group</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReverseEngineeringConversionDrawings;