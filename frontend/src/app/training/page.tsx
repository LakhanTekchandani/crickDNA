"use client";

import React from "react";
import Link from "next/link";
import { GooeyNav } from "@/components/navigation/GooeyNav";
import { Footer } from "@/components/footer/Footer";
import { GrassField } from "@/components/ui/GrassField";
import { ArrowLeft, Target, Shield, Dumbbell } from "lucide-react";

export default function TrainingPage() {
  return (
    <div className="relative min-h-screen bg-[#070a12] text-slate-100 flex flex-col justify-between">
      <GooeyNav />

      <main className="pt-36 pb-20 max-w-7xl mx-auto px-4 md:px-8 w-full space-y-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-400">
            Training & Development
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            High Performance Training Center
          </h1>
          <p className="text-slate-400 text-base leading-relaxed">
            Personalized player development protocols powered by biomechanical sensor arrays and real-time telemetry.
          </p>
        </div>

        <div className="h-[350px] w-full rounded-3xl overflow-hidden shadow-2xl border border-emerald-900/40">
          <GrassField className="w-full h-full" bladeCount={400} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-3">
            <Target className="w-6 h-6 text-emerald-400" />
            <h3 className="text-lg font-bold text-white">Targeted Net Sessions</h3>
            <p className="text-xs text-slate-400">Custom ball pitch maps and trajectory challenges.</p>
          </div>
          <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-3">
            <Shield className="w-6 h-6 text-teal-400" />
            <h3 className="text-lg font-bold text-white">Fielding Reflex Lab</h3>
            <p className="text-xs text-slate-400">Reaction timing and throwing velocity optimization.</p>
          </div>
          <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-3">
            <Dumbbell className="w-6 h-6 text-cyan-400" />
            <h3 className="text-lg font-bold text-white">Workload & Recovery</h3>
            <p className="text-xs text-slate-400">Fast bowler stress management & injury risk prevention.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
