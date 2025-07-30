import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Save, Phone, Mail, MapPin, Plus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContactManagement = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [contactInfo, setContactInfo] = useState({
    phones: ["+91-9480922892"],
    emails: ["Info@sevya.group"],
    address: {
      street: "123 Engineering Street",
      city: "Bangalore",
      state: "Karnataka",
      pincode: "560001",
      country: "India"
    },
    workingHours: {
      weekdays: "9:00 AM - 6:00 PM",
      saturday: "9:00 AM - 6:00 PM",
      sunday: "Closed"
    },
    socialMedia: {
      linkedin: "",
      facebook: "",
      twitter: "",
      instagram: ""
    }
  });

  const addPhone = () => {
    setContactInfo({
      ...contactInfo,
      phones: [...contactInfo.phones, ""]
    });
  };

  const removePhone = (index: number) => {
    const newPhones = contactInfo.phones.filter((_, i) => i !== index);
    setContactInfo({ ...contactInfo, phones: newPhones });
  };

  const updatePhone = (index: number, value: string) => {
    const newPhones = [...contactInfo.phones];
    newPhones[index] = value;
    setContactInfo({ ...contactInfo, phones: newPhones });
  };

  const addEmail = () => {
    setContactInfo({
      ...contactInfo,
      emails: [...contactInfo.emails, ""]
    });
  };

  const removeEmail = (index: number) => {
    const newEmails = contactInfo.emails.filter((_, i) => i !== index);
    setContactInfo({ ...contactInfo, emails: newEmails });
  };

  const updateEmail = (index: number, value: string) => {
    const newEmails = [...contactInfo.emails];
    newEmails[index] = value;
    setContactInfo({ ...contactInfo, emails: newEmails });
  };

  const updateAddress = (field: string, value: string) => {
    setContactInfo({
      ...contactInfo,
      address: { ...contactInfo.address, [field]: value }
    });
  };

  const updateWorkingHours = (day: string, value: string) => {
    setContactInfo({
      ...contactInfo,
      workingHours: { ...contactInfo.workingHours, [day]: value }
    });
  };

  const updateSocialMedia = (platform: string, value: string) => {
    setContactInfo({
      ...contactInfo,
      socialMedia: { ...contactInfo.socialMedia, [platform]: value }
    });
  };

  const saveContactInfo = () => {
    // TODO: Replace with actual API call
    toast({
      title: "Contact Information Updated",
      description: "All contact information has been saved successfully",
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
              <h1 className="text-2xl font-bold text-gray-900">Contact Information</h1>
            </div>
            <Button onClick={saveContactInfo} className="flex items-center gap-2">
              <Save className="h-4 w-4" />
              Save All Changes
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Phone Numbers */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Phone Numbers
                  </CardTitle>
                  <CardDescription>Manage contact phone numbers</CardDescription>
                </div>
                <Button onClick={addPhone} size="sm" className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Phone
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.phones.map((phone, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Input
                    value={phone}
                    onChange={(e) => updatePhone(index, e.target.value)}
                    placeholder="Enter phone number"
                    className="flex-1"
                  />
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => removePhone(index)}
                    disabled={contactInfo.phones.length === 1}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Email Addresses */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Email Addresses
                  </CardTitle>
                  <CardDescription>Manage contact email addresses</CardDescription>
                </div>
                <Button onClick={addEmail} size="sm" className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Email
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.emails.map((email, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Input
                    value={email}
                    onChange={(e) => updateEmail(index, e.target.value)}
                    placeholder="Enter email address"
                    type="email"
                    className="flex-1"
                  />
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => removeEmail(index)}
                    disabled={contactInfo.emails.length === 1}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Address */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Address Information
              </CardTitle>
              <CardDescription>Update company address details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="street">Street Address</Label>
                <Textarea
                  id="street"
                  value={contactInfo.address.street}
                  onChange={(e) => updateAddress("street", e.target.value)}
                  placeholder="Enter street address"
                  rows={2}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    value={contactInfo.address.city}
                    onChange={(e) => updateAddress("city", e.target.value)}
                    placeholder="Enter city"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    value={contactInfo.address.state}
                    onChange={(e) => updateAddress("state", e.target.value)}
                    placeholder="Enter state"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="pincode">Pincode</Label>
                  <Input
                    id="pincode"
                    value={contactInfo.address.pincode}
                    onChange={(e) => updateAddress("pincode", e.target.value)}
                    placeholder="Enter pincode"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input
                    id="country"
                    value={contactInfo.address.country}
                    onChange={(e) => updateAddress("country", e.target.value)}
                    placeholder="Enter country"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Working Hours */}
          <Card>
            <CardHeader>
              <CardTitle>Working Hours</CardTitle>
              <CardDescription>Set business operating hours</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="weekdays">Weekdays (Mon-Fri)</Label>
                <Input
                  id="weekdays"
                  value={contactInfo.workingHours.weekdays}
                  onChange={(e) => updateWorkingHours("weekdays", e.target.value)}
                  placeholder="e.g., 9:00 AM - 6:00 PM"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="saturday">Saturday</Label>
                <Input
                  id="saturday"
                  value={contactInfo.workingHours.saturday}
                  onChange={(e) => updateWorkingHours("saturday", e.target.value)}
                  placeholder="e.g., 9:00 AM - 6:00 PM"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sunday">Sunday</Label>
                <Input
                  id="sunday"
                  value={contactInfo.workingHours.sunday}
                  onChange={(e) => updateWorkingHours("sunday", e.target.value)}
                  placeholder="e.g., Closed"
                />
              </div>
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Social Media Links</CardTitle>
              <CardDescription>Add social media profile links</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn</Label>
                  <Input
                    id="linkedin"
                    value={contactInfo.socialMedia.linkedin}
                    onChange={(e) => updateSocialMedia("linkedin", e.target.value)}
                    placeholder="https://linkedin.com/company/..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="facebook">Facebook</Label>
                  <Input
                    id="facebook"
                    value={contactInfo.socialMedia.facebook}
                    onChange={(e) => updateSocialMedia("facebook", e.target.value)}
                    placeholder="https://facebook.com/..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="twitter">Twitter</Label>
                  <Input
                    id="twitter"
                    value={contactInfo.socialMedia.twitter}
                    onChange={(e) => updateSocialMedia("twitter", e.target.value)}
                    placeholder="https://twitter.com/..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="instagram">Instagram</Label>
                  <Input
                    id="instagram"
                    value={contactInfo.socialMedia.instagram}
                    onChange={(e) => updateSocialMedia("instagram", e.target.value)}
                    placeholder="https://instagram.com/..."
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

export default ContactManagement;