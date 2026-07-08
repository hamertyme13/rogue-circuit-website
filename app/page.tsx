import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Products from "@/components/home/Products";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";
import {
  LatestProjects,
  Mission,
  StackBand,
  TrustedTechnologies,
  WhatWeBuild,
  WhyRogueCircuit,
} from "@/components/home/HomeSections";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070914] text-white">
      <Navbar />
      <Hero />
      <TrustedTechnologies />
      <WhatWeBuild />
      <Products />
      <Mission />
      <WhyRogueCircuit />
      <LatestProjects />
      <StackBand />
      <CTA />
      <Footer />
    </main>
  );
}
