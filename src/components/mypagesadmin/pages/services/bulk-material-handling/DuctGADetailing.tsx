import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Wind, CheckCircle } from "lucide-react";

const DuctGADetailing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-cyan-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <Wind className="h-8 w-8 text-cyan-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Duct GA & Detailing</h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto mb-8">
            Complete duct system general arrangement and technical detailing for HVAC, pneumatic, and industrial ventilation applications.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Comprehensive Duct System Design</h2>
              <p className="text-slate-600 mb-6">
                Our duct design services provide complete general arrangement drawings, fabrication details, and installation specifications for various industrial and commercial applications with optimal airflow characteristics.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Airflow Analysis</h3>
                    <p className="text-slate-600">CFD analysis for optimal duct sizing and layout</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Fabrication Details</h3>
                    <p className="text-slate-600">Complete fabrication and assembly drawings</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Installation Drawings</h3>
                    <p className="text-slate-600">Detailed installation and support specifications</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <div className="text-gray-500 mb-4">
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Duct GA Drawing Image Placeholder</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">Industrial duct system general arrangement drawing</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Design Standards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-cyan-700 mb-2">SMACNA</h3>
              <p className="text-slate-600">Sheet Metal and Air Conditioning standards</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-cyan-700 mb-2">ASHRAE</h3>
              <p className="text-slate-600">HVAC design standards and guidelines</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-cyan-700 mb-2">Industrial Standards</h3>
              <p className="text-slate-600">Industrial ventilation design codes</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-cyan-700 mb-2">Safety Codes</h3>
              <p className="text-slate-600">Fire and safety compliance standards</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Duct System Types</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-cyan-100 rounded-lg p-8 mb-4">
                <div className="w-full h-32 bg-cyan-200 rounded flex items-center justify-center">
                  <span className="text-cyan-600">HVAC Duct Image</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">HVAC Systems</h3>
              <p className="text-slate-600">Commercial and industrial air conditioning systems</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 rounded-lg p-8 mb-4">
                <div className="w-full h-32 bg-cyan-200 rounded flex items-center justify-center">
                  <span className="text-cyan-600">Exhaust Duct Image</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Exhaust Systems</h3>
              <p className="text-slate-600">Industrial exhaust and ventilation systems</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 rounded-lg p-8 mb-4">
                <div className="w-full h-32 bg-cyan-200 rounded flex items-center justify-center">
                  <span className="text-cyan-600">Pneumatic Duct Image</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Pneumatic Systems</h3>
              <p className="text-slate-600">Material transport pneumatic conveying</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Expert Duct System Design</h2>
          <p className="text-cyan-100 mb-6">Professional duct GA and detailing services</p>
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

export default DuctGADetailing;