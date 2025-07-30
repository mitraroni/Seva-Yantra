
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Settings } from "lucide-react";

const MachineDrawings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <Settings className="h-8 w-8 text-red-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Machine Drawings</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
            Precision machine drawings for manufacturing including assembly drawings and part details.
          </p>
        </div>
      </section>

      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Precision Machine Drawing Services</h2>
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

export default MachineDrawings;
