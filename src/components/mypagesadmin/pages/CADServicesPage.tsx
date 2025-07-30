
import { Header } from "@/components/Header";
import { CADServices } from "@/components/CADServices";
import { Footer } from "@/components/Footer";

const CADServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CADServices />
      <Footer />
    </div>
  );
};

export default CADServicesPage;
