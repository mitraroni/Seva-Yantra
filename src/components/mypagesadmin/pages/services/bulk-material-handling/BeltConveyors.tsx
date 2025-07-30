import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Truck, CheckCircle } from "lucide-react";

const BeltConveyors = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <Truck className="h-8 w-8 text-orange-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Belt Conveyors</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
            Heavy-duty belt conveyor systems engineered for reliable and efficient bulk material transportation across various industries.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Advanced Belt Conveyor Systems</h2>
              <p className="text-slate-600 mb-6">
                Our belt conveyor systems are designed to handle a wide range of bulk materials with maximum efficiency and minimal maintenance requirements. From coal and ore to grain and aggregates, our conveyors are built to last.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Heavy-Duty Construction</h3>
                    <p className="text-slate-600">Robust steel frame and high-quality belt materials for long service life</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Custom Configurations</h3>
                    <p className="text-slate-600">Tailored designs to fit specific layout requirements and material types</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Low Maintenance</h3>
                    <p className="text-slate-600">Designed for minimal downtime and easy servicing</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <div className="text-gray-500 mb-4">
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Belt Conveyor Image Placeholder</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">High-capacity belt conveyor system in industrial setting</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-orange-700 mb-2">Belt Width</h3>
              <p className="text-slate-600">500mm to 2400mm standard widths available</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-orange-700 mb-2">Capacity</h3>
              <p className="text-slate-600">Up to 10,000 TPH material handling capacity</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-orange-700 mb-2">Length</h3>
              <p className="text-slate-600">Custom lengths up to 20km for long-distance transport</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-orange-700 mb-2">Inclination</h3>
              <p className="text-slate-600">Up to 18° inclination for upward material transport</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Applications & Industries</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 rounded-lg p-8 mb-4">
                <div className="w-full h-32 bg-orange-200 rounded flex items-center justify-center">
                  <span className="text-orange-600">Mining Industry Image</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Mining & Quarrying</h3>
              <p className="text-slate-600">Coal, iron ore, limestone, and aggregate material transport</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-lg p-8 mb-4">
                <div className="w-full h-32 bg-orange-200 rounded flex items-center justify-center">
                  <span className="text-orange-600">Power Plant Image</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Power Plants</h3>
              <p className="text-slate-600">Coal handling and ash handling systems</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-lg p-8 mb-4">
                <div className="w-full h-32 bg-orange-200 rounded flex items-center justify-center">
                  <span className="text-orange-600">Port Terminal Image</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Port Terminals</h3>
              <p className="text-slate-600">Ship loading and unloading operations</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Design Your Belt Conveyor System</h2>
          <p className="text-orange-100 mb-6">Get expert consultation for your belt conveyor requirements</p>
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

export default BeltConveyors;