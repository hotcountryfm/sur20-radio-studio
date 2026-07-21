import InstallPrompt from "../components/InstallPrompt";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PlayerBar from "../components/PlayerBar";

import { AudioProvider } from "../context/AudioContext";
import { NowPlayingProvider } from "../context/NowPlayingContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://sur20radio.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "SUR20 Radio | La mejor música de los 80, 90 y 2000",
    template: "%s | SUR20 Radio",
  },

  description:
    "Escucha SUR20 Radio en directo las 24 horas. La mejor selección de música de los años 80, 90 y 2000, programas especiales, noticias musicales y mucho más.",

  keywords: [
    "SUR20 Radio",
    "radio online",
    "emisora online",
    "música 80",
    "música 90",
    "música 2000",
    "radio española",
    "pop",
    "rock",
    "dance",
    "TuneIn",
  ],

  authors: [
    {
      name: "SUR20 Radio",
    },
  ],

  creator: "SUR20 Radio",

  publisher: "SUR20 Radio",

  applicationName: "SUR20 Radio",

  manifest: "/manifest.json",

  category: "music",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "SUR20 Radio",
    title: "SUR20 Radio",
    description:
      "La mejor música de los 80, 90 y 2000 durante las 24 horas.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SUR20 Radio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SUR20 Radio",
    description:
      "La mejor música de los 80, 90 y 2000 durante las 24 horas.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

icons: {
  icon: "/icons/favicon.ico",
  shortcut: "/icons/favicon.ico",
  apple: "/icons/apple-touch-icon.png",
},
};

export const viewport: Viewport = {
  themeColor: "#FFD400",
};

export const formatDetection = {
  telephone: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
   <body className="min-h-full bg-black text-white">
  <NowPlayingProvider>
    <AudioProvider>
      <Header />

      <InstallPrompt />

      <main className="pt-20 pb-32">
        {children}
      </main>

      <Footer />

      <PlayerBar />
    </AudioProvider>
  </NowPlayingProvider>
</body>   
    </html>
  );
}