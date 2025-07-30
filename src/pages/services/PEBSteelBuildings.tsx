import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Building } from "lucide-react";

const PEBSteelBuilding = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-gray-600 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <Building className="h-8 w-8 text-gray-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">PEB Steel Building</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
            Pre-engineered steel building solutions for industrial, commercial, and warehouse applications.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-8">Our PEB Steel Building Solutions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-8">
              Complete structural design and engineering for cost-effective, durable pre-engineered steel buildings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* PEB Steel Buildings */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <img src="/lovable-uploads/PEB.jpg" alt="PEB Steel Buildings" className="h-full object-contain" />
                <span className="text-gray-500">Photo will be added</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">PEB Steel Buildings</h3>
              <p className="text-slate-600 mb-4">
                Pre-engineered steel buildings designed for maximum efficiency and durability. Our structures are engineered to meet all building codes and provide long-lasting performance for industrial and commercial applications.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Custom design solutions</li>
                <li>• Fast construction timeline</li>
                <li>• Cost-effective structures</li>
                <li>• High-quality steel materials</li>
              </ul>
            </div>

            {/* Sports Club */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <img src="/lovable-uploads/PEB.jpg" alt="Sports Club" className="h-full object-contain" />
                <span className="text-gray-500">Photo will be added</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Sports Club</h3>
              <p className="text-slate-600 mb-4">
                Specialized steel structures for sports facilities including gymnasiums, training centers, and recreational buildings. Designed to accommodate large open spaces with minimal structural interference.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Large span capabilities</li>
                <li>• Weather-resistant design</li>
                <li>• Flexible interior layouts</li>
                <li>• Professional sports standards</li>
              </ul>
            </div>

            {/* Warehouse */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <img src="/lovable-uploads/PEB.jpg" alt="Warehouse" className="h-full object-contain" />
                <span className="text-gray-500">Photo will be added</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Warehouse</h3>
              <p className="text-slate-600 mb-4">
                Efficient warehouse solutions with optimized storage space and material flow. Our designs focus on maximizing storage capacity while ensuring easy access and operational efficiency.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Optimized storage layouts</li>
                <li>• Loading dock integration</li>
                <li>• Climate control ready</li>
                <li>• Scalable designs</li>
              </ul>
            </div>

            {/* Badminton Court */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <img src="/lovable-uploads/PEB.jpg" alt="Badminton Court" className="h-full object-contain" />
                <span className="text-gray-500">Photo will be added</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Badminton Court</h3>
              <p className="text-slate-600 mb-4">
                Professional badminton court structures with proper dimensions and specifications. Designed to meet international standards for recreational and competitive play.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• International court dimensions</li>
                <li>• Proper ventilation systems</li>
                <li>• Non-slip flooring ready</li>
                <li>• LED lighting provisions</li>
              </ul>
            </div>

            {/* Industrial Shed */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <img src="/lovable-uploads/PEB.jpg" alt="Industrial Shed" className="h-full object-contain" />
                <span className="text-gray-500">Photo will be added</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Industrial Shed</h3>
              <p className="text-slate-600 mb-4">
                Heavy-duty industrial sheds for manufacturing and production facilities. Built to withstand heavy machinery loads and industrial operations with enhanced safety features.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Heavy load capacity</li>
                <li>• Industrial safety standards</li>
                <li>• Equipment integration</li>
                <li>• Expansion ready design</li>
              </ul>
            </div>

            {/* Mezzanine Floor */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <img src="/lovable-uploads/MS.jpg" alt="Mezzanine Floor" className="h-full object-contain" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Mezzanine Floor</h3>
              <p className="text-slate-600 mb-4">
                Multi-level steel structures to maximize space utilization. Perfect for adding office space, storage areas, or production floors within existing buildings.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Space optimization</li>
                <li>• Modular construction</li>
                <li>• Multi-purpose usage</li>
                <li>• Easy installation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Build with Steel Excellence</h2>
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

export default PEBSteelBuilding;