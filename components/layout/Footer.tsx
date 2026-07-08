export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-10 text-center text-slate-500">
      <p>© {new Date().getFullYear()} Rogue Circuit. All rights reserved.</p>

      <p className="mt-2">
        Build Smarter. Scale Faster.
      </p>
    </footer>
  );
}