"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, Layers } from "lucide-react";

export const ProductVision: React.FC = () => {
  return (
    <section className="py-28 relative bg-[#070a12] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              The CrickDNA Advantage
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Beyond Generic Metrics: <br />
              <span className="text-emerald-400">Personalized Intelligence</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Traditional cricket analysis relies on static scoreboard totals or generic video replay. CrickDNA bridges the gap between match output and physical execution.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 shrink-0" />
                <div>
                  <h4 className="text-base font-bold text-white">Player-Specific Archetype Modeling</h4>
                  <p className="text-xs text-slate-400">Tailored metrics aligned with your exact role—not generic team averages.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 shrink-0" />
                <div>
                  <h4 className="text-base font-bold text-white">Direct Performance-to-Training Feedback Loop</h4>
                  <p className="text-xs text-slate-400">Match flaws automatically populate targeted net protocols for immediate correction.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 shrink-0" />
                <div>
                  <h4 className="text-base font-bold text-white">Verifiable Biomechanical Trajectory</h4>
                  <p className="text-xs text-slate-400">Quantifiable evidence of improved bat speed, release consistency, and endurance.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="rounded-3xl glass-panel p-8 border border-slate-700/80 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm font-bold text-white">Traditional vs CrickDNA</span>
                </div>
                <span className="text-xs font-mono text-emerald-400">Engine Comparison</span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                  <span className="text-[11px] font-mono text-red-400 uppercase font-semibold">TRADITIONAL ANALYSIS</span>
                  <p className="text-xs text-slate-300">Generic scorecards, manual video clipping, disconnected fitness drills, unmeasured net practice.</p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 space-y-1">
                  <span className="text-[11px] font-mono text-emerald-400 uppercase font-bold">CRICKDNA INTELLIGENCE</span>
                  <p className="text-xs text-slate-200 font-medium">Real-time telemetry, automated biomechanical defect alerts, individualized practice ROI tracking.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
