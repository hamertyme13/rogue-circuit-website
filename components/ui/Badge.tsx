type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-block rounded-full bg-green-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-400">
      {children}
    </span>
  );
}