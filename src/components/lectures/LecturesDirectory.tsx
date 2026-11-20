"use client";

import React, { useState } from "react";
import { lecturesData } from "@/data/lectures";
import { Lecture } from "@/types";
import LectureCard from "@/components/shared/LectureCard";
import VideoModal from "@/components/shared/VideoModal";
import Button from "@/components/shared/Button";
import { Search, Play, Sparkles, Filter, X } from "lucide-react";
import { YoutubeIcon, TelegramIcon } from "@/components/shared/Icons";
import { instituteData } from "@/data/institute";

export default function LecturesDirectory() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeLecture, setActiveLecture] = useState<Lecture | null>(null);

  const categories = ["All", "Quran", "Hadith", "Tafseer", "Fiqh", "Seerah", "Islamic Guidance"];
  const languages = ["All", "Urdu", "English"];

  const featuredLecture = lecturesData.find((l) => l.featured) || lecturesData[0];

  const filteredLectures = lecturesData.filter((lec) => {
    const matchesCategory =
      selectedCategory === "All" || lec.category === selectedCategory;
    const matchesLanguage =
      selectedLanguage === "All" || lec.language.includes(selectedLanguage);
    const matchesSearch =
      lec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lec.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lec.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lec.keyTopics &&
        lec.keyTopics.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        ));

    return matchesCategory && matchesLanguage && matchesSearch;
  });

  const resetFilters = () => {
    setSelectedCategory("All");
    setSelectedLanguage("All");
    setSearchQuery("");
  };

  return (
    <div>
      {/* Featured Lecture Spotlight Banner */}
      {featuredLecture && (
        <div className="bg-[#071F38] text-[#FAF8F5] rounded-2xl overflow-hidden border border-[#C5A15D]/40 shadow-xl mb-14 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Visual Thumbnail */}
            <div
              className="lg:col-span-7 relative aspect-video w-full cursor-pointer group"
              onClick={() => setActiveLecture(featuredLecture)}
            >
              <img
                src={featuredLecture.thumbnail}
                alt={featuredLecture.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071F38] via-black/20 to-transparent" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#C5A15D] text-[#071F38] flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#FAF8F5]/90">
                <span className="px-2.5 py-1 rounded bg-[#071F38]/90 border border-[#C5A15D]/40 text-[#D9B979] font-medium">
                  Featured Discourse
                </span>
                <span className="px-2 py-0.5 rounded bg-black/70">
                  {featuredLecture.duration}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-5 p-6 sm:p-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0B2D50] text-[#D9B979] border border-[#C5A15D]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A15D]" />
                <span>Featured Scholarly Exposition</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF8F5] leading-snug">
                {featuredLecture.title}
              </h2>

              {featuredLecture.arabicTitle && (
                <div className="font-arabic text-lg text-[#C5A15D]">
                  {featuredLecture.arabicTitle}
                </div>
              )}

              <p className="text-sm text-[#FAF8F5]/80 leading-relaxed font-light">
                {featuredLecture.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => setActiveLecture(featuredLecture)}
                  icon={<Play className="w-4 h-4 fill-current" />}
                >
                  Watch Featured Lecture
                </Button>

                <Button
                  variant="dark"
                  size="md"
                  href={instituteData.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<YoutubeIcon className="w-4 h-4 text-red-500" />}
                >
                  YouTube
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="bg-white p-6 rounded-xl border border-[#071F38]/10 shadow-xs mb-8">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B7280]" />
            <input
              type="text"
              placeholder="Search lectures by title, topic, or speaker..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#FAF8F5] text-sm text-[#17283A] rounded-lg border border-[#D9D0C0] focus:outline-none focus:ring-2 focus:ring-[#C5A15D] focus:bg-white transition-all placeholder:text-[#6B7280]"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider shrink-0">
              Language:
            </span>
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="px-3 py-2 bg-[#FAF8F5] border border-[#D9D0C0] rounded-lg text-xs font-medium text-[#17283A] focus:outline-none focus:ring-2 focus:ring-[#C5A15D]"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>

          {(selectedCategory !== "All" ||
            selectedLanguage !== "All" ||
            searchQuery.trim() !== "") && (
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-1 text-xs text-red-600 hover:text-red-700 font-semibold cursor-pointer shrink-0"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#071F38]/10">
          <span className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mr-2">
            Category:
          </span>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
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
      </div>

      {/* Grid of Lectures */}
      {filteredLectures.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredLectures.map((lecture) => (
            <LectureCard
              key={lecture.id}
              lecture={lecture}
              onWatch={(lec) => setActiveLecture(lec)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-xl border border-[#D9D0C0] p-8">
          <h3 className="font-serif text-lg font-bold text-[#071F38] mb-1">
            No Lectures Match Your Search
          </h3>
          <p className="text-xs text-[#6B7280] max-w-sm mx-auto mb-4">
            Try a different keyword or reset filters to view all recorded discourses.
          </p>
          <Button variant="outline" size="sm" onClick={resetFilters}>
            Reset Filters
          </Button>
        </div>
      )}

      {/* Channel Subscriptions Banner */}
      <div className="mt-16 bg-[#0B2D50] text-[#FAF8F5] rounded-xl p-8 border border-[#C5A15D]/40 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-serif text-2xl font-bold text-[#FAF8F5] mb-1">
            Join the Inshirah Digital Community
          </h3>
          <p className="text-xs sm:text-sm text-[#FAF8F5]/80 max-w-xl">
            Our full discourse library is maintained on YouTube with active discussion and reading outlines published inside our Telegram group.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <Button
            variant="primary"
            size="md"
            href={instituteData.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            icon={<YoutubeIcon className="w-4 h-4 text-red-600" />}
          >
            Visit YouTube Channel
          </Button>
          <Button
            variant="dark"
            size="md"
            href={instituteData.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            icon={<TelegramIcon className="w-4 h-4 text-blue-400" />}
          >
            Join Telegram
          </Button>
        </div>
      </div>

      {/* Video Playback Modal */}
      <VideoModal
        lecture={activeLecture}
        isOpen={!!activeLecture}
        onClose={() => setActiveLecture(null)}
      />
    </div>
  );
}
