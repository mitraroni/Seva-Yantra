import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Settings, CheckCircle, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ChainConveyors = () => {
  console.log("ChainConveyors component loaded successfully");
  const features = [
    "Heavy-duty chain construction",
    "High pulling power capability",
    "Versatile attachment options",
    "Reliable continuous operation",
    "Low maintenance requirements",
    "Custom length configurations"
  ];

  const applications = [
    "Floor-level conveying",
    "Overhead trolley systems",
    "Paint line operations",
    "Assembly line transport",
    "Heat treatment processes"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <Settings className="h-8 w-8 text-orange-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Chain Conveyors</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
            Robust chain conveyor systems engineered for heavy-duty applications requiring continuous, reliable material transport with high pulling power.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Reliable Chain Drive Systems</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our chain conveyor systems provide unmatched reliability and strength for demanding industrial applications. Built with precision-engineered components, these systems deliver consistent performance in challenging environments.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Ideal for applications requiring high pulling power, precise timing, and the ability to handle heavy loads over long distances with minimal maintenance requirements.
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
                <span className="text-slate-500">Image Placeholder - Chain Conveyor System</span>
              </div>
              <p className="text-sm text-slate-600">Heavy-duty chain conveyor for industrial transport</p>
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
                  <Settings className="h-5 w-5 text-orange-600" />
                  Key Features
                </CardTitle>
                <CardDescription>
                  Engineered for strength and reliability
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">High-strength steel chain construction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Variable speed control options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Multiple attachment configurations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Enclosed track options for protection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-orange-600" />
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

      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Chain Conveyor System</h2>
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

export default ChainConveyors;