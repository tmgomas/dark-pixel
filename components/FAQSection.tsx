"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does the game make money?",
      a: "The game is Free to Play (F2P). Monetization relies on purely aesthetic cosmetic skins/customizations and optional premium 'Pay to Continue' permits when players perish in later sectors.",
    },
    {
      q: "What if a player is a beginner at chess?",
      a: "Our strict ELO matchmaking guarantees beginners only duel against other beginners. Furthermore, our built-in AI Bot Coach guides newcomers through opening theory, blunder defense, and tactics safely.",
    },
    {
      q: "How long is a single multiplayer match?",
      a: "A complete high-octane match spans approximately 15 to 20 minutes, preserving intense competitive adrenaline without dragging.",
    },
    {
      q: "Why do both players use the same character model?",
      a: "This not only optimizes development resources, but sits at the heart of our lore: the Rogue AI forces contenders to battle synthetic somatic duplicates (clones) of their own consciousness.",
    },
    {
      q: "What happens if you lose in a later region?",
      a: "Under Sudden Death rules, failing in a subsequent sector wipes progress and resets you to the initial perimeter, unless an optional 'Pay to Continue' permit is invoked.",
    },
    {
      q: "What are the target platform & hardware requirements?",
      a: "Ceylon Checkmate is engineered natively for PC Windows on Unreal Engine 5, leveraging Lumen lighting and Nanite geometry for high-fidelity 60+ FPS performance on modern GPUs.",
    },
  ];

  return (
    <section id="faq" className="relative py-24 bg-[#05070a] border-t border-slate-900 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Intelligence Briefing
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-cyan-300">Questions</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 font-mono">
            Essential tactical knowledge regarding rules, matchmaking, monetization, and technology.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#0a0f1d]/80 border border-slate-800 rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left px-6 py-4.5 flex items-center justify-between gap-4 hover:bg-slate-800/30 transition-colors"
                >
                  <span className="font-mono text-sm sm:text-base font-bold text-white uppercase tracking-wide">
                    {faq.q}
                  </span>
                  <div className={`p-1 rounded bg-slate-900 text-cyan-400 transition-transform ${isOpen ? "rotate-180" : ""}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-400 font-mono leading-relaxed border-t border-slate-800/60 bg-[#060a14]/60">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
