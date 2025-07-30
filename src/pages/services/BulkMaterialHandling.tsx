import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Package, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const BulkMaterialHandling = () => {
  const services = [
    {
      title: "Belt Conveyors",
      description: "Heavy-duty belt conveyor systems for efficient bulk material transport",
      href: "/services/bulk-material-handling/belt-conveyors"
    },
    {
      title: "Head Hoppers",
      description: "Specialized hopper designs for material discharge and feeding systems",
      href: "/services/bulk-material-handling/head-hoppers"
    },
    {
      title: "Chute",
      description: "Custom chute systems for controlled material flow and transfer",
      href: "/services/bulk-material-handling/chute"
    },
    {
      title: "Bunkers",
      description: "Industrial bunker storage solutions for bulk materials",
      href: "/services/bulk-material-handling/bunkers"
    },
    {
      title: "Junction House",
      description: "Junction house designs for material flow management systems",
      href: "/services/bulk-material-handling/junction-house"
    },
    {
      title: "Pipe GA & Detailing",
      description: "Comprehensive piping general arrangement and detailed drawings",
      href: "/services/bulk-material-handling/pipe-ga-detailing"
    },
    {
      title: "Duct GA & Detailing",
      description: "Complete duct system general arrangement and technical detailing",
      href: "/services/bulk-material-handling/duct-ga-detailing"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <Package className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Bulk Material Handling</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Comprehensive bulk material handling systems design and engineering solutions for efficient material transport across various industries.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Bulk Material Handling Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Explore our comprehensive range of bulk material handling solutions designed for optimal efficiency and reliability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={service.href}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Why Choose Our Material Handling Solutions?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Custom Design</h3>
              <p className="text-slate-600">Tailored solutions designed specifically for your operational requirements and site conditions.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Proven Expertise</h3>
              <p className="text-slate-600">Decades of experience in designing and implementing bulk material handling systems.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Complete Support</h3>
              <p className="text-slate-600">From initial concept to final implementation, we provide comprehensive engineering support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Material Handling Solution</h2>
          <p className="text-blue-100 mb-6">Contact our experts to discuss your bulk material handling requirements</p>
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

export default BulkMaterialHandling;