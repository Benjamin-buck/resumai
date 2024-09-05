import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Plans from "@/components/Plans";
import Image from "next/image";
import Maintenance from "@/components/Maintenance";
import Footer from "@/components/Footer";

export default function Home() {
  const maintenance = false;

  if (maintenance) {
    return (
      <div>
        <Maintenance />
      </div>
    );
  } else {
    return (
      <div>
        <div className="z-50">
          <Navbar />
          <Hero />
          <Plans />
          <Footer />
        </div>
        <Image
          src="/grid.png"
          alt="grid image"
          className="absolute top-0 left-0 -z-10 opacity-45"
          fill
        />
      </div>
    );
  }
}
