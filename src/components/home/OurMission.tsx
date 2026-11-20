import React from "react";
import Button from "@/components/shared/Button";
import { ArrowRight, BookOpen, Heart, ShieldAlert, Sparkles } from "lucide-react";
import Link from "next/link";

export default function OurMission() {
  return (
    <section className="py-24 bg-[#FAF8F5] text-[#17283A] relative border-t border-[#071F38]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Composition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#EAE3D6] text-[#071F38] border border-[#C5A15D]/40">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A15D]" />
              <span>Institutional Mission & Direction</span>
            </div>

            <div className="font-arabic text-xl font-bold text-[#C5A15D]">
              الْعِلْمُ مَعَ الْحِكْمَةِ &bull; وَالتَّعَلُّمُ مَعَ الْهَدَفِ
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071F38] leading-tight">
              Knowledge With Wisdom. <br />
              <span className="text-[#C5A15D]">Learning With Purpose.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
              In an era overflowing with fragmented opinions, unverified claims, and digital noise,
              Inshirah Institute offers an intellectual and spiritual sanctuary. We strive to revive
              the timeless methodology of classical Islamic learning: grounded in the verified texts
              of the Quran and Sunnah, illuminated by prophetic compassion, and tailored for contemporary seekers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-white border border-[#071F38]/10 shadow-xs">
                <div className="w-8 h-8 rounded-md bg-[#071F38] text-[#D9B979] flex items-center justify-center mb-2">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base font-bold text-[#071F38] mb-1">
                  Our Educational Mission
                </h4>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  To democratize authentic, verified Islamic scholarship across language barriers through rigorous curriculum and compassionate mentorship.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white border border-[#071F38]/10 shadow-xs">
                <div className="w-8 h-8 rounded-md bg-[#071F38] text-[#D9B979] flex items-center justify-center mb-2">
                  <Heart className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base font-bold text-[#071F38] mb-1">
                  Spiritual Cultivation
                </h4>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  Moving past academic abstraction to nurture genuine love for Allah and His Messenger ﷺ, fostering humility and noble character.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="dark"
                size="md"
                href="/about"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Read Comprehensive Mission Statement
              </Button>
            </div>
          </div>

          {/* Right Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C5A15D]/40 bg-[#071F38]">
                <div className="relative aspect-[4/5] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1000&q=80"
                    alt="Sanctuary of Islamic learning and illuminated manuscripts"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071F38] via-transparent to-transparent" />
                </div>

                {/* Overlaid Arabic Calligraphy */}
                <div className="p-6 bg-[#071F38] border-t border-[#C5A15D]/30 text-[#FAF8F5]">
                  <div className="font-arabic text-xl text-[#D9B979] text-center font-bold">
                    وَمَن يُؤْتَ الْحِكْمَةَ فَقَدْ أُوتِيَ خَيْرًا كَثِيرًا
                  </div>
                  <p className="text-xs text-[#FAF8F5]/70 text-center italic mt-1 font-serif">
                    &ldquo;And whoever is granted wisdom has indeed been granted abundant good.&rdquo;
                  </p>
                  <span className="text-[10px] text-[#C5A15D] text-center block mt-1">
                    — Surah Al-Baqarah (2:269)
                  </span>
                </div>
              </div>

              {/* Decorative side accent */}
              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-[#C5A15D]/10 rounded-full blur-xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
