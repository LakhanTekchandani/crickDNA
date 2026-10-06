"use client";

import React from "react";
import Link from "next/link";
import { GooeyNav } from "@/components/navigation/GooeyNav";
import { Footer } from "@/components/footer/Footer";
import { ArrowLeft, Dna, Cpu, Award } from "lucide-react";

export default function AboutPage() {
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
            About CrickDNA
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Decryption of Cricket Performance
          </h1>
          <p className="text-slate-400 text-base leading-relaxed">
            CrickDNA is a modern sports-technology platform dedicated to player development, match intelligence, and athletic insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-3">
            <Dna className="w-6 h-6 text-emerald-400" />
            <h3 className="text-lg font-bold text-white">Our Mission</h3>
            <p className="text-xs text-slate-400">To unlock every player&apos;s true potential through data-driven sports science.</p>
          </div>
          <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-3">
            <Cpu className="w-6 h-6 text-teal-400" />
            <h3 className="text-lg font-bold text-white">Technology Stack</h3>
            <p className="text-xs text-slate-400">Computer vision telemetry, biomechanical modeling, and predictive match analytics.</p>
          </div>
          <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-3">
            <Award className="w-6 h-6 text-cyan-400" />
            <h3 className="text-lg font-bold text-white">Athletic Integrity</h3>
            <p className="text-xs text-slate-400">Designed for serious athletes, academies, and professional sports scientists.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
