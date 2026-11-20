import React from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import { BookOpen, GraduationCap, Scale, Sparkles, CheckCircle2 } from "lucide-react";
import { coreValues } from "@/data/institute";

export default function WhyChooseUs() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "BookOpen":
        return <BookOpen className="w-6 h-6 text-[#C5A15D]" />;
      case "GraduationCap":
        return <GraduationCap className="w-6 h-6 text-[#C5A15D]" />;
      case "Scale":
        return <Scale className="w-6 h-6 text-[#C5A15D]" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-[#C5A15D]" />;
      default:
        return <BookOpen className="w-6 h-6 text-[#C5A15D]" />;
    }
  };

  return (
    <section className="py-24 bg-[#071F38] text-[#FAF8F5] relative overflow-hidden border-y border-[#C5A15D]/20">
      {/* Background Islamic Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none islamic-pattern-dark" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          pill="Educational Philosophy"
          arabic="الْعِلْمُ النَّافِعُ وَالْعَمَلُ الصَّالِحُ"
          title="Learning With Purpose and Understanding"
          description="We prioritize authentic scholarship, pedagogical clarity, and sincere spiritual application over haste or superficiality."
          align="center"
          theme="dark"
          className="mb-16"
        />

        {/* 4 Core Educational Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((val, idx) => (
            <div
              key={idx}
              className="bg-[#0B2D50] p-8 rounded-xl border border-[#C5A15D]/30 hover:border-[#C5A15D] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-xl bg-[#071F38] border border-[#C5A15D]/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {getIcon(val.icon)}
                </div>

                <div className="font-arabic text-sm text-[#C5A15D] mb-1 font-semibold">
                  {val.arabic}
                </div>

                <h3 className="font-serif text-xl font-bold text-[#FAF8F5] mb-3">
                  {val.title}
                </h3>

                <p className="text-sm text-[#FAF8F5]/80 leading-relaxed font-light">
                  {val.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs text-[#D9B979]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A15D]" />
                <span>Foundational Value</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
