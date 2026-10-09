"use client";

import React from "react";
import Image from "next/image";
import { Gamepad2, Palette, Printer, Clapperboard, Share2, Sparkles, Users } from "lucide-react";

export default function AboutStudio() {
  const expertise = [
    {
      icon: Gamepad2,
      title: "Game Design",
      desc: "Crafting immersive worlds, engaging mechanics, and captivating interactive experiences.",
      color: "from-cyan-500 to-blue-500",
      accent: "text-cyan-400 border-cyan-500/30 bg-cyan-950/20",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      desc: "Developing striking visual identities and creative assets that elevate your brand.",
      color: "from-purple-500 to-pink-500",
      accent: "text-purple-400 border-purple-500/30 bg-purple-950/20",
    },
    {
      icon: Printer,
      title: "Printing",
      desc: "Delivering high-quality, professional printing services for all commercial and promotional needs.",
      color: "from-amber-500 to-yellow-500",
      accent: "text-amber-400 border-amber-500/30 bg-amber-950/20",
    },
    {
      icon: Clapperboard,
      title: "Video & Cinema",
      desc: "Producing cinematic visuals and professional video content that tell compelling stories.",
      color: "from-rose-500 to-red-500",
      accent: "text-rose-400 border-rose-500/30 bg-rose-950/20",
    },
    {
      icon: Share2,
      title: "Digital & Social Media",
      desc: "Enhancing your digital footprint with strategic branding and online presence management.",
      color: "from-emerald-500 to-teal-500",
      accent: "text-emerald-400 border-emerald-500/30 bg-emerald-950/20",
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-[#05070a] border-t border-slate-900 overflow-hidden">
      {/* Background Cyber Ambient Lights */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-purple-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Users className="w-3.5 h-3.5" />
            Creative Powerhouse
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">Dark Pixel Studios</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 font-mono">
            Turning imaginative concepts into stunning visual realities across gaming and digital media.
          </p>
        </div>

        {/* Team Banner Showcase */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-[#0a0f1d]/90 shadow-[0_0_50px_rgba(0,0,0,0.8)] mb-16 group">
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
            <Image
              src="/images/team.jpg"
              alt="Dark Pixel Studios Creative Team"
              fill
              className="object-cover object-center filter brightness-95 group-hover:scale-[1.02] transition-transform duration-700"
              priority
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#05070a]/60 via-transparent to-[#05070a]/60" />
          </div>

          {/* Floating Studio Info Bar on Bottom of Banner */}
          <div className="p-6 sm:p-8 bg-[#0a0f1d] border-t border-slate-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                Official Studio Team
              </span>
              <h3 className="text-xl sm:text-2xl font-bold uppercase text-white font-sans">
                The Minds Behind Ceylon Checkmate
              </h3>
            </div>

            <div className="flex items-center gap-6 font-mono text-xs text-slate-400">
              <div className="border-l border-slate-800 pl-4">
                <span className="text-white font-bold block text-sm">Game Design</span>
                <span>Core Pillar</span>
              </div>
              <div className="border-l border-slate-800 pl-4">
                <span className="text-white font-bold block text-sm">Full-Spectrum</span>
                <span>Creative Media</span>
              </div>
              <div className="border-l border-slate-800 pl-4">
                <span className="text-cyan-400 font-bold block text-sm">Innovation</span>
                <span>& Precision</span>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative & Studio Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-6 bg-[#0a0f1d]/80 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-xl">
            <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-wide mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              Welcome to Dark Pixel Studios
            </h3>
            <p className="text-sm text-slate-300 font-mono leading-relaxed mb-4">
              At <strong className="text-white">Dark Pixel Studios</strong>, we are a passionate and dynamic team of creative professionals dedicated to turning imaginative concepts into stunning visual realities.
            </p>
            <p className="text-sm text-slate-400 font-mono leading-relaxed">
              While our primary core expertise lies in cutting-edge <span className="text-cyan-400 font-bold">Game Design</span>, we operate as a comprehensive creative powerhouse, delivering top-tier solutions across multiple disciplines. Driven by innovation and technical precision, our mission is to bring your brand, story, and interactive experiences to life.
            </p>
          </div>

          <div className="lg:col-span-6 bg-[#0a0f1d]/80 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between h-full">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 block mb-2">
                // Studio Manifesto
              </span>
              <h4 className="text-lg font-bold text-white uppercase mb-3">
                Precision Meets Imagination
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 font-mono leading-relaxed italic border-l-2 border-cyan-400 pl-4 mb-6">
                &quot;We don&apos;t just construct mechanics — we forge unforgettable virtual worlds and digital narratives that captivate global audiences.&quot;
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800 text-xs font-mono">
              <div className="p-3 rounded-lg bg-[#060a14] border border-slate-800">
                <span className="text-slate-500 uppercase block text-[10px]">Headquarters</span>
                <span className="text-white font-bold">Colombo, Sri Lanka</span>
              </div>
              <div className="p-3 rounded-lg bg-[#060a14] border border-slate-800">
                <span className="text-slate-500 uppercase block text-[10px]">Focus Engine</span>
                <span className="text-cyan-400 font-bold">Unreal Engine 5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Expertise Cards Grid (5 Pillars) */}
        <div>
          <div className="text-left mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-1">
              Multi-Disciplinary Powerhouse
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
              Our Core Expertise
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#0a0f1d]/80 border border-slate-800 hover:border-cyan-500/40 p-6 sm:p-7 rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-2.5 rounded-lg border ${item.accent}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-500">
                        PILLAR 0{idx + 1}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold uppercase text-white tracking-wide group-hover:text-cyan-300 transition-colors mb-2">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-400 font-mono leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>CAPABILITY // CERTIFIED</span>
                    <span className="text-cyan-400 font-bold">ACTIVE</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
