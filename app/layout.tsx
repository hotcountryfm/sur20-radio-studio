import InstallPrompt from "../components/InstallPrompt";
import FacebookBrowserWarning from "../components/FacebookBrowserWarning";

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
    default: "SUR20 RADIO | Tu radio, tu música, tu generación",
    template: "%s | SUR20 RADIO",
  },

  description:
    "Escucha SUR20 RADIO en directo las 24 horas. Los mejores éxitos de los años 80, 90 y 2000, programas especiales, noticias musicales y mucho más.",

  keywords: [
    "SUR20 RADIO",
    "radio online",
    "emisora online",
    "música 80",
    "música 90",
    "música 2000",
    "radio española",
    "pop",
    "rock",
    "dance",
    "radio en directo",
    "TuneIn",
  ],

  authors: [
    {
      name: "SUR20 RADIO",
    },
  ],

  creator: "SUR20 RADIO",

  publisher: "SUR20 RADIO",

  applicationName: "SUR20 RADIO",

  manifest: "/manifest.json",

  category: "music",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "SUR20 RADIO",

    title: "SUR20 RADIO",

    description:
      "Tu radio, tu música, tu generación. Escucha los mejores éxitos de los 80, 90 y 2000 las 24 horas.",

    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "SUR20 RADIO",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "SUR20 RADIO",

    description:
      "Tu radio, tu música, tu generación.",

    images: [`${siteUrl}/og-image.png`],
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

            <FacebookBrowserWarning />

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