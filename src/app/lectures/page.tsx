import React from "react";
import type { Metadata } from "next";
import LecturesDirectory from "@/components/lectures/LecturesDirectory";
import Link from "next/link";
import { PlayCircle, BookOpen, Clock } from "lucide-react";
import { YoutubeIcon } from "@/components/shared/Icons";
import { instituteData } from "@/data/institute";

export const metadata: Metadata = {
  title: "Lectures & Recorded Discourses | Inshirah Institute",
  description:
    "Explore the public lecture library of Inshirah Institute: Tafseer insights, Hadith explanations, Tajweed principles, and practical Islamic guidance in Urdu and English.",
};

export default function LecturesPage() {
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
            <span className="text-[#D9B979] font-medium">Lecture Library</span>
          </div>

          <div className="font-arabic text-2xl text-[#C5A15D] font-bold mb-3">
            مَكْتَبَةُ الْمُحَاضَرَاتِ وَالدُّرُوسِ الْمُسَجَّلَةِ
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF8F5] mb-4">
            Knowledge Beyond the <span className="text-[#D9B979]">Classroom</span>
          </h1>

          <p className="text-base sm:text-lg text-[#FAF8F5]/80 max-w-2xl mx-auto font-light leading-relaxed">
            Curated scholarly lectures, Friday discourses, and thematic series addressing Quranic contemplation, Hadith authenticity, and Islamic jurisprudence.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#FAF8F5]/80">
            <span className="flex items-center gap-1.5">
              <PlayCircle className="w-4 h-4 text-[#C5A15D]" />
              Stream Anywhere
            </span>
            <span className="flex items-center gap-1.5">
              <YoutubeIcon className="w-4 h-4 text-red-500" />
              Verified Inshirah YouTube Stream
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#C5A15D]" />
              Urdu & English Discourse
            </span>
          </div>
        </div>
      </section>

      {/* Main Lectures Container */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LecturesDirectory />
      </section>
    </div>
  );
}
