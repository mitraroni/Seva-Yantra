import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Save, Building, Upload, Image } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CompanySettings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [companyInfo, setCompanyInfo] = useState({
    name: "SEVYA yantra",
    tagline: "ENGINEERING SOLUTIONS",
    description: "Expert CAD Design & Engineering Services specializing in bulk material handling, automation, and precision engineering solutions.",
    logo: "/lovable-uploads/bac03689-88ee-4bc9-ba26-c3a638c6c7fd.png",
    foundedYear: "2020",
    founder: "Kumar Naik S",
    founderTitle: "Engineering Solutions Expert",
    vision: "To be the leading provider of innovative engineering solutions that transform industries through cutting-edge technology and expertise.",
    mission: "Delivering precision-engineered solutions that exceed client expectations while maintaining the highest standards of quality and innovation.",
    values: [
      "Innovation and Excellence",
      "Client-Centric Approach", 
      "Quality and Precision",
      "Continuous Improvement",
      "Integrity and Trust"
    ],
    certifications: [
      "ISO 9001:2015 Certified",
      "Engineering Design Excellence",
      "CAD Professional Certification"
    ],
    companySize: "10-50 employees",
    industry: "Engineering Services",
    website: "www.sevya.group"
  });

  const updateCompanyInfo = (field: string, value: any) => {
    setCompanyInfo({ ...companyInfo, [field]: value });
  };

  const updateArrayItem = (arrayName: string, index: number, value: string) => {
    const array = [...(companyInfo[arrayName as keyof typeof companyInfo] as string[])];
    array[index] = value;
    setCompanyInfo({ ...companyInfo, [arrayName]: array });
  };

  const addArrayItem = (arrayName: string) => {
    const array = [...(companyInfo[arrayName as keyof typeof companyInfo] as string[])];
    array.push("");
    setCompanyInfo({ ...companyInfo, [arrayName]: array });
  };

  const removeArrayItem = (arrayName: string, index: number) => {
    const array = (companyInfo[arrayName as keyof typeof companyInfo] as string[]).filter((_, i) => i !== index);
    setCompanyInfo({ ...companyInfo, [arrayName]: array });
  };

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const logoUrl = URL.createObjectURL(file);
      setCompanyInfo({ ...companyInfo, logo: logoUrl });
      toast({
        title: "Logo Uploaded",
        description: "Company logo has been updated successfully",
      });
    }
  };

  const saveCompanySettings = () => {
    // TODO: Replace with actual API call
    toast({
      title: "Company Settings Saved",
      description: "All company information has been updated successfully",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                onClick={() => navigate("/admin/dashboard")}
                className="flex items-center gap-2 mr-4"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Dashboard
              </Button>
              <h1 className="text-2xl font-bold text-gray-900">Company Settings</h1>
            </div>
            <Button onClick={saveCompanySettings} className="flex items-center gap-2">
              <Save className="h-4 w-4" />
              Save All Changes
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Company Logo and Basic Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                Company Identity
              </CardTitle>
              <CardDescription>Update your company logo, name, and basic information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src={companyInfo.logo}
                    alt="Company Logo"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/placeholder.svg";
                    }}
                  />
                </div>
                <div className="flex-1">
                  <Label htmlFor="logo">Company Logo</Label>
                  <div className="flex items-center gap-2 mt-2">
                    <Input
                      id="logo"
                      type="file"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="flex-1"
                    />
                    <Button variant="outline" size="icon">
                      <Upload className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Upload a new logo (recommended: 200x200px)</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input
                    id="company-name"
                    value={companyInfo.name}
                    onChange={(e) => updateCompanyInfo("name", e.target.value)}
                    placeholder="Enter company name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tagline">Tagline</Label>
                  <Input
                    id="tagline"
                    value={companyInfo.tagline}
                    onChange={(e) => updateCompanyInfo("tagline", e.target.value)}
                    placeholder="Enter company tagline"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Company Description</Label>
                <Textarea
                  id="description"
                  value={companyInfo.description}
                  onChange={(e) => updateCompanyInfo("description", e.target.value)}
                  placeholder="Enter company description"
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          {/* Founder and Leadership */}
          <Card>
            <CardHeader>
              <CardTitle>Leadership Information</CardTitle>
              <CardDescription>Information about company founder and leadership</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="founder">Founder Name</Label>
                  <Input
                    id="founder"
                    value={companyInfo.founder}
                    onChange={(e) => updateCompanyInfo("founder", e.target.value)}
                    placeholder="Enter founder name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="founder-title">Founder Title</Label>
                  <Input
                    id="founder-title"
                    value={companyInfo.founderTitle}
                    onChange={(e) => updateCompanyInfo("founderTitle", e.target.value)}
                    placeholder="Enter founder title"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="founded-year">Founded Year</Label>
                  <Input
                    id="founded-year"
                    value={companyInfo.foundedYear}
                    onChange={(e) => updateCompanyInfo("foundedYear", e.target.value)}
                    placeholder="Enter founded year"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Vision and Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Vision Statement</CardTitle>
                <CardDescription>Your company's vision for the future</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={companyInfo.vision}
                  onChange={(e) => updateCompanyInfo("vision", e.target.value)}
                  placeholder="Enter company vision"
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mission Statement</CardTitle>
                <CardDescription>Your company's core mission and purpose</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={companyInfo.mission}
                  onChange={(e) => updateCompanyInfo("mission", e.target.value)}
                  placeholder="Enter company mission"
                  rows={4}
                />
              </CardContent>
            </Card>
          </div>

          {/* Company Values */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Company Values</CardTitle>
                  <CardDescription>Core values that drive your company</CardDescription>
                </div>
                <Button onClick={() => addArrayItem("values")} size="sm">
                  Add Value
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {companyInfo.values.map((value, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Input
                    value={value}
                    onChange={(e) => updateArrayItem("values", index, e.target.value)}
                    placeholder="Enter company value"
                    className="flex-1"
                  />
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeArrayItem("values", index)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Certifications & Achievements</CardTitle>
                  <CardDescription>Professional certifications and achievements</CardDescription>
                </div>
                <Button onClick={() => addArrayItem("certifications")} size="sm">
                  Add Certification
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {companyInfo.certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Input
                    value={cert}
                    onChange={(e) => updateArrayItem("certifications", index, e.target.value)}
                    placeholder="Enter certification"
                    className="flex-1"
                  />
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeArrayItem("certifications", index)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card>
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
              <CardDescription>Other company details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company-size">Company Size</Label>
                  <select
                    id="company-size"
                    value={companyInfo.companySize}
                    onChange={(e) => updateCompanyInfo("companySize", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="1-10 employees">1-10 employees</option>
                    <option value="10-50 employees">10-50 employees</option>
                    <option value="50-200 employees">50-200 employees</option>
                    <option value="200+ employees">200+ employees</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Input
                    id="industry"
                    value={companyInfo.industry}
                    onChange={(e) => updateCompanyInfo("industry", e.target.value)}
                    placeholder="Enter industry"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    value={companyInfo.website}
                    onChange={(e) => updateCompanyInfo("website", e.target.value)}
                    placeholder="Enter website URL"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default CompanySettings;