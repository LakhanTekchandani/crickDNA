"use client";

import React from "react";
import { motion } from "framer-motion";
import { GrassField } from "@/components/ui/GrassField";
import { Target, Zap, Shield, HeartPulse, CheckCircle2 } from "lucide-react";

const trainingModules = [
  {
    icon: Target,
    title: "Batting Precision Drills",
    desc: "Targeted net scenarios targeting specific ball trajectories—short-ball hooks, spin sweeps, and powerplay lofted drives.",
  },
  {
    icon: Zap,
    title: "Seam & Pace Mechanics",
    desc: "Biomechanical feedback on stride length, release angle, wrist positioning, and seam orientation.",
  },
  {
    icon: Shield,
    title: "High-Pressure Fielding",
    desc: "Reaction timing analysis for slip catches, direct-hit throwing speed, and dive recovery metrics.",
  },
  {
    icon: HeartPulse,
    title: "Athletic Conditioning",
    desc: "Heart-rate monitoring, explosive sprint recovery, and workload management to prevent fast-bowler stress injuries.",
  },
];

export const TrainingSection: React.FC = () => {
  return (
    <section id="training" className="py-28 relative bg-[#070a12] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            Player Development & High Performance
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Train With Purpose, Play With Precision
          </h2>
          <p className="text-slate-400 text-base">
            Statistics without application are just numbers. CrickDNA connects match insights directly to dedicated on-field development protocols.
          </p>
        </div>

        {/* Grass Field Visual + Training Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: OriginKit Grass Field Component */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-emerald-900/40"
          >
            <GrassField className="w-full h-full" bladeCount={500} />
            <div className="absolute inset-x-6 bottom-6 p-6 rounded-2xl glass-panel border border-slate-700/80 space-y-2 z-10">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase">STADIUM PRACTICE MATRIX</span>
              <h4 className="text-xl font-bold text-white">Grass Environment Telemetry</h4>
              <p className="text-xs text-slate-300">
                Interactive turf condition sensors measure seam friction, pitch bounce consistency, and outfield speed.
              </p>
            </div>
          </motion.div>

          {/* Right Column: 4 Training Pillars */}
          <div className="lg:col-span-6 space-y-4">
            {trainingModules.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-5 rounded-2xl glass-panel glass-panel-hover border border-slate-800 flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-white">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
