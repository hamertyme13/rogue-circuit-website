import { Bot, ChartNoAxesCombined, Database, Gauge, Workflow } from "lucide-react";

export default function DashboardPreview() {
  return (
    <div className="rounded-lg border border-white/10 bg-[#0d1220]/90 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-7">
      <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
        <div>
          <p className="font-mono text-xs uppercase text-slate-500">Product command center</p>
          <h3 className="mt-1 text-xl font-bold">Rogue Circuit OS</h3>
        </div>

        <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-sm font-semibold text-emerald-300">
          LIVE
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-emerald-300/20 bg-emerald-300/10 p-4">
          <div className="mb-4 flex items-center gap-2 text-emerald-200">
            <Gauge size={18} />
            <p className="text-sm font-semibold">Automation Load</p>
          </div>
          <h2 className="text-3xl font-bold text-white">84%</h2>
          <p className="mt-2 text-sm text-slate-300">Workflows optimized this week</p>
        </div>

        <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-4">
          <div className="mb-4 flex items-center gap-2 text-cyan-100">
            <Bot size={18} />
            <p className="text-sm font-semibold">AI Agents</p>
          </div>
          <h2 className="text-3xl font-bold text-white">12</h2>
          <p className="mt-2 text-sm text-slate-300">Active product assistants</p>
        </div>

        <div className="rounded-lg border border-amber-300/20 bg-amber-300/10 p-4 sm:col-span-2">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-amber-100">
              <Workflow size={18} />
              <p className="text-sm font-semibold">Current Build Queue</p>
            </div>
            <ChartNoAxesCombined size={18} className="text-amber-100" />
          </div>
          <div className="space-y-3 text-sm">
            {["GigOS launch systems", "Document intelligence layer", "Sports analytics lab"].map((item) => (
              <div key={item} className="flex items-center justify-between gap-4 rounded-md bg-black/20 px-3 py-2">
                <span>{item}</span>
                <Database size={15} className="shrink-0 text-slate-400" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
