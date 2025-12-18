"use client"

import { Section } from "@/components/section"
import { siteConfig } from "@/content/site"
import Image from "next/image"
import { Cormorant_Garamond } from "next/font/google"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

const getFirstParagraph = (text?: string) => {
  if (!text) return ""
  const parts = text.trim().split(/\n\s*\n/)
  return parts[0] ?? text
}

export function MeetTheCouple() {
  const groomBio = getFirstParagraph(siteConfig.narratives?.groom)
  const brideBio = getFirstParagraph(siteConfig.narratives?.bride)

  return (
    <Section
      id="meet-the-couple"
      className="relative py-12 md:py-16 lg:py-20 overflow-hidden bg-[#3D5033]"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#3D4636]/90 via-[#3D5033]/75 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#3D4636]/95 via-[#3D5033]/75 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(224,207,181,0.24),transparent_55%)] opacity-90" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <p
            className={`${cormorant.className} text-[0.7rem] sm:text-xs md:text-sm uppercase tracking-[0.28em] text-white mb-2`}
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.75)" }}
          >
            Meet the Couple
          </p>
          <h2
            className="style-script-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white"
            style={{ textShadow: "0 4px 18px rgba(0,0,0,0.9)" }}
          >
            Hernand &amp; Khenna
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-white/90 max-w-xl mx-auto leading-relaxed">
            A quiet strength and a gentle light, woven together into one promise of forever.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Bride */}
          <article className="group relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/30 bg-white/10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.7)] transition-all duration-500 hover:border-white/40">
            <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden">
              <Image
                src="/mobile-background/couple (6).jpg"
                alt={siteConfig.couple.brideNickname}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority
              />
              {/* Enhanced gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D5033]/98 via-[#3D5033]/70 via-[#3D5033]/40 to-transparent" />
              {/* Subtle vignette effect */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,rgba(0,0,0,0.2)_100%)]" />
              
              {/* Name overlay with improved styling */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8">
                <p className={`${cormorant.className} text-[0.7rem] sm:text-xs md:text-sm tracking-[0.32em] uppercase text-white/90 mb-2 font-medium`}
                   style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
                  The Bride
                </p>
                <h3 className="text-3xl sm:text-4xl md:text-5xl text-white style-script-regular leading-tight"
                    style={{ textShadow: "0 3px 12px rgba(0,0,0,0.7)" }}>
                  {siteConfig.couple.brideNickname}
                </h3>
              </div>

              {/* Decorative corner element */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/40 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/40 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Enhanced text section */}
            <div className="px-5 sm:px-6 md:px-8 py-5 sm:py-6 md:py-7 bg-gradient-to-b from-[#F8F4EE]/98 to-[#F3EDE4]/95 text-[#2E3A24] relative">
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.05)_25%,rgba(0,0,0,0.05)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.05)_75%)] bg-[length:20px_20px]" />
              
              <p
                className={`${cormorant.className} text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose relative z-10 text-[#2E3A24]`}
                style={{ letterSpacing: "0.01em" }}
              >
                {brideBio}
              </p>
              
              {/* Decorative bottom border */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D1AB6D]/30 to-transparent" />
            </div>
          </article>

          {/* Groom */}
          <article className="relative overflow-hidden rounded-2xl border border-white/25 bg-white/10 backdrop-blur-xl shadow-[0_18px_50px_rgba(0,0,0,0.55)]">
            <div className="relative h-56 sm:h-60 md:h-64 w-full">
              <Image
                src="/desktop-background/couple (4).jpg"
                alt={siteConfig.couple.groomNickname}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D5033]/95 via-[#3D5033]/55 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-[0.65rem] sm:text-xs tracking-[0.3em] uppercase text-white/80">
                  The Groom
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl text-white style-script-regular">
                  {siteConfig.couple.groomNickname}
                </h3>
              </div>
            </div>
            <div className="px-4 sm:px-5 md:px-6 py-4 sm:py-5 md:py-6 bg-[#F8F4EE]/95 text-[#2E3A24]">
              <p
                className={`${cormorant.className} text-sm sm:text-base leading-relaxed`}
              >
                {groomBio}
              </p>
            </div>
          </article>
        </div>
      </div>
    </Section>
  )
}



