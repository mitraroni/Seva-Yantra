import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RotateCcw, Box, FileText } from "lucide-react";

const ReverseEngineeringConversionDrawings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <RotateCcw className="h-8 w-8 text-purple-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Reverse Engineering And Conversion Drawings</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
            Expert reverse engineering services and technical drawing conversion for legacy systems and components.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-8">Professional Reverse Engineering Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-8">
              Complete reverse engineering solutions from physical components to detailed CAD models and technical drawings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* 3D Model Section */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <Box className="h-8 w-8 text-purple-600"/>
                </div>
              </div>
              
              <div className="h-64 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <img src="/lovable-uploads/3D.jpg" alt="3D Model" className="w-full h-full object-cover" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">3D Model</h3>
              <p className="text-slate-600 mb-6">
                Transform physical components into accurate 3D CAD models using advanced scanning techniques and precise measurements. Our 3D modeling services capture every detail of your existing parts.
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-800">Key Features:</h4>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• High-precision 3D scanning and measurement</li>
                  <li>• Parametric CAD model creation</li>
                  <li>• Surface reconstruction and optimization</li>
                  <li>• Assembly modeling and fit analysis</li>
                  <li>• Material property identification</li>
                  <li>• Quality validation and verification</li>
                </ul>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h4 className="font-semibold text-slate-800 mb-2">Applications:</h4>
                <p className="text-sm text-slate-600">
                  Legacy part reproduction, product improvement, spare part manufacturing, and design analysis.
                </p>
              </div>
            </div>

            {/* 2D Detailing Section */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <FileText className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              
              <div className="h-64 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <img src="/lovable-uploads/2D.jpg" alt="2D Detailing" className="w-full h-full object-cover" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">2D Detailing</h3>
              <p className="text-slate-600 mb-6">
                Create comprehensive technical drawings and detailed 2D documentation from existing components or 3D models. Professional engineering drawings with complete dimensioning and annotations.
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-800">Key Features:</h4>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Detailed technical drawings with GD&T</li>
                  <li>• Assembly and exploded view drawings</li>
                  <li>• Section views and detail callouts</li>
                  <li>• Material specifications and notes</li>
                  <li>• Manufacturing and machining details</li>
                  <li>• Standard compliance documentation</li>
                </ul>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h4 className="font-semibold text-slate-800 mb-2">Applications:</h4>
                <p className="text-sm text-slate-600">
                  Manufacturing documentation, quality control, part procurement, and maintenance manuals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Transform Your Legacy Components</h2>
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

export default ReverseEngineeringConversionDrawings;