import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Upload, Trash2, Image, Edit, Save } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PhotoManagement = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [photos, setPhotos] = useState([
    {
      id: 1,
      name: "Hero Banner",
      url: "/lovable-uploads/bac03689-88ee-4bc9-ba26-c3a638c6c7fd.png",
      alt: "Company Logo",
      category: "branding"
    },
    {
      id: 2,
      name: "About Section Image",
      url: "/placeholder.svg",
      alt: "About us image",
      category: "content"
    },
    {
      id: 3,
      name: "Service Banner 1",
      url: "/placeholder.svg",
      alt: "Service banner",
      category: "services"
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [editingPhoto, setEditingPhoto] = useState<number | null>(null);

  const categories = [
    { value: "all", label: "All Photos" },
    { value: "branding", label: "Branding" },
    { value: "content", label: "Content" },
    { value: "services", label: "Services" },
    { value: "banners", label: "Banners" }
  ];

  const filteredPhotos = selectedCategory === "all" 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // TODO: Replace with actual upload to your backend
      const newPhoto = {
        id: Date.now(),
        name: file.name,
        url: URL.createObjectURL(file),
        alt: file.name,
        category: "content"
      };
      setPhotos([...photos, newPhoto]);
      toast({
        title: "Photo Uploaded",
        description: "Photo has been successfully uploaded",
      });
    }
  };

  const deletePhoto = (id: number) => {
    setPhotos(photos.filter(photo => photo.id !== id));
    toast({
      title: "Photo Deleted",
      description: "Photo has been successfully deleted",
    });
  };

  const updatePhoto = (id: number, updates: Partial<typeof photos[0]>) => {
    setPhotos(photos.map(photo => 
      photo.id === id ? { ...photo, ...updates } : photo
    ));
    setEditingPhoto(null);
    toast({
      title: "Photo Updated",
      description: "Photo details have been saved",
    });
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
            <h1 className="text-2xl font-bold text-gray-900">Photo Management</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Upload Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Upload New Photo
            </CardTitle>
            <CardDescription>
              Add new images to your website
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Input
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="flex-1"
              />
              <Button variant="outline">
                Browse Files
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Category Filter */}
        <div className="mb-6">
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.value)}
                size="sm"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <Card key={photo.id} className="overflow-hidden">
              <div className="aspect-video relative bg-gray-100">
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/placeholder.svg";
                  }}
                />
              </div>
              <CardContent className="p-4">
                {editingPhoto === photo.id ? (
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor={`name-${photo.id}`}>Name</Label>
                      <Input
                        id={`name-${photo.id}`}
                        defaultValue={photo.name}
                        onBlur={(e) => updatePhoto(photo.id, { name: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor={`alt-${photo.id}`}>Alt Text</Label>
                      <Input
                        id={`alt-${photo.id}`}
                        defaultValue={photo.alt}
                        onBlur={(e) => updatePhoto(photo.id, { alt: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor={`category-${photo.id}`}>Category</Label>
                      <select
                        id={`category-${photo.id}`}
                        defaultValue={photo.category}
                        onChange={(e) => updatePhoto(photo.id, { category: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        {categories.slice(1).map((cat) => (
                          <option key={cat.value} value={cat.value}>
                            {cat.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => setEditingPhoto(null)}
                      className="w-full"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">{photo.name}</h3>
                    <p className="text-sm text-gray-600">{photo.alt}</p>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setEditingPhoto(photo.id)}
                        className="flex-1"
                      >
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => deletePhoto(photo.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPhotos.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Image className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">No photos found</h3>
              <p className="text-gray-500">Upload some photos to get started</p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default PhotoManagement;