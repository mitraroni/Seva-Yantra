
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Truck, Gamepad2, Package, Settings, Wrench } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Building,
      title: "PEB Steel Buildings",
      description: "Pre-engineered steel structures for warehouses, factories, and commercial buildings with optimal design and cost efficiency.",
    },
    {
      icon: Package,
      title: "Warehouse Solutions",
      description: "Complete warehouse design and construction services including storage systems and material handling integration.",
    },
    {
      icon: Gamepad2,
      title: "Sports Clubs",
      description: "Design and construction of sports facilities, gymnasiums, and recreational buildings with modern amenities.",
    },
    {
      icon: Truck,
      title: "Bulk Material Handling",
      description: "Specialized systems for handling bulk materials including conveyors, feeders, and storage solutions.",
    },
    {
      icon: Settings,
      title: "Material Handling Equipment",
      description: "Belt conveyors, roller conveyors, overhead conveyors, turn tables, and chain conveyors for industrial applications.",
    },
    {
      icon: Wrench,
      title: "Special Purpose Machines",
      description: "Custom-designed jigs, fixtures, and special purpose machines tailored to your specific industrial requirements.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Our Engineering Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We provide comprehensive engineering solutions for industrial, commercial, 
            and infrastructure projects with expertise in design, manufacturing, and installation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <service.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl font-semibold text-slate-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
