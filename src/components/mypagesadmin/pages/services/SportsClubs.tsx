
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Gamepad2 } from "lucide-react";

const SportsClubs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <Gamepad2 className="h-8 w-8 text-emerald-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sports Clubs Design</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
            Architectural and structural design for sports facilities, gymnasiums, and recreational buildings.
          </p>
        </div>
      </section>

      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Design Your Sports Facility</h2>
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

export default SportsClubs;
