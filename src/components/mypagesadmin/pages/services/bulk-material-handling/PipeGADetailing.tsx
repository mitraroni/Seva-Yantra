import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Settings, CheckCircle } from "lucide-react";

const PipeGADetailing = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pipe GA & Detailing</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
            Comprehensive piping general arrangement and detailed drawings for industrial applications with precise specifications and standards compliance.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Professional Piping Design Services</h2>
              <p className="text-slate-600 mb-6">
                Our piping design services cover complete general arrangements, detailed drawings, and isometric views for various industrial applications. All designs comply with international standards and codes.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800">General Arrangement</h3>
                    <p className="text-slate-600">Complete piping layout and routing drawings</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Detailed Drawings</h3>
                    <p className="text-slate-600">Fabrication and installation detail drawings</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Isometric Views</h3>
                    <p className="text-slate-600">3D piping isometric drawings with dimensions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <div className="text-gray-500 mb-4">
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Piping GA Drawing Image Placeholder</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">Comprehensive piping general arrangement drawing</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Drawing Standards & Codes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-red-700 mb-2">ASME B31.3</h3>
              <p className="text-slate-600">Process piping code compliance</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-red-700 mb-2">ASME B31.1</h3>
              <p className="text-slate-600">Power piping code standards</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-red-700 mb-2">API Standards</h3>
              <p className="text-slate-600">American Petroleum Institute specifications</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-red-700 mb-2">ANSI Standards</h3>
              <p className="text-slate-600">Dimensional and material standards</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Piping Applications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 rounded-lg p-8 mb-4">
                <div className="w-full h-32 bg-red-200 rounded flex items-center justify-center">
                  <span className="text-red-600">Process Piping Image</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Process Piping</h3>
              <p className="text-slate-600">Chemical and petrochemical process systems</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 rounded-lg p-8 mb-4">
                <div className="w-full h-32 bg-red-200 rounded flex items-center justify-center">
                  <span className="text-red-600">Power Plant Piping Image</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Power Plant Piping</h3>
              <p className="text-slate-600">Steam, water, and fuel piping systems</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 rounded-lg p-8 mb-4">
                <div className="w-full h-32 bg-red-200 rounded flex items-center justify-center">
                  <span className="text-red-600">Industrial Piping Image</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Industrial Piping</h3>
              <p className="text-slate-600">Manufacturing and utility piping systems</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Professional Piping Design</h2>
          <p className="text-red-100 mb-6">Expert piping GA and detailing services</p>
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

export default PipeGADetailing;