import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Package, CheckCircle, Settings, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const GravityRollerConveyors = () => {
  const features = [
    "Energy-efficient operation",
    "Simple mechanical design",
    "Adjustable slope angles",
    "Low operating costs",
    "Minimal maintenance required",
    "Environmentally friendly"
  ];

  const applications = [
    "Order picking systems",
    "Loading and unloading",
    "Temporary storage solutions",
    "Manual sorting operations",
    "Cost-effective transport"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <Package className="h-8 w-8 text-emerald-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gravity Roller Conveyors</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
            Energy-efficient gravity-fed roller systems providing cost-effective material handling solutions with zero power consumption and minimal maintenance.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Energy-Free Transport</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our gravity roller conveyor systems harness the power of gravity to move materials efficiently without any electrical power. These systems are perfect for applications where energy conservation and cost reduction are priorities.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Ideal for facilities seeking sustainable material handling solutions that require minimal investment while delivering reliable performance for light to medium-weight items.
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
                <span className="text-slate-500">Image Placeholder - Gravity Roller Conveyor System</span>
              </div>
              <p className="text-sm text-slate-600">Gravity-powered roller conveyor for energy-efficient transport</p>
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
                  <Settings className="h-5 w-5 text-emerald-600" />
                  Key Features
                </CardTitle>
                <CardDescription>
                  Sustainable and cost-effective design
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Zero electrical power consumption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Gravity-fed operation with adjustable slopes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Robust steel roller construction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Quick installation and setup</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-emerald-600" />
                  Applications
                </CardTitle>
                <CardDescription>
                  Ideal for various material handling needs
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

      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Gravity Roller Conveyor System</h2>
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

export default GravityRollerConveyors;