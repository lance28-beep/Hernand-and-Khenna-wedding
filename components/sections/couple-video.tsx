"use client"

import { useState, useEffect, useRef } from "react"
import { Section } from "@/components/section"
import Image from "next/image"
import { motion } from "motion/react"
import { Play } from "lucide-react"
import { useAudio } from "@/contexts/audio-context"
import { Cormorant_Garamond } from "next/font/google"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

// YouTube Player API types
declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: () => void
  }
}

export function CoupleVideo() {
  // State to track if user has clicked to play the video
  const [hasClicked, setHasClicked] = useState(false)
  const playerRef = useRef<any>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const { pauseMusic, resumeMusic } = useAudio()

  // YouTube video ID
  const videoId = "IQw5mFTe6Xk"

  // Load YouTube IFrame API
  useEffect(() => {
    // Load YouTube IFrame API script if not already loaded
    if (!window.YT) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)
    }
  }, [])

  // Initialize YouTube player when clicked
  useEffect(() => {
    if (!hasClicked || !iframeRef.current) return

    const initPlayer = () => {
      if (window.YT && window.YT.Player && iframeRef.current) {
        playerRef.current = new window.YT.Player(iframeRef.current, {
          events: {
            onReady: (_event: any) => {
              // Pause background music when video is ready
              pauseMusic()
            },
            onStateChange: (event: any) => {
              // YouTube player states:
              // -1 (unstarted)
              // 0 (ended)
              // 1 (playing)
              // 2 (paused)
              // 3 (buffering)
              // 5 (video cued)
              
              if (event.data === 1) {
                // Video is playing - pause background music
                pauseMusic()
              } else if (event.data === 2 || event.data === 0) {
                // Video is paused or ended - resume background music
                resumeMusic()
              }
            },
          },
        })
      }
    }

    // Wait a bit for iframe to be ready, then initialize
    const timer = setTimeout(() => {
      if (window.YT && window.YT.Player) {
        initPlayer()
      } else {
        // Otherwise wait for API to load
        window.onYouTubeIframeAPIReady = initPlayer
      }
    }, 100)

    return () => {
      clearTimeout(timer)
      if (playerRef.current && playerRef.current.destroy) {
        try {
          playerRef.current.destroy()
        } catch (e) {
          // Ignore errors during cleanup
        }
      }
    }
  }, [hasClicked, pauseMusic, resumeMusic, videoId])

  // Handle thumbnail click - show iframe with autoplay
  const handleThumbnailClick = () => {
    setHasClicked(true)
    // Pause music immediately when user clicks
    pauseMusic()
  }

  return (
    <>
      {/* Global styles to hide YouTube branding */}
      <style jsx global>{`
        /* Hide YouTube logo, title, and branding */
        .youtube-embed-wrapper iframe {
          pointer-events: auto;
        }
        
        /* Additional masking for YouTube UI elements */
        .youtube-mask-container {
          position: relative;
        }
        
        .youtube-mask-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 60px;
          background: transparent;
          z-index: 1;
          pointer-events: none;
        }
        
        .youtube-mask-container::after {
          content: '';
          position: absolute;
          top: 8px;
          right: 8px;
          width: 100px;
          height: 50px;
          background: transparent;
          z-index: 1;
          pointer-events: none;
        }
      `}</style>
      
      <Section
        id="couple-video"
        className="relative bg-[#525E2C] py-10 sm:py-12 md:py-16 lg:py-20 overflow-hidden"
      >
      {/* Background image and decorative overlays - aligned with gallery */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grunge texture background */}
        <img
          src="/decoration/Grunge.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Soft vertical gradients in deep sage */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#2F3724]/90 via-[#525E2C]/70 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#2F3724]/95 via-[#525E2C]/70 to-transparent" />
        {/* Warm radial spotlight in champagne */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(224,207,181,0.3),transparent_55%)] opacity-90" />

        {/* Floating decorative circles with motif colors */}
        <div className="absolute top-6 left-8 w-32 h-32 bg-[#909E8D]/26 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-16 right-12 w-24 h-24 bg-[#E0CFB5]/26 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-20 left-16 w-28 h-28 bg-[#F0F0EE]/22 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-[#D1AB6D]/26 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: "0.5s" }} />
      </div>

      {/* Header - aligned with gallery section (Cormorant + style-script, white text) */}
      <div className="relative z-10 text-center mb-8 sm:mb-10 md:mb-12 px-4">
        <div className="space-y-2 sm:space-y-3">
          <p
            className={`${cormorant.className} text-[0.7rem] sm:text-xs md:text-sm uppercase tracking-[0.28em] text-white`}
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.75)" }}
          >
            A Glimpse of Our Love
          </p>
          <h2
            className="style-script-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white"
            style={{ textShadow: "0 4px 18px rgba(0,0,0,0.9)" }}
          >
            Watch our story unfold
          </h2>
        </div>

        <p className={`${cormorant.className} text-xs sm:text-sm md:text-base text-white/95 font-light max-w-xl mx-auto leading-relaxed mt-3 px-2`}>
          The journey that brought our hearts together — a glimpse into the moments we hold dear.
        </p>

        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-[#D1AB6D]/80 to-transparent" />
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-white/80"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent via-[#D1AB6D]/80 to-transparent" />
        </div>
      </div>

      {/* Video Container */}
      <div className="relative z-10 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group"
          >
            {/* Layered shadow effects - sage & gold motif (aligned with gallery) */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#525E2C]/35 via-[#E0CFB5]/22 to-[#525E2C]/35 blur-2xl opacity-70 group-hover:opacity-90 transition-all duration-500" />
            <div className="absolute -inset-4 bg-black/25 blur-3xl opacity-45 group-hover:opacity-65 transition-all duration-500" />
            
            {/* Video frame with rounded corners - sage/gold motif */}
            <div className="relative bg-gradient-to-br from-[#2F3724] via-[#525E2C]/95 to-[#2F3724] overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4),0_16px_64px_rgba(82,94,44,0.25),0_0_0_1px_rgba(209,171,109,0.2)] group-hover:shadow-[0_14px_52px_rgba(0,0,0,0.5),0_26px_100px_rgba(82,94,44,0.35),0_0_0_1px_rgba(209,171,109,0.3)] transition-all duration-500">
              {/* Decorative border - champagne/gold */}
              <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl border border-white/15 group-hover:border-[#E0CFB5]/40 transition-colors duration-500 pointer-events-none z-20" />
              
              {/* Inner shadow for depth */}
              <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl shadow-[inset_0_0_40px_rgba(0,0,0,0.4)] pointer-events-none z-10" />
              
              {/* Corner accents - champagne/gold (aligned with gallery) */}
              <div className="absolute top-0 left-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 pointer-events-none z-20">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#E0CFB5]/60 via-[#D1AB6D]/40 to-transparent" />
                <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-[#E0CFB5]/60 via-[#D1AB6D]/40 to-transparent" />
              </div>
              
              <div className="absolute top-0 right-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 pointer-events-none z-20">
                <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-[#E0CFB5]/60 via-[#D1AB6D]/40 to-transparent" />
                <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-[#E0CFB5]/60 via-[#D1AB6D]/40 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 pointer-events-none z-20">
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-[#E0CFB5]/60 via-[#D1AB6D]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 w-px h-full bg-gradient-to-t from-[#E0CFB5]/60 via-[#D1AB6D]/40 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 right-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 pointer-events-none z-20">
                <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-[#E0CFB5]/60 via-[#D1AB6D]/40 to-transparent" />
                <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-[#E0CFB5]/60 via-[#D1AB6D]/40 to-transparent" />
              </div>
              
              {/* Video wrapper with 16:9 aspect ratio */}
              <div className="relative" style={{ paddingBottom: '56.25%' }}>
                
                {/* Custom Thumbnail - shown before user clicks */}
                {!hasClicked && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 cursor-pointer z-20 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden"
                    onClick={handleThumbnailClick}
                  >
                    {/* Custom poster image */}
                    <Image
                      src="/desktop-background/couple-1.jpg"
                      alt="Video thumbnail"
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                    
                    {/* Enhanced gradient overlay for better depth and play button visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-black/35 group-hover:from-black/70 group-hover:via-black/35 group-hover:to-black/45 transition-all duration-300" />
                    
                    {/* Inner shadow for depth */}
                    <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.3)]" />
                    
                    {/* Custom Play Button with enhanced shadows */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative"
                      >
                        {/* Glow effect behind button - sage/gold */}
                        <div className="absolute inset-0 rounded-full bg-[#525E2C]/45 blur-2xl scale-150 group-hover:bg-[#D1AB6D]/55 group-hover:scale-[1.7] transition-all duration-300" />
                        
                        {/* Play button - sage/gold motif */}
                        <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white/95 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.4),0_16px_48px_rgba(82,94,44,0.25),0_0_0_1px_rgba(209,171,109,0.2)] group-hover:bg-white group-hover:shadow-[0_12px_52px_rgba(0,0,0,0.5),0_24px_72px_rgba(82,94,44,0.35),0_0_0_1px_rgba(209,171,109,0.3)] transition-all duration-300">
                          <Play className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#525E2C] fill-[#525E2C] ml-1 drop-shadow-md" />
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
                
                {/* YouTube player - only shown after user clicks */}
                {hasClicked && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 youtube-embed-wrapper"
                  >
                    {/* Wrapper to mask YouTube UI elements */}
                    <div className="relative w-full h-full overflow-hidden youtube-mask-container">
                      <iframe
                        ref={iframeRef}
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&cc_load_policy=0&fs=1&playsinline=1&enablejsapi=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
                        className="absolute inset-0 w-full h-full"
                        style={{ border: 0 }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        title="Wedding Video"
                      />
                      
                      {/* CSS masks to hide YouTube branding areas */}
                      {/* Top overlay - hides title, uploader, and "watch on YouTube" */}
                      <div 
                        className="absolute top-0 left-0 right-0 h-16 pointer-events-none z-10"
                        style={{
                          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 100%)',
                        }}
                      />
                      
                      {/* Top-right corner mask - hides YouTube logo and related icons */}
                      <div 
                        className="absolute top-2 right-2 w-24 h-12 pointer-events-none z-10 bg-black/60 blur-xl"
                        style={{
                          mixBlendMode: 'multiply',
                        }}
                      />
                      
                      {/* Center overlay when paused - prevents YouTube logo from showing */}
                      <div 
                        className="absolute inset-0 pointer-events-none z-[5]"
                        style={{
                          background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.02) 100%)',
                        }}
                      />
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
          
          {/* Caption below video - aligned with gallery typography */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center mt-8 sm:mt-10"
          >
            <p className={`${cormorant.className} text-xs sm:text-sm md:text-base text-white/90 font-light italic max-w-lg mx-auto px-4`} style={{ textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}>
              A glimpse into the moments that made our hearts one
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
    </>
  )
}

