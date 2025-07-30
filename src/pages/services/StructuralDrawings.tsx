
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Ruler } from "lucide-react";

const StructuralDrawings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <Ruler className="h-8 w-8 text-teal-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Structural Drawings</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto mb-8">
            Detailed structural drawings including foundation plans, framing details, and connection drawings.
          </p>
        </div>
      </section>

      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Professional Structural Drawings</h2>
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

export default StructuralDrawings;
