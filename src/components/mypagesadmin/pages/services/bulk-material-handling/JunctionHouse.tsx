import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Building2, CheckCircle } from "lucide-react";

const JunctionHouse = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <Building2 className="h-8 w-8 text-indigo-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Junction House</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
            Junction house designs for material flow management systems with integrated control and distribution capabilities.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Material Flow Control Centers</h2>
              <p className="text-slate-600 mb-6">
                Junction houses serve as critical control points in material handling systems, providing flow distribution, surge capacity, and system control. Our designs integrate multiple material streams with precise control mechanisms.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Flow Distribution</h3>
                    <p className="text-slate-600">Multiple inlet and outlet points for material routing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Surge Capacity</h3>
                    <p className="text-slate-600">Temporary storage to handle flow variations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Control Integration</h3>
                    <p className="text-slate-600">Automated control systems for flow management</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <div className="text-gray-500 mb-4">
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Junction House Image Placeholder</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">Multi-level junction house with flow control systems</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Junction House Components</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-indigo-700 mb-2">Distribution Chutes</h3>
              <p className="text-slate-600">Multiple outlet chutes for material routing</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-indigo-700 mb-2">Gate Systems</h3>
              <p className="text-slate-600">Automated gates for flow control</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-indigo-700 mb-2">Level Sensors</h3>
              <p className="text-slate-600">Material level monitoring systems</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-indigo-700 mb-2">Dust Collection</h3>
              <p className="text-slate-600">Integrated dust suppression systems</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Design Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <div className="bg-indigo-100 rounded-lg p-6 mb-4">
                <div className="w-full h-32 bg-indigo-200 rounded flex items-center justify-center">
                  <span className="text-indigo-600">Control Room Image</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Control Room</h3>
              <p className="text-slate-600">Centralized control systems for monitoring and operation</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg">
              <div className="bg-indigo-100 rounded-lg p-6 mb-4">
                <div className="w-full h-32 bg-indigo-200 rounded flex items-center justify-center">
                  <span className="text-indigo-600">Access Platform Image</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Access Platforms</h3>
              <p className="text-slate-600">Safe access for maintenance and emergency operations</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Design Your Junction House</h2>
          <p className="text-indigo-100 mb-6">Custom junction house solutions for material flow control</p>
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

export default JunctionHouse;