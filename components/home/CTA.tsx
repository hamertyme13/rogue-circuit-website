import { Mail, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="accent-depth rc-border-primary-soft rc-bg-surface-raised mx-auto grid max-w-5xl gap-8 rounded-lg border p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
        <div>
          <p className="rc-text-secondary mb-4 flex items-center gap-2 font-mono text-sm font-semibold uppercase">
            <Sparkles size={17} />
            Join Our Journey
          </p>
          <h2 className="text-4xl font-bold text-white">
            Follow the next wave of Rogue Circuit products.
        </h2>

          <p className="mt-5 max-w-2xl leading-7 text-slate-300">
            We are building in public across AI apps, SaaS platforms, automation
            systems, and tools for people who want more leverage from software.
        </p>
        </div>

        <Button href="mailto:hello@roguecircuit.com">
          Contact Rogue Circuit
          <Mail size={17} />
        </Button>
      </div>
    </section>
  );
}
