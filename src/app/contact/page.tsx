import React from "react";
import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Globe,
  ShieldCheck,
} from "lucide-react";
import { YoutubeIcon, TelegramIcon } from "@/components/shared/Icons";
import Button from "@/components/shared/Button";
import { instituteData } from "@/data/institute";

export const metadata: Metadata = {
  title: "Contact Us & Student Advisory | Inshirah Institute",
  description:
    "Get in touch with Inshirah Institute. Connect with our academic advisory desk via WhatsApp, email, or our Telegram discussion community.",
};

export default function ContactPage() {
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
            <span className="text-[#D9B979] font-medium">Contact</span>
          </div>

          <div className="font-arabic text-2xl text-[#C5A15D] font-bold mb-3">
            التَّوَاصُلُ وَالْإِرْشَادُ الْأَكَادِيمِيُّ
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF8F5] mb-4">
            Connect With <span className="text-[#D9B979]">Inshirah</span>
          </h1>

          <p className="text-base sm:text-lg text-[#FAF8F5]/80 max-w-2xl mx-auto font-light leading-relaxed">
            Have questions about program admission, curriculum prerequisites, or community circles? Our student advisory team is here to assist you.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#EAE3D6] text-[#071F38] border border-[#C5A15D]/40 mb-3">
                <MessageSquare className="w-3.5 h-3.5 text-[#C5A15D]" />
                <span>Advisory Desk</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-[#071F38] mb-3">
                We Welcome Your Inquiries
              </h2>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                Whether you are seeking advice on where to begin your Quranic studies or looking for guidance on family enrollment, our team responds with clarity and care.
              </p>
            </div>

            {/* Channels List */}
            <div className="space-y-4">
              {/* WhatsApp */}
              <div className="p-4 rounded-xl bg-white border border-[#071F38]/10 shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
                    Official WhatsApp Line
                  </h4>
                  <div className="text-sm font-bold text-[#071F38] mt-0.5">
                    {instituteData.whatsapp}
                  </div>
                  <p className="text-xs text-[#4B5563] mt-1">
                    Direct messaging for prospective student counseling.
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="p-4 rounded-xl bg-white border border-[#071F38]/10 shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
                    Official Admissions Email
                  </h4>
                  <div className="text-sm font-bold text-[#071F38] mt-0.5">
                    {instituteData.email}
                  </div>
                  <p className="text-xs text-[#4B5563] mt-1">
                    Formal correspondence and administrative support.
                  </p>
                </div>
              </div>

              {/* Telegram Group */}
              <div className="p-4 rounded-xl bg-white border border-[#071F38]/10 shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <TelegramIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
                    Telegram Student Community
                  </h4>
                  <div className="text-sm font-bold text-[#071F38] mt-0.5">
                    t.me/InshirahInstituteGroup
                  </div>
                  <p className="text-xs text-[#4B5563] mt-1">
                    Discussion circles, lecture summaries, and reading lists.
                  </p>
                </div>
              </div>

              {/* YouTube Channel */}
              <div className="p-4 rounded-xl bg-white border border-[#071F38]/10 shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <YoutubeIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
                    Official YouTube Channel
                  </h4>
                  <div className="text-sm font-bold text-[#071F38] mt-0.5">
                    @Inshirah.institute
                  </div>
                  <p className="text-xs text-[#4B5563] mt-1">
                    Public video discourses, lectures, and Friday series.
                  </p>
                </div>
              </div>

              {/* Location Placeholder */}
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#071F38]/10 text-xs space-y-2">
                <div className="flex items-center gap-2 font-semibold text-[#071F38]">
                  <MapPin className="w-4 h-4 text-[#C5A15D]" />
                  <span>Campus & Global Distance Learning</span>
                </div>
                <p className="text-[#6B7280] leading-relaxed">
                  {instituteData.addressPlaceholder}
                </p>
                <div className="flex items-center gap-2 text-[#4B5563] pt-1">
                  <Clock className="w-3.5 h-3.5 text-[#C5A15D]" />
                  <span>{instituteData.hours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
