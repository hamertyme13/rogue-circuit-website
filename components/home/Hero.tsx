export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-400">
        🚀 AI • Automation • Software Development
      </p>

      <h1 className="max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl">
        Building AI Software
        <br />
        <span className="text-green-400">For Ambitious People</span>
      </h1>

      <p className="mt-8 max-w-3xl text-lg text-slate-400 md:text-xl">
        Rogue Circuit creates AI-powered applications, automation tools,
        and business software that help entrepreneurs, freelancers,
        and growing companies work smarter.
      </p>

      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <button className="rounded-xl bg-green-500 px-8 py-4 font-semibold text-black transition hover:bg-green-400">
          Explore Products
        </button>

        <button className="rounded-xl border border-slate-700 px-8 py-4 transition hover:border-green-500">
          Learn More
        </button>
      </div>
    </section>
  );
}