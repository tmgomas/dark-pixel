"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Sparkles, Film, Gamepad2, Maximize2 } from "lucide-react";

interface TrailerSpotlightProps {
  onPlayTrailer: (videoSrc: string, title: string) => void;
}

export default function TrailerSpotlight({ onPlayTrailer }: TrailerSpotlightProps) {
  const [activeMedia, setActiveMedia] = useState<"trailer" | "gameplay">("trailer");

  return (
    <section id="trailer" className="relative py-24 bg-[#070b14] border-t border-slate-900 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-red-600/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-rose-500/10 border border-rose-500/30 text-rose-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Film className="w-3.5 h-3.5" />
            Official Cinematic & Gameplay
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            Witness Ceylon <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-cyan-300">Checkmate</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 font-mono">
            Watch the official reveal trailer and comprehensive gameplay walkthrough in full 1080p fidelity.
          </p>
        </div>

        {/* Media Switcher Tabs */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveMedia("trailer")}
            className={`px-5 py-2.5 rounded-lg border font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center gap-2 ${
              activeMedia === "trailer"
                ? "bg-rose-950/40 border-rose-500 text-rose-300 shadow-[0_0_20px_rgba(244,63,94,0.3)]"
                : "bg-[#0a0f1d] border-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            <Film className="w-4 h-4" />
            Official Reveal Trailer (Trailer.mp4)
          </button>

          <button
            onClick={() => setActiveMedia("gameplay")}
            className={`px-5 py-2.5 rounded-lg border font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center gap-2 ${
              activeMedia === "gameplay"
                ? "bg-cyan-950/40 border-cyan-500 text-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                : "bg-[#0a0f1d] border-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            <Gamepad2 className="w-4 h-4" />
            Full Gameplay Walkthrough (gameplay.mp4)
          </button>
        </div>

        {/* Main Display Player / Key Art Showcase */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-[#0a0f1d]/90 shadow-[0_0_60px_rgba(0,0,0,0.8)] group">
          {/* Key Art / Video Viewport */}
          <div className="relative aspect-video w-full overflow-hidden bg-black flex items-center justify-center">
            {activeMedia === "trailer" ? (
              <video
                key="trailer"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center filter brightness-95"
              >
                <source src="/videos/trailer.mp4" type="video/mp4" />
              </video>
            ) : (
              <video
                key="gameplay"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center filter brightness-95"
              >
                <source src="/videos/gameplay.mp4" type="video/mp4" />
              </video>
            )}

            {/* Clickable Overlay to Open Full Theater Modal */}
            <button
              onClick={() => {
                if (activeMedia === "trailer") {
                  onPlayTrailer("/videos/trailer.mp4", "Ceylon Checkmate: Official Reveal Trailer");
                } else {
                  onPlayTrailer("/videos/gameplay.mp4", "Ceylon Checkmate: Full Gameplay Walkthrough");
                }
              }}
              className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-all flex flex-col items-center justify-center group/btn cursor-pointer p-4 text-center"
              aria-label="Play video with audio in full theater mode"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center backdrop-blur-md group-hover/btn:scale-110 group-hover/btn:bg-cyan-500/40 transition-all shadow-[0_0_35px_rgba(0,240,255,0.5)] mb-3">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1.5" />
              </div>
              <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-white bg-black/60 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
                Click to Expand Theater & Audio
              </span>
            </button>

            {/* Top HUD Tag */}
            <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none">
              <span className="px-3 py-1 rounded bg-black/80 backdrop-blur-md border border-cyan-500/30 text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold">
                {activeMedia === "trailer" ? "OFFICIAL CINEMATIC TRAILER" : "EXTENDED GAMEPLAY WALKTHROUGH"}
              </span>
            </div>
          </div>

          {/* Footer Bar of the Spotlight Box */}
          <div className="p-6 bg-[#060a14] border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-lg font-bold uppercase text-white font-sans">
                {activeMedia === "trailer"
                  ? "Ceylon Checkmate // Official Reveal Trailer"
                  : "Ceylon Checkmate // High-Stakes Combat & Chess Gameplay"}
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                {activeMedia === "trailer"
                  ? "Experience the collision of tactical chess intellect and visceral third-person survival fighting."
                  : "Deep dive into real-time PvP chess, weapon acquisition, and mech combat in Unreal Engine 5."}
              </p>
            </div>

            <button
              onClick={() => {
                if (activeMedia === "trailer") {
                  onPlayTrailer("/videos/trailer.mp4", "Ceylon Checkmate: Official Reveal Trailer");
                } else {
                  onPlayTrailer("/videos/gameplay.mp4", "Ceylon Checkmate: Full Gameplay Walkthrough");
                }
              }}
              className="px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-mono font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shrink-0"
            >
              <Maximize2 className="w-4 h-4" />
              Open In Theater
            </button>
          </div>
        </div>

        {/* Official Key Art Banner Display (main.png / main.jpg) */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-slate-800 bg-[#0a0f1d] relative group">
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full">
            <Image
              src="/images/main.jpg"
              alt="Ceylon Checkmate Official Key Art"
              fill
              className="object-cover object-center filter brightness-95 group-hover:scale-[1.02] transition-transform duration-700"
            />
            {/* Vignette Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#05070a]/60 via-transparent to-[#05070a]/60" />
          </div>

          <div className="p-6 sm:p-8 bg-[#0a0f1d] border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold block mb-1">
                Official Visual Key Art
              </span>
              <h3 className="text-xl font-bold uppercase text-white font-sans">
                Sigiriya Bastion & The Colombo Cyberpunk Horizon
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-1">
                Ancient fortress architecture colliding with futuristic dystopian AI battlegrounds.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-3 py-1.5 rounded bg-[#060a14] border border-slate-800 text-xs font-mono text-cyan-300">
                1920 × 1080 ULTRA-HD
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
