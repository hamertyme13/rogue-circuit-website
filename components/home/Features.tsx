const features = [
  {
    title: "AI Solutions",
    description:
      "Practical AI applications designed to solve real business problems.",
  },
  {
    title: "Automation",
    description:
      "Save hours by automating repetitive workflows and daily tasks.",
  },
  {
    title: "Analytics",
    description:
      "Turn your data into actionable insights with intelligent dashboards.",
  },
  {
    title: "Modern Development",
    description:
      "Built with today's best technologies for speed, security, and scale.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <h2 className="mb-12 text-center text-4xl font-bold">
        Why Rogue Circuit?
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition hover:border-green-500"
          >
            <h3 className="mb-4 text-2xl font-semibold text-green-400">
              {feature.title}
            </h3>

            <p className="text-slate-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}