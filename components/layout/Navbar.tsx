import Button from "@/components/ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="text-2xl font-bold tracking-wide">
          <span className="text-green-400">Rogue</span> Circuit
        </div>

        <div className="flex items-center gap-8">
          <ul className="hidden gap-8 text-sm md:flex">
            <li>
              <a href="#products" className="hover:text-green-400">
                Products
              </a>
            </li>

            <li>
              <a href="#features" className="hover:text-green-400">
                Features
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-green-400">
                About
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-green-400">
                Contact
              </a>
            </li>
          </ul>

          <Button>Get Started</Button>
        </div>
      </nav>
    </header>
  );
}