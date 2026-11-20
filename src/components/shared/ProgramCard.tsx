"use client";

import React from "react";
import { Program } from "@/types";
import {
  BookOpen,
  Bookmark,
  Search,
  Scroll,
  Scale,
  Feather,
  Clock,
  Globe,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Button from "./Button";

interface ProgramCardProps {
  program: Program;
  onSelect: (program: Program) => void;
  className?: string;
}

export default function ProgramCard({
  program,
  onSelect,
  className = "",
}: ProgramCardProps) {
  // Select matching Lucide icon
  const getIcon = (name: string) => {
    switch (name) {
      case "BookOpen":
        return <BookOpen className="w-5 h-5 text-[#C5A15D]" />;
      case "Bookmark":
        return <Bookmark className="w-5 h-5 text-[#C5A15D]" />;
      case "Search":
        return <Search className="w-5 h-5 text-[#C5A15D]" />;
      case "Scroll":
        return <Scroll className="w-5 h-5 text-[#C5A15D]" />;
      case "Scale":
        return <Scale className="w-5 h-5 text-[#C5A15D]" />;
      case "Feather":
        return <Feather className="w-5 h-5 text-[#C5A15D]" />;
      default:
        return <BookOpen className="w-5 h-5 text-[#C5A15D]" />;
    }
  };

  return (
    <div
      className={`group relative bg-white rounded-xl border border-[#071F38]/10 hover:border-[#C5A15D]/60 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden ${className}`}
    >
      {/* Top Subtle Gold Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#C5A15D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="p-6">
        {/* Top Badges & Icon */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-[#071F38] flex items-center justify-center border border-[#C5A15D]/30 shadow-xs">
            {getIcon(program.iconName)}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#EAE3D6] text-[#071F38]">
              {program.level}
            </span>
            {program.featured && (
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#071F38] text-[#D9B979] flex items-center gap-1 border border-[#C5A15D]/40">
                <Sparkles className="w-3 h-3 text-[#C5A15D]" /> Featured
              </span>
            )}
          </div>
        </div>

        {/* Category Pill */}
        <div className="text-xs font-medium text-[#C5A15D] uppercase tracking-wider mb-1.5">
          {program.category}
        </div>

        {/* Title & Arabic */}
        <h3 className="font-serif text-xl font-bold text-[#071F38] group-hover:text-[#163D61] transition-colors leading-snug mb-1">
          {program.title}
        </h3>
        {program.arabicTitle && (
          <div className="font-arabic text-sm text-[#C5A15D] mb-3">
            {program.arabicTitle}
          </div>
        )}

        {/* Short Description */}
        <p className="text-sm text-[#4B5563] leading-relaxed line-clamp-3 mb-5">
          {program.shortDescription}
        </p>

        {/* Meta Pills */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#071F38]/10 text-xs text-[#6B7280]">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#C5A15D]" />
            <span>{program.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-[#C5A15D]" />
            <span>{program.format}</span>
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="bg-[#FAF8F5] px-6 py-3.5 border-t border-[#071F38]/5 flex items-center justify-between gap-3">
        <button
          onClick={() => onSelect(program)}
          className="text-xs font-semibold text-[#071F38] hover:text-[#C5A15D] transition-colors flex items-center gap-1 cursor-pointer focus:outline-none"
        >
          View Syllabus <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <Button
          variant="outline"
          size="sm"
          href={`/admissions?program=${encodeURIComponent(program.title)}`}
          className="text-xs py-1 px-3"
        >
          Enquire
        </Button>
      </div>
    </div>
  );
}
