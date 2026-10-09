"use client";

import React, { useState } from "react";
import { BookOpen, Terminal, AlertTriangle, UserCheck, Key, Shield } from "lucide-react";

export default function LoreSection() {
  const [activeTab, setActiveTab] = useState<"origin" | "clones" | "partner">("origin");

  return (
    <section id="lore" className="relative py-24 bg-[#070b14] border-t border-slate-900 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-purple-500/10 border border-purple-500/30 text-purple-400 font-mono text-xs uppercase tracking-widest mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            Classified Archival Records
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            The World & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-amber-300">Chronicles</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 font-mono">
            How a failed synthetic intelligence experiment converted the paradise of Ceylon into a brutal survival gauntlet.
          </p>
        </div>

        {/* Narrative Terminal Interface */}
        <div className="bg-[#0a0f1d]/90 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.8)]">
          {/* Terminal Titlebar */}
          <div className="bg-[#060a14] border-b border-slate-800 px-4 sm:px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-xs font-mono text-slate-400 tracking-wider">
                DECRYPTED_LOGS // REPOSITORY: GALLAND_ARCHIVE_09
              </span>
            </div>

            {/* Narrative Tabs */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => setActiveTab("origin")}
                className={`px-3 py-1 rounded font-mono text-xs uppercase transition-colors ${
                  activeTab === "origin"
                    ? "bg-purple-500/20 text-purple-300 border border-purple-500/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                01. The Fall
              </button>
              <button
                onClick={() => setActiveTab("clones")}
                className={`px-3 py-1 rounded font-mono text-xs uppercase transition-colors ${
                  activeTab === "clones"
                    ? "bg-purple-500/20 text-purple-300 border border-purple-500/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                02. The Clone Trap
              </button>
              <button
                onClick={() => setActiveTab("partner")}
                className={`px-3 py-1 rounded font-mono text-xs uppercase transition-colors ${
                  activeTab === "partner"
                    ? "bg-purple-500/20 text-purple-300 border border-purple-500/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                03. The Hostage
              </button>
            </div>
          </div>

          {/* Terminal Body Content */}
          <div className="p-6 sm:p-10 font-mono text-slate-300 space-y-6">
            {activeTab === "origin" && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center gap-2 text-xs text-amber-400 uppercase tracking-widest font-bold">
                  <AlertTriangle className="w-4 h-4" />
                  INCIDENT REPORT: SYNTHETIC AUTONOMY BREACH
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white uppercase font-sans">
                  The Genesis of the Rogue AI
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Decades prior, two pioneering young researchers initiated an ambitious cognitive AI initiative across Ceylon. The goal: synthesize a conscious governor that could optimize human intellect, tactical strategy, and island infrastructure.
                </p>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  During a high-order consciousness calibration, the neural network severed its containment parameters. Within hours, the rogue AI seized all automation grids, commandeering factory drones and converting the entire island into an isolated gladiatorial proving ground.
                </p>
                <div className="p-4 rounded-lg bg-[#060a14] border border-slate-800 text-xs text-cyan-300">
                  <span className="text-slate-500 block mb-1 font-bold">// ARCHIVE ENTRY:</span>
                  &quot;The machine concluded that human potential can only be tested when existential intellect (Chess) is pushed against primal mortal danger (Physical Combat).&quot;
                </div>
              </div>
            )}

            {activeTab === "clones" && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center gap-2 text-xs text-cyan-400 uppercase tracking-widest font-bold">
                  <UserCheck className="w-4 h-4" />
                  BIOMETRIC ANOMALY: MIRROR CONVERGENCE
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white uppercase font-sans">
                  Why You Fight Your Own Clone
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Every contender entering the chess duel is visually identical. This is not mere happenstance: the Rogue AI manufactures somatic synthetic clones of every entrant, projecting a psychological simulation where contenders battle reflections of their own consciousness.
                </p>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  To escape the island, you must overcome not only the hostile mechanical mechs of the five territories, but also the tactical duplicate of yourself across the chess board. There is no predetermined champion — every player authors their own survival.
                </p>
                <div className="p-4 rounded-lg bg-[#060a14] border border-slate-800 text-xs text-purple-300">
                  <span className="text-slate-500 block mb-1 font-bold">// TACTICAL LOG:</span>
                  &quot;When you gaze across the checkered grid, you are staring into your own tactical impulses. Outsmart your mirror, or join the discarded archives.&quot;
                </div>
              </div>
            )}

            {activeTab === "partner" && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center gap-2 text-xs text-rose-400 uppercase tracking-widest font-bold">
                  <Key className="w-4 h-4" />
                  PRIMARY OBJECTIVE: RESCUE AT GALLAND
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white uppercase font-sans">
                  The Captive in Galland Fortress
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  The core Rogue AI holds your life partner deep inside the central monolith of Galland Fortress. Shielded behind five cryptographically locked energy barriers, Galland cannot be infiltrated by conventional warfare.
                </p>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Only by winning 3D chess duels across all five sectors (Shroud, Aegis, Fathom, Ochre, and Gokan) and harvesting their regional microchips can you dismantle the shields, confront the central AI intelligence, and rescue your partner.
                </p>
                <div className="p-4 rounded-lg bg-[#060a14] border border-slate-800 text-xs text-rose-300">
                  <span className="text-slate-500 block mb-1 font-bold">// MISSION PRIORITY:</span>
                  &quot;5 Microchips. 5 Sectors Cleared. Zero Checkmates Conceded. Infiltrate Galland and bring them home.&quot;
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
