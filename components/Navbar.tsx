"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Shield, Play } from "lucide-react";

interface NavbarProps {
  onOpenBetaModal: () => void;
  onOpenTrailerModal: () => void;
}

export default function Navbar({ onOpenBetaModal, onOpenTrailerModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Trailer", href: "#trailer" },
    { name: "Core Loop", href: "#core-loop" },
    { name: "Regions", href: "#regions" },
    { name: "Arsenal", href: "#arsenal" },
    { name: "Systems", href: "#systems" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#05070a]/95 backdrop-blur-md border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.9)] py-2.5"
          : "bg-gradient-to-b from-[#05070a]/95 via-[#05070a]/50 to-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo & Studio Name */}
        <a href="#overview" className="flex items-center gap-3 shrink-0 group">
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 p-1 rounded-md bg-cyan-950/40 border border-cyan-500/40 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
            <Image
              src="/images/darkpixelogo.png"
              alt="DarkPixel Studios Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-bold flex items-center gap-1.5 leading-none">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              DarkPixel Studios
            </span>
            <span className="text-sm sm:text-base font-black tracking-wider text-white uppercase group-hover:text-cyan-300 transition-colors leading-tight mt-0.5">
              Ceylon Checkmate
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation Pill */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-[#0a0f1d]/80 backdrop-blur-md border border-cyan-500/20 rounded-full px-3 py-1 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="whitespace-nowrap text-[11px] xl:text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-cyan-300 px-2.5 xl:px-3 py-1.5 rounded-full transition-all hover:bg-cyan-500/10"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action CTAs */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <button
            onClick={onOpenTrailerModal}
            className="whitespace-nowrap text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white px-3 py-2 rounded-lg border border-slate-700/80 hover:border-cyan-500/60 bg-[#0a0f1d]/60 hover:bg-[#0f192e] transition-all flex items-center gap-1.5"
          >
            <Play className="w-3 h-3 text-cyan-400 fill-cyan-400" />
            Watch Trailer
          </button>

          <button
            onClick={onOpenBetaModal}
            className="whitespace-nowrap cyber-button-cut text-xs font-mono uppercase tracking-wider font-bold px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] flex items-center gap-1.5"
          >
            <Shield className="w-3.5 h-3.5" />
            Join Closed Beta
          </button>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onOpenBetaModal}
            className="sm:hidden whitespace-nowrap text-[11px] font-mono font-bold px-3 py-1.5 bg-cyan-400 text-black rounded"
          >
            Join Beta
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white border border-slate-800 rounded bg-[#0a0f1d]"
            aria-label="Toggle navigation menu"
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
                className="whitespace-nowrap text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-cyan-400 p-2.5 rounded bg-[#0a0f1d]/80 border border-slate-800"
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
              <Play className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" /> Watch Trailer
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
