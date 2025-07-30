import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Zap, CheckCircle, Settings, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const MotorizedRollerConveyors = () => {
  const features = [
    "Individual motor drive rollers",
    "Precise speed control",
    "Zone-based operation",
    "Automated functionality",
    "Energy-efficient motors",
    "Advanced control systems"
  ];

  const applications = [
    "Automated sorting systems",
    "High-speed production lines",
    "Distribution centers",
    "Airport baggage handling",
    "Parcel processing facilities"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <Zap className="h-8 w-8 text-yellow-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Motorized Roller Conveyors</h1>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto mb-8">
            Advanced powered roller conveyor systems with individual motor drives providing precise speed control and automated functionality for high-performance applications.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Powered Precision Transport</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our motorized roller conveyor systems feature individual motor-driven rollers that provide unmatched precision and control. Each roller can be independently controlled, enabling sophisticated material handling operations.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Perfect for high-speed automated facilities requiring precise timing, accumulation control, and the ability to handle various load sizes with consistent performance.
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
                <span className="text-slate-500">Image Placeholder - Motorized Roller Conveyor System</span>
              </div>
              <p className="text-sm text-slate-600">Motorized roller conveyor with individual drive control</p>
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
                  <Settings className="h-5 w-5 text-yellow-600" />
                  Key Features
                </CardTitle>
                <CardDescription>
                  Advanced motorized control and automation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Individual motor drives for each roller</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Variable frequency drive control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Zone accumulation and release</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Integrated sensor networks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-yellow-600" />
                  Applications
                </CardTitle>
                <CardDescription>
                  High-performance automated systems
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

      <section className="py-16 bg-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Motorized Roller Conveyor System</h2>
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

export default MotorizedRollerConveyors;