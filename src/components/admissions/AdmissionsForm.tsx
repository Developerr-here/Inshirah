"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Button from "@/components/shared/Button";
import { programsData } from "@/data/programs";
import {
  CheckCircle2,
  AlertCircle,
  Send,
  Sparkles,
  Phone,
  Mail,
  ShieldCheck,
  Info,
} from "lucide-react";
import { instituteData } from "@/data/institute";

export default function AdmissionsForm() {
  const searchParams = useSearchParams();
  const prefilledProgram = searchParams.get("program") || "";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: prefilledProgram || programsData[0].title,
    preferredFormat: "Online Live",
    background: "Beginner",
    message: "",
  });

  useEffect(() => {
    if (prefilledProgram) {
      setFormData((prev) => ({ ...prev, program: prefilledProgram }));
    }
  }, [prefilledProgram]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);
  const [enquiryRef, setEnquiryRef] = useState<string>("");

  const validate = () => {
    const err: Record<string, string> = {};
    if (!formData.fullName.trim()) err.fullName = "Full name is required.";
    if (!formData.email.trim()) {
      err.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      err.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      err.phone = "Phone or WhatsApp number is required.";
    }
    if (!formData.program) err.program = "Please select a program of interest.";
    return err;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate API submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      const ref = "INSH-" + Math.floor(100000 + Math.random() * 900000);
      setEnquiryRef(ref);
    }, 800);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setEnquiryRef("");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      program: programsData[0].title,
      preferredFormat: "Online Live",
      background: "Beginner",
      message: "",
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-[#071F38]/10 shadow-xl overflow-hidden">
      {/* Top Header */}
      <div className="bg-[#071F38] text-[#FAF8F5] p-6 sm:p-8 border-b border-[#C5A15D]/30 relative">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-[#C5A15D]" />
          <span className="text-xs font-semibold uppercase tracking-wider text-[#D9B979]">
            Cohort Registration &bull; Academic Enquiry
          </span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF8F5]">
          Program Enquiry & Placement Request
        </h3>
        <p className="text-xs sm:text-sm text-[#FAF8F5]/80 mt-1 max-w-xl">
          Submit your educational inquiry below. Our admissions advisor will contact you to review prerequisites and schedule options.
        </p>
      </div>

      {/* Form or Success State */}
      <div className="p-6 sm:p-10">
        {submittedData ? (
          /* Confirmation State */
          <div className="text-center py-8 space-y-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 border-2 border-emerald-500/30 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#EAE3D6] text-[#071F38] mb-2">
                Demo Reference: {enquiryRef}
              </span>
              <h4 className="font-serif text-2xl font-bold text-[#071F38]">
                Enquiry Simulated Successfully!
              </h4>
              <p className="text-sm text-[#4B5563] max-w-md mx-auto mt-2 leading-relaxed">
                Thank you, <strong>{submittedData.fullName}</strong>. In the production deployment, this submission connects directly to the student CRM.
              </p>
            </div>

            {/* Summary Details */}
            <div className="max-w-md mx-auto p-4 rounded-xl bg-[#FAF8F5] border border-[#071F38]/10 text-left text-xs space-y-2 text-[#17283A]">
              <div>
                <strong>Selected Program:</strong> {submittedData.program}
              </div>
              <div>
                <strong>Preferred Format:</strong> {submittedData.preferredFormat}
              </div>
              <div>
                <strong>Contact Email:</strong> {submittedData.email}
              </div>
              <div>
                <strong>Phone / WhatsApp:</strong> {submittedData.phone}
              </div>
            </div>

            {/* Demo Architecture Notice */}
            <div className="max-w-md mx-auto p-3 rounded-lg bg-[#071F38]/5 border border-[#071F38]/10 text-[11px] text-[#6B7280]">
              <strong className="text-[#071F38]">Architecture Status: </strong>
              Frontend validation verified. Form payload ready for REST/GraphQL API integration with the future Student Management Module.
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button variant="outline" size="sm" onClick={handleReset}>
                Submit Another Enquiry
              </Button>
              <Button
                variant="primary"
                size="sm"
                href={`https://wa.me/?text=${encodeURIComponent(
                  `Assalamu Alaikum. I am enquiring about admissions at Inshirah Institute for ${submittedData.program} (Ref: ${enquiryRef}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                icon={<Phone className="w-4 h-4" />}
              >
                Connect on WhatsApp
              </Button>
            </div>
          </div>
        ) : (
          /* Active Form */
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Prototype Banner */}
            <div className="p-3.5 bg-[#F4F0E7] rounded-lg border border-[#C5A15D]/40 flex items-start gap-2.5 text-xs text-[#071F38]">
              <Info className="w-4 h-4 text-[#C5A15D] shrink-0 mt-0.5" />
              <span>
                <strong>Frontend Demo:</strong> Form submissions validate locally. No credentials or fees are requested at this demonstration stage.
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#071F38] mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Abdullah Khan"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className={`w-full px-4 py-2.5 rounded-lg border text-sm text-[#17283A] bg-[#FAF8F5] focus:outline-none focus:ring-2 transition-all ${
                    errors.fullName
                      ? "border-red-500 focus:ring-red-200"
                      : "border-[#D9D0C0] focus:ring-[#C5A15D] focus:bg-white"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#071F38] mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="e.g. seeker@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`w-full px-4 py-2.5 rounded-lg border text-sm text-[#17283A] bg-[#FAF8F5] focus:outline-none focus:ring-2 transition-all ${
                    errors.email
                      ? "border-red-500 focus:ring-red-200"
                      : "border-[#D9D0C0] focus:ring-[#C5A15D] focus:bg-white"
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#071F38] mb-1.5">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +92 300 1234567"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className={`w-full px-4 py-2.5 rounded-lg border text-sm text-[#17283A] bg-[#FAF8F5] focus:outline-none focus:ring-2 transition-all ${
                    errors.phone
                      ? "border-red-500 focus:ring-red-200"
                      : "border-[#D9D0C0] focus:ring-[#C5A15D] focus:bg-white"
                  }`}
                />
                {errors.phone && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.phone}
                  </p>
                )}
              </div>

              {/* Program of Interest */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#071F38] mb-1.5">
                  Program of Interest *
                </label>
                <select
                  value={formData.program}
                  onChange={(e) =>
                    setFormData({ ...formData, program: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-lg border border-[#D9D0C0] text-sm text-[#17283A] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#C5A15D] focus:bg-white transition-all"
                >
                  {programsData.map((p) => (
                    <option key={p.id} value={p.title}>
                      {p.title} ({p.category})
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Format */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#071F38] mb-1.5">
                  Preferred Format
                </label>
                <select
                  value={formData.preferredFormat}
                  onChange={(e) =>
                    setFormData({ ...formData, preferredFormat: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-lg border border-[#D9D0C0] text-sm text-[#17283A] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#C5A15D] focus:bg-white transition-all"
                >
                  <option value="Online Live">Online Live (Virtual Classroom)</option>
                  <option value="Self-Paced Recorded">Self-Paced Recorded Lectures</option>
                  <option value="Hybrid (Live & Recorded)">Hybrid (Live + Recorded Archives)</option>
                </select>
              </div>

              {/* Prior Knowledge Level */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#071F38] mb-1.5">
                  Prior Islamic Studies Experience
                </label>
                <select
                  value={formData.background}
                  onChange={(e) =>
                    setFormData({ ...formData, background: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-lg border border-[#D9D0C0] text-sm text-[#17283A] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#C5A15D] focus:bg-white transition-all"
                >
                  <option value="Beginner">Beginner (Basic Arabic letter recognition)</option>
                  <option value="Intermediate">Intermediate (Completed basic Tajweed or Fiqh)</option>
                  <option value="Advanced">Advanced (Student of knowledge / Hifz background)</option>
                </select>
              </div>
            </div>

            {/* Message / Questions */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#071F38] mb-1.5">
                Message, Prior Studies, or Specific Learning Goals (Optional)
              </label>
              <textarea
                rows={4}
                placeholder="Share any specific learning expectations, preferred timezones, or questions for our academic counsel..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-lg border border-[#D9D0C0] text-sm text-[#17283A] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#C5A15D] focus:bg-white transition-all"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#6B7280]">
                * Information is used solely for academic counseling.
              </span>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                icon={
                  isSubmitting ? (
                    <span className="animate-spin w-4 h-4 border-2 border-[#071F38] border-t-transparent rounded-full" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )
                }
                className="w-full sm:w-auto"
              >
                {isSubmitting ? "Validating Enquiry..." : "Submit Academic Enquiry"}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
