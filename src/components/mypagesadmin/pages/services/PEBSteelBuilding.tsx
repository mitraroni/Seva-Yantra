import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Building } from "lucide-react";

const PEBSteelBuilding = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-gray-600 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <Building className="h-8 w-8 text-gray-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">PEB Steel Building</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
            Pre-engineered steel building solutions for industrial, commercial, and warehouse applications.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Modern Steel Building Solutions</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Complete structural design and engineering for cost-effective, durable pre-engineered steel buildings.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Build with Steel Excellence</h2>
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

export default PEBSteelBuilding;