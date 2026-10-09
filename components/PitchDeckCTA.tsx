"use client";

import React from "react";
import { FileText, Download, Users, TrendingUp, Award, ExternalLink } from "lucide-react";

export default function PitchDeckCTA() {
  return (
    <section className="relative py-20 bg-[#070b14] border-t border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-[#0a1226] via-[#0d1b38] to-[#0a1226] border border-cyan-500/30 rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.7)]">
          {/* Subtle Cyber Grid */}
          <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Description */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest">
                <FileText className="w-3.5 h-3.5" />
                Industry Pitch Deck & Vision
              </div>

              <h3 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
                DarkPixel Studios <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-300">Whitepaper</span>
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 font-mono leading-relaxed">
                Explore our full investment & design presentation for <strong className="text-white">Ceylon Checkmate</strong>. Review detailed market sizing (800M PC gamers, 600M chess players), competitive advantage analysis, monetization blueprint, and the 2-year production roadmap.
              </p>

              {/* Market Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-[#060a14] border border-slate-800">
                  <span className="text-lg sm:text-2xl font-black text-cyan-400 font-mono block">800M</span>
                  <span className="text-[10px] text-slate-400 font-mono uppercase">Global PC Gamers</span>
                </div>
                <div className="p-3 rounded-lg bg-[#060a14] border border-slate-800">
                  <span className="text-lg sm:text-2xl font-black text-emerald-400 font-mono block">600M</span>
                  <span className="text-[10px] text-slate-400 font-mono uppercase">Chess Players</span>
                </div>
                <div className="p-3 rounded-lg bg-[#060a14] border border-slate-800">
                  <span className="text-lg sm:text-2xl font-black text-rose-400 font-mono block">400M</span>
                  <span className="text-[10px] text-slate-400 font-mono uppercase">Action Gamers</span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="/docs/ceylon_checkmate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Pitch Deck (PDF)
                </a>

                <a
                  href="/docs/ceylon_checkmate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Deck in Browser
                </a>
              </div>
            </div>

            {/* Right Card / Studio Mission */}
            <div className="lg:col-span-5 bg-[#060a14]/90 border border-slate-800 rounded-xl p-6 font-mono space-y-4">
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block">
                DEVELOPER: DARKPIXEL STUDIOS
              </span>
              <p className="text-xs text-slate-300 leading-relaxed italic">
                &quot;DarkPixel Studios is an ambitious indie game development team dedicated to breaking traditional genre boundaries. Our goal with Ceylon Checkmate is to unite Strategy enthusiasts and Action gamers in high-stakes elimination duels.&quot;
              </p>
              <div className="border-t border-slate-800 pt-3 space-y-2 text-[11px] text-slate-400">
                <div className="flex justify-between">
                  <span>Engine:</span>
                  <span className="text-white font-bold">Unreal Engine 5</span>
                </div>
                <div className="flex justify-between">
                  <span>Target Platform:</span>
                  <span className="text-white font-bold">PC Windows / Steam</span>
                </div>
                <div className="flex justify-between">
                  <span>Budget Allocation:</span>
                  <span className="text-cyan-400 font-bold">20M Plan</span>
                </div>
                <div className="flex justify-between">
                  <span>Release Horizon:</span>
                  <span className="text-amber-400 font-bold">2 Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
