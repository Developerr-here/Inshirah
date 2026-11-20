import React from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import { announcementsData } from "@/data/announcements";
import { Bell, ArrowRight, Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function AnnouncementsSection() {
  return (
    <section className="py-20 bg-[#F4F0E7] text-[#17283A] border-t border-[#071F38]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#EAE3D6] text-[#071F38] border border-[#C5A15D]/40 mb-2">
              <Bell className="w-3.5 h-3.5 text-[#C5A15D]" />
              <span>Institute Notice Board</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#071F38]">
              Latest Updates & Circulars
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#6B7280] max-w-md">
            Stay informed with upcoming academic cohorts, new recorded lecture releases, and community announcements.
          </p>
        </div>

        {/* Announcements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {announcementsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-6 border border-[#071F38]/10 hover:border-[#C5A15D]/60 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#071F38] text-[#D9B979]">
                    {item.badge}
                  </span>
                  <span className="text-xs text-[#6B7280] flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#C5A15D]" />
                    <span className="line-clamp-1">{item.date}</span>
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#071F38] leading-snug mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-[#4B5563] leading-relaxed mb-4">
                  {item.summary}
                </p>
              </div>

              {item.linkHref && (
                <div className="pt-3 border-t border-[#071F38]/10">
                  <Link
                    href={item.linkHref}
                    target={item.linkHref.startsWith("http") ? "_blank" : undefined}
                    rel={item.linkHref.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#071F38] hover:text-[#C5A15D] transition-colors"
                  >
                    <span>{item.linkText || "Read Details"}</span>
                    {item.linkHref.startsWith("http") ? (
                      <ExternalLink className="w-3 h-3" />
                    ) : (
                      <ArrowRight className="w-3 h-3" />
                    )}
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
