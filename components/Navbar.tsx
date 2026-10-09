"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Shield, ExternalLink, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenBetaModal: () => void;
  onOpenTrailerModal: () => void;
}

export default function Navbar({ onOpenBetaModal, onOpenTrailerModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Trailer", href: "#trailer" },
    { name: "The Core Loop", href: "#core-loop" },
    { name: "5 Regions", href: "#regions" },
    { name: "Arsenal", href: "#arsenal" },
    { name: "Systems", href: "#systems" },
    { name: "About Us", href: "#about" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#05070a]/90 backdrop-blur-md border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3"
          : "bg-gradient-to-b from-[#05070a]/90 via-[#05070a]/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#overview" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 p-1 rounded-md bg-gradient-to-br from-cyan-500/20 to-transparent border border-cyan-500/40 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
            <Image
              src="/images/darkpixelogo.png"
              alt="DarkPixel Studios Logo"
              width={36}
              height={36}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              DarkPixel Studios
            </span>
            <span className="text-base sm:text-lg font-black tracking-wider text-white uppercase group-hover:text-cyan-300 transition-colors">
              Ceylon Checkmate
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0a0f1d]/60 backdrop-blur-sm border border-cyan-500/20 rounded-full px-5 py-1.5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-cyan-400 px-3 py-1 rounded transition-colors hover:bg-cyan-500/10"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenTrailerModal}
            className="text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white px-3 py-2 border border-slate-700 hover:border-cyan-500/50 rounded transition-all flex items-center gap-1.5 bg-[#0a0f1d]/50"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Watch Trailer
          </button>

          <button
            onClick={onOpenBetaModal}
            className="relative group text-xs font-mono uppercase tracking-wider font-bold px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black rounded transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] flex items-center gap-1.5"
          >
            <Shield className="w-3.5 h-3.5" />
            Join Closed Beta
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onOpenBetaModal}
            className="sm:hidden text-[11px] font-mono font-bold px-2.5 py-1.5 bg-cyan-400 text-black rounded"
          >
            Beta
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white border border-slate-800 rounded bg-[#0a0f1d]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#05070a]/95 border-b border-cyan-500/20 backdrop-blur-xl px-4 py-6 mt-3 space-y-4">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-cyan-400 p-2.5 rounded bg-[#0a0f1d]/70 border border-slate-800"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrailerModal();
              }}
              className="w-full text-xs font-mono uppercase tracking-wider py-2.5 border border-cyan-500/40 text-cyan-300 rounded bg-cyan-950/20 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" /> Watch Teaser Trailer
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBetaModal();
              }}
              className="w-full text-xs font-mono uppercase tracking-wider font-bold py-2.5 bg-cyan-400 text-black rounded flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.4)]"
            >
              <Shield className="w-4 h-4" /> Join Closed Beta
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
