"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import LectureCard from "@/components/shared/LectureCard";
import VideoModal from "@/components/shared/VideoModal";
import Button from "@/components/shared/Button";
import { lecturesData } from "@/data/lectures";
import { Lecture } from "@/types";
import { Search, Play, ArrowRight } from "lucide-react";
import { YoutubeIcon } from "@/components/shared/Icons";
import { instituteData } from "@/data/institute";

export default function FeaturedLectures() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeLecture, setActiveLecture] = useState<Lecture | null>(null);

  const categories = ["All", "Quran", "Hadith", "Tafseer", "Fiqh", "Islamic Guidance"];

  const filteredLectures = lecturesData.filter((lec) => {
    const matchesCategory =
      selectedCategory === "All" || lec.category === selectedCategory;
    const matchesSearch =
      lec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lec.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lec.keyTopics &&
        lec.keyTopics.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        ));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-24 bg-white text-[#17283A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <SectionHeading
          pill="Digital Dawah & Discourses"
          arabic="نَشْرُ الْعِلْمِ وَالْبَصِيرَةِ"
          title="Knowledge Beyond the Classroom"
          description="Access recorded discourses, thematic reminders, and scholarly expositions designed to illuminate contemporary hearts and homes."
          align="center"
          theme="light"
          className="mb-10"
        />

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#071F38]/10">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-[#071F38] text-[#D9B979] border border-[#C5A15D]"
                      : "bg-[#F4F0E7] text-[#17283A] hover:bg-[#EAE3D6]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" />
            <input
              type="text"
              placeholder="Search lectures, topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#F4F0E7] text-sm text-[#17283A] rounded-lg border border-[#D9D0C0] focus:outline-none focus:ring-2 focus:ring-[#C5A15D] focus:bg-white transition-all placeholder:text-[#6B7280]"
            />
          </div>
        </div>

        {/* Lectures Grid */}
        {filteredLectures.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredLectures.slice(0, 4).map((lecture) => (
              <LectureCard
                key={lecture.id}
                lecture={lecture}
                onWatch={(lec) => setActiveLecture(lec)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-[#F4F0E7] rounded-xl border border-[#D9D0C0]">
            <p className="text-[#6B7280] text-sm">
              No recorded discourses found matching your search criteria.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-3 text-xs font-semibold text-[#071F38] underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom CTA Row */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-[#071F38] text-[#FAF8F5] rounded-xl border border-[#C5A15D]/40 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500">
              <YoutubeIcon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-[#FAF8F5]">
                Official Inshirah YouTube Channel
              </h4>
              <p className="text-xs text-[#FAF8F5]/70">
                Subscribe for weekly Friday reminders, Tafseer clips, and Q&A sessions.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              variant="goldOutline"
              size="sm"
              href="/lectures"
              icon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              View Full Lecture Archive
            </Button>
            <Button
              variant="primary"
              size="sm"
              href={instituteData.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              Subscribe on YouTube
            </Button>
          </div>
        </div>
      </div>

      {/* Video Playback Modal */}
      <VideoModal
        lecture={activeLecture}
        isOpen={!!activeLecture}
        onClose={() => setActiveLecture(null)}
      />
    </section>
  );
}
