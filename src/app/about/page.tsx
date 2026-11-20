import React from "react";
import type { Metadata } from "next";
import SectionHeading from "@/components/shared/SectionHeading";
import Button from "@/components/shared/Button";
import {
  BookOpen,
  GraduationCap,
  Scale,
  Sparkles,
  Compass,
  CheckCircle2,
  Users,
  ShieldAlert,
  ArrowRight,
  Info,
} from "lucide-react";
import { instituteData, coreValues } from "@/data/institute";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Our Mission, Vision & Educational Philosophy",
  description:
    "Learn about Inshirah Institute, an Islamic educational institution dedicated to authentic Quran and Sunnah based learning, accessible in Urdu and English.",
};

export default function AboutPage() {
  const facultyPlaceholders = [
    {
      title: "Senior Quran & Tajweed Faculty",
      arabic: "أُسْتَاذُ التَّجْوِيدِ وَالْقِرَاءَاتِ",
      role: "Faculty Lead — Recitation & Hifz",
      specialization: "Makharij, Sifaat, and Hafs 'an 'Asim Recitation Sciences",
      note: "Authorized Islamic instructors holding verified sanad in recitation.",
    },
    {
      title: "Hadith & Prophetic Studies Faculty",
      arabic: "أُسْتَاذُ عُلُومِ الْحَدِيثِ",
      role: "Faculty Lead — Prophetic Traditions",
      specialization: "Mustalah al-Hadith, Sahihain, and Riyadh al-Salihin",
      note: "Specialists in Hadith verification and contextual application.",
    },
    {
      title: "Tafseer & Quranic Studies Faculty",
      arabic: "أُسْتَاذُ التَّفْسِيرِ وَعُلُومِ الْقُرْآنِ",
      role: "Faculty Lead — Quranic Exegesis",
      specialization: "Classical Commentaries, Linguistic Analysis, and Tadabbur",
      note: "Educators committed to demystifying classical Arabic sciences.",
    },
    {
      title: "Fiqh & Applied Shariah Faculty",
      arabic: "أُسْتَاذُ الْفِقْهِ وَالْمُعَامَلَاتِ",
      role: "Faculty Lead — Practical Jurisprudence",
      specialization: "Taharah, Salah, Zakat, and Modern Financial Ethics",
      note: "Instructors focused on everyday religious practice with scholarly moderation.",
    },
  ];

  return (
    <div className="bg-[#FAF8F5] text-[#17283A] min-h-screen">
      {/* Page Hero */}
      <section className="bg-[#071F38] text-[#FAF8F5] py-20 relative overflow-hidden border-b border-[#C5A15D]/30">
        <div className="absolute inset-0 opacity-10 pointer-events-none islamic-pattern-dark" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs text-[#FAF8F5]/60 mb-4">
            <Link href="/" className="hover:text-[#D9B979] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#D9B979] font-medium">About the Institute</span>
          </div>

          <div className="font-arabic text-2xl text-[#C5A15D] font-bold mb-3">
            عَنْ مَعْهَدِ الْإِنْشِرَاحِ
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF8F5] mb-4">
            Dedicated to <span className="text-[#D9B979]">Authentic Knowledge</span>
          </h1>

          <p className="text-base sm:text-lg text-[#FAF8F5]/80 max-w-2xl mx-auto font-light leading-relaxed">
            Preserving classical Islamic pedagogical traditions while harnessing contemporary virtual tools to deliver structured, transformative education in Urdu and English.
          </p>
        </div>
      </section>

      {/* Institutional Overview & Story */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#EAE3D6] text-[#071F38] border border-[#C5A15D]/40">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A15D]" />
              <span>Identity & Foundation</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#071F38]">
              Reviving the Tradition of Scholarly Clarity
            </h2>

            <p className="text-base text-[#4B5563] leading-relaxed">
              Inshirah Institute was founded on a singular conviction: that beneficial Islamic knowledge (Al-’Ilm an-Nafi’) is the greatest catalyst for personal dignity, family stability, and communal peace.
            </p>

            <p className="text-base text-[#4B5563] leading-relaxed">
              In an age where sensational soundbites often obscure traditional scholarly depth, our institute serves as a reliable educational anchor. We structure classical sciences—such as Tajweed, Hadith terminology, Tafseer methodology, and Fiqh fundamentals—into clear, modular semesters designed for students, working professionals, and families worldwide.
            </p>

            <div className="p-4 rounded-xl bg-[#EAE3D6]/50 border-l-4 border-[#C5A15D] text-sm text-[#071F38] italic font-serif">
              &ldquo;The search for knowledge must bring calmness to the soul and light to the intellect. Our aim is to cultivate understanding that transforms hearts.&rdquo;
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-[#C5A15D]/40 bg-white">
              <div className="relative aspect-[4/5] w-full">
                <img
                  src="https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1000&q=80"
                  alt="Islamic calligraphy and educational study environment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071F38]/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-center text-[#FAF8F5]">
                  <div className="font-arabic text-xl text-[#D9B979] font-bold">
                    وَمَا أُوتِيتُم مِّنَ الْعِلْمِ إِلَّا قَلِيلًا
                  </div>
                  <p className="text-xs text-[#FAF8F5]/80 italic mt-1">
                    &ldquo;And you have been given of knowledge but a little.&rdquo;
                  </p>
                  <span className="text-[10px] text-[#C5A15D] block mt-0.5">
                    — Surah Al-Isra (17:85)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-20 bg-[#F4F0E7] border-y border-[#071F38]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            pill="Direction & Purpose"
            arabic="الرُّؤْيَةُ وَالرِّسَالَةُ"
            title="Our Mission & Educational Vision"
            description="Guiding principles that steer our academic policies, instructor qualifications, and student mentorship."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-xl p-8 border border-[#071F38]/10 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#071F38] text-[#D9B979] flex items-center justify-center mb-6 border border-[#C5A15D]/40">
                  <Compass className="w-6 h-6 text-[#C5A15D]" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#C5A15D] mb-1">
                  Our Vision
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#071F38] mb-4">
                  A Beacon of Grounded Islamic Learning
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-4">
                  To be a premier global Islamic educational sanctuary recognized for pedagogical excellence, balance, and the nurturing of upright character grounded in the Quran and Sunnah.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-[#17283A] pt-4 border-t border-[#071F38]/10">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A15D]" />
                  <span>Democratizing authentic knowledge worldwide</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A15D]" />
                  <span>Nurturing sound critical thinking aligned with orthodox consensus</span>
                </li>
              </ul>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-xl p-8 border border-[#071F38]/10 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#071F38] text-[#D9B979] flex items-center justify-center mb-6 border border-[#C5A15D]/40">
                  <BookOpen className="w-6 h-6 text-[#C5A15D]" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#C5A15D] mb-1">
                  Our Mission
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#071F38] mb-4">
                  Empowering Seekers Through Understanding
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-4">
                  To provide structured, accessible, and high-quality Islamic curricula that eliminate prevalent misconceptions, develop linguistic and spiritual literacy, and inspire righteous living.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-[#17283A] pt-4 border-t border-[#071F38]/10">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A15D]" />
                  <span>Structured modular courses in Urdu and English</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A15D]" />
                  <span>Direct instructor feedback and recitation evaluation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Institutional Values */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          pill="Ethical Pillars"
          arabic="الْقِيَمُ الْمُؤَسَّسِيَّةُ"
          title="Guiding Institutional Values"
          description="Every program, lecture, and student interaction is guided by uncompromising principles."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((v, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 border border-[#071F38]/10 shadow-xs hover:border-[#C5A15D] transition-all"
            >
              <div className="font-arabic text-sm text-[#C5A15D] font-bold mb-1">
                {v.arabic}
              </div>
              <h4 className="font-serif text-lg font-bold text-[#071F38] mb-2">
                {v.title}
              </h4>
              <p className="text-xs text-[#4B5563] leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Faculty & Academic Advisory Section (Clearly labelled editable demo placeholders) */}
      <section className="py-20 bg-[#071F38] text-[#FAF8F5] relative overflow-hidden border-t border-[#C5A15D]/30">
        <div className="absolute inset-0 opacity-10 pointer-events-none islamic-pattern-dark" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            pill="Academic Faculty"
            arabic="الْهَيْئَةُ التَّدْرِيسِيَّةُ وَالْإِرْشَادِيَّةُ"
            title="Scholarly Leadership & Department Leads"
            description="Our academic departments are led by verified instructors specializing in classical Arabic, Hadith authentication, Tajweed recitation, and Quranic exegesis."
            align="center"
            theme="dark"
            className="mb-10"
          />

          {/* Ethical Notice Banner */}
          <div className="max-w-2xl mx-auto mb-12 p-3 bg-[#0B2D50] border border-[#C5A15D]/40 rounded-lg flex items-center gap-2.5 text-xs text-[#FAF8F5]/90">
            <Info className="w-4 h-4 text-[#C5A15D] shrink-0" />
            <span>
              <strong>Note:</strong> Faculty profiles below represent departmental divisions. Verified individual scholar profiles and biographies will be published upon cohort launch.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyPlaceholders.map((fac, idx) => (
              <div
                key={idx}
                className="bg-[#0B2D50] rounded-xl p-6 border border-[#C5A15D]/30 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#071F38] border border-[#C5A15D] flex items-center justify-center text-[#D9B979] mb-4">
                    <GraduationCap className="w-6 h-6 text-[#C5A15D]" />
                  </div>
                  <div className="font-arabic text-sm text-[#C5A15D] font-bold mb-1">
                    {fac.arabic}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#FAF8F5] mb-1">
                    {fac.title}
                  </h4>
                  <div className="text-xs text-[#D9B979] font-medium mb-3">
                    {fac.role}
                  </div>
                  <p className="text-xs text-[#FAF8F5]/80 leading-relaxed mb-3">
                    <strong>Focus:</strong> {fac.specialization}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 text-[11px] text-[#FAF8F5]/60 italic">
                  {fac.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#F4F0E7] text-center border-t border-[#071F38]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#071F38] mb-3">
            Ready to Begin Your Educational Journey?
          </h3>
          <p className="text-sm text-[#4B5563] max-w-xl mx-auto mb-6">
            Explore our curriculum catalog or connect with our admissions advisor to discuss cohort placement and schedule options.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="dark"
              size="md"
              href="/programs"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Browse Educational Programs
            </Button>
            <Button
              variant="outline"
              size="md"
              href="/admissions"
            >
              Submit Admissions Enquiry
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
