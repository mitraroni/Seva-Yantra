
import { useState } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const serviceItems = [
    { label: "Bulk Material Handling", href: "/services/bulk-material-handling" },
    { label: "Automation", href: "/services/unit-handling" },
    { label: "PEB Steel Building", href: "/services/peb-steel-building" },
    { label: "Reverse Engineering And Conversion Drawings", href: "/services/reverse-engineering-conversion-drawings" },
    // { label: "Automation", href: "/services/automation" }, // commented as per request
    { label: "Warehouse and Badminton Court", href: "/services/warehouse-badminton-court" },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-slate-800 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span>+91-9480922892</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <span>Info@sevya.group</span>
            </div>
          </div>
          <div className="hidden md:block text-sm">
            Kumar Naik S - Engineering Solutions Expert
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/bac03689-88ee-4bc9-ba26-c3a638c6c7fd.png" 
              alt="Sevya Yantra Engineering Solutions Logo"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-slate-800">
                SEVYA <span className="text-red-600">yantra</span>
              </h1>
              <p className="text-sm text-slate-600">ENGINEERING SOLUTIONS</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-slate-700 hover:text-blue-600 font-medium transition-colors">
                Services
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border shadow-lg">
                {serviceItems.map((service) => (
                  <DropdownMenuItem key={service.label} asChild>
                    <Link
                      to={service.href}
                      className="w-full px-3 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      {service.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/cad-services"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              CAD Services
            </Link>
            <Button size="sm" className="ml-2" onClick={() => navigate('/admin/login')}>Admin</Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-slate-700 hover:text-blue-600 font-medium py-2 px-4 rounded hover:bg-slate-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Services Menu */}
              <div className="border-t pt-2">
                <p className="text-slate-800 font-semibold px-4 py-2">Services</p>
                {serviceItems.map((service) => (
                  <Link
                    key={service.label}
                    to={service.href}
                    className="text-slate-700 hover:text-blue-600 font-medium py-2 px-6 rounded hover:bg-slate-50 transition-colors block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
              
              <Link
                to="/cad-services"
                className="text-slate-700 hover:text-blue-600 font-medium py-2 px-4 rounded hover:bg-slate-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                CAD Services
              </Link>
              <Button size="sm" className="ml-4 w-full" onClick={() => { setIsMenuOpen(false); navigate('/admin/login'); }}>Admin</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
