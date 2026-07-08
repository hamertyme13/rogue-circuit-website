const products = [
  {
    title: "GigOS",
    status: "In Development",
    description:
      "The operating system for gig workers.",
  },
  {
    title: "Sports Betting CLI",
    status: "Active",
    description:
      "Python-powered analytics for smarter betting decisions.",
  },
  {
    title: "AI Career Assistant",
    status: "Active",
    description:
      "AI tools for resumes, interviews, and career growth.",
  },
  {
    title: "AI Startup Tycoon",
    status: "In Development",
    description:
      "A business simulation game built with SwiftUI.",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <h2 className="mb-12 text-center text-4xl font-bold">
        Featured Products
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {products.map((product) => (
          <div
            key={product.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition hover:border-green-500"
          >
            <p className="mb-2 text-sm text-green-400">
              {product.status}
            </p>

            <h3 className="mb-4 text-2xl font-bold">
              {product.title}
            </h3>

            <p className="text-slate-400">
              {product.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}