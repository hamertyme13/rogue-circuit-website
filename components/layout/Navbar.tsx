import { CircuitBoard } from "lucide-react";
import Button from "@/components/ui/Button";

const navItems = [
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#solutions" },
  { label: "Company", href: "#company" },
  { label: "Blog", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070914]/88 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 py-4">
        <a href="#" className="flex items-center gap-3 text-lg font-bold tracking-wide">
          <span className="grid size-10 place-items-center rounded-lg border border-emerald-300/30 bg-emerald-300/10 text-emerald-300">
            <CircuitBoard size={21} strokeWidth={2.2} />
          </span>
          <span>
            <span className="text-emerald-300">Rogue</span> Circuit
          </span>
        </a>

        <div className="flex items-center gap-8">
          <ul className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition hover:text-emerald-300">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden sm:block">
            <Button href="#contact">Start a Project</Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
