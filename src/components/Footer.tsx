
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "CAD Services", href: "#cad-services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "PEB Steel Buildings",
    "CAD Services",
    "Material Handling",
    "Warehouse Design",
    "Sports Clubs",
    "Special Machines"
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  SEVYA <span className="text-red-400">yantra</span>
                </h3>
                <p className="text-sm text-slate-400">ENGINEERING SOLUTIONS</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Leading engineering solutions provider specializing in PEB steel buildings, 
              CAD services, material handling systems, and comprehensive industrial solutions. 
              Serving clients across India with precision and excellence.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <a href="tel:+91-9480922892" className="text-slate-300 hover:text-white transition-colors">
                  +91-9480922892
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:Info@sevya.group" className="text-slate-300 hover:text-white transition-colors">
                  Info@sevya.group
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                <div className="text-slate-300 text-sm">
                  <p>Workz Floor, C Block, 103 C, Motati Meadows 1st Floor</p>
                  <p>Bennignahally, Old Madras Road, Near Tin Factory</p>
                  <p>Bangalore-16</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-slate-300 hover:text-white transition-colors flex items-center gap-2"
                  >
                    {link.label}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-slate-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} Sevya Yantra Engineering Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <span>Kumar Naik S -Director</span>
              <span>•</span>
              <span>Engineering Solutions Expert</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
