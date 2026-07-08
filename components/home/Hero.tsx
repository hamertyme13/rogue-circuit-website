"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import DashboardPreview from "./DashboardPreview";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-glow" />

      <div className="grid-background">
        <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <p className="mb-5 font-semibold text-green-400">
              AI • Automation • Software
            </p>

            <h1 className="text-6xl font-black leading-none md:text-8xl">
              Build
              <span className="text-green-400"> Smarter</span>
            </h1>

            <h2 className="mt-4 text-5xl font-black md:text-7xl">
              Scale Faster
            </h2>

            <p className="mt-10 max-w-2xl text-xl text-slate-400">
              We build AI-powered software that helps ambitious people
              automate work, launch businesses, and turn ideas into reality.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <span className="rounded-full border border-green-500/20 px-4 py-2">
                Next.js
              </span>

              <span className="rounded-full border border-green-500/20 px-4 py-2">
                AI
              </span>

              <span className="rounded-full border border-green-500/20 px-4 py-2">
                TypeScript
              </span>

              <span className="rounded-full border border-green-500/20 px-4 py-2">
                PostgreSQL
              </span>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-5 lg:justify-start">
              <Button>Explore Products</Button>
              <Button variant="secondary">Learn More</Button>
            </div>
          </motion.div>

          {/* Right Side */}
          <DashboardPreview />

        </div>
      </div>
    </section>
  );
}