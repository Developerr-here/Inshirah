"use client";

import React, { useState } from "react";
import Button from "@/components/shared/Button";
import { Send, CheckCircle2, AlertCircle, Info, Phone } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Academic Inquiry",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const validate = () => {
    const err: Record<string, string> = {};
    if (!formData.name.trim()) err.name = "Name is required.";
    if (!formData.email.trim()) {
      err.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      err.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      err.message = "Message cannot be empty.";
    }
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

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTicketId("TKT-" + Math.floor(10000 + Math.random() * 90000));
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setTicketId("");
    setFormData({
      name: "",
      email: "",
      subject: "General Academic Inquiry",
      message: "",
    });
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 sm:p-12 rounded-2xl border border-[#071F38]/10 shadow-lg text-center space-y-5 animate-in fade-in duration-200">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 border-2 border-emerald-500/30 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#EAE3D6] text-[#071F38]">
          Demo Reference: {ticketId}
        </span>

        <h4 className="font-serif text-2xl font-bold text-[#071F38]">
          Message Simulated Successfully
        </h4>

        <p className="text-sm text-[#4B5563] max-w-md mx-auto leading-relaxed">
          Thank you, <strong>{formData.name}</strong>. In the production deployment, your inquiry routes directly to the student advisory desk.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button variant="outline" size="sm" onClick={handleReset}>
            Send Another Message
          </Button>
          <Button
            variant="primary"
            size="sm"
            href={`https://wa.me/?text=${encodeURIComponent(
              `Assalamu Alaikum. Following up on message inquiry (Ref: ${ticketId}) for Inshirah Institute.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            icon={<Phone className="w-4 h-4" />}
          >
            Connect via WhatsApp
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 sm:p-10 rounded-2xl border border-[#071F38]/10 shadow-xl space-y-6"
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2 h-2 rounded-full bg-[#C5A15D]" />
        <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A15D]">
          Electronic Inquiries
        </span>
      </div>

      <h3 className="font-serif text-2xl font-bold text-[#071F38]">
        Send an Institutional Message
      </h3>

      <div className="p-3 bg-[#F4F0E7] rounded-lg border border-[#C5A15D]/40 text-xs text-[#071F38] flex items-start gap-2">
        <Info className="w-4 h-4 text-[#C5A15D] shrink-0 mt-0.5" />
        <span>
          <strong>Frontend Prototype:</strong> This form validates your message client-side and demonstrates instant submission handling.
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#071F38] mb-1.5">
            Your Name *
          </label>
          <input
            type="text"
            placeholder="e.g. Fatima Zahra"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-lg border text-sm text-[#17283A] bg-[#FAF8F5] focus:outline-none focus:ring-2 transition-all ${
              errors.name
                ? "border-red-500 focus:ring-red-200"
                : "border-[#D9D0C0] focus:ring-[#C5A15D] focus:bg-white"
            }`}
          />
          {errors.name && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.name}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#071F38] mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            placeholder="e.g. fatima@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#071F38] mb-1.5">
          Inquiry Department / Subject
        </label>
        <select
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg border border-[#D9D0C0] text-sm text-[#17283A] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#C5A15D] focus:bg-white transition-all"
        >
          <option value="General Academic Inquiry">General Academic Inquiry</option>
          <option value="Course Prerequisites & Placement">Course Prerequisites & Placement</option>
          <option value="Recorded Lecture Feedback">Recorded Lecture Feedback</option>
          <option value="International Student Timings">International Student Timings</option>
          <option value="Community & Telegram Discussion">Community & Telegram Discussion</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#071F38] mb-1.5">
          Message *
        </label>
        <textarea
          rows={5}
          placeholder="Type your message or inquiry here..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`w-full px-4 py-2.5 rounded-lg border text-sm text-[#17283A] bg-[#FAF8F5] focus:outline-none focus:ring-2 transition-all ${
            errors.message
              ? "border-red-500 focus:ring-red-200"
              : "border-[#D9D0C0] focus:ring-[#C5A15D] focus:bg-white"
          }`}
        />
        {errors.message && (
          <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.message}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between pt-2">
        <span className="text-xs text-[#6B7280]">
          Expected response: Within 24–48 hours
        </span>

        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={isSubmitting}
          icon={
            isSubmitting ? (
              <span className="animate-spin w-4 h-4 border-2 border-[#071F38] border-t-transparent rounded-full" />
            ) : (
              <Send className="w-4 h-4" />
            )
          }
        >
          {isSubmitting ? "Sending Message..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
