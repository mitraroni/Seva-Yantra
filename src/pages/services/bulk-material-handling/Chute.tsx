import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowDown, CheckCircle } from "lucide-react";

const Chute = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <ArrowDown className="h-8 w-8 text-purple-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Chute Systems</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
            Custom chute systems engineered for controlled material flow and transfer with minimal degradation and dust generation.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Advanced Chute Design Solutions</h2>
              <p className="text-slate-600 mb-6">
                Our chute systems are designed to provide smooth material transfer while minimizing wear, dust generation, and material degradation. Each design considers material properties, flow rates, and transfer requirements.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Flow Control</h3>
                    <p className="text-slate-600">Optimized geometry for controlled material velocity and direction</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Wear Resistance</h3>
                    <p className="text-slate-600">High-quality linings and materials for extended service life</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Dust Suppression</h3>
                    <p className="text-slate-600">Enclosed designs with dust collection points</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <div className="text-gray-500 mb-4">
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Chute System Image Placeholder</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">Custom designed chute with impact zones and flow control</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Chute Design Considerations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-purple-700 mb-2">Impact Analysis</h3>
              <p className="text-slate-600">Material impact velocity and energy dissipation calculations</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-purple-700 mb-2">Trajectory Studies</h3>
              <p className="text-slate-600">Material trajectory analysis for optimal chute positioning</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-purple-700 mb-2">Wear Lining</h3>
              <p className="text-slate-600">Strategic placement of wear-resistant materials</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-purple-700 mb-2">Access Platforms</h3>
              <p className="text-slate-600">Safe access for maintenance and inspection</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Chute Types & Applications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 rounded-lg p-8 mb-4">
                <div className="w-full h-32 bg-purple-200 rounded flex items-center justify-center">
                  <span className="text-purple-600">Transfer Chute Image</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Transfer Chutes</h3>
              <p className="text-slate-600">Belt-to-belt material transfer applications</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-lg p-8 mb-4">
                <div className="w-full h-32 bg-purple-200 rounded flex items-center justify-center">
                  <span className="text-purple-600">Loading Chute Image</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Loading Chutes</h3>
              <p className="text-slate-600">Material loading into trucks, railcars, or ships</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-lg p-8 mb-4">
                <div className="w-full h-32 bg-purple-200 rounded flex items-center justify-center">
                  <span className="text-purple-600">Discharge Chute Image</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Discharge Chutes</h3>
              <p className="text-slate-600">Controlled discharge from storage systems</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Engineer Your Chute System</h2>
          <p className="text-purple-100 mb-6">Professional chute design and engineering services</p>
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

export default Chute;