import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Move, CheckCircle, Settings, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const BeltConveyorsUnitHandling = () => {
  const features = [
    "High-quality conveyor belting",
    "Variable speed control",
    "Incline and decline capability",
    "Multiple belt materials",
    "Efficient power transmission",
    "Customizable configurations"
  ];

  const applications = [
    "Manufacturing assembly lines",
    "Package sorting systems",
    "Food processing plants",
    "Mining and aggregate",
    "Recycling facilities"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-cyan-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <Move className="h-8 w-8 text-cyan-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Belt Conveyors - Automation</h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto mb-8">
            Versatile belt conveyor systems providing continuous, reliable material transport for automation applications across diverse industries and environments.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Continuous Transport Solutions</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our belt conveyor systems for automation are designed to provide smooth, continuous transport of individual items and packages. These systems offer exceptional versatility and reliability for a wide range of applications.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Perfect for facilities requiring consistent material flow, these belt conveyors can handle various product types while maintaining gentle handling and precise positioning capabilities.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-100 rounded-lg p-8 text-center">
              <div className="w-full h-64 bg-slate-200 rounded-lg flex items-center justify-center mb-4">
                <span className="text-slate-500">Image Placeholder - Belt Conveyor Automation System</span>
              </div>
              <p className="text-sm text-slate-600">Belt conveyor system for automation applications</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-cyan-600" />
                  Key Features
                </CardTitle>
                <CardDescription>
                  Optimized for automation operations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Multiple belt material options for different applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Precise speed control and timing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Gentle product handling capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Integrated control and monitoring systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-cyan-600" />
                  Applications
                </CardTitle>
                <CardDescription>
                  Versatile applications across industries
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {applications.map((app, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-sm">{app}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Belt Conveyor Automation System</h2>
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

export default BeltConveyorsUnitHandling;