"use client";

import React from "react";
import { ShieldCheck, Brain, Bot, Radio, Target, Scale, Award } from "lucide-react";

export default function GameSystems() {
  const systems = [
    {
      icon: Target,
      title: "Sudden Death Rule",
      category: "CORE INTEGRITY",
      badge: "ELIMINATION",
      color: "text-rose-400 border-rose-500/30 bg-rose-950/20",
      description:
        "There are no second chances on the board. The exact millisecond your King is checkmated, your cybernetic link is severed and you are permanently booted from the fortress for that run.",
    },
    {
      icon: Scale,
      title: "Strict ELO Matchmaking",
      category: "FAIR PLAY",
      badge: "GLOBAL RANK",
      color: "text-amber-400 border-amber-500/30 bg-amber-950/20",
      description:
        "Novice chess players will never be pitted against Grandmasters. Our proprietary ELO algorithms match you precisely against rivals of equivalent tactical intellect and combat skill.",
    },
    {
      icon: Bot,
      title: "AI Bot Coach",
      category: "TRAINING FACILITY",
      badge: "NEURAL TUTOR",
      color: "text-cyan-400 border-cyan-500/30 bg-cyan-950/20",
      description:
        "A personal synthetic grandmaster that analyzes your chess openings, identifies tactical blindspots, and guides you through combat combo simulations to hone your reflexes.",
    },
    {
      icon: ShieldCheck,
      title: "AI Bot Arbiter",
      category: "ANTI-CHEAT ENGINE",
      badge: "SUB-SECOND DETECTION",
      color: "text-emerald-400 border-emerald-500/30 bg-emerald-950/20",
      description:
        "An omniscient virtual referee continuously auditing player inputs in real time. Engine analysis tools, macro scripts, or aimbots are identified and purged within milliseconds.",
    },
    {
      icon: Radio,
      title: "Streamer & Esports Mode",
      category: "BROADCAST READY",
      badge: "HIGH TENSION",
      color: "text-purple-400 border-purple-500/30 bg-purple-950/20",
      description:
        "Designed from the ground up for Twitch and YouTube streamers. Features spectator cameras, live board evaluation bars, Twitch chat voting, and nail-biting sudden death countdowns.",
    },
    {
      icon: Brain,
      title: "Two Skills Required",
      category: "HYBRID GENRE",
      badge: "BRAIN + BRAWN",
      color: "text-sky-400 border-sky-500/30 bg-sky-950/20",
      description:
        "Pure reflex gamers will hit a wall without strategy. Pure chess theorists cannot survive mech swarms without combat dexterity. Only true polymaths can liberate Ceylon.",
    },
  ];

  return (
    <section id="systems" className="relative py-24 bg-[#05070a] border-t border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Competitive Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            Game Systems & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-300">Innovations</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 font-mono">
            Unifying strategy chess enthusiasts with adrenaline-fueled action gamers through high-stakes competitive integrity.
          </p>
        </div>

        {/* Systems Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {systems.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="bg-[#0a0f1d]/80 border border-slate-800 hover:border-cyan-500/40 p-6 sm:p-7 rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                      {s.category}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase border ${s.color}`}>
                      {s.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-700/80 group-hover:border-cyan-400 transition-colors">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-bold uppercase text-white tracking-wide group-hover:text-cyan-300 transition-colors">
                      {s.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 font-mono leading-relaxed mt-3">
                    {s.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>SUBSYSTEM 0{idx + 1}</span>
                  <span className="text-cyan-400 font-bold group-hover:translate-x-1 transition-transform">
                    VERIFIED // READY
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
