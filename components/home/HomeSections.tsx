import {
  Activity,
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

const proofStats = [
  {
    value: "5",
    label: "product tracks",
    detail: "Career, documents, gig work, analytics, and simulation products moving through the lab.",
  },
  {
    value: "3",
    label: "active build lanes",
    detail: "GigOS, document intelligence, and sports analytics are the current execution focus.",
  },
  {
    value: "100%",
    label: "AI-native direction",
    detail: "Each product is designed around automation, data intelligence, or assistant workflows.",
  },
];

const momentumItems = [
  "Positioning tightened around leverage for solo founders, operators, and small teams.",
  "Product pipeline organized into launch systems, retrieval layers, and analytics tooling.",
  "Visual system upgraded with electric green actions, cyan technology cues, and sparse purple depth.",
];

export function TrustedTechnologies() {
  return (
    <section className="rc-bg-surface border-b border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="rc-text-secondary mb-6 text-center font-mono text-xs font-semibold uppercase">
          Trusted Technologies
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-7">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="rc-border-secondary-soft rc-bg-secondary-soft flex min-h-16 items-center justify-center rounded-lg border px-3 text-center text-sm font-semibold text-slate-100"
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
        <p className="rc-text-secondary font-mono text-sm font-semibold uppercase">
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
            className="rc-hover-secondary rc-bg-surface-raised rounded-lg border border-white/10 p-5 transition"
          >
            <Icon className="rc-text-secondary mb-5" size={28} />
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProofMomentum() {
  return (
    <section id="momentum" className="rc-bg-surface border-y border-white/10 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="rc-text-primary font-mono text-sm font-semibold uppercase">
              Proof & Momentum
            </p>
            <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
              A product lab with visible traction.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Rogue Circuit is building a portfolio, not a single demo. The work
              is organized around repeatable product tracks, sharper signals,
              and practical systems that can become durable software.
            </p>
          </div>
          <Activity className="rc-text-primary" size={42} />
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <div className="grid gap-4 md:grid-cols-3">
            {proofStats.map((stat) => (
              <article
                key={stat.label}
                className="rc-bg-surface-raised rounded-lg border border-white/10 p-6"
              >
                <p className="rc-text-primary font-mono text-4xl font-black">
                  {stat.value}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-white">{stat.label}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{stat.detail}</p>
              </article>
            ))}
          </div>

          <div className="accent-depth rc-border-accent-soft rounded-lg border p-6">
            <p className="font-mono text-sm font-semibold uppercase text-violet-100">
              Latest lab notes
            </p>
            <div className="mt-5 space-y-3">
              {momentumItems.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-md bg-black/20 p-3 text-sm leading-6 text-slate-300"
                >
                  <span className="rc-text-secondary mt-1 font-mono text-xs">RC</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Mission() {
  return (
    <section id="company" className="rc-bg-surface border-y border-white/10 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="font-mono text-sm font-semibold uppercase text-violet-200">
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
        <p className="rc-text-primary font-mono text-sm font-semibold uppercase">
          Why Rogue Circuit
        </p>
        <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
          Built for the messy middle between idea and scale.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {reasons.map(({ title, description, icon: Icon }) => (
          <article key={title} className="rc-bg-surface-raised rounded-lg border border-white/10 p-7">
            <Icon className="rc-text-primary" size={30} />
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
    <section id="projects" className="rc-bg-surface border-y border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-sm font-semibold uppercase text-violet-200">
              Latest Projects
            </p>
            <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
              Experiments becoming products.
            </h2>
          </div>
          <Rocket className="text-violet-200" size={42} />
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {latestProjects.map(({ label, detail, icon: Icon }) => (
            <article key={label} className="rc-border-accent-soft rc-bg-surface-raised rounded-lg border p-6">
              <Icon className="text-violet-100" size={28} />
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
          <div key={label} className="rc-hover-secondary flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4 text-slate-300 transition">
            <Icon className="rc-text-secondary" size={20} />
            <span className="font-semibold">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
