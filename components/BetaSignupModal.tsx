"use client";

import React, { useState } from "react";
import { X, ShieldCheck, Gamepad2, Send, CheckCircle2 } from "lucide-react";

interface BetaSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BetaSignupModal({ isOpen, onClose }: BetaSignupModalProps) {
  const [gamerTag, setGamerTag] = useState("");
  const [email, setEmail] = useState("");
  const [archetype, setArchetype] = useState("Dual Master (Chess + Combat)");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#0a0f1d] border border-cyan-500/40 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.3)]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#05070a] border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
              CEYLON RECRUITMENT TERMINAL
            </span>
          </div>

          <button
            onClick={() => {
              setIsSubmitted(false);
              onClose();
            }}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 font-mono">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-black uppercase text-white font-sans tracking-tight">
                  Enlist for Closed Beta
                </h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  Join the exclusive first wave of contenders testing Unreal Engine 5 multiplayer servers and Sudden Death duels.
                </p>
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
                  Callsign / GamerTag
                </label>
                <input
                  type="text"
                  required
                  value={gamerTag}
                  onChange={(e) => setGamerTag(e.target.value)}
                  placeholder="e.g. GrandmasterRogue"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#060a14] border border-slate-700 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
                  Steam / Communication Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="contender@domain.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#060a14] border border-slate-700 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
                  Combat Archetype
                </label>
                <select
                  value={archetype}
                  onChange={(e) => setArchetype(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#060a14] border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                >
                  <option value="Dual Master (Chess + Combat)">Dual Master (Chess + Combat)</option>
                  <option value="Strategic Grandmaster (High Chess Focus)">Strategic Grandmaster (High Chess Focus)</option>
                  <option value="Action Slasher (High Combat Reflexes)">Action Slasher (High Combat Reflexes)</option>
                  <option value="Content Creator / Streamer">Content Creator / Streamer</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Transmit Enrollment Request
                </button>
              </div>

              <div className="pt-2 text-center">
                <a
                  href="https://store.steampowered.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] text-amber-400 hover:underline"
                >
                  <Gamepad2 className="w-3.5 h-3.5" />
                  Or Wishlist Directly on Steam
                </a>
              </div>
            </form>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center mx-auto text-cyan-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold uppercase text-white font-sans">
                Enrollment Confirmed
              </h3>
              <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                Welcome to the proving grounds, <span className="text-cyan-400 font-bold">{gamerTag || "Contender"}</span>. Your telemetry has been transmitted to DarkPixel Studios. Watch your inbox for Steam Playtest keys!
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2.5 rounded bg-slate-800 hover:bg-slate-700 text-white text-xs uppercase tracking-wider"
              >
                Return to Overview
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
