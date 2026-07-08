import {
  Bot,
  ChartNoAxesCombined,
  Gauge,
  GitBranch,
  Radar,
  Workflow,
} from "lucide-react";

const pipeline = [
  { name: "GigOS", state: "Launch systems", signal: "72%" },
  { name: "DocChat", state: "Retrieval layer", signal: "Beta" },
  { name: "Sports Lab", state: "Model tuning", signal: "Live" },
];

export default function DashboardPreview() {
  return (
    <div className="rc-bg-surface-raised rounded-lg border border-white/10 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-7">
      <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
        <div>
          <p className="font-mono text-xs uppercase text-slate-500">Rogue Circuit Lab</p>
          <h3 className="mt-1 text-xl font-bold">Leverage Console</h3>
        </div>

        <span className="rc-border-primary-soft rc-bg-primary-soft rc-text-primary rounded-full border px-3 py-1 text-sm font-semibold">
          BUILDING
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rc-border-primary-soft rc-bg-primary-soft rounded-lg border p-4">
          <div className="rc-text-primary mb-4 flex items-center gap-2">
            <Gauge size={18} />
            <p className="text-sm font-semibold">Leverage Score</p>
          </div>
          <h2 className="text-3xl font-bold text-white">4.8x</h2>
          <p className="mt-2 text-sm text-slate-300">Manual effort converted into systems</p>
        </div>

        <div className="rc-border-secondary-soft rc-bg-secondary-soft rounded-lg border p-4">
          <div className="rc-text-secondary mb-4 flex items-center gap-2">
            <Bot size={18} />
            <p className="text-sm font-semibold">Agent Runway</p>
          </div>
          <h2 className="text-3xl font-bold text-white">12</h2>
          <p className="mt-2 text-sm text-slate-300">Assistants mapped across product workflows</p>
        </div>

        <div className="rc-border-accent-soft rc-bg-accent-soft rounded-lg border p-4 sm:col-span-2">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-violet-100">
              <Workflow size={18} />
              <p className="text-sm font-semibold">Product Pipeline</p>
            </div>
            <ChartNoAxesCombined size={18} className="text-violet-100" />
          </div>
          <div className="space-y-3 text-sm">
            {pipeline.map((item) => (
              <div key={item.name} className="grid grid-cols-[1fr_auto] gap-3 rounded-md bg-black/20 px-3 py-2">
                <span className="font-semibold text-white">{item.name}</span>
                <span className="font-mono text-xs text-violet-100">{item.signal}</span>
                <span className="col-span-2 flex items-center gap-2 text-slate-400">
                  <GitBranch size={14} />
                  {item.state}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-black/20 p-4 sm:col-span-2">
          <div className="mb-3 flex items-center gap-2 text-slate-200">
            <Radar size={18} className="rc-text-secondary" />
            <p className="text-sm font-semibold">Signal Layer</p>
          </div>
          <div className="grid gap-2 text-sm text-slate-400 sm:grid-cols-3">
            <span className="rounded-md bg-white/[0.04] px-3 py-2">User pain</span>
            <span className="rounded-md bg-white/[0.04] px-3 py-2">Workflow drag</span>
            <span className="rounded-md bg-white/[0.04] px-3 py-2">Scale path</span>
          </div>
        </div>
      </div>
    </div>
  );
}
