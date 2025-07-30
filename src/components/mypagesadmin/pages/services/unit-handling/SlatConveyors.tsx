import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Layers, CheckCircle, Settings, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SlatConveyors = () => {
  console.log("SlatConveyors component loaded successfully");
  const features = [
    "Heavy-duty steel or aluminum slats",
    "Precise positioning capabilities",
    "High load capacity handling",
    "Smooth and quiet operation",
    "Easy maintenance access",
    "Customizable configurations"
  ];

  const applications = [
    "Automotive manufacturing",
    "Heavy machinery assembly",
    "Pallet handling systems",
    "Large item processing",
    "Industrial manufacturing"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <Layers className="h-8 w-8 text-purple-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Slat Conveyors</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
            Heavy-duty slat conveyor systems designed for transporting large, heavy items with precision and reliability in demanding industrial environments.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Heavy-Duty Performance</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our slat conveyor systems are engineered to handle the most demanding material handling applications. With robust construction and precision engineering, these systems excel in environments requiring high load capacity and precise positioning.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Perfect for automotive assembly lines, heavy machinery manufacturing, and any application where large, heavy items need to be transported with accuracy and reliability.
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
                <span className="text-slate-500">Image Placeholder - Slat Conveyor System</span>
              </div>
              <p className="text-sm text-slate-600">Heavy-duty slat conveyor for industrial applications</p>
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
                  <Settings className="h-5 w-5 text-purple-600" />
                  Key Features
                </CardTitle>
                <CardDescription>
                  Robust design for heavy-duty applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Individual slat design for optimal load distribution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">High capacity chain drive systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Precision positioning and stop mechanisms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Modular construction for easy expansion</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-purple-600" />
                  Applications
                </CardTitle>
                <CardDescription>
                  Industries utilizing slat conveyor systems
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

      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Slat Conveyor System</h2>
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

export default SlatConveyors;