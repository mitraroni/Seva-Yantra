import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RotateCcw, CheckCircle, Settings, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const RollerConveyors = () => {
  const features = [
    "Smooth roller surface transport",
    "Adjustable roller spacing",
    "Multiple width options",
    "Durable steel construction",
    "Easy integration capability",
    "Low maintenance operation"
  ];

  const applications = [
    "Package sorting facilities",
    "Warehouse distribution",
    "Assembly line transport",
    "Loading dock operations",
    "E-commerce fulfillment"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <RotateCcw className="h-8 w-8 text-indigo-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Roller Conveyors</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
            Efficient roller conveyor systems providing smooth, reliable transport for boxes, packages, and unit loads across various industrial applications.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Smooth Transport Solutions</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our roller conveyor systems are designed for efficient, smooth transport of a wide variety of items. With precision-engineered rollers and robust construction, these systems provide reliable performance in demanding environments.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Perfect for warehouses, distribution centers, and manufacturing facilities where consistent, smooth material handling is essential for operational efficiency.
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
                <span className="text-slate-500">Image Placeholder - Roller Conveyor System</span>
              </div>
              <p className="text-sm text-slate-600">Efficient roller conveyor for package handling</p>
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
                  <Settings className="h-5 w-5 text-indigo-600" />
                  Key Features
                </CardTitle>
                <CardDescription>
                  Precision engineering for smooth operation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Precision-machined steel rollers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Adjustable conveyor angles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Modular section design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Integrated control systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-indigo-600" />
                  Applications
                </CardTitle>
                <CardDescription>
                  Diverse applications across industries
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

      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Roller Conveyor System</h2>
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

export default RollerConveyors;