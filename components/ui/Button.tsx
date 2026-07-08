import { ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-xl px-6 py-3 font-semibold transition-all duration-300",
        variant === "primary"
          ? "bg-green-500 text-black hover:bg-green-400"
          : "border border-slate-700 hover:border-green-500"
      )}
    >
      {children}
    </button>
  );
}