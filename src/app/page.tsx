import React from "react";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import ProgramsSection from "@/components/home/ProgramsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import LearningApproach from "@/components/home/LearningApproach";
import FeaturedLectures from "@/components/home/FeaturedLectures";
import OurMission from "@/components/home/OurMission";
import Testimonials from "@/components/home/Testimonials";
import FAQSection from "@/components/home/FAQSection";
import AdmissionsCTA from "@/components/home/AdmissionsCTA";
import AnnouncementsSection from "@/components/home/AnnouncementsSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Institute Introduction */}
      <AboutPreview />

      {/* 3. Learning Programs */}
      <ProgramsSection />

      {/* 4. Why Choose Inshirah */}
      <WhyChooseUs />

      {/* 5. Learning Approach Timeline */}
      <LearningApproach />

      {/* 6. Featured Lectures */}
      <FeaturedLectures />

      {/* 7. Institutional Mission */}
      <OurMission />

      {/* 8. Student Experiences / Demo Testimonials */}
      <Testimonials />

      {/* 9. Frequently Asked Questions */}
      <FAQSection />

      {/* 10. Admissions Call to Action */}
      <AdmissionsCTA />

      {/* 11. Announcements & Circulars */}
      <AnnouncementsSection />
    </div>
  );
}
