"use client"

import { useState } from "react"
import { Section } from "@/components/section"
import { siteConfig } from "@/content/site"
import { motion } from "motion/react"
import { Cormorant_Garamond } from "next/font/google"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

const getParagraphs = (text?: string) =>
  text
    ?.trim()
    .split(/\n\s*\n/)
    .filter(Boolean) ?? []

type ActivePerson = "bride" | "groom"

export function Narrative() {
  const [activePerson, setActivePerson] = useState<ActivePerson>("bride")
  const brideParagraphs = getParagraphs(siteConfig.narratives?.bride)
  const groomParagraphs = getParagraphs(siteConfig.narratives?.groom)
  const sharedParagraphs = getParagraphs(siteConfig.narratives?.shared)

  const activeParagraphs = activePerson === "bride" ? brideParagraphs : groomParagraphs
  const activeLabel = activePerson === "bride" ? "The Bride" : "The Groom"
  const activeName = activePerson === "bride" ? siteConfig.couple.brideNickname : siteConfig.couple.groomNickname

  return (
    <Section
      id="narrative"
      className="relative py-12 md:py-16 lg:py-20 overflow-hidden bg-[#525E2C]"
    >
      {/* Background elements with elegant sage green motif */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Vertical sage gradients to frame the story */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#3D4636]/92 via-[#525E2C]/78 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#3D4636]/95 via-[#525E2C]/72 to-transparent" />
        {/* Soft radial light in warm neutrals */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(224,207,181,0.28),transparent_55%)] opacity-90" />
        {/* Subtle diagonal wash of muted sage */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#6E7A61]/24 via-transparent to-[#E0CFB5]/12 mix-blend-soft-light" />
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-2 sm:space-y-3">
      
            <h2
              className="style-script-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white"
              style={{ textShadow: "0 4px 18px rgba(0,0,0,0.85)" }}
            >
              Meet the Couple &amp; Love Story
            </h2>

            {/* Decorative flourish */}
            <div className="flex items-center justify-center gap-3 pt-1">
              <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-[#D1AB6D]/80 to-transparent" />
              <motion.div
                animate={{ scale: [1, 1.15, 1], rotate: [0, 8, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 text-[#F0F0EE]/90" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </motion.div>
              <div className="w-8 md:w-12 h-px bg-gradient-to-l from-transparent via-[#D1AB6D]/80 to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* Meet the Couple – text with toggle */}
        <motion.div 
          className="mt-8 md:mt-12 max-w-3xl mx-auto space-y-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Meet the Couple */}
          <section className="space-y-6">
            <p
              className={`${cormorant.className} text-[0.7rem] sm:text-xs md:text-sm text-white tracking-[0.16em] uppercase text-center`}
            >
              Meet the Couple
            </p>

            {/* Toggle buttons */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-1 rounded-full bg-black/20 border border-white/20 p-1">
                <button
                  type="button"
                  onClick={() => setActivePerson("bride")}
                  className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                    activePerson === "bride"
                      ? "bg-white text-[#3D4636] shadow-md"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  <span className="block text-[0.65rem] uppercase tracking-[0.18em]">
                    The Bride
                  </span>
                  <span className="style-script-regular text-lg leading-none">
                    {siteConfig.couple.brideNickname}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setActivePerson("groom")}
                  className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                    activePerson === "groom"
                      ? "bg-white text-[#3D4636] shadow-md"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  <span className="block text-[0.65rem] uppercase tracking-[0.18em]">
                    The Groom
                  </span>
                  <span className="style-script-regular text-lg leading-none">
                    {siteConfig.couple.groomNickname}
                  </span>
                </button>
              </div>
            </div>

            {/* Active bio */}
            <div className="space-y-2 pt-2">
              <p
                className={`${cormorant.className} text-[0.65rem] sm:text-xs tracking-[0.24em] uppercase text-white/80 text-center`}
              >
                {activeLabel}
              </p>
              <h3 className="style-script-regular text-2xl sm:text-3xl md:text-4xl text-white text-center">
                {activeName}
              </h3>
              <div className="space-y-3">
                {activeParagraphs.map((paragraph, index) => (
                  <p
                    key={`${activePerson}-${index}`}
                    className="text-sm md:text-base leading-relaxed text-white text-pretty font-sans font-light text-justify"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* Love Story */}
          <section className="space-y-4 pt-8 md:pt-10">
            <div className="text-center space-y-2">
              <p
                className={`${cormorant.className} text-[0.7rem] sm:text-xs md:text-sm text-white tracking-[0.16em] uppercase`}
              >
                Love Story
              </p>
              <h3 className="style-script-regular text-2xl sm:text-3xl md:text-4xl text-white">
                From Classmates to Forever
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-white/90 italic">
                Where it all began…
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              {sharedParagraphs.map((paragraph, index) => (
                <p
                  key={`shared-${index}`}
                  className="text-sm md:text-base leading-relaxed text-white text-pretty font-sans font-light text-justify"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* Divider and CTA */}
          <motion.div 
            className="mt-10 md:mt-14 space-y-6 md:space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Decorative divider with sage & gold motif */}
            <div className="flex items-center justify-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#D1AB6D]/70 to-[#E0CFB5]/50" />
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <svg className="w-5 h-5 text-[#D1AB6D]/80" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-5c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
                </svg>
              </motion.div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#D1AB6D]/70 to-[#E0CFB5]/50" />
            </div>

            {/* Enhanced CTA Button with sage motif */}
            <div className="flex justify-center">
              <motion.a
                href="#guest-list"
                className="group relative w-full sm:w-auto px-6 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-[#F0F0EE] font-sans font-bold text-sm sm:text-base md:text-lg rounded-[2rem] transition-all duration-500 text-center overflow-hidden shadow-xl hover:shadow-2xl border-2 border-[#E0CFB5] hover:border-[#D1AB6D]"
                style={{ 
                  backgroundImage: "linear-gradient(135deg, #525E2C, #909E8D)",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.45), 0 4px 12px rgba(82,94,44,0.6)"
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundImage = "linear-gradient(135deg, #3F4A23, #7F8F76)";
                  e.currentTarget.style.boxShadow = "0 16px 55px rgba(0,0,0,0.6), 0 6px 18px rgba(82,94,44,0.8)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundImage = "linear-gradient(135deg, #525E2C, #909E8D)";
                  e.currentTarget.style.boxShadow = "0 10px 40px rgba(0,0,0,0.45), 0 4px 12px rgba(82,94,44,0.6)";
                }}
              >
                {/* Pulsing glow effect with gold accent */}
                <motion.div 
                  className="absolute inset-0 bg-[#D1AB6D]/35 rounded-[2rem] blur-2xl"
                  animate={{
                    opacity: [0.4, 0.7, 0.4],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                {/* Secondary glow with soft neutral accent */}
                <motion.div 
                  className="absolute inset-0 bg-[#E0CFB5]/22 rounded-[2rem] blur-xl"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
                
                {/* Enhanced gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Double shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
                <div className="absolute inset-0 translate-x-full group-hover:-translate-x-full transition-transform duration-1200 delay-200 bg-gradient-to-l from-transparent via-white/15 to-transparent"></div>
                
                {/* Enhanced sparkle effects */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      top: `${20 + i * 15}%`,
                      left: `${10 + (i % 3) * 40}%`,
                    }}
                    animate={{
                      scale: [0, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut",
                    }}
                  >
                    <svg className="w-3 h-3 text-[#F0F0EE]/80" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                  </motion.div>
                ))}
                
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-[2rem] border-2 border-white/10 group-hover:border-[#F0F0EE]/40 transition-all duration-500"></div>
                <motion.div 
                  className="absolute inset-0 rounded-[2rem] border-2 border-white/20"
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Decorative waves on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ y: 0 }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <svg className="w-full h-full" fill="none" viewBox="0 0 400 100" preserveAspectRatio="none">
                    <path d="M0,50 Q100,20 200,50 T400,50 L400,100 L0,100 Z" fill="white" opacity="0.1"/>
                  </svg>
                </motion.div>
                
                {/* Button content */}
                <span className="relative z-10 tracking-wide uppercase inline-flex items-center gap-3 font-bold text-[#FFFFFF]">
                  Join Our Celebration
                  <motion.svg 
                    className="w-5 h-5 md:w-6 md:h-6 text-[#FFFFFF]" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{
                      x: [0, 4, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </span>
                
                {/* Enhanced decorative corner ornaments */}
                <motion.div 
                  className="absolute top-2 left-2 w-2 h-2 bg-white/50 rounded-full opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: [0, 1.5, 1] }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div 
                  className="absolute top-2 right-2 w-2 h-2 bg-white/50 rounded-full opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: [0, 1.5, 1] }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                />
                <motion.div 
                  className="absolute bottom-2 left-2 w-2 h-2 bg-white/50 rounded-full opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: [0, 1.5, 1] }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
                <motion.div 
                  className="absolute bottom-2 right-2 w-2 h-2 bg-white/50 rounded-full opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: [0, 1.5, 1] }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </Section>
  )
}
