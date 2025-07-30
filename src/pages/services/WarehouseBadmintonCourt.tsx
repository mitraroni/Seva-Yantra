import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Warehouse } from "lucide-react";

const WarehouseBadmintonCourt = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <Warehouse className="h-8 w-8 text-teal-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Warehouse and Badminton Court</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto mb-8">
            Specialized design solutions for warehouse facilities and sports infrastructure including badminton courts.
          </p>
        </div>
      </section>

      {/* Warehouse Projects Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Warehouse Construction Expertise</h2>
          
          {/* Completed Warehouse */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-50 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/CW.jpg" 
                alt="Completed Warehouse Building"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Completed Warehouse Facility</h3>
              <p className="text-slate-600 mb-4">
                This state-of-the-art warehouse features a pre-engineered steel building (PEB) structure with durable white cladding and distinctive red trim. The design incorporates optimal natural lighting through strategically placed windows and provides efficient loading dock access.
              </p>
              <ul className="text-slate-600 space-y-2">
                <li>• Clear span design for maximum storage efficiency</li>
                <li>• Weather-resistant exterior cladding system</li>
                <li>• Integrated office spaces and loading facilities</li>
                <li>• Cost-effective construction with rapid deployment</li>
              </ul>
            </div>
          </div>

          {/* Steel Frame Construction */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex flex-col justify-center order-2 md:order-1">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Steel Frame Construction Process</h3>
              <p className="text-slate-600 mb-4">
                Our precision-engineered steel frame systems provide the backbone for durable warehouse structures. This image showcases the meticulous construction process with high-grade steel columns and rafters designed to international standards.
              </p>
              <ul className="text-slate-600 space-y-2">
                <li>• Hot-rolled steel sections for superior strength</li>
                <li>• Modular design allowing flexible expansion</li>
                <li>• Seismic-resistant construction techniques</li>
                <li>• Quality-assured welding and fabrication</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-lg overflow-hidden order-1 md:order-2">
              <img 
                src="/lovable-uploads/SF.jpg" 
                alt="Steel Frame Construction"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Multi-Story Steel Structure */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-50 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/MS.jpg" 
                alt="Multi-Story Steel Frame"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Multi-Story Industrial Buildings</h3>
              <p className="text-slate-600 mb-4">
                Complex multi-level structures requiring advanced engineering expertise. Our designs accommodate heavy industrial loads while maintaining structural integrity across multiple floors with optimal space utilization.
              </p>
              <ul className="text-slate-600 space-y-2">
                <li>• Multi-level load distribution analysis</li>
                <li>• Industrial-grade floor loading capacity</li>
                <li>• Integrated service corridors and utilities</li>
                <li>• Compliance with industrial safety standards</li>
              </ul>
            </div>
          </div>

          {/* Large Warehouse Frame */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex flex-col justify-center order-2 md:order-1">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Large-Scale Warehouse Structures</h3>
              <p className="text-slate-600 mb-4">
                Expansive warehouse facilities designed for maximum storage capacity and operational efficiency. These structures feature long-span roof systems and optimized column spacing for unobstructed floor areas.
              </p>
              <ul className="text-slate-600 space-y-2">
                <li>• Long-span roofing systems up to 60+ meters</li>
                <li>• Optimized bay spacing for material handling</li>
                <li>• High eave heights for vertical storage</li>
                <li>• Future expansion-ready design</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-lg overflow-hidden order-1 md:order-2">
              <img 
                src="/lovable-uploads/LS.jpg" 
                alt="Large Warehouse Frame"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Blue Steel Frame */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-50 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/CC.jpg" 
                alt="Blue Steel Frame Construction"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Custom Color Steel Structures</h3>
              <p className="text-slate-600 mb-4">
                Our steel structures can be customized with protective coatings in various colors for enhanced durability and aesthetic appeal. This blue-painted framework demonstrates our attention to both function and visual design.
              </p>
              <ul className="text-slate-600 space-y-2">
                <li>• Anti-corrosion protective coatings</li>
                <li>• Custom color schemes for branding</li>
                <li>• Weather-resistant paint systems</li>
                <li>• Low-maintenance surface treatments</li>
              </ul>
            </div>
          </div>

          {/* Warehouse with Loading Docks */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex flex-col justify-center order-2 md:order-1">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Logistics-Optimized Warehouses</h3>
              <p className="text-slate-600 mb-4">
                Modern warehouse design with integrated loading docks and logistical facilities. Features include truck-height loading bays, covered loading areas, and efficient traffic flow patterns for optimal distribution operations.
              </p>
              <ul className="text-slate-600 space-y-2">
                <li>• Multiple truck loading dock positions</li>
                <li>• Weather-protected loading areas</li>
                <li>• Efficient circulation and parking layouts</li>
                <li>• Security and access control systems</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-lg overflow-hidden order-1 md:order-2">
              <img 
                src="/lovable-uploads/LW.jpg" 
                alt="Warehouse with Loading Docks"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Badminton Court Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Professional Badminton Court Design</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/IS.jpg" 
                alt="Professional Badminton Court Interior"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">International Standard Courts</h3>
              <p className="text-slate-600 mb-4">
                Our badminton courts are designed to international BWF (Badminton World Federation) standards with professional-grade flooring, optimal lighting, and acoustic treatments for the perfect playing environment.
              </p>
              <ul className="text-slate-600 space-y-2">
                <li>• BWF-approved court dimensions (13.4m x 6.1m)</li>
                <li>• Professional PVC sports flooring system</li>
                <li>• Anti-glare LED lighting at 500+ lux</li>
                <li>• Sound absorption for optimal acoustics</li>
                <li>• Climate control and ventilation systems</li>
                <li>• Spectator seating areas available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Canopy and Coverage Structures */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Specialized Coverage Solutions</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Canopy and Shelter Structures</h3>
              <p className="text-slate-600 mb-4">
                Custom-designed canopy systems for fuel stations, loading areas, and outdoor equipment protection. These structures combine functional weather protection with aesthetic architectural elements.
              </p>
              <ul className="text-slate-600 space-y-2">
                <li>• Weather-resistant roofing materials</li>
                <li>• Wind load calculations and structural integrity</li>
                <li>• Integrated drainage and gutter systems</li>
                <li>• Minimal maintenance requirements</li>
                <li>• Custom dimensions for specific applications</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/CS.jpg" 
                alt="Canopy Structure"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Design Your Facility</h2>
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

export default WarehouseBadmintonCourt;