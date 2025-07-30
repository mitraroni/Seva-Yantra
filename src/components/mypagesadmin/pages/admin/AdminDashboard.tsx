import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { 
  LogOut, 
  Settings, 
  Image, 
  FileText, 
  Phone, 
  Palette, 
  Layout,
  Camera,
  Mail,
  Building
} from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out",
    });
    navigate("/admin/login");
  };

  const dashboardItems = [
    {
      title: "Content Management",
      description: "Manage website content and information",
      icon: FileText,
      route: "/admin/content",
      color: "bg-blue-500"
    },
    {
      title: "Photo Management",
      description: "Upload and manage website images",
      icon: Camera,
      route: "/admin/photos",
      color: "bg-green-500"
    },
    {
      title: "Banner Management",
      description: "Update website banners and hero sections",
      icon: Layout,
      route: "/admin/banners",
      color: "bg-purple-500"
    },
    {
      title: "Contact Information",
      description: "Update phone numbers, emails, and addresses",
      icon: Phone,
      route: "/admin/contact",
      color: "bg-orange-500"
    },
    {
      title: "Company Settings",
      description: "Update logo, company details, and branding",
      icon: Building,
      route: "/admin/company",
      color: "bg-red-500"
    },
    {
      title: "Theme & Colors",
      description: "Customize website colors and styling",
      icon: Palette,
      route: "/admin/theme",
      color: "bg-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Settings className="h-8 w-8 text-primary mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
            <Button onClick={handleLogout} variant="outline" className="flex items-center gap-2">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Admin Panel</h2>
          <p className="text-gray-600">Manage your website content, settings, and appearance</p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardItems.map((item) => (
            <Card 
              key={item.title}
              className="hover:shadow-lg transition-shadow cursor-pointer group"
              onClick={() => navigate(item.route)}
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Manage
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Image className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Images</p>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <FileText className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Content Pages</p>
                  <p className="text-2xl font-bold text-gray-900">18</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Layout className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Active Banners</p>
                  <p className="text-2xl font-bold text-gray-900">5</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Settings className="h-8 w-8 text-orange-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Last Updated</p>
                  <p className="text-2xl font-bold text-gray-900">Today</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;