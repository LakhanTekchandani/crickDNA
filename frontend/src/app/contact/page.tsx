"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GooeyNav } from "@/components/navigation/GooeyNav";
import { Footer } from "@/components/footer/Footer";
import { ArrowLeft, Mail, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#070a12] text-slate-100 flex flex-col justify-between">
      <GooeyNav />

      <main className="pt-36 pb-20 max-w-7xl mx-auto px-4 md:px-8 w-full space-y-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-400">
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Connect with CrickDNA Team
          </h1>
          <p className="text-slate-400 text-base leading-relaxed">
            Interested in deploying CrickDNA at your academy, club, or franchise? Contact our team.
          </p>
        </div>

        <div className="max-w-2xl rounded-3xl glass-panel p-8 border border-slate-700/80 space-y-6">
          {submitted ? (
            <div className="text-center py-10 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h3 className="text-2xl font-bold text-white">Message Received</h3>
              <p className="text-xs text-slate-400">Thank you for reaching out. A CrickDNA specialist will respond shortly.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="alex@cricketacademy.org"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your squad, academy, or technology inquiry..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-emerald-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-sm shadow-xl hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
