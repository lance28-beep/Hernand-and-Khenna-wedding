"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Section } from "@/components/section"
import { Cormorant_Garamond } from "next/font/google"
import { siteConfig } from "@/content/site"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
})

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "1. When and where will the wedding be held?",
    answer:
      `Our wedding will be on Sunday, February 8, 2026, at 4:00 PM. Both the ceremony and reception will be held at Las Casas Filipinas de Acuzar – Quezon City (Casa Cilayko), located at 134 Roosevelt Avenue, San Francisco del Monte, Quezon City, Metro Manila, Philippines.`,
  },
  {
    question: "2. What is the guest attire?",
    answer:
      "Guest Attire:\n\nGentlemen: Barong Tagalog, slacks, or ceremonial uniform (e.g., grey duct or other formal uniform).\n\nLadies: Filipiniana gown.\n\nColors and Style: No restriction on colors except please avoid red, black, and white.\n\nFootwear: Formal shoes or heels suitable for church and reception venues.",
  },
  {
    question: "3. When should I RSVP?",
    answer:
      `We kindly ask that you confirm your attendance by January 22, 2026. We have reserved seats especially for you, and it would bring us great joy to celebrate together. Your response will help us finalize our guest list and seating arrangements.`,
  },
  {
    question: "4. Is the invitation transferable or can I bring additional guests?",
    answer:
      "It is our joy to celebrate this occasion with our closest loved ones. In keeping with the intimacy of the gathering, we kindly ask that attendance be limited to those named on the invitation. For those accompanied by non‑RSVP guests, we have thoughtfully arranged a designated waiting area in the basement parking for the duration of the ceremony and reception.",
  },
  {
    question: "5. Are children welcome?",
    answer:
      "While we hold a special place in our hearts for your little ones, we wish to keep our celebration intimate and serene. We kindly request that the occasion be reserved for adults only. The exception, of course, will be the children within our family and those who are part of the wedding entourage, whose presence adds joy and meaning to our day.",
  },
  {
    question: "6. What is your gift policy?",
    answer:
      "Your presence at our wedding is the most treasured gift. If you wish to honor us with a gift, we kindly request a cash gift as a gesture of support for our new life together. All bank details and the QR code can be found at the bottom of the invitation and in the Gift Guide section for your convenience.",
  },
  {
    question: "7. Is parking available at the venue?",
    answer:
      "Yes, parking is available at Las Casas Filipinas de Acuzar – Quezon City for our guests. The venue offers on-site parking, including basement parking areas, with staff on hand to assist and guide vehicles upon arrival. As parking spaces are limited, we kindly recommend arriving 20–30 minutes early to allow ample time to park and settle in comfortably.",
  },
  {
    question: "8. How do we get to the venue?",
    answer:
      "Our celebration will take place at Casa Cilayko, Las Casas Filipinas de Acuzar – Quezon City, located at 134 Roosevelt Avenue, San Francisco del Monte, Quezon City, Metro Manila. Guests arriving via TNVS are kindly encouraged to use the official Las Casas Quezon City Google Maps pin to ensure a smooth and convenient drop-off at the venue. For those arriving by private car, directions and guest parking are readily available through Google Maps.",
  },
  {
    question: "9. What is your photo and social media policy?",
    answer:
      "We would love for everyone to be fully present as we celebrate this special day. While you are welcome to take photos, we kindly ask that you remain attentive to the ceremony and reception. Please avoid posting photos during the celebration or ahead of time—our photographers will lovingly capture the memories so you can simply enjoy the moment with us.",
  },
  {
    question: "10. What if I have dietary restrictions, allergies, or special meal requests?",
    answer:
      "If you have any dietary restrictions, allergies, or special meal requests, we kindly invite you to mention them in the message field when submitting your RSVP. You may also reach out to us directly, and we will gladly coordinate with our caterer to ensure you are comfortable and well cared for.",
  },
  {
    question: "11. What if my plans change after I RSVP?",
    answer:
      "If your plans change, we kindly ask that you let us know as soon as possible so we can make the necessary arrangements. You may also update your RSVP by searching for your name in the RSVP section (Guest List) and submitting a new response. Your timely update is greatly appreciated and helps us ensure a smooth and joyful celebration for everyone.",
  },
  {
    question: "12. Will there be medical or safety assistance at the venue?",
    answer:
      "For your comfort and peace of mind, a dedicated safety officer will be on duty at Las Casas throughout the celebration. Should you require any first aid assistance, please feel free to approach any of our servers or wedding coordinators, who will be more than happy to assist you promptly and with care.",
  },
  {
    question: "13. Are there nearby accommodations?",
    answer:
      "For guests seeking nearby accommodations, there are several hotel options conveniently located near Las Casas Filipinas de Acuzar – Quezon City, catering to a range of preferences and budgets. Budget‑friendly choices include Go Hotels Timog, Red Planet Timog Avenue, and Hop Inn Hotel Tomas Morato, all offering clean, comfortable stays within a short drive from the venue. For those looking for mid‑range comfort, B Hotel Quezon City and Luxent Hotel provide stylish rooms and added amenities in the Tomas Morato and Timog areas. Guests who prefer a more upscale experience may consider Seda Vertis North, Park Inn by Radisson North EDSA, or ibis Styles Manila Araneta City, which offer refined accommodations, excellent dining options, and convenient access to major city landmarks—all within easy reach of the venue.",
  },
  {
    question: "14. What is the schedule between the ceremony and reception?",
    answer:
      `The wedding ceremony will begin promptly at 4:00 PM, followed by a short interlude before the reception program starts at 6:00 PM. During this time, guests are welcome to relax and enjoy the beautiful surroundings of Las Casas.`,
  },
  {
    question: "15. Will it be warm at the venue? Any comfort tips?",
    answer:
      "As the venue is an open heritage space, it may feel warm while waiting, especially in the late afternoon. For your comfort, we kindly suggest bringing handheld fans or any personal items that help you stay cool and comfortable, so you may fully enjoy the celebration with ease.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Section
      id="faq"
      className="relative py-12 md:py-16 lg:py-20 overflow-hidden bg-[#525E2C]"
    >
      {/* Background elements with elegant sage green motif (aligned with narrative section) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Vertical sage gradients to frame the FAQ */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#3D4636]/92 via-[#525E2C]/78 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#3D4636]/95 via-[#525E2C]/72 to-transparent" />
        {/* Soft radial light in warm neutrals */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(224,207,181,0.28),transparent_55%)] opacity-90" />
        {/* Subtle diagonal wash of muted sage */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#6E7A61]/24 via-transparent to-[#E0CFB5]/12 mix-blend-soft-light" />
      </div>

      {/* Section Header */}
      <div className="relative z-30 text-center mb-6 sm:mb-9 md:mb-12 px-3 sm:px-4">
        {/* Small label */}
        <p
          className={`${cormorant.className} text-[0.7rem] sm:text-xs md:text-sm uppercase tracking-[0.28em] text-white mb-2`}
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.75)" }}
        >
          Questions & Answers
        </p>

        <h2
          className="style-script-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FFE4E4] mb-1.5 sm:mb-3 md:mb-4"
          style={{ textShadow: "0 4px 18px rgba(0,0,0,0.85)" }}
        >
          Frequently Asked Questions
        </h2>

        {/* Simple divider */}
        <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
          <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.7)]" />
          <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-l from-transparent via-white/60 to-transparent" />
        </div>
      </div>

      {/* FAQ content */}
      <div className="relative z-30 max-w-4xl mx-auto px-3 sm:px-5">
        {/* Main card */}
        <div className="relative bg-white/10 backdrop-blur-md border border-[#E0CFB5]/60 rounded-lg sm:rounded-xl md:rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] overflow-hidden">
          {/* FAQ items */}
          <div className="relative p-2.5 sm:p-4 md:p-5 lg:p-6">
            <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index
                const contentId = `faq-item-${index}`
                return (
                  <div
                    key={index}
                    className="rounded-lg sm:rounded-xl border border-[#E0CFB5]/40 bg-white/5 backdrop-blur-sm hover:border-[#E0CFB5]/70 hover:bg-white/10 transition-all duration-300 hover:shadow-md overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="group w-full px-2.5 sm:px-3 md:px-4 lg:px-5 py-2 sm:py-2.5 md:py-3 lg:py-4 flex items-center justify-between text-left outline-none focus-visible:ring-2 focus-visible:ring-[#FDECEF]/50 focus-visible:ring-offset-2 transition-colors"
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                    >
                      <span className={`${cormorant.className} font-semibold text-white pr-2 sm:pr-3 md:pr-4 text-xs sm:text-sm md:text-base lg:text-lg leading-snug sm:leading-relaxed transition-colors duration-200 group-hover:text-[#FDECEF]`}>
                        {item.question}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-white/60 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""} w-4 h-4 sm:w-5 sm:h-5`}
                        aria-hidden
                      />
                    </button>

                    <div
                      id={contentId}
                      role="region"
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-2.5 sm:px-3 md:px-4 lg:px-5 py-2 sm:py-2.5 md:py-3 lg:py-4 bg-white/5 border-t border-[#E0CFB5]/30">
                          {item.answer.includes("[RSVP_LINK]") ? (
                            <p className={`${cormorant.className} text-white/95 leading-snug sm:leading-relaxed text-xs sm:text-sm md:text-base whitespace-pre-line`}>
                              {item.answer.split("[RSVP_LINK]")[0]}
                              <a 
                                href="#guest-list" 
                                className="text-white underline font-semibold hover:text-[#F0F0EE] transition-colors"
                                onClick={(e) => {
                                  e.preventDefault()
                                  document.getElementById('guest-list')?.scrollIntoView({ behavior: 'smooth' })
                                }}
                              >
                                {item.answer.match(/\[RSVP_LINK\](.*?)\[\/RSVP_LINK\]/)?.[1]}
                              </a>
                              {item.answer.split("[/RSVP_LINK]")[1]}
                            </p>
                          ) : (
                            <p className={`${cormorant.className} text-white/95 leading-snug sm:leading-relaxed text-xs sm:text-sm md:text-base whitespace-pre-line`}>
                              {item.answer}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
