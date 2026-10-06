"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Activity, Cpu } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#070a12]">
      {/* Background Ambient Grid & Radial Glows */}
      <div className="absolute inset-0 bg-stadium-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[250px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border-emerald-500/30 text-xs md:text-sm text-emerald-300 font-medium tracking-wide">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Next-Gen Sports Technology</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">Player Intelligence System</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              Cricket,{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(52,211,153,0.3)]">
                decoded.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              CrickDNA transforms raw match telemetry, biomechanics, and technical telemetry into player-specific intelligence—building the ultimate blueprint for elite cricket performance.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#intelligence"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-base shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Explore Player Intelligence</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#performance"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl glass-panel glass-panel-hover text-slate-200 font-semibold text-base"
              >
                <Cpu className="w-5 h-5 text-emerald-400" />
                <span>Watch Product Demo</span>
              </a>
            </div>

            {/* Trust / Metric Badges */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-6">
              <div>
                <p className="text-2xl md:text-3xl font-extrabold text-white font-mono">140<span className="text-emerald-400">+</span></p>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mt-1">Data Points / Ball</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-extrabold text-white font-mono">99.4<span className="text-emerald-400">%</span></p>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mt-1">Tracking Accuracy</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-extrabold text-white font-mono">Realtime</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mt-1">Match Analytics</p>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Column: Interactive Sports Tech Hud Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Glowing Accent Frame */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20 blur-xl opacity-70" />

            <div className="relative rounded-2xl glass-panel p-6 border border-slate-700/80 shadow-2xl space-y-6">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white tracking-wide">PLAYER DNA TELEMETRY</h2>
                    <p className="text-xs text-slate-400">Live Session Stream • Match #4092</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-950 text-emerald-400 border border-emerald-800/60 text-xs font-mono font-bold">
                  LIVE REEL
                </span>
              </div>

              {/* Metric Row 1: Bat Speed & Seam Angle */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                    <span>Impact Bat Speed</span>
                    <Zap className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-black text-white font-mono">
                    142.8 <span className="text-xs text-slate-400 font-normal">km/h</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full w-[88%]" />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                    <span>Release Seam Stability</span>
                    <ShieldCheck className="w-4 h-4 text-teal-400" />
                  </div>
                  <div className="text-2xl font-black text-white font-mono">
                    94.2 <span className="text-xs text-slate-400 font-normal">%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-teal-400 to-cyan-400 h-full w-[94%]" />
                  </div>
                </div>
              </div>

              {/* Visual Pitch Trajectory Graphic */}
              <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800/80 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-slate-200">Ball Track Trajectory</span>
                  <span className="font-mono text-emerald-400 text-[11px]">Good Length • 138.4 km/h</span>
                </div>
                <div className="relative h-28 w-full rounded-lg bg-gradient-to-b from-slate-900 to-emerald-950/40 border border-slate-800 flex items-center justify-center overflow-hidden">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 110">
                    <path
                      d="M 20 80 Q 200 15 380 90"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="3"
                      strokeDasharray="6 4"
                    />
                    <circle cx="20" cy="80" r="5" fill="#34d399" />
                    <circle cx="200" cy="28" r="4" fill="#f59e0b" />
                    <circle cx="380" cy="90" r="6" fill="#ef4444" />
                  </svg>
                  <span className="absolute bottom-2 left-4 text-[10px] font-mono text-slate-400">Release Point</span>
                  <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] font-mono text-amber-400">Apex</span>
                  <span className="absolute bottom-2 right-4 text-[10px] font-mono text-red-400">Impact Zone</span>
                </div>
              </div>

              {/* Status Footer */}
              <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/60">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Optical Sensor Array Connected</span>
                </div>
                <span className="font-mono text-slate-500">v2.4.0</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
