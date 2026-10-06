"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SplitFlapText } from "@/components/ui/SplitFlapText";

interface LandingExperienceProps {
  onComplete: () => void;
}

export const LandingExperience: React.FC<LandingExperienceProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<"zoom" | "split" | "reveal" | "exit">("zoom");
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Check if landing has already played in current browser session
    const hasPlayed = sessionStorage.getItem("crickdna_landing_played");
    if (hasPlayed) {
      setShouldRender(false);
      onComplete();
      return;
    }

    // Phase 1: Ball zooms toward camera (0s -> 1.4s)
    const timer1 = setTimeout(() => {
      setPhase("split");
    }, 1400);

    // Phase 2: Seam splits open (1.4s -> 2.2s)
    const timer2 = setTimeout(() => {
      setPhase("reveal");
    }, 2200);

    // Phase 3: Transition to home (4.2s)
    const timer3 = setTimeout(() => {
      setPhase("exit");
      sessionStorage.setItem("crickdna_landing_played", "true");
      setTimeout(() => {
        setShouldRender(false);
        onComplete();
      }, 700);
    }, 4400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      {phase !== "exit" && (
        <motion.div
          key="landing-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-[#070a12] flex items-center justify-center overflow-hidden"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-950/20 via-[#070a12] to-[#070a12] pointer-events-none" />

          {/* Realistic Cricket Ball halves container */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">

            {/* Left Ball Hemisphere */}
            <motion.div
              initial={{ scale: 0.1, x: 0, rotate: -45, opacity: 0 }}
              animate={
                phase === "zoom"
                  ? { scale: 1, x: 0, rotate: 0, opacity: 1 }
                  : phase === "split" || phase === "reveal"
                  ? { x: "-120%", opacity: 0.85, rotate: -15 }
                  : {}
              }
              transition={{
                duration: phase === "zoom" ? 1.3 : 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute left-0 w-1/2 h-full overflow-hidden z-20 pointer-events-none"
            >
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-red-600 via-red-800 to-red-950 border-r-4 border-slate-200/90 shadow-[inset_-12px_-12px_24px_rgba(0,0,0,0.8),inset_8px_8px_16px_rgba(255,255,255,0.2),0_20px_50px_rgba(0,0,0,0.9)] relative flex items-center justify-end">
                {/* Leather texture grain effect */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:6px_6px]" />
                {/* White Stitched Raised Seam on right edge */}
                <div className="absolute right-0 top-0 bottom-0 w-3 bg-slate-100 flex flex-col justify-between items-center py-2 shadow-md">
                  {Array.from({ length: 18 }).map((_, idx) => (
                    <div key={idx} className="w-2 h-0.5 bg-red-900 rotate-45 my-0.5" />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Ball Hemisphere */}
            <motion.div
              initial={{ scale: 0.1, x: 0, rotate: 45, opacity: 0 }}
              animate={
                phase === "zoom"
                  ? { scale: 1, x: 0, rotate: 0, opacity: 1 }
                  : phase === "split" || phase === "reveal"
                  ? { x: "120%", opacity: 0.85, rotate: 15 }
                  : {}
              }
              transition={{
                duration: phase === "zoom" ? 1.3 : 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute right-0 w-1/2 h-full overflow-hidden z-20 pointer-events-none"
            >
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-bl from-red-600 via-red-800 to-red-950 border-l-4 border-slate-200/90 shadow-[inset_12px_-12px_24px_rgba(0,0,0,0.8),inset_-8px_8px_16px_rgba(255,255,255,0.2),0_20px_50px_rgba(0,0,0,0.9)] relative flex items-center justify-start -translate-x-1/2">
                {/* Leather texture grain effect */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:6px_6px]" />
                {/* White Stitched Raised Seam on left edge */}
                <div className="absolute left-0 top-0 bottom-0 w-3 bg-slate-100 flex flex-col justify-between items-center py-2 shadow-md">
                  {Array.from({ length: 18 }).map((_, idx) => (
                    <div key={idx} className="w-2 h-0.5 bg-red-900 -rotate-45 my-0.5" />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Central Seam Beam Highlight */}
            {phase === "split" && (
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-y-0 w-1 bg-gradient-to-b from-emerald-300 via-teal-400 to-emerald-300 z-30 shadow-[0_0_30px_#34d399]"
              />
            )}

            {/* CrickDNA Brand Reveal via SplitFlapText */}
            {(phase === "split" || phase === "reveal") && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute inset-0 flex flex-col items-center justify-center z-10 space-y-4 px-4 text-center"
              >
                <SplitFlapText text="CrickDNA" speed={30} />
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                  className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-emerald-400/90 font-mono"
                >
                  Cricket Intelligence Platform
                </motion.p>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
