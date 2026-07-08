import { ReactNode } from "react";

export default function Card({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="
      rounded-lg
      border
      border-white/10
      rc-bg-surface-raised
      backdrop-blur-xl
      p-8
      transition-all
      duration-300
      rc-hover-secondary
      hover:shadow-[0_0_40px_rgba(25,230,255,0.12)]
      hover:-translate-y-2
    ">
      {children}
    </div>
  );
}
