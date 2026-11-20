import React from "react";
import Button from "@/components/shared/Button";
import { ArrowRight, BookOpen, Compass, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="py-20 bg-[#F4F0E7] text-[#17283A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Composition */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Islamic Arch Border Container */}
              <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-[#C5A15D]/40 bg-white">
                <div className="relative aspect-[4/5] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1000&q=80"
                    alt="Study of the Holy Quran and classical sacred texts"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071F38]/90 via-transparent to-transparent" />

                  {/* Callout box inside image */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-[#071F38]/85 backdrop-blur-xs border border-[#C5A15D]/30 text-[#FAF8F5]">
                    <div className="font-arabic text-xl text-[#D9B979] text-right font-bold mb-1">
                      إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ
                    </div>
                    <p className="text-xs text-[#FAF8F5]/80 italic">
                      &ldquo;Only those fear Allah, from among His servants, who have knowledge.&rdquo;
                    </p>
                    <span className="text-[10px] text-[#C5A15D] tracking-wider block mt-1">
                      — Surah Fatir (35:28)
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Accent Badge */}
              <div className="absolute -top-4 -right-4 bg-[#071F38] text-[#D9B979] border border-[#C5A15D] p-3 rounded-xl shadow-lg hidden sm:flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#C5A15D]" />
                <span className="text-xs font-semibold">Guided by Quran & Sunnah</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#EAE3D6] text-[#071F38] border border-[#C5A15D]/40">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A15D]" />
              <span>Institutional Philosophy</span>
            </div>

            <div className="font-arabic text-xl font-bold text-[#C5A15D]">
              مَعْهَدُ الْإِنْشِرَاحِ لِلتَّعْلِيمِ وَالتَّوْجِيهِ
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071F38] leading-tight">
              An Institution Dedicated to <br className="hidden sm:inline" />
              <span className="text-[#C5A15D]">Beneficial Knowledge</span>
            </h2>

            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
              At Inshirah Institute, we believe that authentic Islamic knowledge should be accessible,
              understandable and meaningful. Our aim is to encourage learning through the Quran and
              Sunnah, helping individuals strengthen their understanding of Islam and apply divine guidance
              with clarity and wisdom.
            </p>

            {/* Core commitments list */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C5A15D] shrink-0 mt-0.5" />
                <p className="text-sm text-[#17283A]">
                  <strong>Authentic Pedagogy:</strong> Every lesson is grounded in classical scholarly consensus and verified Hadith traditions.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C5A15D] shrink-0 mt-0.5" />
                <p className="text-sm text-[#17283A]">
                  <strong>Clarity & Accessibility:</strong> Complex theological and jurisprudential concepts articulated in clear Urdu and English.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C5A15D] shrink-0 mt-0.5" />
                <p className="text-sm text-[#17283A]">
                  <strong>Practical Tazkiyah:</strong> Knowledge that cultivates humility, exemplary character (Akhlaq), and communal goodwill.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                variant="dark"
                size="md"
                href="/about"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Learn About Our Mission
              </Button>

              <Link
                href="/programs"
                className="text-sm font-semibold text-[#071F38] hover:text-[#C5A15D] transition-colors underline underline-offset-4"
              >
                View Academic Tracks
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
