"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, ShieldAlert, Zap, Flame, Award } from "lucide-react";

export const MatchIntelligence: React.FC = () => {
  return (
    <section className="py-24 relative bg-[#070a12] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            Match Intelligence & Tactical Forecasts
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Realtime Match Momentum
          </h2>
          <p className="text-slate-400 text-base">
            CrickDNA ingests live ball-by-ball telemetry to project win probabilities, overs-required dynamics, and critical matchup breakthroughs.
          </p>
        </div>

        {/* Live Match Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl glass-panel p-6 sm:p-10 border border-slate-700/80 shadow-2xl max-w-5xl mx-auto space-y-8"
        >
          {/* Header Status Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-white">Championship Final • Live Simulation</h3>
                <p className="text-xs text-slate-400">Target: 184 Runs in 20 Overs</p>
              </div>
            </div>
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                16.4 Overs
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold">
                Req RR: 9.30
              </span>
            </div>
          </div>

          {/* Teams & Scoreboard */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Team A */}
            <div className="md:col-span-4 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2 text-center md:text-left">
              <span className="text-xs text-slate-400 font-mono">BATTING SIDE</span>
              <h4 className="text-2xl font-black text-white">Royal Lions</h4>
              <p className="text-3xl font-extrabold text-emerald-400 font-mono">152 / 3</p>
              <p className="text-xs text-slate-400">32 Needed off 20 Balls</p>
            </div>

            {/* Central Win Probability Bar */}
            <div className="md:col-span-4 space-y-3 text-center">
              <div className="flex justify-between text-xs font-bold text-slate-300">
                <span className="text-emerald-400">Win Prob: 64%</span>
                <span className="text-slate-400">Defend Prob: 36%</span>
              </div>
              <div className="w-full h-4 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800 flex">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-l-full w-[64%]" />
                <div className="bg-slate-700 h-full rounded-r-full w-[36%]" />
              </div>
              <p className="text-[11px] text-amber-400 font-mono">
                ⚡ Momentum Shift +14% after Over 15 (18 Runs Conceded)
              </p>
            </div>

            {/* Team B */}
            <div className="md:col-span-4 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2 text-center md:text-right">
              <span className="text-xs text-slate-400 font-mono">BOWLING SIDE</span>
              <h4 className="text-2xl font-black text-white">Coastal Falcons</h4>
              <p className="text-xl font-bold text-slate-300 font-mono">Bowling: Rashad Khan</p>
              <p className="text-xs text-slate-400">Figures: 2/24 (3.4 overs)</p>
            </div>

          </div>

          {/* Key Matchup Intelligence Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 mt-1">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-sm font-bold text-white">Key Matchup Insight</h5>
                <p className="text-xs text-slate-400 leading-relaxed mt-1">
                  Batter has 180+ SR vs Googly deliveries when pitched on middle-stump line. Yorker percentage recommended on wide outside-off guideline.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 mt-1">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-sm font-bold text-white">Over-by-Over Pressure Matrix</h5>
                <p className="text-xs text-slate-400 leading-relaxed mt-1">
                  Dot-ball probability peaks at 42% on deliveries over 142 km/h. Boundary risk drops sharply with 6-2 legside field configuration.
                </p>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
