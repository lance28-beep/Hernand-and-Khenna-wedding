 "use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 1000); // Wait for fade out animation
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center overflow-hidden bg-cloud text-charcoal transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Images - mobile & desktop */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Mobile background */}
        <div className="absolute inset-0 md:hidden">
    
        </div>

        {/* Desktop background */}
        <div className="absolute inset-0 hidden md:block">
   
        </div>

        {/* Soft overlays to match main sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3D4636]/70 via-[#525E2C]/60 to-[#3D4636]/70 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(224,207,181,0.2),transparent_55%)] mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(240,240,238,0.15),transparent_35%)] opacity-70 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-md mx-auto px-6 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl sm:rounded-[2rem] border border-white/20 bg-[#909E8D]/90 backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.7)] px-6 sm:px-8 py-8 sm:py-10">
          {/* Inner glass & light layers for consistency with main section */}
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute inset-0 opacity-90"
              style={{
                backgroundColor: 'rgba(144, 158, 141, 0.95)',
              }}
            />
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-[radial-gradient(circle_at_center,rgba(240,240,238,0.22),transparent_60%)] opacity-80" />
            <div className="absolute bottom-[-4rem] right-[-1.5rem] w-56 h-56 bg-[radial-gradient(circle_at_center,rgba(209,171,109,0.22),transparent_60%)] opacity-80" />
            <div className="absolute inset-[1px] rounded-[inherit] border border-white/5" />
          </div>

          <div className="relative flex flex-col items-center text-center space-y-6">
            {/* Monogram with subtle motion to keep it lively */}
            <div className="relative flex items-center justify-center">
              <div className="absolute w-32 h-32 rounded-full bg-[#EFC0BC]/35 blur-3xl animate-pulse" />
              <div className="absolute w-24 h-24 rounded-full border border-[#FDECEF]/40 animate-[spin_8s_linear_infinite]" />
              <div className="absolute w-20 h-20 rounded-full border-t-2 border-b-2 border-[#D1AB6D]/70 animate-[spin_14s_linear_infinite_reverse]" />

              <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
                <Image
                  src="/monogram/monogramnew.png"
                  alt="Hernand & Khenna Monogram"
                  fill
                  className="object-contain brightness-0 invert"
                  priority
                />
              </div>
            </div>

            {/* Text content styled like the main welcome section */}
            <div className="space-y-3 sm:space-y-4">
              <p
                className={`${cormorant.className} text-[0.7rem] sm:text-xs md:text-sm uppercase tracking-[0.28em] text-[#FDECEF]/85`}
                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}
              >
                Hernand &amp; Khenna
              </p>

              <h2
                className="style-script-regular text-2xl sm:text-3xl md:text-4xl text-[#FFE4E4]"
                style={{ textShadow: '0 4px 18px rgba(0,0,0,0.85)' }}
              >
                Preparing your invitation
              </h2>

              <div className="flex items-center justify-center gap-2 pt-1">
                <span className="h-px w-10 sm:w-14 bg-white/30" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#D1AB6D] shadow-[0_0_14px_rgba(209,171,109,0.9)]" />
                <span className="h-px w-10 sm:w-14 bg-white/30" />
              </div>

              <p
                className={`${cormorant.className} text-[0.8rem] sm:text-sm text-white/95 leading-relaxed max-w-xs mx-auto`}
              >
                Please wait a moment while we set the scene, tune the music, and open the doors to celebrate love,
                life, and forever.
              </p>

              <p
                className="text-[0.7rem] sm:text-xs uppercase tracking-[0.3em] text-[#FDECEF]/85 animate-pulse"
                style={{ fontWeight: 600 }}
              >
                Loading Invitation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};