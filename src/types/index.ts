export interface ProgramCurriculumModule {
  weekOrModule: string;
  title: string;
  topics: string[];
}

export interface Program {
  id: string;
  slug: string;
  title: string;
  arabicTitle?: string;
  category: 'Quran & Tajweed' | 'Quran Memorization' | 'Tafseer & Quran Understanding' | 'Hadith Studies' | 'Fiqh & Islamic Studies' | 'Arabic & Islamic Learning';
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  duration: string;
  format: 'Online Live' | 'Self-Paced Recorded' | 'Hybrid (Live & Recorded)';
  language: 'Urdu' | 'English' | 'Bilingual (Urdu & English)';
  shortDescription: string;
  fullDescription: string;
  eligibility: string;
  prerequisites: string[];
  objectives: string[];
  curriculum: ProgramCurriculumModule[];
  featured: boolean;
  iconName: string;
  isDemo: boolean;
}

export interface Lecture {
  id: string;
  title: string;
  arabicTitle?: string;
  speaker: string;
  speakerRole?: string;
  category: 'Quran' | 'Hadith' | 'Tafseer' | 'Fiqh' | 'Seerah' | 'Islamic Guidance';
  duration: string;
  youtubeId: string;
  youtubeUrl: string;
  publishedDate: string;
  description: string;
  featured: boolean;
  thumbnail: string;
  language: 'Urdu' | 'English' | 'Arabic';
  keyTopics?: string[];
  isDemo?: boolean;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  program: string;
  quote: string;
  rating: number;
  isDemo: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Programs' | 'Admissions' | 'Lectures' | 'Technical';
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  badge: string;
  category: string;
  summary: string;
  linkText?: string;
  linkHref?: string;
}

export interface InstituteInfo {
  name: string;
  shortName: string;
  arabicName: string;
  tagline: string;
  subheadline: string;
  description: string;
  youtubeUrl: string;
  telegramUrl: string;
  email: string;
  whatsapp: string;
  phone: string;
  hours: string;
  addressPlaceholder: string;
  disclaimer: string;
}
