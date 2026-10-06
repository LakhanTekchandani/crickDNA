"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Dna, Menu, X, Activity } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Training", href: "/training" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const GooeyNav: React.FC = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* SVG Gooey Filter definition */}
      <svg className="hidden">
        <defs>
          <filter id="gooey-nav-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      <header
        className={cn(
          "fixed top-0 inset-x-0 z-40 transition-all duration-300 px-4 md:px-8 py-4",
          scrolled
            ? "bg-[#070a12]/85 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-slate-100 font-bold text-xl md:text-2xl tracking-tight transition-transform duration-200 active:scale-95"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 text-slate-950 shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all duration-300">
              <Dna className="w-5 h-5 transition-transform duration-500 group-hover:rotate-180" />
            </div>
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Crick<span className="text-emerald-400 font-extrabold">DNA</span>
            </span>
          </Link>

          {/* Desktop Gooey Navbar */}
          <nav className="hidden md:flex items-center relative p-1.5 rounded-full bg-slate-900/90 border border-slate-800/90 backdrop-blur-md shadow-2xl">
            <div className="flex items-center space-x-1 relative z-10">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 select-none",
                      isActive
                        ? "text-slate-950 font-bold"
                        : "text-slate-400 hover:text-slate-100"
                    )}
                  >
                    {isActive && (
                      <span
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 shadow-md shadow-emerald-500/30 -z-10 animate-in fade-in zoom-in-95 duration-200"
                        style={{ filter: "url(#gooey-nav-filter)" }}
                      />
                    )}
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Right Status Badge */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-800/40 text-xs text-emerald-400 font-medium tracking-wide">
            <Activity className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
            <span>Cricket Intelligence Platform</span>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative p-2.5 text-slate-300 hover:text-white rounded-lg bg-slate-900/80 border border-slate-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6 text-emerald-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="md:hidden absolute top-full inset-x-0 bg-[#0a0f1d]/95 backdrop-blur-xl border-b border-slate-800 p-6 space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between",
                      isActive
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                        : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                    )}
                  >
                    <span>{item.name}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-emerald-400" />}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </header>
    </>
  );
};
