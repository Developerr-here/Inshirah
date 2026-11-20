"use client";

import React, { useEffect } from "react";
import { Lecture } from "@/types";
import { X, Calendar, Clock, User, ExternalLink } from "lucide-react";
import { YoutubeIcon, TelegramIcon } from "@/components/shared/Icons";
import Button from "./Button";
import { instituteData } from "@/data/institute";

interface VideoModalProps {
  lecture: Lecture | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({
  lecture,
  isOpen,
  onClose,
}: VideoModalProps) {
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

  if (!isOpen || !lecture) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#071F38]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#071F38] text-[#FAF8F5] rounded-xl shadow-2xl border border-[#C5A15D]/40 overflow-hidden flex flex-col z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0B2D50]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C5A15D]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#D9B979]">
              {lecture.category} &bull; Recorded Discourse
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#FAF8F5]/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close lecture modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Embed Player */}
        <div className="relative w-full aspect-video bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${lecture.youtubeId}?autoplay=1&rel=0`}
            title={lecture.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Details and Community Links */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FAF8F5] mb-1">
              {lecture.title}
            </h3>
            {lecture.arabicTitle && (
              <div className="font-arabic text-lg text-[#C5A15D]">
                {lecture.arabicTitle}
              </div>
            )}
          </div>

          {/* Meta Details */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-[#FAF8F5]/70 border-y border-white/10 py-3">
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-[#C5A15D]" />
              <span className="text-[#FAF8F5] font-medium">{lecture.speaker}</span>
              {lecture.speakerRole && <span>({lecture.speakerRole})</span>}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#C5A15D]" />
              <span>{lecture.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#C5A15D]" />
              <span>{lecture.publishedDate}</span>
            </div>
          </div>

          <p className="text-sm text-[#FAF8F5]/90 leading-relaxed">
            {lecture.description}
          </p>

          {lecture.keyTopics && lecture.keyTopics.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs text-[#D9B979] font-medium">Key Themes:</span>
              {lecture.keyTopics.map((topic, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-full text-[11px] bg-[#163D61] text-[#EAE3D6] border border-white/10"
                >
                  {topic}
                </span>
              ))}
            </div>
          )}

          {/* Institutional External Links */}
          <div className="bg-[#0B2D50] p-4 rounded-lg border border-[#C5A15D]/20 flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
            <div className="text-xs text-[#FAF8F5]/80">
              <span className="font-semibold text-[#D9B979] block mb-0.5">
                Support & Follow Inshirah Digital Dawah
              </span>
              Subscribe to the official YouTube channel or join our Telegram for lecture notes.
            </div>
            <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
              <Button
                variant="dark"
                size="sm"
                href={instituteData.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={<YoutubeIcon className="w-4 h-4 text-red-500" />}
                className="w-full sm:w-auto text-xs"
              >
                YouTube Channel
              </Button>
              <Button
                variant="primary"
                size="sm"
                href={instituteData.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={<TelegramIcon className="w-3.5 h-3.5 text-blue-300" />}
                className="w-full sm:w-auto text-xs"
              >
                Telegram Group
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
