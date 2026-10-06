"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Understand your game",
    desc: "Ingest automated match footage, sensor telemetry, and performance logs into your central DNA profile.",
  },
  {
    num: "02",
    title: "Identify strengths & gaps",
    desc: "AI algorithms highlight technical flaws, dismissal patterns, and tactical blind spots.",
  },
  {
    num: "03",
    title: "Train with purpose",
    desc: "Execute customized training protocols designed specifically to remedy your identified gaps.",
  },
  {
    num: "04",
    title: "Track development",
    desc: "Monitor your trajectory across matches with verifiable biomechanical and scoring growth stats.",
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 relative bg-[#090d18] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-xs font-semibold text-teal-400 uppercase tracking-wider">
            Workflow Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            How CrickDNA Works
          </h2>
          <p className="text-slate-400 text-base">
            Four simple steps from raw match data to repeatable athletic excellence.
          </p>
        </div>

        {/* 4 Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="relative p-8 rounded-2xl glass-panel glass-panel-hover border border-slate-800 space-y-4"
            >
              <span className="text-4xl font-black text-emerald-400 font-mono opacity-90">
                {step.num}
              </span>
              <h3 className="text-xl font-bold text-white">{step.title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
