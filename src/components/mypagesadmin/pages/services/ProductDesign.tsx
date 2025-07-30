
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Palette } from "lucide-react";

const ProductDesign = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-pink-600 to-pink-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <Palette className="h-8 w-8 text-pink-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Product Design</h1>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto mb-8">
            Complete product design from concept to manufacturing-ready drawings with design optimization.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Comprehensive Product Design Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            From initial concept to final production, we provide end-to-end product design solutions.
          </p>
        </div>
      </section>

      <section className="py-16 bg-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Design Your Product</h2>
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

export default ProductDesign;
