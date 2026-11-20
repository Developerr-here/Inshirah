"use client";

import React, { useEffect } from "react";
import { Program } from "@/types";
import { X, Clock, Globe, BookOpen, CheckCircle2, Award, Calendar, ArrowRight } from "lucide-react";
import Button from "./Button";

interface ProgramModalProps {
  program: Program | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProgramModal({
  program,
  isOpen,
  onClose,
}: ProgramModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#071F38]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#FAF8F5] rounded-xl shadow-2xl border border-[#C5A15D]/40 overflow-hidden flex flex-col z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#071F38] text-[#FAF8F5] p-6 border-b border-[#C5A15D]/30 relative">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#C5A15D] text-[#071F38]">
                  {program.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#0B2D50] border border-[#C5A15D]/40 text-[#D9B979]">
                  {program.level}
                </span>
                {program.isDemo && (
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#163D61] text-[#EAE3D6]/90 border border-white/10">
                    Proposed Demo Syllabus
                  </span>
                )}
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF8F5]">
                {program.title}
              </h3>
              {program.arabicTitle && (
                <div className="font-arabic text-lg text-[#C5A15D] mt-1">
                  {program.arabicTitle}
                </div>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#FAF8F5]/70 hover:text-[#FAF8F5] hover:bg-white/10 rounded-full transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Meta Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-white/10 text-xs text-[#FAF8F5]/90">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C5A15D]" />
              <span>{program.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#C5A15D]" />
              <span>{program.format}</span>
            </div>
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <BookOpen className="w-4 h-4 text-[#C5A15D]" />
              <span>{program.language}</span>
            </div>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-[#17283A]">
          {/* Overview */}
          <div>
            <h4 className="font-serif text-lg font-bold text-[#071F38] mb-2 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#C5A15D] rounded-full" />
              Program Overview
            </h4>
            <p className="text-sm sm:text-base leading-relaxed text-[#4B5563]">
              {program.fullDescription}
            </p>
          </div>

          {/* Learning Objectives */}
          <div className="bg-[#EAE3D6]/40 p-4 rounded-lg border border-[#C5A15D]/20">
            <h4 className="font-serif text-lg font-bold text-[#071F38] mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#C5A15D]" />
              Key Learning Objectives
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {program.objectives.map((obj, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#17283A]">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A15D] shrink-0 mt-0.5" />
                  <span>{obj}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum Structure */}
          <div>
            <h4 className="font-serif text-lg font-bold text-[#071F38] mb-3 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#C5A15D]" />
              Modular Course Structure
            </h4>
            <div className="space-y-3">
              {program.curriculum.map((mod, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg border border-[#071F38]/10 bg-white shadow-xs"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A15D]">
                      {mod.weekOrModule}
                    </span>
                    <span className="text-xs font-medium text-[#4B5563]">
                      {mod.topics.length} Core Topics
                    </span>
                  </div>
                  <h5 className="font-medium text-sm text-[#071F38] mb-2">
                    {mod.title}
                  </h5>
                  <ul className="list-disc list-inside text-xs text-[#4B5563] space-y-1">
                    {mod.topics.map((topic, tidx) => (
                      <li key={tidx}>{topic}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility & Prerequisites */}
          <div className="border-t border-[#071F38]/10 pt-4 text-xs sm:text-sm text-[#4B5563]">
            <p className="mb-1">
              <strong className="text-[#071F38]">Target Eligibility: </strong>
              {program.eligibility}
            </p>
            {program.prerequisites.length > 0 && (
              <p>
                <strong className="text-[#071F38]">Prerequisites: </strong>
                {program.prerequisites.join(" • ")}
              </p>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-[#EAE3D6]/70 p-4 border-t border-[#C5A15D]/30 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#4B5563]">
            Cohort slots are allocated following academic review.
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
              className="w-full sm:w-auto"
            >
              Close
            </Button>
            <Button
              variant="primary"
              size="sm"
              href={`/admissions?program=${encodeURIComponent(program.title)}`}
              onClick={onClose}
              icon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              Enquire for Admission
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
