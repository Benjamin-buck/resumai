import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Plans from "@/components/Plans";
import Image from "next/image";
import Maintenance from "@/components/Maintenance";

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
        <Navbar />
        <Hero />
        <Plans />
      </div>
    );
  }
}
