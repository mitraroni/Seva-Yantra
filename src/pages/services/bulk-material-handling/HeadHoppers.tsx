import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container, CheckCircle } from "lucide-react";

const HeadHoppers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <Container className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Head Hoppers</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
            Specialized hopper designs for material discharge and feeding systems with optimized flow characteristics and structural integrity.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Precision Head Hopper Systems</h2>
              <p className="text-slate-600 mb-6">
                Our head hoppers are engineered for optimal material flow control, preventing bridging and ensuring consistent discharge rates. Each design is customized based on material properties and operational requirements.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Flow Optimization</h3>
                    <p className="text-slate-600">Designed to prevent material bridging and ensure smooth flow</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Structural Integrity</h3>
                    <p className="text-slate-600">Robust construction to handle material pressure and loads</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Material Compatibility</h3>
                    <p className="text-slate-600">Designed for various bulk materials with different flow properties</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <div className="text-gray-500 mb-4">
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Head Hopper Design Image Placeholder</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">Custom head hopper with optimized discharge geometry</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Design Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-green-700 mb-2">Geometry Optimization</h3>
              <p className="text-slate-600">Mathematical analysis for optimal hopper angles and dimensions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-green-700 mb-2">Material Flow Analysis</h3>
              <p className="text-slate-600">DEM simulation for flow pattern verification</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-green-700 mb-2">Structural Design</h3>
              <p className="text-slate-600">FEA analysis for structural integrity under loads</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Hopper Types & Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="bg-green-100 rounded-lg p-6 mb-4">
                <div className="w-full h-32 bg-green-200 rounded flex items-center justify-center">
                  <span className="text-green-600">Cone Hopper Image</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Cone Hoppers</h3>
              <p className="text-slate-600">Ideal for free-flowing materials with mass flow characteristics</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="bg-green-100 rounded-lg p-6 mb-4">
                <div className="w-full h-32 bg-green-200 rounded flex items-center justify-center">
                  <span className="text-green-600">Wedge Hopper Image</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Wedge Hoppers</h3>
              <p className="text-slate-600">Suitable for cohesive materials requiring controlled discharge</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Custom Head Hopper Solutions</h2>
          <p className="text-green-100 mb-6">Expert design services for your material handling requirements</p>
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

export default HeadHoppers;