import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

type ProductCardProps = {
    icon: string;
    name: string;
    tagline: string;
    description: string;
    status: string;
    progress: number;
    stack: string[];
};

export default function ProductCard({
  icon,
  name,
  tagline,
  description,
  status,
  progress,
  stack,
}: ProductCardProps) {
  return (
    <Card>
      <div className="flex items-start justify-between">
        <div>
            <div className="rc-border-secondary-soft rc-bg-secondary-soft rc-text-secondary grid size-12 place-items-center rounded-lg border font-mono text-sm font-bold">
              {icon}
            </div>

            <h3 className="mt-2 text-2xl font-bold">
                {name}
            </h3>

            <p className="rc-text-secondary">
                {tagline}
            </p>
        </div>

        <Badge>{status}</Badge>
    </div>

      <p className="mt-4 text-slate-400">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-8">
        <div className="mb-2 flex justify-between text-sm">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>

        <div className="h-2 rounded-full bg-slate-800">
          <div
            className="rc-bg-primary h-2 rounded-full transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-8">
            <Button variant="secondary">
                Learn More
            </Button>
        </div>
      </div>
    </Card>
  );
}
