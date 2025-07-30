import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Palette, Save, RotateCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ThemeManagement = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [colors, setColors] = useState({
    primary: "#0f172a",
    secondary: "#64748b",
    accent: "#ef4444",
    background: "#ffffff",
    foreground: "#0f172a",
    muted: "#f8fafc",
    mutedForeground: "#64748b",
    border: "#e2e8f0",
    input: "#e2e8f0",
    ring: "#0f172a",
    destructive: "#ef4444",
    destructiveForeground: "#fef2f2"
  });

  const [buttonStyles, setButtonStyles] = useState({
    primaryButton: "#0f172a",
    primaryButtonText: "#ffffff",
    secondaryButton: "#f8fafc",
    secondaryButtonText: "#0f172a",
    outlineButton: "transparent",
    outlineButtonText: "#0f172a",
    outlineButtonBorder: "#e2e8f0"
  });

  const colorGroups = [
    {
      title: "Brand Colors",
      colors: [
        { key: "primary", label: "Primary Color", description: "Main brand color" },
        { key: "secondary", label: "Secondary Color", description: "Secondary brand color" },
        { key: "accent", label: "Accent Color", description: "Accent and highlight color" }
      ]
    },
    {
      title: "Background Colors",
      colors: [
        { key: "background", label: "Background", description: "Main background color" },
        { key: "foreground", label: "Foreground", description: "Main text color" },
        { key: "muted", label: "Muted Background", description: "Subtle background color" },
        { key: "mutedForeground", label: "Muted Text", description: "Subtle text color" }
      ]
    },
    {
      title: "UI Elements",
      colors: [
        { key: "border", label: "Border", description: "Border color" },
        { key: "input", label: "Input", description: "Input field background" },
        { key: "ring", label: "Focus Ring", description: "Focus indicator color" },
        { key: "destructive", label: "Destructive", description: "Error/delete color" },
        { key: "destructiveForeground", label: "Destructive Text", description: "Error text color" }
      ]
    }
  ];

  const buttonGroups = [
    {
      title: "Primary Buttons",
      buttons: [
        { key: "primaryButton", label: "Primary Button Background", description: "Main action buttons" },
        { key: "primaryButtonText", label: "Primary Button Text", description: "Text on primary buttons" }
      ]
    },
    {
      title: "Secondary Buttons",
      buttons: [
        { key: "secondaryButton", label: "Secondary Button Background", description: "Secondary action buttons" },
        { key: "secondaryButtonText", label: "Secondary Button Text", description: "Text on secondary buttons" }
      ]
    },
    {
      title: "Outline Buttons",
      buttons: [
        { key: "outlineButton", label: "Outline Button Background", description: "Outline button background" },
        { key: "outlineButtonText", label: "Outline Button Text", description: "Text on outline buttons" },
        { key: "outlineButtonBorder", label: "Outline Button Border", description: "Border color for outline buttons" }
      ]
    }
  ];

  const handleColorChange = (key: string, value: string) => {
    setColors({ ...colors, [key]: value });
  };

  const handleButtonStyleChange = (key: string, value: string) => {
    setButtonStyles({ ...buttonStyles, [key]: value });
  };

  const saveTheme = () => {
    // TODO: Replace with actual API call to update CSS variables
    const root = document.documentElement;
    
    // Update CSS custom properties
    Object.entries(colors).forEach(([key, value]) => {
      const cssVar = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      root.style.setProperty(cssVar, value);
    });

    toast({
      title: "Theme Updated",
      description: "Your theme changes have been applied successfully",
    });
  };

  const resetToDefault = () => {
    setColors({
      primary: "#0f172a",
      secondary: "#64748b",
      accent: "#ef4444",
      background: "#ffffff",
      foreground: "#0f172a",
      muted: "#f8fafc",
      mutedForeground: "#64748b",
      border: "#e2e8f0",
      input: "#e2e8f0",
      ring: "#0f172a",
      destructive: "#ef4444",
      destructiveForeground: "#fef2f2"
    });
    
    setButtonStyles({
      primaryButton: "#0f172a",
      primaryButtonText: "#ffffff",
      secondaryButton: "#f8fafc",
      secondaryButtonText: "#0f172a",
      outlineButton: "transparent",
      outlineButtonText: "#0f172a",
      outlineButtonBorder: "#e2e8f0"
    });

    toast({
      title: "Theme Reset",
      description: "Theme has been reset to default values",
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
              <h1 className="text-2xl font-bold text-gray-900">Theme & Colors</h1>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={resetToDefault} className="flex items-center gap-2">
                <RotateCcw className="h-4 w-4" />
                Reset to Default
              </Button>
              <Button onClick={saveTheme} className="flex items-center gap-2">
                <Save className="h-4 w-4" />
                Save Theme
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Website Colors */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <Palette className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Website Colors</h2>
            </div>

            {colorGroups.map((group) => (
              <Card key={group.title}>
                <CardHeader>
                  <CardTitle>{group.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {group.colors.map((colorItem) => (
                    <div key={colorItem.key} className="flex items-center gap-4">
                      <div className="flex-1">
                        <Label htmlFor={colorItem.key}>{colorItem.label}</Label>
                        <p className="text-sm text-gray-600">{colorItem.description}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-10 h-10 rounded border border-gray-300"
                          style={{ backgroundColor: colors[colorItem.key as keyof typeof colors] }}
                        />
                        <Input
                          id={colorItem.key}
                          type="color"
                          value={colors[colorItem.key as keyof typeof colors]}
                          onChange={(e) => handleColorChange(colorItem.key, e.target.value)}
                          className="w-16 h-10 p-1 border rounded"
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Button Colors */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Button Colors</h2>

            {buttonGroups.map((group) => (
              <Card key={group.title}>
                <CardHeader>
                  <CardTitle>{group.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {group.buttons.map((buttonItem) => (
                    <div key={buttonItem.key} className="flex items-center gap-4">
                      <div className="flex-1">
                        <Label htmlFor={buttonItem.key}>{buttonItem.label}</Label>
                        <p className="text-sm text-gray-600">{buttonItem.description}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-10 h-10 rounded border border-gray-300"
                          style={{ backgroundColor: buttonStyles[buttonItem.key as keyof typeof buttonStyles] }}
                        />
                        <Input
                          id={buttonItem.key}
                          type="color"
                          value={buttonStyles[buttonItem.key as keyof typeof buttonStyles]}
                          onChange={(e) => handleButtonStyleChange(buttonItem.key, e.target.value)}
                          className="w-16 h-10 p-1 border rounded"
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}

            {/* Preview Section */}
            <Card>
              <CardHeader>
                <CardTitle>Button Preview</CardTitle>
                <CardDescription>Preview how your buttons will look</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4 flex-wrap">
                  <button
                    className="px-4 py-2 rounded font-medium"
                    style={{
                      backgroundColor: buttonStyles.primaryButton,
                      color: buttonStyles.primaryButtonText
                    }}
                  >
                    Primary Button
                  </button>
                  <button
                    className="px-4 py-2 rounded font-medium"
                    style={{
                      backgroundColor: buttonStyles.secondaryButton,
                      color: buttonStyles.secondaryButtonText
                    }}
                  >
                    Secondary Button
                  </button>
                  <button
                    className="px-4 py-2 rounded font-medium border"
                    style={{
                      backgroundColor: buttonStyles.outlineButton,
                      color: buttonStyles.outlineButtonText,
                      borderColor: buttonStyles.outlineButtonBorder
                    }}
                  >
                    Outline Button
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ThemeManagement;