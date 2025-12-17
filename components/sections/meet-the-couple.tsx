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
          <article className="relative overflow-hidden rounded-2xl border border-white/25 bg-white/10 backdrop-blur-xl shadow-[0_18px_50px_rgba(0,0,0,0.55)]">
            <div className="relative h-56 sm:h-60 md:h-64 w-full">
              <Image
                src="/desktop-background/couple (2).jpg"
                alt={siteConfig.couple.brideNickname}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D5033]/95 via-[#3D5033]/55 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-[0.65rem] sm:text-xs tracking-[0.3em] uppercase text-white/80">
                  The Bride
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl text-white style-script-regular">
                  {siteConfig.couple.brideNickname}
                </h3>
              </div>
            </div>
            <div className="px-4 sm:px-5 md:px-6 py-4 sm:py-5 md:py-6 bg-[#F8F4EE]/95 text-[#2E3A24]">
              <p
                className={`${cormorant.className} text-sm sm:text-base leading-relaxed`}
              >
                {brideBio}
              </p>
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


