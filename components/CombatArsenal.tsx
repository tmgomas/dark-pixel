"use client";

import React, { useState } from "react";
import { Swords, Zap, Crosshair, Shield, Activity, Sparkles } from "lucide-react";

interface Weapon {
  id: string;
  name: string;
  region: string;
  type: string;
  damage: number;
  speed: number;
  range: number;
  crit: number;
  element: string;
  special: string;
  description: string;
  statsTag: string;
  accent: string;
}

export default function CombatArsenal() {
  const weapons: Weapon[] = [
    {
      id: "bow",
      name: "Solar Plasma Compound Bow",
      region: "Ochre (Indian Dynasty)",
      type: "Ranged Energy Artillery",
      damage: 88,
      speed: 72,
      range: 96,
      crit: 92,
      element: "Solar Plasma",
      special: "12x Headshot Combo Burst",
      description:
        "High-tension composite bow that compresses ambient solar radiation into focused plasma bolts. Capable of puncturing heavy mech plating and disintegrating energy shields at long distances.",
      statsTag: "PRECISION SNIPER",
      accent: "from-amber-400 to-yellow-200 border-amber-500/30 text-amber-300",
    },
    {
      id: "scythe",
      name: "Dual Thermal Energy Scythe",
      region: "Aegis (Chinese Imperial)",
      type: "Melee Fluid Sweeper",
      damage: 94,
      speed: 90,
      range: 65,
      crit: 85,
      element: "Thermal Crimson",
      special: "Acrobatic 360° Cleave",
      description:
        "Engineered for high-cadence aerial acrobatics. Blades superheat upon contact to slice through chassis armor while repelling mechanical swarms with fiery sweep arcs.",
      statsTag: "RAPID MELEE",
      accent: "from-red-500 to-rose-300 border-red-500/30 text-red-300",
    },
    {
      id: "hammer",
      name: "Cryo-Kinetic Heavy Hammer",
      region: "Fathom (Iceland Permafrost)",
      type: "Heavy Impact Crusher",
      damage: 98,
      speed: 55,
      range: 45,
      crit: 78,
      element: "Sub-Zero Cryo",
      special: "Hypothermia Frost Lockdown",
      description:
        "Enormous cryogenic sledge that shatters structural servos. Impacts flash-freeze mechs into brittle crystalline state, setting them up for lethal shatter combos.",
      statsTag: "HEAVY IMPACT",
      accent: "from-cyan-400 to-blue-300 border-cyan-500/30 text-cyan-300",
    },
    {
      id: "katana",
      name: "Shadow Kunai & Vibro-Katana",
      region: "Shroud (Japanese Mist)",
      type: "Covert Stealth Execution",
      damage: 86,
      speed: 98,
      range: 40,
      crit: 96,
      element: "High-Frequency Vibro",
      special: "Thermal Cloak Backstab",
      description:
        "Silent oscillating blades tailored for fog-covered ambushes. Bypasses optical sensors to sever neural processors of rogue AI bots instantly.",
      statsTag: "COVERT STEALTH",
      accent: "from-purple-400 to-violet-300 border-purple-500/30 text-purple-300",
    },
  ];

  const [activeWeapon, setActiveWeapon] = useState<Weapon>(weapons[0]);

  return (
    <section id="arsenal" className="relative py-24 bg-[#070b14] border-t border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-rose-500/10 border border-rose-500/30 text-rose-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Swords className="w-3.5 h-3.5" />
            Tactical Hardware
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            The Regional <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-cyan-300">Arsenal</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 font-mono">
            Victors of the 3D chess duel unlock the native weapon forged for that sector&apos;s rogue AI threats.
          </p>
        </div>

        {/* Weapons Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Weapon Cards Selector Column */}
          <div className="lg:col-span-5 space-y-3">
            {weapons.map((w) => {
              const isSelected = activeWeapon.id === w.id;
              return (
                <button
                  key={w.id}
                  onClick={() => setActiveWeapon(w)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group ${
                    isSelected
                      ? "bg-[#0d152a] border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.2)]"
                      : "bg-[#0a0f1d]/70 border-slate-800 hover:border-slate-700 hover:bg-[#0c1324]"
                  }`}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                      {w.region}
                    </span>
                    <h4 className={`text-base font-bold uppercase ${isSelected ? "text-white" : "text-slate-300 group-hover:text-white"}`}>
                      {w.name}
                    </h4>
                    <span className="text-xs font-mono text-cyan-400">{w.type}</span>
                  </div>

                  <div className={`p-2 rounded-lg border ${isSelected ? "bg-cyan-500/20 border-cyan-400 text-cyan-300" : "bg-slate-800/40 border-slate-800 text-slate-500"}`}>
                    <Swords className="w-5 h-5" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Weapon Diagnostic & Inspection Screen */}
          <div className="lg:col-span-7 bg-[#0a0f1d]/90 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-xl relative">
            {/* Top Diagnostic Badges */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800">
              <span className="px-3 py-1 rounded bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono font-bold text-cyan-300 uppercase">
                {activeWeapon.statsTag}
              </span>
              <span className="text-xs font-mono text-slate-400">
                PROVENANCE: <span className="text-amber-300 font-bold">{activeWeapon.region}</span>
              </span>
            </div>

            {/* Weapon Title & Description */}
            <div className="py-6">
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                {activeWeapon.name}
              </h3>
              <p className="mt-3 text-sm text-slate-300 font-mono leading-relaxed">
                {activeWeapon.description}
              </p>
            </div>

            {/* Elemental & Special Abilities Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="p-3.5 rounded-lg bg-[#060a14] border border-slate-800">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-1">
                  Elemental Infusion
                </span>
                <span className="text-sm font-mono font-bold text-cyan-400 flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  {activeWeapon.element}
                </span>
              </div>

              <div className="p-3.5 rounded-lg bg-[#060a14] border border-slate-800">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-1">
                  Signature Combat Perk
                </span>
                <span className="text-sm font-mono font-bold text-amber-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  {activeWeapon.special}
                </span>
              </div>
            </div>

            {/* Performance Metric Bars */}
            <div className="space-y-4 pt-4 border-t border-slate-800 font-mono">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-400 uppercase">Kinetic Damage Output</span>
                  <span className="text-cyan-400 font-bold">{activeWeapon.damage} / 100</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-sky-400 rounded-full transition-all duration-500"
                    style={{ width: `${activeWeapon.damage}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-400 uppercase">Cadence & Attack Velocity</span>
                  <span className="text-amber-400 font-bold">{activeWeapon.speed} / 100</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-yellow-300 rounded-full transition-all duration-500"
                    style={{ width: `${activeWeapon.speed}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-400 uppercase">Engagement Range</span>
                  <span className="text-rose-400 font-bold">{activeWeapon.range} / 100</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-rose-500 to-red-400 rounded-full transition-all duration-500"
                    style={{ width: `${activeWeapon.range}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-400 uppercase">Critical Strike Probability</span>
                  <span className="text-purple-400 font-bold">{activeWeapon.crit} / 100</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-violet-400 rounded-full transition-all duration-500"
                    style={{ width: `${activeWeapon.crit}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
