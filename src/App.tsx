
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CADServicesPage from "./pages/CADServicesPage";
import BlogPage from "./pages/BlogPage";
import BulkMaterialHandling from "./pages/services/BulkMaterialHandling";
import UnitHandling from "./pages/services/UnitHandling";
import PEBSteelBuilding from "./pages/services/PEBSteelBuilding";
import ReverseEngineeringConversionDrawings from "./pages/services/ReverseEngineeringConversionDrawings";
import Automation from "./pages/services/Automation";
import WarehouseBadmintonCourt from "./pages/services/WarehouseBadmintonCourt";
import BeltConveyors from "./pages/services/bulk-material-handling/BeltConveyors";
import HeadHoppers from "./pages/services/bulk-material-handling/HeadHoppers";
import Chute from "./pages/services/bulk-material-handling/Chute";
import Bunkers from "./pages/services/bulk-material-handling/Bunkers";
import JunctionHouse from "./pages/services/bulk-material-handling/JunctionHouse";
import PipeGADetailing from "./pages/services/bulk-material-handling/PipeGADetailing";
import DuctGADetailing from "./pages/services/bulk-material-handling/DuctGADetailing";
import OverheadPowerFreeConveyors from "./pages/services/unit-handling/OverheadPowerFreeConveyors";
import SlatConveyors from "./pages/services/unit-handling/SlatConveyors";
import ChainConveyors from "./pages/services/unit-handling/ChainConveyors";
import RollerConveyors from "./pages/services/unit-handling/RollerConveyors";
import GravityRollerConveyors from "./pages/services/unit-handling/GravityRollerConveyors";
import MotorizedRollerConveyors from "./pages/services/unit-handling/MotorizedRollerConveyors";
import TruckConveyors from "./pages/services/unit-handling/TruckConveyors";
import DropLiftsIntraloxConveyors from "./pages/services/unit-handling/DropLiftsIntraloxConveyors";
import BeltConveyorsUnitHandling from "./pages/services/unit-handling/BeltConveyorsUnitHandling";
import AdminLogin from "./components/mypagesadmin/pages/admin/AdminLogin";
import AdminDashboard from "./components/mypagesadmin/pages/admin/AdminDashboard";
import ContentManagement from "./components/mypagesadmin/pages/admin/ContentManagement";
import PhotoManagement from "./components/mypagesadmin/pages/admin/PhotoManagement";
import BannerManagement from "./components/mypagesadmin/pages/admin/BannerManagement";
import ContactManagement from "./components/mypagesadmin/pages/admin/ContactManagement";
import CompanySettings from "./components/mypagesadmin/pages/admin/CompanySettings";
import ThemeManagement from "./components/mypagesadmin/pages/admin/ThemeManagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cad-services" element={<CADServicesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/services/bulk-material-handling" element={<BulkMaterialHandling />} />
          <Route path="/services/unit-handling" element={<UnitHandling />} />
          <Route path="/services/peb-steel-building" element={<PEBSteelBuilding />} />
          <Route path="/services/reverse-engineering-conversion-drawings" element={<ReverseEngineeringConversionDrawings />} />
          <Route path="/services/automation" element={<Automation />} />
          <Route path="/services/warehouse-badminton-court" element={<WarehouseBadmintonCourt />} />
          <Route path="/services/bulk-material-handling/belt-conveyors" element={<BeltConveyors />} />
          <Route path="/services/bulk-material-handling/head-hoppers" element={<HeadHoppers />} />
          <Route path="/services/bulk-material-handling/chute" element={<Chute />} />
          <Route path="/services/bulk-material-handling/bunkers" element={<Bunkers />} />
          <Route path="/services/bulk-material-handling/junction-house" element={<JunctionHouse />} />
          <Route path="/services/bulk-material-handling/pipe-ga-detailing" element={<PipeGADetailing />} />
          <Route path="/services/bulk-material-handling/duct-ga-detailing" element={<DuctGADetailing />} />
          <Route path="/services/unit-handling/overhead-power-free-conveyors" element={<OverheadPowerFreeConveyors />} />
          <Route path="/services/unit-handling/slat-conveyors" element={<SlatConveyors />} />
          <Route path="/services/unit-handling/chain-conveyors" element={<ChainConveyors />} />
          <Route path="/services/unit-handling/roller-conveyors" element={<RollerConveyors />} />
          <Route path="/services/unit-handling/gravity-roller-conveyors" element={<GravityRollerConveyors />} />
          <Route path="/services/unit-handling/motorized-roller-conveyors" element={<MotorizedRollerConveyors />} />
          <Route path="/services/unit-handling/truck-conveyors" element={<TruckConveyors />} />
          <Route path="/services/unit-handling/drop-lifts-intralox-conveyors" element={<DropLiftsIntraloxConveyors />} />
          <Route path="/services/unit-handling/belt-conveyors" element={<BeltConveyorsUnitHandling />} />
          {/* ADMIN PANEL ROUTES */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/content" element={<ContentManagement />} />
          <Route path="/admin/photos" element={<PhotoManagement />} />
          <Route path="/admin/banners" element={<BannerManagement />} />
          <Route path="/admin/contact" element={<ContactManagement />} />
          <Route path="/admin/company" element={<CompanySettings />} />
          <Route path="/admin/theme" element={<ThemeManagement />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
