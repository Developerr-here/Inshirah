import React, { Suspense } from "react";
import type { Metadata } from "next";
import SectionHeading from "@/components/shared/SectionHeading";
import AdmissionsForm from "@/components/admissions/AdmissionsForm";
import Link from "next/link";
import {
  FileText,
  UserCheck,
  CalendarCheck,
  GraduationCap,
  Phone,
  HelpCircle,
  ShieldCheck,
  Check,
} from "lucide-react";
import { TelegramIcon } from "@/components/shared/Icons";
import Button from "@/components/shared/Button";
import { instituteData } from "@/data/institute";

export const metadata: Metadata = {
  title: "Admissions & Enrollment Process | Inshirah Institute",
  description:
    "Learn about admission requirements, enrollment steps, and submit your program enquiry for Islamic studies cohorts at Inshirah Institute.",
};

export default function AdmissionsPage() {
  const steps = [
    {
      step: "01",
      title: "Submit Enquiry",
      desc: "Fill out the online program enquiry form indicating your subject interest and schedule preferences.",
      icon: <FileText className="w-5 h-5 text-[#C5A15D]" />,
    },
    {
      step: "02",
      title: "Academic Counseling",
      desc: "Our educational advisors review your background and conduct a brief placement assessment if required.",
      icon: <UserCheck className="w-5 h-5 text-[#C5A15D]" />,
    },
    {
      step: "03",
      title: "Cohort Confirmation",
      desc: "Receive your syllabus schedule, study materials outline, and virtual classroom credentials.",
      icon: <CalendarCheck className="w-5 h-5 text-[#C5A15D]" />,
    },
    {
      step: "04",
      title: "Orientation & Classes",
      desc: "Attend the opening orientation session on learning etiquette and commence your structured learning.",
      icon: <GraduationCap className="w-5 h-5 text-[#C5A15D]" />,
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
            <span className="text-[#D9B979] font-medium">Admissions</span>
          </div>

          <div className="font-arabic text-2xl text-[#C5A15D] font-bold mb-3">
            الْقُبُولُ وَالتَّسْجِيلُ الْأَكَادِيمِيُّ
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF8F5] mb-4">
            Begin Your <span className="text-[#D9B979]">Academic Journey</span>
          </h1>

          <p className="text-base sm:text-lg text-[#FAF8F5]/80 max-w-2xl mx-auto font-light leading-relaxed">
            Take the first step towards structured Islamic education. Discover our enrollment steps, cohort schedules, and placement guidelines.
          </p>
        </div>
      </section>

      {/* 4 Steps Roadmap */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          pill="Application Journey"
          arabic="خُطُوَاتُ الِالْتِحَاقِ"
          title="The 4-Step Enrollment Process"
          description="A transparent, guided enrollment journey designed to ensure every student is placed into the appropriate cohort level."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st) => (
            <div
              key={st.step}
              className="bg-white p-6 rounded-xl border border-[#071F38]/10 shadow-xs relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#071F38] flex items-center justify-center">
                    {st.icon}
                  </div>
                  <span className="font-serif text-xl font-bold text-[#C5A15D]">
                    {st.step}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#071F38] mb-2">
                  {st.title}
                </h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  {st.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#071F38]/5 text-[11px] text-[#6B7280] flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-[#C5A15D]" />
                <span>Simple & Guided</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form Container */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense
          fallback={
            <div className="text-center py-12 text-[#6B7280]">
              Loading enquiry form...
            </div>
          }
        >
          <AdmissionsForm />
        </Suspense>
      </section>

      {/* Direct Advisory Contact Options */}
      <section className="py-16 bg-[#F4F0E7] border-t border-[#071F38]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#071F38]">
            Need Personalized Assistance Before Enrolling?
          </h3>
          <p className="text-sm text-[#4B5563] max-w-xl mx-auto">
            Our academic counselors are available to answer questions regarding course intensity, time commitment, and family group enrollments.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              variant="primary"
              size="md"
              href={`https://wa.me/?text=${encodeURIComponent(
                "Assalamu Alaikum, I would like to speak with an admissions advisor at Inshirah Institute."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              icon={<Phone className="w-4 h-4" />}
            >
              WhatsApp Academic Counsel
            </Button>
            <Button
              variant="dark"
              size="md"
              href={instituteData.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={<TelegramIcon className="w-4 h-4 text-blue-400" />}
            >
              Telegram Admissions Group
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
