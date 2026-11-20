import React from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import { learningSteps } from "@/data/institute";
import { Check, ArrowRight } from "lucide-react";

export default function LearningApproach() {
  return (
    <section className="py-24 bg-[#F4F0E7] text-[#17283A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          pill="Systematic Methodology"
          arabic="مَنْهَجِيَّةُ التَّعَلُّمِ وَالْبِنَاءِ"
          title="Our Three-Step Learning Approach"
          description="A progressive pedagogical journey designed to turn information into profound understanding, and understanding into upright moral action."
          align="center"
          theme="light"
          className="mb-16"
        />

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-16 right-16 h-0.5 bg-gradient-to-r from-[#C5A15D]/20 via-[#C5A15D] to-[#C5A15D]/20 -z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {learningSteps.map((step, idx) => (
              <div
                key={step.step}
                className="bg-white rounded-xl p-8 border border-[#071F38]/10 hover:border-[#C5A15D]/60 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-full bg-[#071F38] text-[#D9B979] border-2 border-[#C5A15D] flex items-center justify-center font-serif text-xl font-bold shadow-md">
                      {step.step}
                    </div>
                    <span className="font-arabic text-2xl font-bold text-[#C5A15D]">
                      {step.arabic}
                    </span>
                  </div>

                  <div className="text-xs font-semibold uppercase tracking-wider text-[#C5A15D] mb-1">
                    {step.tagline}
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#071F38] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Specific Process Points */}
                <div className="space-y-2 pt-4 border-t border-[#071F38]/10 text-xs text-[#17283A]">
                  {step.points.map((pt, pidx) => (
                    <div key={pidx} className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#EAE3D6] text-[#071F38] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#C5A15D]" />
                      </div>
                      <span className="leading-tight">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
