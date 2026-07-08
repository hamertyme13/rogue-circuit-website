import { ReactNode } from "react";

export default function Card({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-8
      transition-all
      duration-300
      hover:border-green-500
      hover:-translate-y-2
    ">
      {children}
    </div>
  );
}