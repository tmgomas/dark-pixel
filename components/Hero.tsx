"use client";

import React, { useRef, useState } from "react";
import { Play, Shield, ChevronDown, Gamepad2, Award, Zap, Crosshair } from "lucide-react";

interface HeroProps {
  onOpenBetaModal: () => void;
  onOpenTrailerModal: () => void;
}

export default function Hero({ onOpenBetaModal, onOpenTrailerModal }: HeroProps) {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section id="overview" className="relative min-h-[92vh] flex items-center pt-36 pb-24 overflow-hidden">
      {/* Background Video Layer - Full Screen, Featuring hero.mp4 on Right Side */}
      <div className="absolute inset-0 z-0">
        {!videoError ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            onError={() => setVideoError(true)}
            className="w-full h-full object-cover object-center lg:object-[68%_center] scale-105 opacity-75 brightness-95 filter transition-all duration-700"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="w-full h-full bg-gradient-to-b from-[#0a1020] via-[#05070a] to-[#05070a]" />
        )}

        {/* Smooth horizontal gradient: dark on left for text legibility, clear on right for video */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070a] via-[#05070a]/85 via-40% lg:via-48% to-[#05070a]/15" />

        {/* Subtle Top & Bottom Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-[#05070a]/70" />
        <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-20" />
        <div className="absolute inset-0 scanlines pointer-events-none opacity-15" />
      </div>

      {/* Main Container - Spacious, Uncluttered Left-Aligned Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-3xl flex flex-col items-start text-left">
          {/* Studio Brand Header */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <p className="text-xs sm:text-sm font-mono tracking-[0.35em] uppercase text-cyan-400 font-bold">
              DarkPixel Studios Presents
            </p>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)] font-sans leading-[1.05] mb-6">
            Ceylon{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-300 text-glow-cyan">
              Checkmate
            </span>
          </h1>

          {/* Clean, Readable Narrative Teaser */}
          <p className="text-sm sm:text-base md:text-lg text-slate-300 font-mono leading-relaxed max-w-xl mb-9">
            Trapped in an island controlled by a rogue AI. Checkmate your opponent under Sudden Death rules, claim the region&apos;s weapon, slay security mechs, and collect all 5 microchips to storm Galland Fortress.
          </p>

          {/* Primary Action Buttons (Spacious & Clean) */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
            <a
              href="https://store.steampowered.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto cyber-button-cut px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-mono font-black text-sm tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] flex items-center justify-center gap-2.5 group"
            >
              <Gamepad2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Wishlist on Steam
            </a>

            <button
              onClick={onOpenTrailerModal}
              className="w-full sm:w-auto cyber-button-cut px-7 py-4 bg-[#0a1224]/80 hover:bg-[#0f1d38] border border-cyan-500/40 hover:border-cyan-400 text-white font-mono font-bold text-sm tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(0,240,255,0.15)] flex items-center justify-center gap-2.5 group backdrop-blur-md"
            >
              <div className="w-5 h-5 rounded-full bg-cyan-400/20 flex items-center justify-center group-hover:bg-cyan-400/40 transition-colors">
                <Play className="w-3 h-3 text-cyan-300 fill-cyan-300 ml-0.5" />
              </div>
              Watch Gameplay Reel
            </button>

            <button
              onClick={onOpenBetaModal}
              className="w-full sm:w-auto px-6 py-4 rounded-lg bg-transparent hover:bg-slate-900/60 border border-slate-700 hover:border-amber-400/60 text-amber-300 font-mono font-bold text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2"
            >
              <Shield className="w-4 h-4 text-amber-400" />
              Join Alpha / Beta
            </button>
          </div>

          {/* Minimalist, Airy Feature Pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0a0f1d]/70 border border-slate-800 backdrop-blur-sm">
              <Crosshair className="w-3.5 h-3.5 text-cyan-400" />
              <span>Sudden Death Chess</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0a0f1d]/70 border border-slate-800 backdrop-blur-sm">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Unreal Engine 5</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0a0f1d]/70 border border-slate-800 backdrop-blur-sm">
              <Award className="w-3.5 h-3.5 text-rose-400" />
              <span>5 Unique Regions</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0a0f1d]/70 border border-slate-800 backdrop-blur-sm">
              <Gamepad2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Strict ELO Matchmaking</span>
            </div>
          </div>

          {/* Minimal Scroll Link */}
          <div className="mt-12">
            <a
              href="#core-loop"
              className="text-slate-500 hover:text-cyan-400 transition-colors inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest group"
            >
              <span>Explore The Game</span>
              <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
