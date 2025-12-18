import type React from "react"
import type { Metadata } from "next"
import { Great_Vibes, Inter, Imperial_Script } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hernand-and-khenna-wedding.netlify.app/"
const canonicalUrl = siteUrl.replace(/\/$/, "")
const eventImagePath = "/Details/LinkPreview2.jpg"
const eventImageUrl = `${canonicalUrl}${eventImagePath}`
const eventTitle = "Hernand & Khenna - Wedding Invitation"
const eventDescription =
  "Celebrate the wedding of Hernand and Khenna on February 8, 2026 at Las Casas Filipinas de Acuzar, Quezon City. RSVP, explore their story, and find everything you need to join the celebration."

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Hernand & Khenna Wedding",
  startDate: "2025-12-20T10:30:00+08:00",
  endDate: "2025-12-20T18:00:00+08:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: [
    {
      "@type": "Place",
      name: "Las Casas Filipinas de Acuzar",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Las Casas Filipinas de Acuzar",
        addressLocality: "Quezon City",
        addressRegion: "Metro Manila",
        addressCountry: "PH",
      },
    },
  ],
  image: [eventImageUrl],
  description:
    "You're invited to the wedding of Hernand & Khenna on February 8, 2026 at Las Casas Filipinas de Acuzar, Quezon City. Find ceremony and reception details, RSVP information, and their full love story.",
  organizer: {
    "@type": "Person",
    name: "Hernand & Khenna",
  },
  eventHashtag: "#HernandAndKhennaSayIDo",
}

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400", variable: "--font-serif" })
const imperialScript = Imperial_Script({ subsets: ["latin"], weight: "400", variable: "--font-imperial-script" })

export const metadata: Metadata = {
  title: eventTitle,
  description: eventDescription,
  keywords:
    "Hernand Khenna wedding, Las Casas Filipinas de Acuzar wedding, Quezon City wedding, wedding invitation, RSVP, wedding gallery, message wall, love story, #HernandAndKhennaSayIDo",
  authors: [
    { name: "Hernand" },
    { name: "Khenna" },
  ],
  creator: "Hernand & Khenna",
  publisher: "Hernand & Khenna",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  metadataBase: new URL(canonicalUrl),
  alternates: {
    canonical: canonicalUrl,
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon_io/favicon.ico",
    apple: "/favicon_io/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/favicon_io/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/favicon_io/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/favicon_io/site.webmanifest",
  openGraph: {
    title: "Hernand & Khenna Wedding | February 8, 2026",
    description:
      "Celebrate the union of Hernand & Khenna on February 8, 2026 at Las Casas Filipinas de Acuzar, Quezon City. Discover their story, RSVP, and find important details for the ceremony and reception.",
    url: canonicalUrl,
    siteName: "Hernand and Khenna Wedding",
    locale: "en_PH",
    type: "website",
    images: [
      // TODO: Replace with a real hosted image URL when available
      {
        url: eventImageUrl,
        width: 1200,
        height: 630,
        alt: "Hernand & Khenna Wedding Invitation - February 8, 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hernand & Khenna Wedding Invitation",
    description:
      "You're invited to the wedding of Hernand & Khenna on February 8, 2026 at Las Casas Filipinas de Acuzar, Quezon City. RSVP, explore their story, and get all the details for the big day! #HernandAndKhennaSayIDo",
    images: [eventImageUrl],
    creator: "@hernandandkhenna",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
  other: {
    "application/ld+json": JSON.stringify(jsonLd),
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#525E2C" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lavishly+Yours&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Style+Script&display=swap" rel="stylesheet" />
        <link rel="preload" as="image" href="/mobile-background/DSCF2614-min.jpg" media="(max-width: 767px)" />
        <link rel="preload" as="image" href="/desktop-background/DSCF2444-min.jpg" media="(min-width: 768px)" />
      </head>
      <body className={`${inter.variable} ${greatVibes.variable} ${imperialScript.variable} font-inter antialiased text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
