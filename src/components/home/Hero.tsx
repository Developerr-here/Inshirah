import React from "react";
import Button from "@/components/shared/Button";
import { ArrowRight, Play, BookOpen, Sparkles, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-[#071F38] text-[#FAF8F5] overflow-hidden border-b border-[#C5A15D]/30">
      {/* Background Islamic Geometric Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none islamic-pattern-dark" />

      {/* Ambient Gold Radial Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C5A15D]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-1/4 w-80 h-80 bg-[#163D61]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pill Accent with Arabic Bismillah or Verse */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#0B2D50] text-[#D9B979] border border-[#C5A15D]/40">
              <span className="w-2 h-2 rounded-full bg-[#C5A15D] animate-pulse" />
              <span>Dedicated Islamic Academy</span>
              <span className="text-[#C5A15D]/40">&bull;</span>
              <span className="font-arabic text-sm text-[#EAE3D6] font-normal">
                رَبِّ زِدْنِي عِلْمًا
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF8F5] leading-[1.12]">
              Knowledge That <span className="text-[#D9B979]">Illuminates.</span>
              <br />
              Guidance That <span className="text-[#C5A15D]">Transforms.</span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#FAF8F5]/85 leading-relaxed max-w-2xl font-light">
              Discover the teachings of the Quran and Sunnah through structured Islamic education,
              meaningful learning and a deeper understanding of Deen. Accessible instruction
              in Urdu and English designed for seekers of authentic knowledge.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                href="/programs"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Explore Our Programs
              </Button>

              <Button
                variant="goldOutline"
                size="lg"
                href="/lectures"
                icon={<Play className="w-4 h-4 fill-current" />}
              >
                Watch Our Lectures
              </Button>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg text-xs text-[#FAF8F5]/75">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C5A15D] shrink-0" />
                <span>Quran & Sunnah Centered</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#C5A15D] shrink-0" />
                <span>Urdu & English Instruction</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C5A15D] shrink-0" />
                <span>Structured Semesters</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Visual Composition matching Brand Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Gold Border Frame */}
              <div className="absolute -inset-2 rounded-2xl border border-[#C5A15D]/40 -rotate-1 hidden sm:block" />

              {/* Main Image Container */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-[#C5A15D]/60 bg-[#0B2D50]">
                {/* Architectural Dome / Islamic Learning Atmosphere */}
                <div className="relative aspect-[4/3] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=85"
                    alt="Majestic illuminated mosque dome sanctuary of Islamic knowledge"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071F38] via-transparent to-black/30" />
                </div>

                {/* Overlay Card: Calligraphic Highlight */}
                <div className="p-6 bg-gradient-to-b from-[#071F38]/90 to-[#071F38] backdrop-blur-md border-t border-[#C5A15D]/30">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="font-arabic text-xl sm:text-2xl text-[#D9B979] leading-snug font-bold">
                        طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَىٰ كُلِّ مُسْلِمٍ
                      </div>
                      <p className="text-xs text-[#FAF8F5]/70 italic mt-1 font-serif">
                        &ldquo;Seeking knowledge is an obligation upon every Muslim.&rdquo;
                      </p>
                      <span className="text-[10px] text-[#C5A15D] uppercase tracking-wider">
                        — Sunan Ibn Majah
                      </span>
                    </div>

                    <div className="w-12 h-12 rounded-full bg-[#C5A15D]/20 border border-[#C5A15D] flex items-center justify-center shrink-0">
                      <BookOpen className="w-6 h-6 text-[#D9B979]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-[#0B2D50] border border-[#C5A15D] text-[#FAF8F5] px-4 py-2.5 rounded-lg shadow-xl text-xs font-medium flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Admissions Enquiries Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
