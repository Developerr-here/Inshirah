import { Announcement } from "@/types";

export const announcementsData: Announcement[] = [
  {
    id: "ann-1",
    title: "Upcoming Cohort: Tajweed & Makharij Intensive Session",
    date: "Intake Scheduled for Next Academic Term",
    badge: "Admissions Open",
    category: "Academic Intake",
    summary:
      "Registrations are now open for the upcoming cohort of Quran Recitation & Tajweed Mastery. Limited small-group slots are reserved to ensure personalized teacher recitation critique.",
    linkText: "Enquire for Intake",
    linkHref: "/admissions",
  },
  {
    id: "ann-2",
    title: "New Public Lecture Series: Prophetic Character in Contemporary Society",
    date: "Available on Inshirah Media Channels",
    badge: "New Release",
    category: "Lectures & Discourse",
    summary:
      "A 4-part weekly lecture series examining prophetic solutions to societal anxiety, family communication, and digital distractions has been published to our YouTube channel.",
    linkText: "Watch Discourse",
    linkHref: "/lectures",
  },
  {
    id: "ann-3",
    title: "Telegram Student Discussion Circle: Weekly Tafseer Q&A",
    date: "Every Sunday Evening",
    badge: "Community Circle",
    category: "Student Forum",
    summary:
      "Join the official Inshirah Telegram community for curated reading lists, session recap summaries, and interactive doubt clarification with fellow students.",
    linkText: "Join Telegram",
    linkHref: "https://t.me/InshirahInstituteGroup",
  },
];
