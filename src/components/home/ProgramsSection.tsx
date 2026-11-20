"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import ProgramCard from "@/components/shared/ProgramCard";
import ProgramModal from "@/components/shared/ProgramModal";
import Button from "@/components/shared/Button";
import { programsData } from "@/data/programs";
import { Program } from "@/types";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ProgramsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProgram, setActiveModalProgram] = useState<Program | null>(null);

  const categories = [
    "All",
    "Quran & Tajweed",
    "Quran Memorization",
    "Tafseer & Quran Understanding",
    "Hadith Studies",
    "Fiqh & Islamic Studies",
  ];

  const filteredPrograms =
    selectedCategory === "All"
      ? programsData
      : programsData.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-24 bg-white text-[#17283A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          pill="Curriculum & Studies"
          arabic="سَبِيلُ الْعِلْمِ وَالْفَهْمِ"
          title="Explore the Path of Knowledge"
          description="Structured academic programs designed to guide students from foundational Quranic recitation to in-depth classical Tafseer and Hadith studies."
          align="center"
          theme="light"
          className="mb-10"
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#071F38] text-[#D9B979] shadow-md border border-[#C5A15D]"
                    : "bg-[#F4F0E7] text-[#17283A] hover:bg-[#EAE3D6] border border-transparent"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
              onSelect={(p) => setActiveModalProgram(p)}
            />
          ))}
        </div>

        {/* Bottom CTA & Notice */}
        <div className="mt-14 text-center space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="dark"
              size="lg"
              href="/programs"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View Full Academic Catalog
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/admissions"
            >
              Enquire About Cohort Availability
            </Button>
          </div>

          <p className="text-xs text-[#6B7280] max-w-lg mx-auto">
            * Note: Program offerings represent proposed curricula for Inshirah Institute cohorts.
            Custom schedules and 1-on-1 pacing available upon enquiry.
          </p>
        </div>
      </div>

      {/* Program Detail Modal */}
      <ProgramModal
        program={activeModalProgram}
        isOpen={!!activeModalProgram}
        onClose={() => setActiveModalProgram(null)}
      />
    </section>
  );
}
