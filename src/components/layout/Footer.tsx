"use client";

import React from "react";
import Link from "next/link";
import Logo from "@/components/shared/Logo";
import { instituteData } from "@/data/institute";
import { programsData } from "@/data/programs";
import { Mail, Phone, MapPin, ArrowUp, Heart } from "lucide-react";
import { YoutubeIcon, TelegramIcon } from "@/components/shared/Icons";

export default function Footer() {
  return (
    <footer className="bg-[#071F38] text-[#FAF8F5] border-t border-[#C5A15D]/30 relative overflow-hidden">
      {/* Subtle Geometric Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none islamic-pattern-dark" />

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Col 1 & 2: Brand Information */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="dark" size="lg" showTagline={true} />

            <p className="text-sm text-[#FAF8F5]/80 leading-relaxed max-w-sm mt-3">
              {instituteData.description}
            </p>

            {/* Official Media Channels */}
            <div className="pt-2">
              <div className="text-xs font-semibold text-[#D9B979] uppercase tracking-wider mb-3">
                Official Knowledge Channels
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={instituteData.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0B2D50] hover:bg-[#163D61] border border-[#C5A15D]/30 text-xs font-medium text-[#FAF8F5] transition-colors"
                >
                  <YoutubeIcon className="w-4 h-4 text-red-500" />
                  <span>YouTube Channel</span>
                </a>

                <a
                  href={instituteData.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0B2D50] hover:bg-[#163D61] border border-[#C5A15D]/30 text-xs font-medium text-[#FAF8F5] transition-colors"
                >
                  <TelegramIcon className="w-4 h-4 text-blue-400" />
                  <span>Telegram Community</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Academic Programs */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#D9B979] tracking-wide mb-4 pb-1 border-b border-[#C5A15D]/20">
              Academic Programs
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF8F5]/80">
              {programsData.slice(0, 5).map((program) => (
                <li key={program.id}>
                  <Link
                    href={`/programs?category=${encodeURIComponent(program.category)}`}
                    className="hover:text-[#D9B979] transition-colors line-clamp-1"
                  >
                    {program.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/programs"
                  className="text-[#C5A15D] hover:underline font-semibold flex items-center gap-1 mt-1"
                >
                  View All Programs &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#D9B979] tracking-wide mb-4 pb-1 border-b border-[#C5A15D]/20">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF8F5]/80">
              <li>
                <Link href="/" className="hover:text-[#D9B979] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D9B979] transition-colors">
                  About the Institute
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-[#D9B979] transition-colors">
                  Learning Programs
                </Link>
              </li>
              <li>
                <Link href="/lectures" className="hover:text-[#D9B979] transition-colors">
                  Recorded Lectures
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-[#D9B979] transition-colors">
                  Admissions Enquiry
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D9B979] transition-colors">
                  Contact & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Advisory */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#D9B979] tracking-wide mb-4 pb-1 border-b border-[#C5A15D]/20">
              Student Advisory
            </h4>
            <ul className="space-y-3 text-xs text-[#FAF8F5]/80">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#C5A15D] shrink-0 mt-0.5" />
                <span>{instituteData.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#C5A15D] shrink-0 mt-0.5" />
                <span>WhatsApp: {instituteData.whatsapp}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A15D] shrink-0 mt-0.5" />
                <span>{instituteData.addressPlaceholder}</span>
              </li>
            </ul>

            <div className="mt-4 p-3 rounded bg-[#0B2D50] border border-[#C5A15D]/20 text-[11px] text-[#FAF8F5]/70">
              <strong className="text-[#D9B979] block mb-1">Advisory Hours</strong>
              {instituteData.hours}
            </div>
          </div>
        </div>

        {/* Prototype Transparency Notice */}
        <div className="p-4 rounded-lg bg-[#0B2D50]/80 border border-[#C5A15D]/30 mb-8 text-xs text-[#FAF8F5]/80 leading-relaxed">
          <strong className="text-[#D9B979]">Institutional Notice: </strong>
          {instituteData.disclaimer}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F5]/60">
          <div>
            &copy; 2026 {instituteData.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-[#D9B979] transition-colors">
              Educational Philosophy
            </Link>
            <Link href="/admissions" className="hover:text-[#D9B979] transition-colors">
              Admissions
            </Link>
            <Link href="/contact" className="hover:text-[#D9B979] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
