import { ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
};

export default function Button({
  children,
  variant = "primary",
  href,
}: ButtonProps) {
  const className = clsx(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-300",
    variant === "primary"
      ? "bg-emerald-400 text-slate-950 hover:bg-emerald-300"
      : "border border-slate-700 bg-white/5 text-slate-100 hover:border-cyan-300 hover:bg-cyan-300/10"
  );

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type="button"
      className={clsx(
        className
      )}
    >
      {children}
    </button>
  );
}
