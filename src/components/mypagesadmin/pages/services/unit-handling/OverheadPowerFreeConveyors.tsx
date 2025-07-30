import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowUpDown, CheckCircle, Settings, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const OverheadPowerFreeConveyors = () => {
  const features = [
    "Flexible routing and switching capabilities",
    "Independent carrier control",
    "Variable speed zones",
    "Accumulation and storage areas",
    "Load balancing and sorting",
    "Integration with automation systems"
  ];

  const applications = [
    "Automotive assembly lines",
    "Paint finishing systems",
    "Heavy manufacturing",
    "Warehousing and distribution",
    "Cross-docking operations"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <ArrowUpDown className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Overhead Power & Free Conveyors</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Advanced overhead conveyor systems combining power and free sections for maximum flexibility and efficiency in material handling operations.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Advanced Overhead Solutions</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our overhead power and free conveyor systems provide the ultimate in flexibility for complex material handling requirements. These systems feature both powered and free-running sections, allowing for sophisticated routing, accumulation, and processing operations.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Perfect for industries requiring complex assembly processes, finishing operations, and flexible manufacturing workflows where precise control and timing are essential.
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
                <span className="text-slate-500">Image Placeholder - Overhead Power & Free Conveyor System</span>
              </div>
              <p className="text-sm text-slate-600">Custom overhead power and free conveyor installation</p>
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
                  <Settings className="h-5 w-5 text-blue-600" />
                  Key Features
                </CardTitle>
                <CardDescription>
                  Advanced capabilities for complex material handling
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Dual-track design with power and free sections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Variable speed control and zone management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Automated switching and routing capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Load accumulation and buffering systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-blue-600" />
                  Applications
                </CardTitle>
                <CardDescription>
                  Industries and processes that benefit from overhead systems
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

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Overhead Power & Free Conveyor System</h2>
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

export default OverheadPowerFreeConveyors;