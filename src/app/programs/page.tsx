import React, { Suspense } from "react";
import type { Metadata } from "next";
import ProgramsDirectory from "@/components/programs/ProgramsDirectory";
import Link from "next/link";
import { BookOpen, ShieldCheck, Sparkles, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Academic Programs & Curricula | Inshirah Institute",
  description:
    "Explore structured Islamic educational programs in Quran Recitation, Tajweed Mastery, Quran Memorization (Hifz), Tafseer, Hadith Studies, and Classical Arabic.",
};

export default function ProgramsPage() {
  return (
    <div className="bg-[#FAF8F5] text-[#17283A] min-h-screen">
      {/* Page Hero */}
      <section className="bg-[#071F38] text-[#FAF8F5] py-20 relative overflow-hidden border-b border-[#C5A15D]/30">
        <div className="absolute inset-0 opacity-10 pointer-events-none islamic-pattern-dark" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs text-[#FAF8F5]/60 mb-4">
            <Link href="/" className="hover:text-[#D9B979] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#D9B979] font-medium">Academic Programs</span>
          </div>

          <div className="font-arabic text-2xl text-[#C5A15D] font-bold mb-3">
            الْبَرَامِجُ التَّعْلِيمِيَّةُ وَالْمَنَاهِجُ الدِّرَاسِيَّةُ
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF8F5] mb-4">
            Our Academic <span className="text-[#D9B979]">Programs</span>
          </h1>

          <p className="text-base sm:text-lg text-[#FAF8F5]/80 max-w-2xl mx-auto font-light leading-relaxed">
            Progressive, structured Islamic courses grounded in the Quran and Sunnah. Designed for seekers of knowledge seeking depth, practical understanding, and spiritual elevation.
          </p>

          {/* Quick Stats Bar */}
          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs text-[#FAF8F5]/80">
            <span className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#C5A15D]" />
              6 Core Disciplines
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C5A15D]" />
              Authentic Classical Texts
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C5A15D]" />
              Flexible Virtual Timings
            </span>
          </div>
        </div>
      </section>

      {/* Main Directory Area */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense
          fallback={
            <div className="text-center py-20 text-[#6B7280]">
              Loading academic directory...
            </div>
          }
        >
          <ProgramsDirectory />
        </Suspense>
      </section>
    </div>
  );
}
