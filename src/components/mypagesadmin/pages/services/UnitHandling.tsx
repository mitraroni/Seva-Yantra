import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { 
  Box, 
  Move, 
  Truck, 
  Settings, 
  ArrowUpDown, 
  RotateCcw, 
  Zap, 
  Package, 
  Layers 
} from "lucide-react";

const unitHandlingServices = [
  {
    title: "Overhead Power & Free Conveyors",
    description: "Advanced overhead conveyor systems with power and free sections for flexible material handling and storage.",
    href: "/services/unit-handling/overhead-power-free-conveyors",
    icon: ArrowUpDown
  },
  {
    title: "Slat Conveyors",
    description: "Heavy-duty slat conveyor systems for transporting large and heavy items with precision and reliability.",
    href: "/services/unit-handling/slat-conveyors",
    icon: Layers
  },
  {
    title: "Chain Conveyors",
    description: "Robust chain conveyor systems designed for heavy-duty applications and continuous material flow.",
    href: "/services/unit-handling/chain-conveyors",
    icon: Settings
  },
  {
    title: "Roller Conveyors",
    description: "Efficient roller conveyor systems for smooth transportation of boxes, packages, and unit loads.",
    href: "/services/unit-handling/roller-conveyors",
    icon: RotateCcw
  },
  {
    title: "Gravity Roller Conveyors",
    description: "Energy-efficient gravity-fed roller systems for cost-effective material handling solutions.",
    href: "/services/unit-handling/gravity-roller-conveyors",
    icon: Package
  },
  {
    title: "Motorized Roller Conveyors",
    description: "Powered roller conveyor systems with precise speed control and automated functionality.",
    href: "/services/unit-handling/motorized-roller-conveyors",
    icon: Zap
  },
  {
    title: "Truck Conveyors",
    description: "Specialized conveyor systems for loading and unloading trucks efficiently and safely.",
    href: "/services/unit-handling/truck-conveyors",
    icon: Truck
  },
  {
    title: "Drop Lifts Intralox Conveyors",
    description: "Advanced Intralox conveyor systems with drop lift capabilities for versatile material handling.",
    href: "/services/unit-handling/drop-lifts-intralox-conveyors",
    icon: ArrowUpDown
  },
  {
    title: "Belt Conveyors",
    description: "Versatile belt conveyor systems for continuous material transport across various industries.",
    href: "/services/unit-handling/belt-conveyors",
    icon: Move
  }
];

const UnitHandling = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <Box className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Automation</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
            Specialized automation systems for precise and efficient handling of individual items and products.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Our Automation Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {unitHandlingServices.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200 hover:border-green-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <service.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 group-hover:text-green-600 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Optimize Your Automation</h2>
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

export default UnitHandling;