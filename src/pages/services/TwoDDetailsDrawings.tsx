
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PenTool, CheckCircle, Clock, Users, Award } from "lucide-react";

const TwoDDetailsDrawings = () => {
  const features = [
    "Precise dimensional drawings",
    "Manufacturing specifications",
    "Assembly drawings",
    "Detailed annotations",
    "Industry standards compliance",
    "Multiple format support"
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Accuracy",
      description: "Precision drawings with exact measurements"
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Quick turnaround times for urgent projects"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced CAD professionals"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Multiple quality checks before delivery"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <PenTool className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            2D Details Drawings
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Professional 2D technical drawings with precise dimensions, annotations, and specifications for manufacturing and construction projects.
          </p>
          <Badge className="bg-white text-blue-600 hover:bg-blue-50">
            CAD Service
          </Badge>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                What are 2D Details Drawings?
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                2D details drawings are technical drawings that provide comprehensive information about a part or assembly. 
                These drawings include all necessary dimensions, tolerances, materials, and manufacturing specifications 
                required for production.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Our team creates detailed 2D drawings that serve as the blueprint for manufacturing, ensuring every 
                component is produced to exact specifications and quality standards.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Key Features</h3>
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Why Choose Our 2D Drawing Services?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We deliver precise, professional 2D drawings that meet industry standards and exceed expectations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Our Drawing Process
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A streamlined process to ensure accurate and timely delivery of your 2D drawings.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Requirements", description: "Gather project specifications and requirements" },
              { step: "2", title: "Analysis", description: "Analyze existing drawings or physical components" },
              { step: "3", title: "Creation", description: "Create detailed 2D drawings with precision" },
              { step: "4", title: "Delivery", description: "Quality check and deliver final drawings" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{process.title}</h3>
                <p className="text-slate-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your 2D drawing requirements and get a customized quote for your project.
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

export default TwoDDetailsDrawings;
