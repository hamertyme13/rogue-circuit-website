import {
  Blocks,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  Factory,
  FileText,
  LineChart,
  PackageCheck,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const technologies = [
  "Python",
  "Next.js",
  "OpenAI",
  "PostgreSQL",
  "AWS",
  "Docker",
  "TypeScript",
];

const buildAreas = [
  {
    title: "AI Applications",
    description: "Assistants, copilots, and intelligent workflows built for real outcomes.",
    icon: Bot,
  },
  {
    title: "SaaS Platforms",
    description: "Durable products with accounts, dashboards, billing-ready architecture, and scale paths.",
    icon: Blocks,
  },
  {
    title: "Automation",
    description: "Systems that remove repeat work and keep teams moving without constant supervision.",
    icon: Workflow,
  },
  {
    title: "Developer Tools",
    description: "Internal utilities, CLIs, and workflow tools for builders who care about speed.",
    icon: Code2,
  },
  {
    title: "Data Intelligence",
    description: "Dashboards, models, and decision layers that turn messy inputs into clear signals.",
    icon: LineChart,
  },
];

const reasons = [
  {
    title: "Product-first engineering",
    description: "Every build starts with the user's job, then gets the AI and infrastructure it deserves.",
    icon: PackageCheck,
  },
  {
    title: "Practical AI",
    description: "We favor useful agents, retrieval, automation, and analytics over novelty for its own sake.",
    icon: BrainCircuit,
  },
  {
    title: "Modern foundations",
    description: "Systems are designed with clean interfaces, typed code, resilient data, and room to grow.",
    icon: ShieldCheck,
  },
];

const latestProjects = [
  {
    label: "GigOS",
    detail: "Building smarter earning, mileage, and recommendation systems for independent workers.",
    icon: BriefcaseBusiness,
  },
  {
    label: "Document Chatbot",
    detail: "Exploring document search, summarization, and question answering for knowledge-heavy teams.",
    icon: FileText,
  },
  {
    label: "Sports Analytics",
    detail: "Modeling performance signals, trend windows, and decision dashboards with Python.",
    icon: LineChart,
  },
];

export function TrustedTechnologies() {
  return (
    <section className="border-b border-white/10 bg-[#090d18] py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-6 text-center font-mono text-xs font-semibold uppercase text-slate-500">
          Trusted Technologies
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-7">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="flex min-h-16 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] px-3 text-center text-sm font-semibold text-slate-200"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhatWeBuild() {
  return (
    <section id="solutions" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 max-w-3xl">
        <p className="font-mono text-sm font-semibold uppercase text-cyan-200">
          What We Build
        </p>
        <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
          Software systems for ambitious builders.
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {buildAreas.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-200/50 hover:bg-cyan-200/10"
          >
            <Icon className="mb-5 text-cyan-100" size={28} />
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Mission() {
  return (
    <section id="company" className="border-y border-white/10 bg-[#0c101d] py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="font-mono text-sm font-semibold uppercase text-amber-200">
            Our Mission
          </p>
          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Help people build with more leverage.
          </h2>
        </div>
        <div className="text-lg leading-8 text-slate-300">
          <p>
            Rogue Circuit exists to create useful AI-powered software: products
            that reduce busywork, clarify decisions, and make sophisticated
            tools feel accessible to founders, operators, creators, and teams.
          </p>
          <p className="mt-6">
            We are building a portfolio of products where automation, data, and
            thoughtful interfaces work together instead of living in separate
            tabs.
          </p>
        </div>
      </div>
    </section>
  );
}

export function WhyRogueCircuit() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 max-w-3xl">
        <p className="font-mono text-sm font-semibold uppercase text-emerald-300">
          Why Rogue Circuit
        </p>
        <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
          Built for the messy middle between idea and scale.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {reasons.map(({ title, description, icon: Icon }) => (
          <article key={title} className="rounded-lg border border-white/10 bg-white/[0.04] p-7">
            <Icon className="text-emerald-300" size={30} />
            <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
            <p className="mt-4 leading-7 text-slate-400">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function LatestProjects() {
  return (
    <section id="projects" className="border-y border-white/10 bg-[#090d18] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-sm font-semibold uppercase text-rose-200">
              Latest Projects
            </p>
            <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
              Experiments becoming products.
            </h2>
          </div>
          <Rocket className="text-rose-200" size={42} />
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {latestProjects.map(({ label, detail, icon: Icon }) => (
            <article key={label} className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
              <Icon className="text-rose-100" size={28} />
              <h3 className="mt-5 text-xl font-semibold text-white">{label}</h3>
              <p className="mt-3 leading-7 text-slate-400">{detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StackBand() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { label: "Cloud-ready", icon: Cloud },
          { label: "Data-backed", icon: Database },
          { label: "AI-native", icon: Sparkles },
          { label: "Service-driven", icon: Server },
          { label: "Workflow-aware", icon: Factory },
          { label: "Builder-focused", icon: Code2 },
        ].map(({ label, icon: Icon }) => (
          <div key={label} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4 text-slate-300">
            <Icon className="text-cyan-100" size={20} />
            <span className="font-semibold">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
