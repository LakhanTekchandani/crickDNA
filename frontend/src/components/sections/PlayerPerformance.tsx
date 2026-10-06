"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Activity, Zap, TrendingUp, Flame, Award } from "lucide-react";

interface PlayerProfile {
  name: string;
  role: string;
  avatar: string;
  stats: {
    label: string;
    value: string;
    sub: string;
  }[];
  form: number[];
  recentMatches: { opponent: string; performance: string; result: string }[];
}

const profiles: Record<string, PlayerProfile> = {
  batter: {
    name: "Arya Sharma",
    role: "Top-Order Aggressor",
    avatar: "AS",
    stats: [
      { label: "Strike Rate", value: "158.4", sub: "+12% vs Pace" },
      { label: "Batting Avg", value: "48.2", sub: "Last 10 Innings" },
      { label: "Control Index", value: "89%", sub: "Minimal Edge %" },
      { label: "Max Bat Speed", value: "144 km/h", sub: "99th Percentile" },
    ],
    form: [68, 42, 104, 18, 85, 74],
    recentMatches: [
      { opponent: "Vs Sydney Strikers", performance: "104 (52b)", result: "MOTM" },
      { opponent: "Vs London Knights", performance: "85 (41b)", result: "WON" },
      { opponent: "Vs Mumbai Titans", performance: "74 (38b)", result: "WON" },
    ],
  },
  bowler: {
    name: "Vikram Malhotra",
    role: "Express Seam Specialist",
    avatar: "VM",
    stats: [
      { label: "Avg Velocity", value: "146.2 km/h", sub: "Peak 151.8 km/h" },
      { label: "Economy Rate", value: "6.42", sub: "Death Overs 7.1" },
      { label: "Wickets / Match", value: "2.8", sub: "Strike Rate 14.2" },
      { label: "Seam Deviation", value: "3.4°", sub: "Both Directions" },
    ],
    form: [3, 2, 4, 1, 3, 2],
    recentMatches: [
      { opponent: "Vs Melbourne Stars", performance: "4/22 (4.0 ov)", result: "MOTM" },
      { opponent: "Vs Delhi Capitals", performance: "3/18 (4.0 ov)", result: "WON" },
      { opponent: "Vs Perth Scorchers", performance: "2/29 (4.0 ov)", result: "WON" },
    ],
  },
  allrounder: {
    name: "Karan Verma",
    role: "Pace All-Rounder",
    avatar: "KV",
    stats: [
      { label: "Impact Rating", value: "94.8", sub: "Top 1% Impact" },
      { label: "Runs / Innings", value: "38.6", sub: "SR 148.2" },
      { label: "Wickets Total", value: "34", sub: "Econ 7.2" },
      { label: "Fielding Efficiency", value: "96.2%", sub: "14 Direct Hits" },
    ],
    form: [54, 32, 71, 45, 88, 62],
    recentMatches: [
      { opponent: "Vs Brisbane Heat", performance: "71* (32b) & 2/24", result: "MOTM" },
      { opponent: "Vs Gujarat Kings", performance: "45 (22b) & 1/19", result: "WON" },
      { opponent: "Vs Auckland Aces", performance: "88 (44b) & 3/31", result: "MOTM" },
    ],
  },
};

export const PlayerPerformance: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"batter" | "bowler" | "allrounder">("batter");
  const profile = profiles[activeTab];

  return (
    <section id="performance" className="py-28 relative bg-[#090d18] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            UI Product Preview • Simulated Telemetry
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Player DNA Performance Engine
          </h2>
          <p className="text-slate-400 text-base">
            Explore interactive telemetry dashboards designed to track form, biomechanics, and technical consistency.
          </p>

          {/* Role Switch Tabs */}
          <div className="flex items-center justify-center gap-2 pt-6">
            <button
              onClick={() => setActiveTab("batter")}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === "batter"
                  ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
                  : "glass-panel text-slate-400 hover:text-white"
              }`}
            >
              Top-Order Batter
            </button>
            <button
              onClick={() => setActiveTab("bowler")}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === "bowler"
                  ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
                  : "glass-panel text-slate-400 hover:text-white"
              }`}
            >
              Express Pacer
            </button>
            <button
              onClick={() => setActiveTab("allrounder")}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === "allrounder"
                  ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
                  : "glass-panel text-slate-400 hover:text-white"
              }`}
            >
              Pace All-Rounder
            </button>
          </div>
        </div>

        {/* Dashboard Preview Card Container */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl glass-panel p-6 sm:p-10 border border-slate-700/70 shadow-2xl space-y-8"
        >
          {/* Top Profile Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-slate-950 font-black text-2xl shadow-xl">
                {profile.avatar}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-bold text-white">{profile.name}</h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[11px] font-semibold text-emerald-300">
                    DEMO PROFILE
                  </span>
                </div>
                <p className="text-sm text-slate-400 font-medium">{profile.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>Peak Form Score: 96.4</span>
              </div>
            </div>
          </div>

          {/* 4 Key Stat Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {profile.stats.map((stat, i) => (
              <div key={i} className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800/90 space-y-2">
                <p className="text-xs text-slate-400 font-medium">{stat.label}</p>
                <p className="text-2xl sm:text-3xl font-black text-white font-mono">{stat.value}</p>
                <p className="text-[11px] text-emerald-400 font-semibold">{stat.sub}</p>
              </div>
            ))}
          </div>

          {/* Form Chart & Recent Matches */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Form Sparkline Visual */}
            <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span>Recent 6-Match Performance Trend</span>
                </h4>
                <span className="text-xs font-mono text-slate-500">Telemetry Log</span>
              </div>

              <div className="h-40 w-full flex items-end justify-between gap-3 pt-6 px-2 border-b border-slate-800">
                {profile.form.map((val, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                    <span className="text-[10px] font-mono text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      {val}
                    </span>
                    <div
                      style={{ height: `${Math.min(100, Math.max(20, val))}%` }}
                      className="w-full rounded-t-lg bg-gradient-to-t from-emerald-600 via-teal-400 to-emerald-300 group-hover:brightness-125 transition-all"
                    />
                    <span className="text-[10px] font-mono text-slate-500">M{idx + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Match Log */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Recent Match Log</span>
              </h4>

              <div className="space-y-3">
                {profile.recentMatches.map((m, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
                    <div>
                      <p className="font-semibold text-slate-200">{m.opponent}</p>
                      <p className="text-slate-400 font-mono mt-0.5">{m.performance}</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-950 text-emerald-400 font-bold border border-emerald-800/40">
                      {m.result}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <p className="text-[11px] text-slate-500 text-center font-mono pt-2">
            * All metric data shown above is simulated demonstration data representing CrickDNA UI capabilities.
          </p>

        </motion.div>

      </div>
    </section>
  );
};
