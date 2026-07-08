import { ArrowRight, Eye } from "lucide-react";
import Button from "@/components/ui/Button";
import DashboardPreview from "./DashboardPreview";

export default function Hero() {
  return (
    <section className="rc-bg-night relative overflow-hidden border-b border-white/10">
      <div className="grid-background">
        <div className="mx-auto grid min-h-[560px] max-w-7xl items-center gap-10 px-6 py-8 lg:grid-cols-[1.03fr_0.97fr]">
          <div className="text-center lg:text-left">
            <p className="rc-text-secondary mb-5 font-mono text-sm font-semibold uppercase">
              AI software studio
            </p>

            <h1 className="text-5xl font-black leading-[0.98] text-white md:text-6xl lg:text-7xl">
              Building
              <span className="rc-text-primary block">AI-Powered Software</span>
              <span className="block text-slate-100">for the Next Generation</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg lg:mx-0">
              We create intelligent SaaS platforms, automation tools, and AI
              applications that help ambitious people build smarter and scale
              faster.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Button href="#products">
                Explore Products
                <ArrowRight size={17} />
              </Button>
              <Button href="#company" variant="secondary">
                Our Vision
                <Eye size={17} />
              </Button>
            </div>
          </div>

          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}
