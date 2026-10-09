"use client";

import React, { useState } from "react";
import { Swords, Trophy, Cpu, ShieldCheck, Flame, ChevronRight, Zap } from "lucide-react";

export default function CoreLoop() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "01",
      title: "3D Chess Duel",
      subtitle: "Sudden Death Match",
      icon: Trophy,
      color: "from-amber-500 to-yellow-300",
      accent: "text-amber-400 border-amber-500/40 bg-amber-950/20",
      description:
        "Players face each other in a realistic 3D Chess match. Every move counts under the brutal 'Sudden Death' rule: the moment you are checkmated, you are instantly eliminated from the fortress and your current run terminates.",
      details: [
        "15 to 20 minute high-tension speed chess",
        "Strict ELO-based matchmaking pairing equals",
        "AI Coach available for practice and tactical openings",
        "Real-time anti-cheat via AI Arbiter",
      ],
      tag: "STRATEGY PHASE",
    },
    {
      id: "02",
      title: "Weapon Reward",
      subtitle: "Arsenal Synthesis",
      icon: Swords,
      color: "from-cyan-500 to-sky-300",
      accent: "text-cyan-400 border-cyan-500/40 bg-cyan-950/20",
      description:
        "The victor of the chess duel claims the sovereign weapon forged for that specific territory: Solar Plasma Bow (Ochre), Dual Thermal Scythe (Aegis), Cryo-Kinetic Hammer (Fathom), or Shadow Blades (Shroud).",
      details: [
        "Weapons embody regional lore and combat mechanics",
        "Elemental bonuses against specific rogue AI mechs",
        "Unique combo sets and ultimate overdrive abilities",
        "Loot upgrade slots enabled upon victory",
      ],
      tag: "EQUIPMENT PHASE",
    },
    {
      id: "03",
      title: "Action Combat",
      subtitle: "Infiltrate & Purge",
      icon: Flame,
      color: "from-rose-500 to-red-400",
      accent: "text-rose-400 border-rose-500/40 bg-rose-950/20",
      description:
        "Armed with your regional weapon, descend directly into the fortress combat arena. Engage waves of rogue AI security mechs and mechanical guardians in visceral third-person action.",
      details: [
        "High-cadence combos (12x, 18x combo multipliers)",
        "Precision headshots and directional parries",
        "Dynamic environmental hazards (ice storms, lasers)",
        "Unreal Engine 5 ragdoll physics & kinetic feedback",
      ],
      tag: "COMBAT PHASE",
    },
    {
      id: "04",
      title: "Chip Extraction",
      subtitle: "+5,000 XP & Telemetry",
      icon: Cpu,
      color: "from-cyan-400 to-teal-300",
      accent: "text-teal-400 border-teal-500/40 bg-teal-950/20",
      description:
        "Eliminate the sector core guardian to extract the region's encrypted Microchip. Integrating each chip decrypts AI subsystems, boosts player attributes, and permanently clears the regional sector.",
      details: [
        "1 of 5 Regional Microchips acquired per sector",
        "Instant XP boost (+5,000 XP) and stat overclocking",
        "Permanently clears regional sector lockouts",
        "Unlocks free pathing to adjacent biomes",
      ],
      tag: "EXTRACTION PHASE",
    },
    {
      id: "05",
      title: "Galland Fortress",
      subtitle: "Final Liberation",
      icon: ShieldCheck,
      color: "from-purple-500 to-pink-400",
      accent: "text-purple-400 border-purple-500/40 bg-purple-950/20",
      description:
        "Combine all 5 Microchips to override the forcefield surrounding Galland Fortress. Infiltrate the central monolith to confront the Supreme Rogue AI and rescue your imprisoned life partner.",
      details: [
        "Requires all 5 regional microchips to access",
        "Multi-phase rogue AI architect boss duel",
        "Unravel the truth behind the clone experiment",
        "Reclaim sovereignty over the island of Ceylon",
      ],
      tag: "ENDGAME PHASE",
    },
  ];

  return (
    <section id="core-loop" className="relative py-24 bg-[#070b14] border-t border-slate-900 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Zap className="w-3.5 h-3.5" />
            The Gameplay Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            The Core Survival <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-amber-300">Loop</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 font-mono">
            A seamless bridge between high-intellect chess strategy and high-reflex third-person combat.
          </p>
          <div className="mt-4 inline-flex items-center justify-center gap-2 text-xs font-mono font-bold text-slate-300 bg-[#0a1020] px-4 py-2 rounded-full border border-slate-800">
            <span className="text-amber-400">CHESS</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-cyan-400">WEAPON</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-rose-400">COMBAT</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-teal-400">CHIP</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-purple-400">GALLAND FORTRESS</span>
          </div>
        </div>

        {/* Step Selector Buttons (Horizontal HUD Line) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isCurrent = activeStep === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 rounded-lg border transition-all relative overflow-hidden flex flex-col justify-between ${
                  isCurrent
                    ? "bg-[#0f172a] border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.25)]"
                    : "bg-[#0a0f1d]/60 border-slate-800 hover:border-slate-700 hover:bg-[#0d1424]"
                }`}
              >
                {/* Active Indicator Bar */}
                {isCurrent && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-amber-400" />
                )}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-black ${isCurrent ? "text-cyan-400" : "text-slate-500"}`}>
                    STEP {step.id}
                  </span>
                  <div className={`p-1.5 rounded ${isCurrent ? "bg-cyan-500/20 text-cyan-300" : "bg-slate-800/60 text-slate-400"}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h4 className={`text-sm font-bold tracking-wide uppercase ${isCurrent ? "text-white" : "text-slate-300"}`}>
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5 truncate">{step.subtitle}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0a0f1d]/90 border border-slate-800 rounded-2xl p-6 sm:p-10 backdrop-blur-xl">
          {/* Left Details Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono font-bold tracking-wider uppercase border bg-slate-900/80 border-slate-700 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              {steps[activeStep].tag}
            </div>

            <div>
              <span className="text-4xl font-mono font-black text-slate-600 block mb-1">
                // {steps[activeStep].id}
              </span>
              <h3 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
                {steps[activeStep].title} :{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-amber-300">
                  {steps[activeStep].subtitle}
                </span>
              </h3>
            </div>

            <p className="text-sm sm:text-base text-slate-300 font-mono leading-relaxed">
              {steps[activeStep].description}
            </p>

            {/* Tactical Sub-points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {steps[activeStep].details.map((detail, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded bg-[#060a14] border border-slate-800/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <span className="text-xs text-slate-300 font-mono">{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Video / HUD Artifact Preview */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden border border-cyan-500/30 shadow-[0_0_30px_rgba(0,0,0,0.8)] bg-black group">
              {/* Actual Video Preview of Microchip Acquisition */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-[16/10] object-cover filter brightness-90 group-hover:scale-105 transition-all duration-500"
              >
                <source src="/videos/chip_pickup.mp4" type="video/mp4" />
              </video>

              {/* HUD Frame Overlay */}
              <div className="absolute inset-0 border border-cyan-400/20 pointer-events-none p-3 flex flex-col justify-between">
                <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400 bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm">
                  <span>REGION CLEARED: SHROUD</span>
                  <span className="text-emerald-400 font-bold">+5,000 XP</span>
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-300 bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm">
                  <span>MICROCHIP [1/5] ACQUIRED</span>
                  <span className="text-cyan-300">UE5 ACTIVE</span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-center text-slate-400 font-mono mt-3">
              Direct in-engine capture of the Microchip extraction gauntlet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
