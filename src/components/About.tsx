
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, CheckCircle, Target, Eye, Heart } from "lucide-react";

export const About = () => {
  const stats = [
    { icon: Award, value: "20+", label: "Years Experience" },
    { icon: Users, value: "200+", label: "Projects Completed" },
    { icon: Clock, value: "24/7", label: "Support Available" },
    { icon: CheckCircle, value: "100%", label: "Client Satisfaction" },
  ];

  const services = [
    "Pre-Engineered Buildings (PEB)",
    "Steel Structure Design",
    "Material Handling Systems",
    "Warehouse & Factory Design",
    "Sports Facility Design",
    "CAD Drafting & 3D Modeling",
    "Structural Analysis",
    "Project Management"
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            About Sevya Yantra Engineering Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Your trusted partner for comprehensive engineering solutions across India
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6">
                Leading Engineering Excellence Since 2008
              </h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  <strong>Kumar Naik S</strong>, the visionary founder of Sevya Yantra Engineering Solutions, 
                  brings over 20 years of unparalleled expertise in industrial engineering and design. 
                  Based in Bangalore, we have grown from a small consultancy to one of India's most 
                  trusted engineering solution providers.
                </p>
                <p>
                  Our journey began with a simple mission: to bridge the gap between innovative engineering 
                  concepts and practical industrial applications. Today, we serve clients across various 
                  sectors including manufacturing, warehousing, sports infrastructure, and commercial construction.
                </p>
                <p>
                  We specialize in Pre-Engineered Buildings (PEB), advanced CAD services, structural design, 
                  and custom machinery solutions. Our team combines traditional engineering principles with 
                  cutting-edge technology to deliver solutions that are not just efficient, but also 
                  cost-effective and sustainable.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-slate-800 mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <Target className="h-8 w-8 text-blue-600" />
              <h3 className="text-2xl font-semibold text-slate-800">Our Mission</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              To provide innovative, sustainable, and cost-effective engineering solutions that 
              enhance operational efficiency and deliver exceptional value to our clients through 
              cutting-edge design, advanced technology, and uncompromising quality standards.
            </p>
          </Card>

          <Card className="p-8 border-l-4 border-l-red-600 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <Eye className="h-8 w-8 text-red-600" />
              <h3 className="text-2xl font-semibold text-slate-800">Our Vision</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              To be India's premier engineering solutions provider, recognized globally for our 
              commitment to innovation, quality, and customer satisfaction. We aim to set new 
              industry standards in industrial engineering and infrastructure development.
            </p>
          </Card>

          <Card className="p-8 border-l-4 border-l-green-600 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <Heart className="h-8 w-8 text-green-600" />
              <h3 className="text-2xl font-semibold text-slate-800">Our Values</h3>
            </div>
            <ul className="text-slate-600 space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Integrity & Transparency
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Innovation & Excellence
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Customer-Centric Approach
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Sustainable Solutions
              </li>
            </ul>
          </Card>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Our Core Services</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We offer comprehensive engineering solutions across multiple disciplines
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-50 p-4 rounded-lg text-center hover:bg-blue-50 transition-colors">
                <div className="text-sm font-medium text-slate-700">{service}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-800 to-blue-900 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Why Choose Sevya Yantra?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="space-y-2">
              <CheckCircle className="h-8 w-8 text-green-400 mx-auto" />
              <h4 className="font-semibold">Expert Team</h4>
              <p className="text-sm text-slate-300">Highly qualified engineers with extensive industry experience</p>
            </div>
            <div className="space-y-2">
              <CheckCircle className="h-8 w-8 text-green-400 mx-auto" />
              <h4 className="font-semibold">Latest Technology</h4>
              <p className="text-sm text-slate-300">State-of-the-art CAD software and advanced engineering tools</p>
            </div>
            <div className="space-y-2">
              <CheckCircle className="h-8 w-8 text-green-400 mx-auto" />
              <h4 className="font-semibold">Timely Delivery</h4>
              <p className="text-sm text-slate-300">Committed to meeting project deadlines without compromising quality</p>
            </div>
            <div className="space-y-2">
              <CheckCircle className="h-8 w-8 text-green-400 mx-auto" />
              <h4 className="font-semibold">Cost Effective</h4>
              <p className="text-sm text-slate-300">Competitive pricing with maximum value for your investment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
