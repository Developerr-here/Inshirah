import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "dark" | "light"; // "dark" = on dark navy backgrounds, "light" = on ivory/white backgrounds
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
}

export default function Logo({
  variant = "light",
  size = "md",
  showTagline = true,
  className = "",
}: LogoProps) {
  const isDark = variant === "dark";

  const sizeClasses = {
    sm: { icon: "w-8 h-8", title: "text-lg", arabic: "text-xs", subtitle: "text-[10px]" },
    md: { icon: "w-11 h-11", title: "text-xl", arabic: "text-xs", subtitle: "text-[11px]" },
    lg: { icon: "w-16 h-16", title: "text-2xl md:text-3xl", arabic: "text-sm", subtitle: "text-xs" },
  };

  const { icon, title, arabic, subtitle } = sizeClasses[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group select-none transition-transform active:scale-[0.98] ${className}`}
      aria-label="Inshirah Institute Homepage"
    >
      {/* Emblem SVG: Islamic Dome + Radiant Open Quran (Rehal) */}
      <div className={`relative shrink-0 ${icon} flex items-center justify-center`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Arch / Medallion */}
          <rect
            x="4"
            y="4"
            width="92"
            height="92"
            rx="20"
            fill={isDark ? "#0B2D50" : "#071F38"}
            stroke="#C5A15D"
            strokeWidth="2.5"
            strokeOpacity="0.85"
          />

          {/* Inner Decorative Arch */}
          <path
            d="M50 14 C34 26 24 40 24 64 L76 64 C76 40 66 26 50 14 Z"
            fill="none"
            stroke="#C5A15D"
            strokeWidth="1.5"
            strokeDasharray="2 2"
            opacity="0.6"
          />

          {/* Radiant Sunburst / Noor Rays above book */}
          <g stroke="#D9B979" strokeWidth="1.5" opacity="0.9">
            <line x1="50" y1="22" x2="50" y2="28" />
            <line x1="40" y1="25" x2="43" y2="30" />
            <line x1="60" y1="25" x2="57" y2="30" />
            <line x1="33" y1="32" x2="38" y2="35" />
            <line x1="67" y1="32" x2="62" y2="35" />
          </g>

          {/* Central Golden Star / Noor Dot */}
          <circle cx="50" cy="33" r="2.5" fill="#C5A15D" />

          {/* Open Quran / Rehal (Book of Wisdom) */}
          <path
            d="M50 48 C42 42 32 44 26 48 L26 66 C32 62 42 60 50 66 C58 60 68 62 74 66 L74 48 C68 44 58 42 50 48 Z"
            fill={isDark ? "#163D61" : "#0B2D50"}
            stroke="#C5A15D"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* Book Spine & Ribbons */}
          <line x1="50" y1="48" x2="50" y2="66" stroke="#D9B979" strokeWidth="1.8" />
          <path
            d="M33 52 C38 50 44 51 47 54"
            stroke="#D9B979"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.8"
          />
          <path
            d="M67 52 C62 50 56 51 53 54"
            stroke="#D9B979"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Rehal (Cross Stand) Base */}
          <path
            d="M35 70 L65 70 M42 70 L58 84 M58 70 L42 84"
            stroke="#C5A15D"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Typography Column */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-2">
          <span
            className={`font-serif tracking-wider font-bold uppercase transition-colors ${
              isDark ? "text-[#FAF8F5] group-hover:text-[#D9B979]" : "text-[#071F38] group-hover:text-[#C5A15D]"
            } ${title}`}
          >
            Inshirah
          </span>
          <span
            className={`font-serif tracking-widest text-xs uppercase px-1.5 py-0.5 rounded border ${
              isDark
                ? "border-[#C5A15D]/40 text-[#D9B979] bg-[#071F38]/60"
                : "border-[#071F38]/20 text-[#071F38] bg-[#EAE3D6]/60"
            }`}
          >
            Institute
          </span>
        </div>

        {showTagline && (
          <div className="flex items-center gap-2 mt-0.5">
            <span
              className={`font-arabic text-xs tracking-normal font-semibold ${
                isDark ? "text-[#C5A15D]" : "text-[#C5A15D]"
              } ${arabic}`}
            >
              مَعْهَدُ الْإِنْشِرَاحِ
            </span>
            <span className={`text-[10px] tracking-wider uppercase opacity-70 ${
              isDark ? "text-[#FAF8F5]" : "text-[#17283A]"
            } ${subtitle}`}>
              &bull; Islamic Education
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
