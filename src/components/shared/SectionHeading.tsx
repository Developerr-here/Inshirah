import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  pill?: string;
  title: string;
  arabic?: string;
  description?: string;
  align?: "center" | "left";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  pill,
  title,
  arabic,
  description,
  align = "center",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl",
        isCenter ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {/* Pre-heading Pill */}
      {pill && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3",
            isDark
              ? "bg-[#0B2D50] text-[#D9B979] border border-[#C5A15D]/30"
              : "bg-[#EAE3D6] text-[#071F38] border border-[#C5A15D]/40"
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A15D]" />
          <span>{pill}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A15D]" />
        </div>
      )}

      {/* Optional Arabic Calligraphy Accent */}
      {arabic && (
        <div
          className={cn(
            "font-arabic text-lg md:text-xl font-bold mb-2 tracking-normal",
            isDark ? "text-[#C5A15D]" : "text-[#C5A15D]"
          )}
        >
          {arabic}
        </div>
      )}

      {/* Main Serif Headline */}
      <h2
        className={cn(
          "font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4",
          isDark ? "text-[#FAF8F5]" : "text-[#071F38]"
        )}
      >
        {title}
      </h2>

      {/* Fine Ornamental Divider */}
      <div
        className={cn(
          "flex items-center gap-2 mb-4",
          isCenter ? "justify-center" : "justify-start"
        )}
      >
        <div
          className={cn(
            "h-px w-10",
            isDark ? "bg-[#C5A15D]/40" : "bg-[#C5A15D]/60"
          )}
        />
        <div className="w-2 h-2 rotate-45 bg-[#C5A15D]" />
        <div
          className={cn(
            "h-px w-10",
            isDark ? "bg-[#C5A15D]/40" : "bg-[#C5A15D]/60"
          )}
        />
      </div>

      {/* Descriptive Paragraph */}
      {description && (
        <p
          className={cn(
            "text-base md:text-lg leading-relaxed",
            isDark ? "text-[#FAF8F5]/80" : "text-[#4B5563]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
