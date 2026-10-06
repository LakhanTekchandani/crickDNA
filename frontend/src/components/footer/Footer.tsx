"use client";

import React from "react";
import Link from "next/link";
import { Dna, Share2, Globe, MessageSquare, Video } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05070d] border-t border-slate-800/80 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Logo & Description */}
          <div className="space-y-2 max-w-sm">
            <Link href="/" className="flex items-center gap-2.5 text-white font-bold text-xl tracking-tight">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-bold">
                <Dna className="w-5 h-5" />
              </div>
              <span>Crick<span className="text-emerald-400">DNA</span></span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              Modern cricket technology platform delivering player-specific intelligence, biomechanical insights, and performance development.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <Link href="/training" className="hover:text-emerald-400 transition-colors">Training</Link>
            <Link href="/about" className="hover:text-emerald-400 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link>
          </div>

          {/* Social Icons Placeholders */}
          <div className="flex items-center gap-4 text-slate-400">
            <a href="#" className="p-2.5 rounded-lg bg-slate-900 hover:text-emerald-400 hover:bg-slate-800 transition-colors" aria-label="Share">
              <Share2 className="w-4 h-4" />
            </a>
            <a href="#" className="p-2.5 rounded-lg bg-slate-900 hover:text-emerald-400 hover:bg-slate-800 transition-colors" aria-label="Global Network">
              <Globe className="w-4 h-4" />
            </a>
            <a href="#" className="p-2.5 rounded-lg bg-slate-900 hover:text-emerald-400 hover:bg-slate-800 transition-colors" aria-label="Community">
              <MessageSquare className="w-4 h-4" />
            </a>
            <a href="#" className="p-2.5 rounded-lg bg-slate-900 hover:text-emerald-400 hover:bg-slate-800 transition-colors" aria-label="Reels">
              <Video className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-2">
          <p>© {new Date().getFullYear()} CrickDNA Tech Inc. All rights reserved.</p>
          <p>Cricket • Intelligence • Performance • Technology</p>
        </div>

      </div>
    </footer>
  );
};
