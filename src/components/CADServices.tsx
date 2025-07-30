
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  PenTool, 
  Box, 
  RotateCcw, 
  Search, 
  Palette, 
  Building, 
  Home, 
  Gamepad2, 
  Ruler, 
  Settings 
} from "lucide-react";

export const CADServices = () => {
  const cadServices = [
    {
      icon: PenTool,
      title: "2D Details Drawings",
      description: "Precise technical drawings with detailed dimensions, annotations, and specifications for manufacturing and construction.",
      category: "Design"
    },
    {
      icon: Box,
      title: "3D CAD Models",
      description: "Advanced 3D modeling for visualization, prototyping, and design validation using industry-standard software.",
      category: "Modeling"
    },
    {
      icon: RotateCcw,
      title: "2D to 3D Conversion",
      description: "Transform existing 2D drawings into comprehensive 3D models for better visualization and analysis.",
      category: "Conversion"
    },
    {
      icon: Search,
      title: "Reverse Engineering",
      description: "Create detailed CAD models from existing physical parts and components for redesign or manufacturing.",
      category: "Analysis"
    },
    {
      icon: Palette,
      title: "Product Design",
      description: "Complete product design from concept to manufacturing-ready drawings with design optimization.",
      category: "Design"
    },
    {
      icon: Building,
      title: "PEB Steel Buildings",
      description: "Structural design and detailing for pre-engineered steel buildings with all necessary drawings.",
      category: "Structural"
    },
    {
      icon: Home,
      title: "Warehouse Design",
      description: "Complete warehouse layout design including storage systems, material flow, and structural elements.",
      category: "Structural"
    },
    {
      icon: Gamepad2,
      title: "Sports Clubs Design",
      description: "Architectural and structural design for sports facilities, gymnasiums, and recreational buildings.",
      category: "Architectural"
    },
    {
      icon: Ruler,
      title: "Structural Drawings",
      description: "Detailed structural drawings including foundation plans, framing details, and connection drawings.",
      category: "Structural"
    },
    {
      icon: Settings,
      title: "Machine Drawings",
      description: "Precision machine drawings for manufacturing including assembly drawings and part details.",
      category: "Mechanical"
    }
  ];

  const software = [
    "AutoCAD", "AUTODESK Inventor", "SolidWorks", "Tekla", "STAAD Pro"
  ];

  const categories = ["All", "Design", "Modeling", "Structural", "Mechanical", "Architectural"];

  return (
    <section id="cad-services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            <span className="text-red-600">CAD</span> Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Professional CAD services using industry-leading software to deliver precise, 
            detailed drawings and 3D models for all your engineering needs.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="text-sm font-medium text-slate-700 mr-2">Software we use:</span>
            {software.map((soft, index) => (
              <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                {soft}
              </Badge>
            ))}
          </div>
        </div>

        <Tabs defaultValue="All" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="text-sm">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cadServices
                  .filter(service => category === "All" || service.category === category)
                  .map((service, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:border-blue-300">
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors">
                            <service.icon className="h-5 w-5 text-red-600 group-hover:text-white transition-colors" />
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {service.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg font-semibold text-slate-800">
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
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 bg-gradient-to-r from-slate-800 to-blue-900 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Custom CAD Solutions</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            We use software as per client requirement and deliver projects with precision and quality. 
            Our team is experienced in multiple CAD platforms to meet your specific needs.
          </p>
          <div className="text-sm text-slate-400">
            <p>✓ Client-specific software preferences  ✓ Quality assurance  ✓ Timely delivery  ✓ Revision support</p>
          </div>
        </div>
      </div>
    </section>
  );
};
