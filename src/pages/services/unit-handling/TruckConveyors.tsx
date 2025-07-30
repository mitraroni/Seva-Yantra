import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Truck, CheckCircle, Settings, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const TruckConveyors = () => {
  const features = [
    "Mobile and stationary options",
    "Adjustable height and angle",
    "Heavy-duty construction",
    "Safety features included",
    "Weather-resistant design",
    "Easy positioning systems"
  ];

  const applications = [
    "Loading dock operations",
    "Truck and trailer loading",
    "Warehouse shipping",
    "Distribution centers",
    "Cross-docking facilities"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <Truck className="h-8 w-8 text-red-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Truck Conveyors</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
            Specialized conveyor systems designed for efficient loading and unloading of trucks and trailers, enhancing safety and productivity at loading docks.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Efficient Loading Solutions</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our truck conveyor systems are engineered to streamline loading and unloading operations at busy shipping docks. These robust systems reduce manual handling, improve safety, and significantly increase throughput efficiency.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Perfect for distribution centers, warehouses, and shipping facilities where rapid truck turnaround is essential for maintaining operational efficiency and meeting delivery schedules.
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
                <span className="text-slate-500">Image Placeholder - Truck Conveyor System</span>
              </div>
              <p className="text-sm text-slate-600">Mobile truck conveyor for loading dock operations</p>
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
                  <Settings className="h-5 w-5 text-red-600" />
                  Key Features
                </CardTitle>
                <CardDescription>
                  Designed for loading dock efficiency
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Adjustable height for different truck sizes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Telescopic length adjustment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Safety barriers and emergency stops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Portable and fixed installation options</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-red-600" />
                  Applications
                </CardTitle>
                <CardDescription>
                  Critical for logistics operations
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

      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Truck Conveyor System</h2>
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

export default TruckConveyors;