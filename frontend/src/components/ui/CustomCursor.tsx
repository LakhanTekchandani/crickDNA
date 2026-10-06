"use client";

import React, { useEffect, useState } from "react";

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(true);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    if (window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsPointer(false);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive =
          target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") !== null ||
          target.closest("a") !== null ||
          target.getAttribute("role") === "button" ||
          target.classList.contains("interactive");

        setIsHovered(isInteractive);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!isPointer) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-emerald-400 pointer-events-none z-50 transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${pos.x - 4}px, ${pos.y - 4}px, 0) scale(${isHovered ? 1.5 : 1})`,
        }}
      />
      {/* Outer Ring */}
      <div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-emerald-500/40 pointer-events-none z-50 transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${pos.x - 16}px, ${pos.y - 16}px, 0) scale(${isHovered ? 1.8 : 1})`,
          backgroundColor: isHovered ? "rgba(52, 211, 153, 0.08)" : "transparent",
        }}
      />
    </>
  );
};
