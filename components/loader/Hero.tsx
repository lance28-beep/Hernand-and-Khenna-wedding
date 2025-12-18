'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FadeIn } from './FadeIn';

interface HeroProps {
  onOpen: () => void;
  visible: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onOpen, visible }) => {
  const mobileImages = [
    '/mobile-background/couple (1).jpg',
    '/mobile-background/couple (2).jpg',
    '/mobile-background/couple (3).jpg',
    '/mobile-background/couple (4).jpg',
    '/mobile-background/couple (5).jpg',
  ];

  const desktopImages = [
    '/desktop-background/couple (1).jpg',
    '/desktop-background/couple (2).jpg',
    '/desktop-background/couple (3).jpg',
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`fixed inset-0 z-[60] flex items-center justify-center overflow-hidden transition-all duration-1000 ${visible ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
      {/* Background Images - mobile & desktop */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Mobile background */}
        <div className="absolute inset-0 md:hidden">
          {mobileImages.map((src, i) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                i === index % mobileImages.length ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={src}
                alt="Hernand & Khenna background"
                fill
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* Desktop background */}
        <div className="absolute inset-0 hidden md:block">
          {desktopImages.map((src, i) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                i === index % desktopImages.length ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={src}
                alt="Hernand & Khenna background"
                fill
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* Soft overlay tint for readability */}
        <div className="absolute inset-0 bg-[#3D4636]/60 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(224,207,181,0.18),transparent_55%)] mix-blend-screen pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center p-6 w-full max-w-md mx-auto h-full">
        
        {/* Top Logo/Monogram */}
        <FadeIn show={visible} delay={300} className="mb-auto mt-10">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28">
            <Image
              src="/monogram/newmonogram.png"
              alt="Hernand & Khenna Monogram"
              fill
              className="object-contain brightness-0 invert drop-shadow-[0_0_25px_rgba(255,228,228,0.9)]"
              priority
            />
          </div>
        </FadeIn>

        <div className="flex-1" />

        <div className="flex flex-col items-center justify-end w-full gap-4 pb-14 sm:pb-16 md:pb-20">
          <FadeIn show={visible} delay={600}>
            <h2
              className="text-6xl md:text-8xl transform -rotate-6 drop-shadow-lg opacity-95 text-[#FFE4E4]"
              style={{
                fontFamily: '"Great Vibes", cursive',
                fontWeight: 400,
                textShadow: '0 0 18px rgba(255,228,228,0.95)',
              }}
            >
              You are
            </h2>
          </FadeIn>
          
          <FadeIn show={visible} delay={900}>
            <h1
              className="text-5xl md:text-7xl font-bold tracking-wider uppercase drop-shadow-[0_0_30px_rgba(255,228,228,0.95)] text-[#FFE4E4]"
              style={{
                fontFamily: '"Cinzel", serif',
                fontWeight: 700,
              }}
            >
              Invited
            </h1>
          </FadeIn>

          <FadeIn show={visible} delay={1500}>
            <button 
              onClick={onOpen}
              className="group relative px-10 py-4 bg-[#676B57] text-[#F9F8F4] font-serif text-sm tracking-[0.2em] uppercase transition-all duration-500 hover:bg-[#8C8E7C] shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 rounded-sm overflow-hidden"
            >
              <span
                className="relative z-10 text-[#F9F8F4]"
                style={{ fontFamily: '"Cinzel", serif', fontWeight: 400 }}
              >
                Open Invitation
              </span>
              {/* Button sheen effect */}
              <div className="absolute top-0 left-[-100%] w-full h-full bg-white/10 skew-x-12 group-hover:animate-[shimmer_1s_infinite]" />
            </button>
          </FadeIn>
        </div>

        {/* Bottom Spacer */}
        <div className="h-4" />
      </div>
    </div>
  );
};