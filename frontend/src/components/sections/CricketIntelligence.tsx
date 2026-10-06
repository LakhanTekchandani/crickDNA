"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserCheck, BarChart3, LineChart, PieChart, Dumbbell, Compass } from "lucide-react";

const capabilities = [
  {
    icon: UserCheck,
    title: "Player Analysis",
    description: "Deep dimensional profiling of batting posture, bowling release consistency, and fielding reaction speeds.",
    color: "from-emerald-500/20 to-emerald-500/5",
    accent: "text-emerald-400",
  },
  {
    icon: BarChart3,
    title: "Match Intelligence",
    description: "Real-time win probability algorithms, pitch decay monitoring, and momentum shift detection.",
    color: "from-teal-500/20 to-teal-500/5",
    accent: "text-teal-400",
  },
  {
    icon: LineChart,
    title: "Performance Insights",
    description: "Automated streak tracking, pressure-index scoring, and boundary efficiency across pitch types.",
    color: "from-cyan-500/20 to-cyan-500/5",
    accent: "text-cyan-400",
  },
  {
    icon: PieChart,
    title: "Cricket Statistics",
    description: "Wagon wheels, pitch map clusters, beehive bounce charts, and over-by-over run rate velocity.",
    color: "from-emerald-500/20 to-emerald-500/5",
    accent: "text-emerald-400",
  },
  {
    icon: Dumbbell,
    title: "Training & Biomechanics",
    description: "Kinematic chain evaluation linking foot plant, shoulder rotation, and wrist snap to ball velocity.",
    color: "from-amber-500/20 to-amber-500/5",
    accent: "text-amber-400",
  },
  {
    icon: Compass,
    title: "Tactical Analysis",
    description: "Field placement optimization, bowler-vs-batter matchup matrices, and powerplay bowling plans.",
    color: "from-teal-500/20 to-teal-500/5",
    accent: "text-teal-400",
  },
];

export const CricketIntelligence: React.FC = () => {
  return (
    <section id="intelligence" className="py-28 relative bg-[#070a12]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-xs font-semibold text-teal-400 uppercase tracking-wider">
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Cricket Intelligence Suite
            </h2>
            <p className="text-slate-400 text-base">
              Built specifically for modern athletes, coaches, and sports science analysts.
            </p>
          </div>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl glass-panel p-8 border border-slate-800 hover:border-slate-700/80 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cap.color} border border-slate-700/50 flex items-center justify-center mb-6 shadow-inner`}>
                  <Icon className={`w-7 h-7 ${cap.accent} transition-transform duration-300 group-hover:scale-110`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
