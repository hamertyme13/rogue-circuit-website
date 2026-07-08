"use client";

import { motion } from "framer-motion";

export default function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl"
    >
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-bold">GigOS Dashboard</h3>

        <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
          LIVE
        </span>
      </div>

      <div className="space-y-5">

        <div className="rounded-xl bg-slate-900 p-4">
          <p className="text-slate-400 text-sm">
            Today's Earnings
          </p>

          <h2 className="text-3xl font-bold text-green-400">
            $243.15
          </h2>
        </div>

        <div className="rounded-xl bg-slate-900 p-4">
          <p className="text-slate-400 text-sm">
            AI Recommendation
          </p>

          <p className="mt-2">
            Drive until 7:30 PM to maximize profit.
          </p>
        </div>

        <div className="rounded-xl bg-slate-900 p-4">
          <p className="text-slate-400 text-sm">
            Weekly Goal
          </p>

          <div className="mt-3 h-3 rounded-full bg-slate-700">
            <div className="h-3 w-3/4 rounded-full bg-green-400"></div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}