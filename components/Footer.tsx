"use client";

import React from "react";
import Image from "next/image";
import { Gamepad2, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#030508] border-t border-slate-900 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Studio Brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 p-1 rounded-md bg-cyan-950/40 border border-cyan-500/40 flex items-center justify-center">
                <Image
                  src="/images/darkpixelogo.png"
                  alt="DarkPixel Studios"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-white font-bold tracking-wider uppercase text-base block font-sans">
                  DarkPixel Studios
                </span>
                <span className="text-[11px] text-cyan-400 font-mono">
                  Creators of Ceylon Checkmate
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              An ambitious indie game studio dedicated to fusing tactical strategy with visceral third-person action. Powered by Unreal Engine 5.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://store.steampowered.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0a0f1d] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
                aria-label="Steam"
              >
                <Gamepad2 className="w-4 h-4" />
              </a>
              {/* Discord SVG */}
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0a0f1d] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-indigo-400 hover:border-indigo-500/50 transition-colors"
                aria-label="Discord"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
              {/* YouTube SVG */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0a0f1d] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-rose-400 hover:border-rose-500/50 transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              {/* X / Twitter SVG */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0a0f1d] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-500/50 transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#overview" className="hover:text-cyan-400 transition-colors">Overview</a>
              </li>
              <li>
                <a href="#core-loop" className="hover:text-cyan-400 transition-colors">The Core Loop</a>
              </li>
              <li>
                <a href="#regions" className="hover:text-cyan-400 transition-colors">5 Regions of Ceylon</a>
              </li>
              <li>
                <a href="#arsenal" className="hover:text-cyan-400 transition-colors">Tactical Arsenal</a>
              </li>
              <li>
                <a href="#systems" className="hover:text-cyan-400 transition-colors">Game Systems</a>
              </li>
              <li>
                <a href="#lore" className="hover:text-cyan-400 transition-colors">Classified Lore</a>
              </li>
            </ul>
          </div>

          {/* Legal / Disclaimers */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">System & Legal</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Unreal® is a trademark or registered trademark of Epic Games, Inc. in the United States of America and elsewhere. Unreal® Engine, Copyright 1998 – 2026, Epic Games, Inc. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Steam and the Steam logo are trademarks and/or registered trademarks of Valve Corporation in the U.S. and/or other countries.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 DarkPixel Studios. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-cyan-400/80">SYSTEM: ONLINE</span>
            <span>•</span>
            <a href="/docs/ceylon_checkmate.pdf" target="_blank" className="hover:text-white transition-colors">
              Pitch Deck
            </a>
            <span>•</span>
            <a href="#overview" className="hover:text-white transition-colors">
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
