import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Save, Edit, Plus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContentManagement = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("hero");

  const [heroContent, setHeroContent] = useState({
    title: "SEVYA yantra ENGINEERING SOLUTIONS",
    subtitle: "Expert CAD Design & Engineering Services",
    description: "Transforming ideas into precision engineered solutions with cutting-edge CAD technology and engineering expertise."
  });

  const [aboutContent, setAboutContent] = useState({
    title: "About Sevya Yantra",
    description: "We are a leading engineering solutions company specializing in CAD design, bulk material handling, and automation systems."
  });

  const [services, setServices] = useState([
    { id: 1, name: "Bulk Material Handling", description: "Comprehensive material handling solutions" },
    { id: 2, name: "Automation", description: "Precision automation systems" },
    { id: 3, name: "PEB Steel Building", description: "Pre-engineered building solutions" }
  ]);

  const handleSaveContent = (contentType: string) => {
    // TODO: Replace with actual API call
    toast({
      title: "Content Updated",
      description: `${contentType} content has been successfully updated`,
    });
  };

  const addNewService = () => {
    const newService = {
      id: Date.now(),
      name: "New Service",
      description: "Service description"
    };
    setServices([...services, newService]);
  };

  const removeService = (id: number) => {
    setServices(services.filter(service => service.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/admin/dashboard")}
              className="flex items-center gap-2 mr-4"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
            <h1 className="text-2xl font-bold text-gray-900">Content Management</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {[
                { id: "hero", label: "Hero Section" },
                { id: "about", label: "About Section" },
                { id: "services", label: "Services" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Hero Section Content */}
        {activeTab === "hero" && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Edit className="h-5 w-5" />
                Hero Section Content
              </CardTitle>
              <CardDescription>
                Update the main hero section displayed on the homepage
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="hero-title">Main Title</Label>
                <Input
                  id="hero-title"
                  value={heroContent.title}
                  onChange={(e) => setHeroContent({ ...heroContent, title: e.target.value })}
                  placeholder="Enter main title"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="hero-subtitle">Subtitle</Label>
                <Input
                  id="hero-subtitle"
                  value={heroContent.subtitle}
                  onChange={(e) => setHeroContent({ ...heroContent, subtitle: e.target.value })}
                  placeholder="Enter subtitle"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="hero-description">Description</Label>
                <Textarea
                  id="hero-description"
                  value={heroContent.description}
                  onChange={(e) => setHeroContent({ ...heroContent, description: e.target.value })}
                  placeholder="Enter description"
                  rows={4}
                />
              </div>
              
              <Button onClick={() => handleSaveContent("Hero")} className="flex items-center gap-2">
                <Save className="h-4 w-4" />
                Save Hero Content
              </Button>
            </CardContent>
          </Card>
        )}

        {/* About Section Content */}
        {activeTab === "about" && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Edit className="h-5 w-5" />
                About Section Content
              </CardTitle>
              <CardDescription>
                Update the about section content
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="about-title">About Title</Label>
                <Input
                  id="about-title"
                  value={aboutContent.title}
                  onChange={(e) => setAboutContent({ ...aboutContent, title: e.target.value })}
                  placeholder="Enter about title"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="about-description">About Description</Label>
                <Textarea
                  id="about-description"
                  value={aboutContent.description}
                  onChange={(e) => setAboutContent({ ...aboutContent, description: e.target.value })}
                  placeholder="Enter about description"
                  rows={6}
                />
              </div>
              
              <Button onClick={() => handleSaveContent("About")} className="flex items-center gap-2">
                <Save className="h-4 w-4" />
                Save About Content
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Services Content */}
        {activeTab === "services" && (
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Edit className="h-5 w-5" />
                    Services Management
                  </CardTitle>
                  <CardDescription>
                    Add, edit, or remove services
                  </CardDescription>
                </div>
                <Button onClick={addNewService} className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Service
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={service.id} className="flex items-center gap-4 p-4 border rounded-lg">
                    <div className="flex-1 space-y-2">
                      <Input
                        value={service.name}
                        onChange={(e) => {
                          const updated = [...services];
                          updated[index].name = e.target.value;
                          setServices(updated);
                        }}
                        placeholder="Service name"
                      />
                      <Textarea
                        value={service.description}
                        onChange={(e) => {
                          const updated = [...services];
                          updated[index].description = e.target.value;
                          setServices(updated);
                        }}
                        placeholder="Service description"
                        rows={2}
                      />
                    </div>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => removeService(service.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
              
              <Button onClick={() => handleSaveContent("Services")} className="flex items-center gap-2 mt-6">
                <Save className="h-4 w-4" />
                Save All Services
              </Button>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default ContentManagement;