"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SplitFlapTextProps {
  text: string;
  className?: string;
  speed?: number;
  onComplete?: () => void;
}

const CHAR_SET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ".split("");

export const SplitFlapText: React.FC<SplitFlapTextProps> = ({
  text,
  className,
  speed = 40,
  onComplete,
}) => {
  const targetChars = text.toUpperCase().split("");
  const [currentChars, setCurrentChars] = useState<string[]>(
    targetChars.map(() => "A")
  );
  const [completed, setCompleted] = useState<boolean[]>(
    targetChars.map(() => false)
  );

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    targetChars.forEach((targetChar, index) => {
      let charIndex = 0;
      const targetCharIdx = CHAR_SET.indexOf(targetChar);

      const flipInterval = setInterval(() => {
        charIndex = (charIndex + 1) % CHAR_SET.length;
        const currentChar = CHAR_SET[charIndex];

        setCurrentChars((prev) => {
          const next = [...prev];
          next[index] = currentChar;
          return next;
        });

        if (currentChar === targetChar || charIndex >= (targetCharIdx >= 0 ? targetCharIdx : CHAR_SET.length - 1)) {
          clearInterval(flipInterval);
          setCurrentChars((prev) => {
            const next = [...prev];
            next[index] = targetChar;
            return next;
          });
          setCompleted((prev) => {
            const next = [...prev];
            next[index] = true;
            if (next.every(Boolean) && onComplete) {
              onComplete();
            }
            return next;
          });
        }
      }, speed + index * 12);

      timeouts.push(flipInterval as unknown as NodeJS.Timeout);
    });

    return () => {
      timeouts.forEach((t) => clearInterval(t));
    };
  }, [text, speed]);

  return (
    <div className={cn("inline-flex items-center gap-1.5 md:gap-3.5 select-none", className)}>
      {targetChars.map((char, i) => {
        const displayChar = currentChars[i] || " ";
        return (
          <div
            key={i}
            className="relative w-9 h-14 md:w-16 md:h-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 rounded-md border border-slate-700/80 shadow-2xl flex flex-col items-center justify-center overflow-hidden perspective-1000"
          >
            {/* Center seam line */}
            <div className="absolute inset-x-0 top-1/2 h-[1px] bg-black/90 z-20 shadow-[0_1px_0_rgba(255,255,255,0.08)]" />

            {/* Top Half */}
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden flex items-end justify-center rounded-t-md z-10">
              <span className="translate-y-1/2 font-mono text-2xl md:text-5xl font-black tracking-widest text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.4)]">
                {displayChar}
              </span>
            </div>

            {/* Bottom Half */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden flex items-start justify-center rounded-b-md z-10">
              <span className="-translate-y-1/2 font-mono text-2xl md:text-5xl font-black tracking-widest text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.4)]">
                {displayChar}
              </span>
            </div>

            {/* Metallic side rivets */}
            <div className="absolute left-0.5 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-slate-600 z-30" />
            <div className="absolute right-0.5 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-slate-600 z-30" />
          </div>
        );
      })}
    </div>
  );
};
