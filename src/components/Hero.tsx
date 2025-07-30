
import Slider from "@/components/slider/Slider";
 

export const Hero = () => {
  return (
    <section id="home" className="relative w-full h-[100vh] overflow-hidden text-white">
      {/* 🔹 Background Image Slider Only */}
      <div className="absolute inset-0 z-0">
        <Slider />
      </div>
    </section>
  );
};
