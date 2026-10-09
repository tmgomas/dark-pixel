"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, Play, Volume2, VolumeX, Maximize2 } from "lucide-react";

interface VideoTheaterModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVideoSrc?: string;
  initialTitle?: string;
}

export default function VideoTheaterModal({
  isOpen,
  onClose,
  initialVideoSrc = "/videos/hero_palace.mp4",
  initialTitle = "Ochre Palace Exploration",
}: VideoTheaterModalProps) {
  const [currentVideo, setCurrentVideo] = useState(initialVideoSrc);
  const [currentTitle, setCurrentTitle] = useState(initialTitle);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (initialVideoSrc) {
      setCurrentVideo(initialVideoSrc);
      setCurrentTitle(initialTitle);
    }
  }, [initialVideoSrc, initialTitle]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const playlist = [
    {
      src: "/videos/trailer.mp4",
      title: "Official Cinematic Trailer",
      region: "Official Trailer",
    },
    {
      src: "/videos/gameplay.mp4",
      title: "Extended Gameplay & Combat Walkthrough",
      region: "Full Gameplay",
    },
    {
      src: "/videos/hero.mp4",
      title: "Permafrost Tundra: Cryo Hammer Combat",
      region: "Fathom Combat",
    },
    {
      src: "/videos/combat_aegis.mp4",
      title: "Aegis Temple: Dual Thermal Scythe Combat",
      region: "Aegis Combat",
    },
    {
      src: "/videos/combat_ochre.mp4",
      title: "Royal Colonnade: Solar Plasma Bow Marksmanship",
      region: "Ochre Combat",
    },
    {
      src: "/videos/hero_palace.mp4",
      title: "Ochre Palace & Golden Chess Pavilion",
      region: "Ochre Exploration",
    },
    {
      src: "/videos/chip_pickup.mp4",
      title: "Extraction HUD: Microchip Acquired (+5,000 XP)",
      region: "Shroud Extraction",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn">
      {/* Container Card */}
      <div className="relative w-full max-w-5xl bg-[#0a0f1d] border border-cyan-500/40 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.3)] flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#05070a] border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
              UE5 IN-ENGINE SHOWCASE // {currentTitle}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Display */}
        <div className="relative aspect-video bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            key={currentVideo}
            src={currentVideo}
            autoPlay
            controls
            playsInline
            muted={isMuted}
            className="w-full h-full object-contain"
          />

          {/* Quick Audio Mute Toggle Overlay */}
          <button
            onClick={() => {
              setIsMuted(!isMuted);
              if (videoRef.current) {
                videoRef.current.muted = !isMuted;
              }
            }}
            className="absolute bottom-16 right-6 p-2 rounded-lg bg-black/70 border border-white/20 text-white hover:bg-cyan-500/30 transition-colors"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        </div>

        {/* Playlist Selector Footer */}
        <div className="p-4 sm:p-6 bg-[#060a14] border-t border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Select Gameplay Feed
            </span>
            <span className="text-[11px] font-mono text-cyan-400">7 REEL CHANNELS AVAILABLE</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {playlist.map((item, idx) => {
              const isSelected = currentVideo === item.src;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentVideo(item.src);
                    setCurrentTitle(item.title);
                  }}
                  className={`p-2.5 rounded-lg border text-left transition-all flex flex-col justify-between ${
                    isSelected
                      ? "bg-cyan-950/40 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                      : "bg-[#0a0f1d] border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white"
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase tracking-wider block font-bold truncate">
                    0{idx + 1}. {item.region}
                  </span>
                  <span className="text-[11px] font-mono mt-1 text-slate-300 line-clamp-1">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
