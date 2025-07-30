import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cog } from "lucide-react";

const Automation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <Cog className="h-8 w-8 text-orange-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Automation</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
            Advanced automation solutions for industrial processes, manufacturing, and material handling systems.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-8">Smart Automation Systems</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-8">
              Complete automation design and implementation for improved efficiency, safety, and productivity.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Automated Assembly Systems */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/AA.jpg" 
                  alt="Automated Assembly System" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Automated Assembly Systems</h3>
              <p className="text-slate-600 mb-4">
                Precision-engineered automated assembly systems designed for high-volume manufacturing. Features modular construction with integrated motors, sensors, and control systems for seamless operation.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-800">Key Features:</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Modular aluminum framework construction</li>
                  <li>• Integrated servo motor systems</li>
                  <li>• Precision positioning mechanisms</li>
                  <li>• Quality control integration</li>
                  <li>• Flexible reconfiguration options</li>
                  <li>• Real-time monitoring capabilities</li>
                </ul>
              </div>
            </div>

            {/* Conveyor Automation Systems */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/Automation.jpg" 
                  alt="Conveyor Automation System" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Conveyor Automation Systems</h3>
              <p className="text-slate-600 mb-4">
                Advanced conveyor automation with intelligent control systems for material handling and production line management. Integrated with sensors and sorting mechanisms for optimal workflow.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-800">Key Features:</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Multi-lane conveyor configurations</li>
                  <li>• Automated sorting and routing</li>
                  <li>• Variable speed control systems</li>
                  <li>• Integration with warehouse systems</li>
                  <li>• Product tracking and identification</li>
                  <li>• Emergency stop safety systems</li>
                </ul>
              </div>
            </div>

            {/* Precision Motion Control */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/PM.jpg" 
                  alt="Precision Motion Control System" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Precision Motion Control</h3>
              <p className="text-slate-600 mb-4">
                High-precision motion control systems with linear actuators, roller mechanisms, and advanced positioning technology. Designed for applications requiring exact positioning and smooth operation.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-800">Key Features:</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Linear motion actuators</li>
                  <li>• Precision roller systems</li>
                  <li>• Advanced positioning control</li>
                  <li>• Smooth acceleration/deceleration</li>
                  <li>• High repeatability accuracy</li>
                  <li>• Integrated feedback systems</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="mt-16 bg-orange-50 rounded-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Complete Automation Solutions</h3>
              <p className="text-slate-600 max-w-3xl mx-auto">
                Our automation systems are designed to integrate seamlessly with your existing operations, providing enhanced efficiency, reduced labor costs, and improved product quality. From concept to commissioning, we deliver turnkey automation solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-slate-800 mb-3">Industries Served:</h4>
                <ul className="text-slate-600 space-y-1">
                  <li>• Manufacturing & Assembly</li>
                  <li>• Food & Beverage Processing</li>
                  <li>• Packaging & Distribution</li>
                  <li>• Automotive Components</li>
                  <li>• Electronics & Telecommunications</li>
                  <li>• Pharmaceutical & Medical Devices</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-3">Our Services Include:</h4>
                <ul className="text-slate-600 space-y-1">
                  <li>• System Design & Engineering</li>
                  <li>• Custom Control Software Development</li>
                  <li>• Installation & Commissioning</li>
                  <li>• Training & Support</li>
                  <li>• Maintenance & Upgrades</li>
                  <li>• Performance Optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Automate Your Operations</h2>
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

export default Automation;