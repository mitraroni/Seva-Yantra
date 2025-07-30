import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Save, Plus, Trash2, Edit, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BannerManagement = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [banners, setBanners] = useState([
    {
      id: 1,
      name: "Hero Banner",
      title: "SEVYA yantra ENGINEERING SOLUTIONS",
      subtitle: "Expert CAD Design & Engineering Services",
      description: "Transforming ideas into precision engineered solutions",
      backgroundImage: "/placeholder.svg",
      isActive: true,
      position: "home"
    },
    {
      id: 2,
      name: "Services Banner",
      title: "Our Engineering Services",
      subtitle: "Comprehensive Solutions",
      description: "From concept to completion",
      backgroundImage: "/placeholder.svg",
      isActive: true,
      position: "services"
    },
    {
      id: 3,
      name: "About Banner",
      title: "About Sevya Yantra",
      subtitle: "Engineering Excellence",
      description: "Delivering quality solutions since inception",
      backgroundImage: "/placeholder.svg",
      isActive: false,
      position: "about"
    }
  ]);

  const [editingBanner, setEditingBanner] = useState<number | null>(null);
  const [newBanner, setNewBanner] = useState({
    name: "",
    title: "",
    subtitle: "",
    description: "",
    backgroundImage: "",
    isActive: true,
    position: "home"
  });

  const positions = [
    { value: "home", label: "Home Page" },
    { value: "services", label: "Services Page" },
    { value: "about", label: "About Page" },
    { value: "contact", label: "Contact Page" },
    { value: "blog", label: "Blog Page" }
  ];

  const addBanner = () => {
    if (!newBanner.name || !newBanner.title) {
      toast({
        title: "Error",
        description: "Please fill in banner name and title",
        variant: "destructive"
      });
      return;
    }

    const banner = {
      ...newBanner,
      id: Date.now()
    };
    setBanners([...banners, banner]);
    setNewBanner({
      name: "",
      title: "",
      subtitle: "",
      description: "",
      backgroundImage: "",
      isActive: true,
      position: "home"
    });
    toast({
      title: "Banner Added",
      description: "New banner has been created successfully",
    });
  };

  const updateBanner = (id: number, updates: Partial<typeof banners[0]>) => {
    setBanners(banners.map(banner => 
      banner.id === id ? { ...banner, ...updates } : banner
    ));
    setEditingBanner(null);
    toast({
      title: "Banner Updated",
      description: "Banner has been updated successfully",
    });
  };

  const deleteBanner = (id: number) => {
    setBanners(banners.filter(banner => banner.id !== id));
    toast({
      title: "Banner Deleted",
      description: "Banner has been removed successfully",
    });
  };

  const toggleBannerStatus = (id: number) => {
    setBanners(banners.map(banner => 
      banner.id === id ? { ...banner, isActive: !banner.isActive } : banner
    ));
  };

  const handleImageUpload = (bannerId: number | null, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      if (bannerId) {
        updateBanner(bannerId, { backgroundImage: imageUrl });
      } else {
        setNewBanner({ ...newBanner, backgroundImage: imageUrl });
      }
    }
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
            <h1 className="text-2xl font-bold text-gray-900">Banner Management</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Add New Banner */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Add New Banner
            </CardTitle>
            <CardDescription>
              Create a new banner for your website
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="new-name">Banner Name</Label>
                <Input
                  id="new-name"
                  value={newBanner.name}
                  onChange={(e) => setNewBanner({ ...newBanner, name: e.target.value })}
                  placeholder="Enter banner name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-position">Position</Label>
                <select
                  id="new-position"
                  value={newBanner.position}
                  onChange={(e) => setNewBanner({ ...newBanner, position: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  {positions.map((pos) => (
                    <option key={pos.value} value={pos.value}>
                      {pos.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="new-title">Title</Label>
              <Input
                id="new-title"
                value={newBanner.title}
                onChange={(e) => setNewBanner({ ...newBanner, title: e.target.value })}
                placeholder="Enter banner title"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="new-subtitle">Subtitle</Label>
              <Input
                id="new-subtitle"
                value={newBanner.subtitle}
                onChange={(e) => setNewBanner({ ...newBanner, subtitle: e.target.value })}
                placeholder="Enter banner subtitle"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="new-description">Description</Label>
              <Textarea
                id="new-description"
                value={newBanner.description}
                onChange={(e) => setNewBanner({ ...newBanner, description: e.target.value })}
                placeholder="Enter banner description"
                rows={3}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="new-image">Background Image</Label>
              <Input
                id="new-image"
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(null, e)}
              />
            </div>
            
            <Button onClick={addBanner} className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Banner
            </Button>
          </CardContent>
        </Card>

        {/* Existing Banners */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Existing Banners</h2>
          
          {banners.map((banner) => (
            <Card key={banner.id} className={`${!banner.isActive ? 'opacity-60' : ''}`}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      {banner.name}
                      <span className={`px-2 py-1 rounded text-xs ${
                        banner.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {banner.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </CardTitle>
                    <CardDescription>
                      {positions.find(p => p.value === banner.position)?.label}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => toggleBannerStatus(banner.id)}
                    >
                      {banner.isActive ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setEditingBanner(editingBanner === banner.id ? null : banner.id)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => deleteBanner(banner.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                {editingBanner === banner.id ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Banner Name</Label>
                        <Input
                          defaultValue={banner.name}
                          onBlur={(e) => updateBanner(banner.id, { name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Position</Label>
                        <select
                          defaultValue={banner.position}
                          onChange={(e) => updateBanner(banner.id, { position: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        >
                          {positions.map((pos) => (
                            <option key={pos.value} value={pos.value}>
                              {pos.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Title</Label>
                      <Input
                        defaultValue={banner.title}
                        onBlur={(e) => updateBanner(banner.id, { title: e.target.value })}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Subtitle</Label>
                      <Input
                        defaultValue={banner.subtitle}
                        onBlur={(e) => updateBanner(banner.id, { subtitle: e.target.value })}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Description</Label>
                      <Textarea
                        defaultValue={banner.description}
                        onBlur={(e) => updateBanner(banner.id, { description: e.target.value })}
                        rows={3}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Background Image</Label>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(banner.id, e)}
                      />
                    </div>
                    
                    <Button onClick={() => setEditingBanner(null)} className="flex items-center gap-2">
                      <Save className="h-4 w-4" />
                      Save Changes
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-lg">{banner.title}</h4>
                        <p className="text-gray-600">{banner.subtitle}</p>
                        <p className="text-sm text-gray-500 mt-2">{banner.description}</p>
                      </div>
                    </div>
                    
                    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={banner.backgroundImage}
                        alt={banner.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/placeholder.svg";
                        }}
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BannerManagement;
