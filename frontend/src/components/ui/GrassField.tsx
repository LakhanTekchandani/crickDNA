"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GrassFieldProps {
  className?: string;
  bladeCount?: number;
}

export const GrassField: React.FC<GrassFieldProps> = ({
  className,
  bladeCount = 450,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    const mouse = { x: width / 2, y: height / 2, radius: 180 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    canvas.parentElement?.addEventListener("mousemove", handleMouseMove);

    // Create Grass Blade Objects
    const blades: Array<{
      x: number;
      y: number;
      height: number;
      width: number;
      angle: number;
      speed: number;
      maxAngle: number;
      color: string;
      tipColor: string;
    }> = [];

    const baseGreenColors = [
      "hsl(150, 60%, 15%)",
      "hsl(145, 70%, 18%)",
      "hsl(155, 65%, 12%)",
      "hsl(140, 75%, 20%)",
    ];

    const tipGreenColors = [
      "hsl(142, 76%, 36%)",
      "hsl(142, 80%, 42%)",
      "hsl(150, 75%, 32%)",
      "hsl(135, 70%, 45%)",
    ];

    for (let i = 0; i < bladeCount; i++) {
      const colorIdx = Math.floor(Math.random() * baseGreenColors.length);
      blades.push({
        x: Math.random() * width,
        y: height,
        height: 60 + Math.random() * 80,
        width: 3 + Math.random() * 4,
        angle: (Math.random() - 0.5) * 0.1,
        speed: 0.015 + Math.random() * 0.02,
        maxAngle: 0.2 + Math.random() * 0.2,
        color: baseGreenColors[colorIdx],
        tipColor: tipGreenColors[colorIdx],
      });
    }

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Deep stadium ground ambient gradient
      const bgGradient = ctx.createLinearGradient(0, 0, 0, height);
      bgGradient.addColorStop(0, "rgba(7, 10, 18, 0.95)");
      bgGradient.addColorStop(0.6, "rgba(10, 24, 18, 0.85)");
      bgGradient.addColorStop(1, "rgba(6, 18, 12, 0.95)");
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // Draw Stadium Spotlight beam near cursor
      const spotlight = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        10,
        mouse.x,
        mouse.y,
        mouse.radius
      );
      spotlight.addColorStop(0, "rgba(34, 197, 94, 0.15)");
      spotlight.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = spotlight;
      ctx.fillRect(0, 0, width, height);

      // Pitch Crease Marks (Cricket Field Touch)
      ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(width * 0.2, height * 0.7);
      ctx.lineTo(width * 0.8, height * 0.7);
      ctx.stroke();

      // Render Grass Blades
      blades.forEach((blade) => {
        // Natural breeze sway
        const wind = Math.sin(time + blade.x * 0.01) * blade.maxAngle;

        // Distance to mouse for interactive wind push
        const dx = blade.x - mouse.x;
        const dy = blade.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let mouseForce = 0;

        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius);
          mouseForce = (dx > 0 ? 1 : -1) * force * 0.5;
        }

        const currentAngle = blade.angle + wind + mouseForce;
        const tipX = blade.x + Math.sin(currentAngle) * blade.height;
        const tipY = blade.y - Math.cos(currentAngle) * blade.height;
        const controlX = blade.x + Math.sin(currentAngle * 0.5) * (blade.height * 0.5);
        const controlY = blade.y - (blade.height * 0.5);

        // Blade gradient
        const bladeGrad = ctx.createLinearGradient(blade.x, blade.y, tipX, tipY);
        bladeGrad.addColorStop(0, blade.color);
        bladeGrad.addColorStop(1, blade.tipColor);

        ctx.beginPath();
        ctx.moveTo(blade.x - blade.width / 2, blade.y);
        ctx.quadraticCurveTo(controlX, controlY, tipX, tipY);
        ctx.quadraticCurveTo(controlX + blade.width / 2, controlY, blade.x + blade.width / 2, blade.y);
        ctx.closePath();

        ctx.fillStyle = bladeGrad;
        ctx.fill();
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      canvas.parentElement?.removeEventListener("mousemove", handleMouseMove);
    };
  }, [bladeCount]);

  return (
    <div className={cn("relative w-full overflow-hidden rounded-2xl border border-emerald-900/30 shadow-2xl", className)}>
      <canvas ref={canvasRef} className="block w-full h-full min-h-[300px]" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#070a12] via-transparent to-[#070a12]/80" />
    </div>
  );
};
