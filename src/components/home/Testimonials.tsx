"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import { testimonialsData } from "@/data/testimonials";
import { Star, ChevronLeft, ChevronRight, Quote, Info } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="py-24 bg-[#F4F0E7] text-[#17283A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          pill="Student Experience"
          arabic="أَصْدَاءُ التَّعَلُّمِ وَالْبِنَاءِ"
          title="Experiences That Inspire Learning"
          description="Reflections illustrating the pedagogical impact, mentorship quality, and spiritual atmosphere of our academic cohorts."
          align="center"
          theme="light"
          className="mb-12"
        />

        {/* Demo Transparency Banner */}
        <div className="max-w-2xl mx-auto mb-10 p-3 bg-[#EAE3D6] border border-[#C5A15D]/40 rounded-lg flex items-center gap-2.5 text-xs text-[#071F38]">
          <Info className="w-4 h-4 text-[#C5A15D] shrink-0" />
          <span>
            <strong>Editorial Transparency:</strong> The following entries represent demonstration reflections illustrating the intended student journey prior to official inaugural cohort graduation.
          </span>
        </div>

        {/* Testimonial Feature Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#071F38]/10 shadow-lg relative overflow-hidden">
            <Quote className="w-16 h-16 text-[#C5A15D]/20 absolute top-6 right-6 pointer-events-none" />

            {/* Stars */}
            <div className="flex items-center gap-1 mb-6 text-[#C5A15D]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>

            {/* Quote */}
            <p className="font-serif text-xl sm:text-2xl text-[#071F38] leading-relaxed italic mb-8">
              &ldquo;{current.quote}&rdquo;
            </p>

            {/* Author and Program */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#071F38]/10">
              <div>
                <h4 className="font-bold text-base text-[#071F38]">
                  {current.author}
                </h4>
                <div className="text-xs text-[#6B7280]">
                  <span>{current.program}</span> &bull; <span>{current.location}</span>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-[#071F38]/20 flex items-center justify-center text-[#071F38] hover:bg-[#071F38] hover:text-[#FAF8F5] transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-medium text-[#6B7280] px-2">
                  {currentIndex + 1} / {testimonialsData.length}
                </span>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-[#071F38]/20 flex items-center justify-center text-[#071F38] hover:bg-[#071F38] hover:text-[#FAF8F5] transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
