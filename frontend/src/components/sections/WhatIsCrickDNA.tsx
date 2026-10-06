"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, TrendingUp, Cpu, Award } from "lucide-react";

export const WhatIsCrickDNA: React.FC = () => {
  return (
    <section className="py-24 relative bg-[#090d18] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            Concept & Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            What is <span className="text-emerald-400">CrickDNA</span>?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Every cricketer possesses a unique athletic fingerprint. CrickDNA captures every dimension of your game—transforming raw match data into actionable player growth.
          </p>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="glass-panel glass-panel-hover p-6 rounded-2xl space-y-4 border border-slate-800"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Role Profiling</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Deep evaluation of your specific playing archetype—whether an aggressive opening hitter or an death-overs yorker specialist.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="glass-panel glass-panel-hover p-6 rounded-2xl space-y-4 border border-slate-800"
          >
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Biomechanical Matrix</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Precision camera telemetry assessing bat speed, hip rotation, arm angle, and footwork alignment per ball.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="glass-panel glass-panel-hover p-6 rounded-2xl space-y-4 border border-slate-800"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Strength & Gap Mapping</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Pinpoints exact technical vulnerabilities—like short-ball discomfort or spin boundary dot-rate—before opponents do.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="glass-panel glass-panel-hover p-6 rounded-2xl space-y-4 border border-slate-800"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Purposeful Training</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Connects match performance directly to individualized training drills, ensuring every net session has clear ROI.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
