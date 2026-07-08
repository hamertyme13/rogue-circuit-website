import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Products from "@/components/home/Products";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";
import {
  LatestProjects,
  Mission,
  ProofMomentum,
  StackBand,
  TrustedTechnologies,
  WhatWeBuild,
  WhyRogueCircuit,
} from "@/components/home/HomeSections";

export default function Home() {
  return (
    <main className="rc-bg-night min-h-screen text-white">
      <Navbar />
      <Hero />
      <TrustedTechnologies />
      <WhatWeBuild />
      <ProofMomentum />
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
