"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import { faqsData } from "@/data/faqs";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-24 bg-white text-[#17283A] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          pill="Inquiries & Guidance"
          arabic="الْأَسْئِلَةُ الشَّائِعَةُ"
          title="Frequently Asked Questions"
          description="Clear answers regarding our enrollment criteria, online learning format, study subjects, and lecture resources."
          align="center"
          theme="light"
          className="mb-12"
        />

        {/* Accordion Container */}
        <div className="space-y-3.5">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-[#C5A15D] bg-[#FAF8F5] shadow-xs"
                    : "border-[#071F38]/10 bg-white hover:border-[#071F38]/30"
                }`}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs uppercase tracking-wider font-semibold px-2 py-0.5 rounded ${
                        isOpen
                          ? "bg-[#071F38] text-[#D9B979]"
                          : "bg-[#EAE3D6] text-[#071F38]"
                      }`}
                    >
                      {faq.category}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#071F38]">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#C5A15D] text-[#071F38] rotate-180"
                        : "bg-[#EAE3D6] text-[#071F38]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-[#4B5563] leading-relaxed border-t border-[#071F38]/5 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Inquiry CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#6B7280]">
            Have an academic question not answered here?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#071F38] hover:text-[#C5A15D] transition-colors mt-2 underline"
          >
            <span>Contact our Student Advisory Desk</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
