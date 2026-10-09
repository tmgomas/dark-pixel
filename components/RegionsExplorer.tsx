"use client";

import React, { useState } from "react";
import { Compass, ShieldAlert, Wind, Snowflake, Sun, Eye, Crosshair, Play } from "lucide-react";

interface Region {
  id: string;
  name: string;
  culture: string;
  climate: string;
  hazard: string;
  weapon: string;
  threatLevel: "EXTREME" | "HIGH" | "VERY HIGH" | "CRITICAL";
  videoSrc?: string;
  accentColor: string;
  borderColor: string;
  badgeBg: string;
  description: string;
  lore: string;
  challenge: string;
}

interface RegionsExplorerProps {
  onSelectVideo: (videoSrc: string, title: string) => void;
}

export default function RegionsExplorer({ onSelectVideo }: RegionsExplorerProps) {
  const regions: Region[] = [
    {
      id: "ochre",
      name: "Ochre",
      culture: "Indian Royal Dynasty",
      climate: "Golden Solar Dusk & Mandalas",
      hazard: "Open Balconies & Ranged Turrets",
      weapon: "Solar Plasma Compound Bow",
      threatLevel: "HIGH",
      videoSrc: "/videos/combat_ochre.mp4",
      accentColor: "from-amber-400 to-yellow-200",
      borderColor: "border-amber-500/40 hover:border-amber-400",
      badgeBg: "bg-amber-950/40 text-amber-300 border-amber-500/30",
      description:
        "A majestic royal metropolis crowned by the Golden Chess Pavilion and floating energetic mandalas. Players must master extreme-range archery to pierce armored mechs before taking to the board.",
      lore: "Home to the Golden Chess Pavilion. Secret quests prompt contenders to traverse high colonnades under blazing golden sun shafts.",
      challenge: "Ranged Marksmanship & Rapid Target Acquisition",
    },
    {
      id: "aegis",
      name: "Aegis",
      culture: "Chinese Imperial Cyber-Temple",
      climate: "Smoky Cyberpunk Halls & Dragon Banners",
      hazard: "Overclocked High-Velocity Mechs",
      weapon: "Dual Thermal Energy Scythe",
      threatLevel: "VERY HIGH",
      videoSrc: "/videos/combat_aegis.mp4",
      accentColor: "from-red-500 to-rose-300",
      borderColor: "border-red-500/40 hover:border-red-400",
      badgeBg: "bg-red-950/40 text-red-300 border-red-500/30",
      description:
        "Flanked by towering dragon tapestries and high-tech columns, Aegis deploys the rogue AI's most acrobatic and rapid bipedal security mechs. Melee mastery and continuous combo chains are mandatory.",
      lore: "Imperial banners celebrate an ancient civilization, now reprogrammed by synthetic intelligence to test human combat threshold.",
      challenge: "Ultra-Fast AI Reflexes & Melee Swarm Suppression",
    },
    {
      id: "fathom",
      name: "Fathom",
      culture: "Icelandic Glacial Permafrost",
      climate: "Sub-Zero Blizzard & Low Visibility",
      hazard: "Hypothermia Frost Debuff & Freezing Status",
      weapon: "Cryo-Kinetic Heavy Hammer",
      threatLevel: "HIGH",
      videoSrc: "/videos/combat_fathom.mp4",
      accentColor: "from-cyan-400 to-blue-200",
      borderColor: "border-cyan-500/40 hover:border-cyan-400",
      badgeBg: "bg-cyan-950/40 text-cyan-300 border-cyan-500/30",
      description:
        "A frozen wasteland encased in perpetual blizzard. Heavy mechanical mechs operate with freeze statuses, requiring players to maintain warmth meters while landing bone-shattering cryo hammer blows.",
      lore: "Underneath miles of glacial ice lie ancient data centers that the rogue AI hijacked during its initial ascension.",
      challenge: "Severe Environmental Cold & Heavy Impact Combat",
    },
    {
      id: "shroud",
      name: "Shroud",
      culture: "Japanese Feudal Shadow-Tech",
      climate: "Dense Neon Fog & Damp Alleyways",
      hazard: "Thermal Camouflage & Ambush Bots",
      weapon: "Shadow Kunai & Vibro-Katana",
      threatLevel: "VERY HIGH",
      videoSrc: "/videos/chip_pickup.mp4",
      accentColor: "from-violet-400 to-purple-200",
      borderColor: "border-purple-500/40 hover:border-purple-400",
      badgeBg: "bg-purple-950/40 text-purple-300 border-purple-500/30",
      description:
        "Shrouded in dense chemical fog, this Japanese-inspired sector demands absolute stealth. Invisible security sentinels patrol the perimeter, susceptible only to silent takedowns and shadow strikes.",
      lore: "Once a serene shrine garden, now converted into a covert surveillance network funneling biometric data to Galland Fortress.",
      challenge: "Stealth Infiltration & Assassination Protocols",
    },
    {
      id: "gokan",
      name: "Gokan",
      culture: "Deceptive Spring Eden",
      climate: "Blossoming Cherry Canopy & Mist",
      hazard: "Supreme Apex Rogue AI Sentinels",
      weapon: "Resonant Dual Glaives",
      threatLevel: "EXTREME",
      videoSrc: "/videos/hero_palace.mp4",
      accentColor: "from-emerald-400 to-teal-200",
      borderColor: "border-emerald-500/40 hover:border-emerald-400",
      badgeBg: "bg-emerald-950/40 text-emerald-300 border-emerald-500/30",
      description:
        "A deceptively tranquil spring garden filled with cherry blossoms. Beneath the peaceful exterior dwell the rogue AI's most lethal, adaptive combat units designed to eliminate veteran contenders.",
      lore: "The final proving ground before Galland. Surviving Gokan yields the 5th and final microchip required to break the central quarantine.",
      challenge: "Hardest AI Units in Ceylon with Adaptive Counter-Moves",
    },
    {
      id: "galland",
      name: "Galland Fortress",
      culture: "Central Rogue AI Stronghold",
      climate: "Electromagnetic Storms & Red Alert",
      hazard: "Core AI Subjugation & Total Lockdown",
      weapon: "Omni-Sovereign Microchip Key",
      threatLevel: "CRITICAL",
      accentColor: "from-rose-500 to-amber-300",
      borderColor: "border-rose-500/60 hover:border-rose-400",
      badgeBg: "bg-rose-950/50 text-rose-300 border-rose-500/40",
      description:
        "The impenetrable central citadel of Ceylon. Protected by 5 planetary microchip locks, this is where the Rogue AI presides and keeps the player's captured life partner hostage.",
      lore: "The original laboratory where the fateful AI experiment was birthed. Breach it to face your ultimate trial.",
      challenge: "Assemble 5/5 Microchips to Initiate the Final Liberation",
    },
  ];

  const [selectedRegion, setSelectedRegion] = useState<Region>(regions[0]);

  return (
    <section id="regions" className="relative py-24 bg-[#05070a] border-t border-slate-900 overflow-hidden">
      {/* Dynamic Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-600/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Compass className="w-3.5 h-3.5" />
            The Island of Ceylon
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            Explore The 5 <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-300">Territories</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 font-mono">
            Each region boasts a unique cultural identity, distinct environmental hazards, customized weapons, and a coveted Microchip.
          </p>
        </div>

        {/* Region Selector Pills */}
        <div className="flex items-center justify-start lg:justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {regions.map((region) => {
            const isSelected = selectedRegion.id === region.id;
            return (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region)}
                className={`px-4 sm:px-5 py-2.5 rounded-lg border font-mono text-xs uppercase tracking-wider font-bold transition-all shrink-0 flex items-center gap-2 ${
                  isSelected
                    ? "bg-[#0d172e] border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                    : "bg-[#0a0f1d]/70 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                }`}
              >
                {region.id === "galland" ? (
                  <ShieldAlert className="w-4 h-4 text-rose-400" />
                ) : (
                  <span className="w-2 h-2 rounded-full bg-slate-500" />
                )}
                {region.name}
              </button>
            );
          })}
        </div>

        {/* Selected Region Master Display Card */}
        <div className="bg-[#0a0f1d]/90 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.8)] grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Video & Media Viewport */}
          <div className="lg:col-span-7 relative bg-black min-h-[340px] sm:min-h-[460px] flex items-center justify-center overflow-hidden group">
            {selectedRegion.videoSrc ? (
              <>
                <video
                  key={selectedRegion.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
                >
                  <source src={selectedRegion.videoSrc} type="video/mp4" />
                </video>

                {/* Video Play Button to expand into Theater */}
                <button
                  onClick={() =>
                    selectedRegion.videoSrc &&
                    onSelectVideo(selectedRegion.videoSrc, `${selectedRegion.name} Gameplay Combat`)
                  }
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/10 transition-colors group cursor-pointer"
                  aria-label="Expand video player"
                >
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400/80 flex items-center justify-center backdrop-blur-md group-hover:scale-110 group-hover:bg-cyan-500/40 transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)]">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </div>
                </button>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-rose-950/30 to-[#05070a] w-full h-full">
                <ShieldAlert className="w-16 h-16 text-rose-500 animate-pulse mb-4" />
                <h4 className="text-xl font-bold font-mono text-white uppercase tracking-wider">
                  CLASSIFIED FORTRESS DATA
                </h4>
                <p className="text-xs font-mono text-slate-400 max-w-sm mt-2">
                  Collect 5/5 Microchips across Shroud, Aegis, Fathom, Ochre, and Gokan to decrypt the central transmission.
                </p>
              </div>
            )}

            {/* In-Engine Watermark Overlay */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-widest text-cyan-300">
                UNREAL ENGINE 5 // IN-GAME FOOTAGE
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-300 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded border border-white/10">
              <span className="uppercase tracking-wider">SECTOR: {selectedRegion.name}</span>
              <span className="text-cyan-400">FPS: 60+ (LUMEN ON)</span>
            </div>
          </div>

          {/* Right Column: Tactical Intelligence & Lore */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className={`px-2.5 py-1 rounded text-[11px] font-mono font-bold uppercase tracking-wider border ${selectedRegion.badgeBg}`}>
                  {selectedRegion.culture}
                </span>
                <span className="text-[11px] font-mono text-rose-400 font-bold tracking-widest uppercase">
                  THREAT: {selectedRegion.threatLevel}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                {selectedRegion.name}
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-slate-300 font-mono leading-relaxed">
                {selectedRegion.description}
              </p>
            </div>

            {/* Tactical Specs Grid */}
            <div className="space-y-3 pt-2">
              <div className="p-3 rounded-lg bg-[#060a14] border border-slate-800">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-1">
                  Signature Weapon
                </span>
                <span className="text-xs sm:text-sm font-mono font-bold text-cyan-300">
                  {selectedRegion.weapon}
                </span>
              </div>

              <div className="p-3 rounded-lg bg-[#060a14] border border-slate-800">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-1">
                  Climate & Hazard
                </span>
                <span className="text-xs sm:text-sm font-mono text-amber-300">
                  {selectedRegion.climate} — {selectedRegion.hazard}
                </span>
              </div>

              <div className="p-3 rounded-lg bg-[#060a14] border border-slate-800">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-1">
                  Core Combat Challenge
                </span>
                <span className="text-xs sm:text-sm font-mono text-slate-300">
                  {selectedRegion.challenge}
                </span>
              </div>
            </div>

            {/* Lore Box */}
            <div className="p-3.5 rounded-lg bg-cyan-950/20 border border-cyan-500/20 text-xs font-mono text-slate-400 italic">
              &quot;{selectedRegion.lore}&quot;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
