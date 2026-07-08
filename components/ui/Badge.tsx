type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="rc-border-primary-soft rc-bg-primary-soft rc-text-primary inline-block rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide">
      {children}
    </span>
  );
}
