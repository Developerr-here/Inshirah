"use client";

import React from "react";
import { Lecture } from "@/types";
import { Play, Clock, User, Calendar } from "lucide-react";

interface LectureCardProps {
  lecture: Lecture;
  onWatch: (lecture: Lecture) => void;
  className?: string;
}

export default function LectureCard({
  lecture,
  onWatch,
  className = "",
}: LectureCardProps) {
  return (
    <div
      className={`group bg-white rounded-xl border border-[#071F38]/10 hover:border-[#C5A15D]/60 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer ${className}`}
      onClick={() => onWatch(lecture)}
    >
      <div>
        {/* Thumbnail Container */}
        <div className="relative aspect-video w-full overflow-hidden bg-[#071F38]">
          <img
            src={lecture.thumbnail}
            alt={lecture.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85 group-hover:opacity-95"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071F38] via-transparent to-transparent opacity-75" />

          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#071F38]/90 text-[#D9B979] border border-[#C5A15D]/40 backdrop-blur-xs">
              {lecture.category}
            </span>
          </div>

          {/* Duration Badge */}
          <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded bg-black/75 text-[#FAF8F5] text-xs font-medium backdrop-blur-xs">
            <Clock className="w-3 h-3 text-[#C5A15D]" />
            <span>{lecture.duration}</span>
          </div>

          {/* Play Icon Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-[#C5A15D] text-[#071F38] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#D9B979]">
              <Play className="w-5 h-5 fill-current ml-0.5" />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="p-5">
          <div className="flex items-center gap-2 text-xs text-[#6B7280] mb-2">
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-[#C5A15D]" />
              <span className="font-medium text-[#17283A]">{lecture.speaker}</span>
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-[#6B7280]" />
              <span>{lecture.publishedDate}</span>
            </span>
          </div>

          <h3 className="font-serif text-lg font-bold text-[#071F38] group-hover:text-[#163D61] transition-colors leading-snug line-clamp-2 mb-1">
            {lecture.title}
          </h3>

          {lecture.arabicTitle && (
            <div className="font-arabic text-xs text-[#C5A15D] mb-2">
              {lecture.arabicTitle}
            </div>
          )}

          <p className="text-xs text-[#4B5563] line-clamp-2 leading-relaxed mb-3">
            {lecture.description}
          </p>

          {lecture.keyTopics && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {lecture.keyTopics.slice(0, 2).map((topic, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded text-[10px] bg-[#EAE3D6]/60 text-[#17283A]"
                >
                  {topic}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="px-5 py-3 bg-[#FAF8F5] border-t border-[#071F38]/5 flex items-center justify-between text-xs font-semibold text-[#071F38] group-hover:text-[#C5A15D] transition-colors">
        <span>Watch Recorded Discourse</span>
        <span className="text-sm">&rarr;</span>
      </div>
    </div>
  );
}
