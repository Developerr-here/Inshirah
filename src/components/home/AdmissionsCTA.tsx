import React from "react";
import Button from "@/components/shared/Button";
import { ArrowRight, BookOpen, Compass, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { instituteData } from "@/data/institute";

export default function AdmissionsCTA() {
  return (
    <section className="py-20 bg-[#071F38] text-[#FAF8F5] relative overflow-hidden border-t border-[#C5A15D]/30">
      {/* Background Islamic Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none islamic-pattern-dark" />

      {/* Decorative Gold Rings */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-80 h-80 rounded-full border border-[#C5A15D]/10 pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 rounded-full border border-[#C5A15D]/10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#0B2D50] text-[#D9B979] border border-[#C5A15D]/40 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#C5A15D]" />
          <span>Academic Enrollment</span>
          <span className="text-[#C5A15D]/40">&bull;</span>
          <span className="font-arabic text-sm text-[#EAE3D6]">
            وَقُل رَّبِّ زِدْنِي عِلْمًا
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF8F5] mb-4 max-w-3xl mx-auto leading-tight">
          Begin Your Journey Towards <br className="hidden sm:inline" />
          <span className="text-[#D9B979]">Beneficial Knowledge</span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg text-[#FAF8F5]/85 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
          Take the next step towards a deeper understanding of the Quran and Sunnah.
          Connect with our academic advisory team to explore upcoming cohort schedules and admission criteria.
        </p>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            href="/admissions"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            Enquire About Admissions
          </Button>

          <Button
            variant="goldOutline"
            size="lg"
            href="/programs"
          >
            Explore All Programs
          </Button>
        </div>

        {/* Quick Highlights */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#FAF8F5]/70">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C5A15D]" />
            Free Academic Counseling
          </span>
          <span className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#C5A15D]" />
            Urdu & English Instruction
          </span>
          <span className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#C5A15D]" />
            Live & Recorded Sessions
          </span>
        </div>
      </div>
    </section>
  );
}
