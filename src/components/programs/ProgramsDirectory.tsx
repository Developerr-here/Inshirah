"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { programsData } from "@/data/programs";
import { Program } from "@/types";
import ProgramCard from "@/components/shared/ProgramCard";
import ProgramModal from "@/components/shared/ProgramModal";
import { Search, Filter, BookOpen, Clock, Globe, X } from "lucide-react";
import Button from "@/components/shared/Button";

export default function ProgramsDirectory() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedLevel, setSelectedLevel] = useState<string>("All");
  const [selectedFormat, setSelectedFormat] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalProgram, setActiveModalProgram] = useState<Program | null>(null);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const categories = [
    "All",
    "Quran & Tajweed",
    "Quran Memorization",
    "Tafseer & Quran Understanding",
    "Hadith Studies",
    "Fiqh & Islamic Studies",
    "Arabic & Islamic Learning",
  ];

  const levels = ["All", "Beginner", "Intermediate", "All Levels"];
  const formats = ["All", "Online Live", "Hybrid (Live & Recorded)"];

  const filteredPrograms = programsData.filter((p) => {
    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    const matchesLevel = selectedLevel === "All" || p.level === selectedLevel;
    const matchesFormat =
      selectedFormat === "All" || p.format.includes(selectedFormat);
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.objectives.some((o) =>
        o.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesLevel && matchesFormat && matchesSearch;
  });

  const resetFilters = () => {
    setSelectedCategory("All");
    setSelectedLevel("All");
    setSelectedFormat("All");
    setSearchQuery("");
  };

  const hasActiveFilters =
    selectedCategory !== "All" ||
    selectedLevel !== "All" ||
    selectedFormat !== "All" ||
    searchQuery.trim() !== "";

  return (
    <div>
      {/* Search & Filter Toolbar */}
      <div className="bg-white p-6 rounded-xl border border-[#071F38]/10 shadow-xs mb-10">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-6">
          {/* Search bar */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B7280]" />
            <input
              type="text"
              placeholder="Search by subject, keywords, syllabus topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#FAF8F5] text-sm text-[#17283A] rounded-lg border border-[#D9D0C0] focus:outline-none focus:ring-2 focus:ring-[#C5A15D] focus:bg-white transition-all placeholder:text-[#6B7280]"
            />
          </div>

          {/* Level Filter */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider shrink-0">
              Level:
            </span>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-3 py-2 bg-[#FAF8F5] border border-[#D9D0C0] rounded-lg text-xs font-medium text-[#17283A] focus:outline-none focus:ring-2 focus:ring-[#C5A15D]"
            >
              {levels.map((lvl) => (
                <option key={lvl} value={lvl}>
                  {lvl}
                </option>
              ))}
            </select>
          </div>

          {/* Format Filter */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider shrink-0">
              Format:
            </span>
            <select
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
              className="px-3 py-2 bg-[#FAF8F5] border border-[#D9D0C0] rounded-lg text-xs font-medium text-[#17283A] focus:outline-none focus:ring-2 focus:ring-[#C5A15D]"
            >
              {formats.map((fmt) => (
                <option key={fmt} value={fmt}>
                  {fmt}
                </option>
              ))}
            </select>
          </div>

          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-1 text-xs text-red-600 hover:text-red-700 font-semibold cursor-pointer shrink-0"
            >
              <X className="w-3.5 h-3.5" />
              <span>Clear Filters</span>
            </button>
          )}
        </div>

        {/* Category Pill Buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#071F38]/10">
          <span className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mr-2">
            Subject:
          </span>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#071F38] text-[#D9B979] border border-[#C5A15D] shadow-xs"
                    : "bg-[#F4F0E7] text-[#17283A] hover:bg-[#EAE3D6]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count Banner */}
      <div className="flex items-center justify-between text-xs text-[#6B7280] mb-6 px-1">
        <span>
          Showing <strong>{filteredPrograms.length}</strong> academic programs
          {selectedCategory !== "All" && ` in ${selectedCategory}`}
        </span>
        <span className="italic">* Proposed curricula for upcoming cohorts</span>
      </div>

      {/* Program Grid */}
      {filteredPrograms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
              onSelect={(p) => setActiveModalProgram(p)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-xl border border-[#D9D0C0] p-8">
          <div className="w-12 h-12 rounded-full bg-[#EAE3D6] text-[#071F38] flex items-center justify-center mx-auto mb-3">
            <BookOpen className="w-6 h-6 text-[#C5A15D]" />
          </div>
          <h3 className="font-serif text-lg font-bold text-[#071F38] mb-1">
            No Academic Programs Found
          </h3>
          <p className="text-xs text-[#6B7280] max-w-sm mx-auto mb-4">
            Try adjusting your search criteria or reset filters to view all available courses.
          </p>
          <Button variant="outline" size="sm" onClick={resetFilters}>
            Reset All Filters
          </Button>
        </div>
      )}

      {/* Program Detail Modal */}
      <ProgramModal
        program={activeModalProgram}
        isOpen={!!activeModalProgram}
        onClose={() => setActiveModalProgram(null)}
      />
    </div>
  );
}
