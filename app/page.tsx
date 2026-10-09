"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrailerSpotlight from "@/components/TrailerSpotlight";
import CoreLoop from "@/components/CoreLoop";
import RegionsExplorer from "@/components/RegionsExplorer";
import CombatArsenal from "@/components/CombatArsenal";
import GameSystems from "@/components/GameSystems";
import LoreSection from "@/components/LoreSection";
import AboutStudio from "@/components/AboutStudio";
import PitchDeckCTA from "@/components/PitchDeckCTA";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import VideoTheaterModal from "@/components/VideoTheaterModal";
import BetaSignupModal from "@/components/BetaSignupModal";

export default function Home() {
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const [isTrailerModalOpen, setIsTrailerModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState({
    src: "/videos/trailer.mp4",
    title: "Ceylon Checkmate: Official Reveal Trailer",
  });

  const handleOpenVideoWithSource = (videoSrc: string, title: string) => {
    setSelectedVideo({ src: videoSrc, title });
    setIsTrailerModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#05070a] text-slate-100 flex flex-col relative selection:bg-cyan-400 selection:text-black">
      {/* Top Floating Navigation */}
      <Navbar
        onOpenBetaModal={() => setIsBetaModalOpen(true)}
        onOpenTrailerModal={() => {
          setSelectedVideo({
            src: "/videos/trailer.mp4",
            title: "Ceylon Checkmate: Official Reveal Trailer",
          });
          setIsTrailerModalOpen(true);
        }}
      />

      {/* Hero Section with Looping Hero Combat Video */}
      <Hero
        onOpenBetaModal={() => setIsBetaModalOpen(true)}
        onOpenTrailerModal={() => {
          setSelectedVideo({
            src: "/videos/trailer.mp4",
            title: "Ceylon Checkmate: Official Reveal Trailer",
          });
          setIsTrailerModalOpen(true);
        }}
      />

      {/* Official Cinematic Trailer, Full Gameplay & Visual Key Art */}
      <TrailerSpotlight onPlayTrailer={handleOpenVideoWithSource} />

      {/* The Core Survival Loop (Chess -> Weapon -> Combat -> Chip -> Galland) */}
      <CoreLoop />

      {/* The 5 Regions of Ceylon with Video Previews */}
      <RegionsExplorer onSelectVideo={handleOpenVideoWithSource} />

      {/* Regional Tactical Arsenal & Weapon Inspection */}
      <CombatArsenal />

      {/* Game Systems (Sudden Death, ELO, AI Arbiter, AI Coach) */}
      <GameSystems />

      {/* Lore, Dystopian Chronology & Clone Mirror Duel */}
      <LoreSection />

      {/* About Us - Dark Pixel Studios Team & Core Expertise */}
      <AboutStudio />

      {/* Pitch Deck, Market Sizing & Whitepaper Download */}
      <PitchDeckCTA />

      {/* Frequently Asked Questions */}
      <FAQSection />

      {/* Footer Branding & Legal */}
      <Footer />

      {/* Interactive Video Theater Modal */}
      <VideoTheaterModal
        isOpen={isTrailerModalOpen}
        onClose={() => setIsTrailerModalOpen(false)}
        initialVideoSrc={selectedVideo.src}
        initialTitle={selectedVideo.title}
      />

      {/* Steam Wishlist & Closed Beta Modal */}
      <BetaSignupModal
        isOpen={isBetaModalOpen}
        onClose={() => setIsBetaModalOpen(false)}
      />
    </main>
  );
}
