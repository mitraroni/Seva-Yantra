import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowUpDown, CheckCircle, Settings, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DropLiftsIntraloxConveyors = () => {
  const features = [
    "Intralox modular belt technology",
    "Drop lift mechanism capability",
    "Multi-directional transport",
    "Precise positioning control",
    "Hygienic design options",
    "Easy maintenance access"
  ];

  const applications = [
    "Food processing facilities",
    "Pharmaceutical manufacturing",
    "Automated assembly lines",
    "Multi-level transport systems",
    "Clean room environments"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <ArrowUpDown className="h-8 w-8 text-teal-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Drop Lifts Intralox Conveyors</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto mb-8">
            Advanced Intralox conveyor systems with drop lift capabilities providing versatile material handling solutions for complex routing and multi-level operations.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Advanced Intralox Technology</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our Intralox conveyor systems with drop lift capabilities represent the pinnacle of modern material handling technology. These systems combine modular belt technology with sophisticated lifting mechanisms for versatile transport solutions.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Ideal for applications requiring precise positioning, multi-directional transport, and the ability to transfer materials between different elevations while maintaining product integrity.
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
                <span className="text-slate-500">Image Placeholder - Drop Lifts Intralox Conveyor System</span>
              </div>
              <p className="text-sm text-slate-600">Intralox conveyor with drop lift mechanism</p>
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
                  <Settings className="h-5 w-5 text-teal-600" />
                  Key Features
                </CardTitle>
                <CardDescription>
                  Cutting-edge Intralox technology
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Modular plastic belt construction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Integrated drop lift mechanisms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Washdown and sanitary designs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Precise position control systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-teal-600" />
                  Applications
                </CardTitle>
                <CardDescription>
                  Specialized industry applications
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

      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Drop Lifts Intralox Conveyor System</h2>
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

export default DropLiftsIntraloxConveyors;