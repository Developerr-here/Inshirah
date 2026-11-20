import type { Metadata, Viewport } from "next";
import "./globals.css";
import { instituteData } from "@/data/institute";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://inshirah-institute.org"),
  title: {
    default: "Inshirah Institute | Authentic Islamic Education & Guidance",
    template: "%s | Inshirah Institute",
  },
  description:
    "An Islamic educational institution dedicated to beneficial knowledge. Structured programs in Quran, Tajweed, Tafseer, Hadith, and Fiqh rooted in the Quran and Sunnah.",
  keywords: [
    "Inshirah Institute",
    "Islamic Studies",
    "Quran Recitation",
    "Tajweed",
    "Tafseer",
    "Hadith",
    "Fiqh",
    "Islamic Education Urdu English",
    "Sunnah",
  ],
  authors: [{ name: "Inshirah Institute" }],
  creator: "Inshirah Institute",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://inshirah-institute.org",
    title: "Inshirah Institute — Knowledge That Illuminates. Guidance That Transforms.",
    description:
      "Structured Islamic education through the Quran and Sunnah. Explore our academic programs, public lectures, and admissions.",
    siteName: "Inshirah Institute",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inshirah Institute | Islamic Education",
    description:
      "Structured Islamic education through the Quran and Sunnah. Explore programs, lectures, and admissions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#071F38",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F4F0E7] text-[#17283A] font-sans selection:bg-[#C5A15D]/20 selection:text-[#071F38]">
        {/* Institutional Announcement Bar */}
        <div className="bg-[#071F38] border-b border-[#C5A15D]/20 text-[#D9B979] text-xs py-1.5 px-4 text-center">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <span className="hidden md:inline font-arabic text-sm text-[#EAE3D6]/90">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </span>
            <span className="mx-auto md:mx-0 font-medium tracking-wide">
              Official Academic Portal Demo &bull; Structured Islamic Studies in Urdu & English
            </span>
            <div className="hidden lg:flex items-center gap-4 text-xs text-[#FAF8F5]/80">
              <a
                href={instituteData.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C5A15D] transition-colors"
              >
                YouTube Channel
              </a>
              <span className="opacity-40">|</span>
              <a
                href={instituteData.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C5A15D] transition-colors"
              >
                Telegram Community
              </a>
            </div>
          </div>
        </div>

        {/* Global Navigation */}
        <Navbar />

        {/* Main View Area */}
        <main className="flex-1">{children}</main>

        {/* Global Institutional Footer */}
        <Footer />
      </body>
    </html>
  );
}
