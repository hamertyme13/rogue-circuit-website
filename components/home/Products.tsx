import { products } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <section
      id="products"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="rc-text-secondary font-mono text-sm font-semibold uppercase">
          Featured Products
        </p>
        <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
          A growing portfolio of AI-powered tools.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </section>
  );
}
