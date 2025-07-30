import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Warehouse, CheckCircle } from "lucide-react";

const Bunkers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <Warehouse className="h-8 w-8 text-amber-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Bunkers</h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto mb-8">
            Industrial bunker storage solutions designed for safe and efficient bulk material storage with optimal flow characteristics.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Heavy-Duty Bunker Systems</h2>
              <p className="text-slate-600 mb-6">
                Our bunker designs provide secure storage for various bulk materials while ensuring proper flow control and structural integrity. Each bunker is engineered to handle specific material properties and operational requirements.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800">High Capacity Storage</h3>
                    <p className="text-slate-600">Large volume storage with efficient space utilization</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Structural Integrity</h3>
                    <p className="text-slate-600">Designed to withstand material pressure and environmental loads</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Discharge Control</h3>
                    <p className="text-slate-600">Multiple discharge points with flow control mechanisms</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <div className="text-gray-500 mb-4">
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Bunker System Image Placeholder</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">Large capacity bunker with multiple discharge points</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Bunker Design Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-amber-700 mb-2">Structural Analysis</h3>
              <p className="text-slate-600">FEA analysis for material pressure and seismic loads</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-amber-700 mb-2">Flow Optimization</h3>
              <p className="text-slate-600">Designed for first-in-first-out material flow</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-amber-700 mb-2">Safety Systems</h3>
              <p className="text-slate-600">Level monitoring and emergency discharge systems</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-amber-700 mb-2">Access Platforms</h3>
              <p className="text-slate-600">Safe access for inspection and maintenance</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Bunker Applications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 rounded-lg p-8 mb-4">
                <div className="w-full h-32 bg-amber-200 rounded flex items-center justify-center">
                  <span className="text-amber-600">Coal Bunker Image</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Coal Storage</h3>
              <p className="text-slate-600">High-capacity coal bunkers for power plants</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 rounded-lg p-8 mb-4">
                <div className="w-full h-32 bg-amber-200 rounded flex items-center justify-center">
                  <span className="text-amber-600">Ore Bunker Image</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Ore Storage</h3>
              <p className="text-slate-600">Iron ore and mineral storage systems</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 rounded-lg p-8 mb-4">
                <div className="w-full h-32 bg-amber-200 rounded flex items-center justify-center">
                  <span className="text-amber-600">Grain Bunker Image</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Grain Storage</h3>
              <p className="text-slate-600">Agricultural product storage facilities</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Design Your Bunker System</h2>
          <p className="text-amber-100 mb-6">Expert bunker design and engineering solutions</p>
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

export default Bunkers;