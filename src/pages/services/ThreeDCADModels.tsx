
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Box, CheckCircle, Clock, Users, Award, Zap } from "lucide-react";

const ThreeDCADModels = () => {
  const features = [
    "Parametric 3D modeling",
    "Photorealistic rendering",
    "Assembly simulations",
    "Material properties",
    "Animation capabilities",
    "Multi-format export"
  ];

  const applications = [
    "Product visualization",
    "Prototyping",
    "Manufacturing analysis",
    "Marketing presentations",
    "Design validation",
    "Assembly instructions"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <Box className="h-8 w-8 text-purple-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            3D CAD Models
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
            Advanced 3D modeling services for visualization, prototyping, and design validation using industry-standard software.
          </p>
          <Badge className="bg-white text-purple-600 hover:bg-purple-50">
            Advanced Modeling
          </Badge>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Professional 3D CAD Modeling
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Our 3D CAD modeling services bring your concepts to life with detailed, accurate, and visually stunning 
                three-dimensional models. We create parametric models that can be easily modified and optimized.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                From simple components to complex assemblies, our 3D models serve multiple purposes including 
                visualization, prototyping, manufacturing, and marketing presentations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Features</h3>
                <div className="space-y-2">
                  {features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-600" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Applications</h3>
                <div className="space-y-2">
                  {applications.slice(0, 3).map((app, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-blue-600" />
                      <span className="text-slate-700 text-sm">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Our 3D Modeling Capabilities
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive 3D modeling services using the latest software and techniques.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Parametric Modeling",
                description: "Create models with parameters that can be easily modified and updated",
                icon: Box
              },
              {
                title: "Assembly Design",
                description: "Complex multi-part assemblies with motion studies and interference detection",
                icon: Users
              },
              {
                title: "Rendering & Animation",
                description: "Photorealistic renders and animations for presentations",
                icon: Award
              }
            ].map((capability, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <capability.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{capability.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Software & Tools */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Software & Tools We Use
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Industry-leading software for professional 3D modeling and design.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "SolidWorks", "AUTODESK Inventor", "AutoCAD 3D", "Fusion 360", "KeyShot", "ANSYS"
            ].map((software, index) => (
              <Badge key={index} variant="outline" className="text-lg py-2 px-4">
                {software}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Transform Your Ideas into 3D Reality
          </h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Get professional 3D CAD models that bring your concepts to life with stunning detail and accuracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Phone:</span>
              <span>+91-9964442892</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Email:</span>
              <span>sevyayantra@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThreeDCADModels;
