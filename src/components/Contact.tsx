
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Building, User, Briefcase, Globe } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: User,
      title: "Founder & CEO",
      details: ["Kumar Naik S", "Engineering Solutions Expert"],
      action: null
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91-9480922892"],
      action: "tel:+91-9480922892"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["Info@sevya.group"],
      action: "mailto:Info@sevya.group"
    },
    {
      icon: MapPin,
      title: "Address",
      details: [
        "Workz Floor, C Block, 103 C",
        "Motati Meadows 1st Floor",
        "Bennignahally, Old Madras Road",
        "Near Tin Factory, Bangalore-16"
      ],
      action: null
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 6:00 PM",
        "Sunday: Closed"
      ],
      action: null
    },
    {
      icon: Building,
      title: "Services Area",
      details: [
        "Bangalore (Headquarters)",
        "Karnataka State",
        "Pan India Projects",
        "Remote Consultations Available"
      ],
      action: null
    }
  ];

  const serviceAreas = [
    "PEB Steel Buildings",
    "CAD Services & 3D Modeling",
    "Warehouse Design",
    "Sports Facility Design",
    "Structural Engineering",
    "Material Handling Systems"
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Ready to discuss your engineering project? Contact Kumar Naik S and our expert team 
            today for a professional consultation. We're here to transform your vision into reality.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {serviceAreas.map((service, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {service}
              </span>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                Contact Information
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Sevya Yantra Engineering Solutions is your trusted partner for all engineering needs. 
                Led by Kumar Naik S, we provide comprehensive solutions from our Bangalore headquarters 
                to clients across India.
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800 mb-2">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-slate-600 text-sm leading-relaxed mb-1">
                          {info.action && idx === 0 ? (
                            <a 
                              href={info.action} 
                              className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800 flex items-center gap-2">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                  Request a Quote
                </CardTitle>
                <p className="text-slate-600">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed proposal.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      First Name *
                    </label>
                    <Input placeholder="Your first name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Last Name *
                    </label>
                    <Input placeholder="Your last name" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="your.email@example.com" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <Input type="tel" placeholder="+91 Your phone number" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Company/Organization
                  </label>
                  <Input placeholder="Your company name (optional)" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Service Required *
                  </label>
                  <Input placeholder="e.g., PEB Buildings, CAD Services, Warehouse Design" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Project Details *
                  </label>
                  <Textarea 
                    placeholder="Please describe your project requirements, timeline, budget range, and any specific needs. The more details you provide, the better we can assist you."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
                  Send Quote Request
                </Button>

                <div className="text-center space-y-2">
                  <p className="text-sm text-slate-500">
                    We'll respond to your inquiry within 24 hours during business days.
                  </p>
                  <p className="text-xs text-slate-400">
                    * Required fields. Your information is kept confidential and secure.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Globe className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Pan-India Services</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      While our headquarters is in Bangalore, we provide engineering solutions 
                      across India. Remote consultations and project management ensure seamless 
                      service delivery regardless of your location.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-800 to-blue-900 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Join over 200+ satisfied clients who trust Sevya Yantra Engineering Solutions 
            for their engineering needs. Let's discuss how we can help bring your project to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="secondary" className="bg-white text-slate-800 hover:bg-slate-100">
              <Phone className="h-4 w-4 mr-2" />
              Call Now: +91-9480922892
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-800">
              <Mail className="h-4 w-4 mr-2" />
              Email Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
