import { Program } from "@/types";

export const programsData: Program[] = [
  {
    id: "prog-1",
    slug: "quran-and-tajweed",
    title: "Quran Recitation & Tajweed Mastery",
    arabicTitle: "التِّلَاوَةُ وَأَحْكَامُ التَّجْوِيدِ",
    category: "Quran & Tajweed",
    level: "Beginner",
    duration: "16 Weeks (4 Months)",
    format: "Online Live",
    language: "Bilingual (Urdu & English)",
    shortDescription:
      "Master correct Makharij (points of articulation), Sifaat (characteristics), and rules of Noon Sakinah, Meem Sakinah, and Madd.",
    fullDescription:
      "A structured, interactive curriculum designed to elevate your recitation of the Noble Quran according to the verified rules of Tajweed (Hafs 'an 'Asim). Under individual instructor guidance, students transition from phonetic correctness to fluent, melodious recitation reflecting reverence and precision.",
    eligibility:
      "Open to all adult learners and youth (ages 14+) with basic Arabic alphabet recognition.",
    prerequisites: [
      "Ability to identify basic Arabic letters and Harakat",
      "Dedication of 4-5 hours per week including practice",
    ],
    objectives: [
      "Perfect articulation points (Makharij al-Huroof) with precision",
      "Master essential rules of Noon & Meem Sakinah, Tanween, and Qalqalah",
      "Learn rules of Madd (prolongation) and Waqf (stopping signs)",
      "Recite selected Surahs with continuous corrective feedback",
    ],
    curriculum: [
      {
        weekOrModule: "Module 1",
        title: "Articulatory Anatomy & Letter Foundations",
        topics: [
          "Introduction to Tajweed sciences & spiritual etiquette",
          "The five major regions of articulation (Al-Jawf, Al-Halq, Al-Lisaan, Ash-Shafatayn, Al-Khayshoom)",
          "Distinguishing commonly confused letters (e.g. Ha/Haa, Dhad/Zha)",
        ],
      },
      {
        weekOrModule: "Module 2",
        title: "Rules of Noon, Meem & Tanween",
        topics: [
          "Izhar Halqi, Idgham (with and without Ghunnah)",
          "Iqlab and Ikhfa Haqiqi with practical drill sessions",
          "Meem Sakinah rules: Ikhfa Shafawi, Idgham Mutamathilayn, Izhar Shafawi",
        ],
      },
      {
        weekOrModule: "Module 3",
        title: "Sifaat & Phonetic Characteristics",
        topics: [
          "Permanent characteristics with opposites (Hams vs. Jahr, Shiddah vs. Rakhawah)",
          "Permanent characteristics without opposites (Qalqalah, Safeer, Leen, Inhiraf, Takreer, Tafash-shi, Istitalah)",
          "Tafkheem (heavy letters) and Tarqeeq (light letters)",
        ],
      },
      {
        weekOrModule: "Module 4",
        title: "Madd Rules, Waqf, and Applied Recitation",
        topics: [
          "Madd Asli (natural) and Madd Far'i (derived prolongation)",
          "Principles of Waqf (stopping), Ibtida' (starting), and pause signs",
          "Practical recital examination of Juz 30 (Juz 'Amma)",
        ],
      },
    ],
    featured: true,
    iconName: "BookOpen",
    isDemo: true,
  },
  {
    id: "prog-2",
    slug: "quran-memorization-hifz",
    title: "Structured Quran Memorization (Hifz)",
    arabicTitle: "تَحْفِيظُ الْقُرْآنِ الْكَرِيمِ",
    category: "Quran Memorization",
    level: "All Levels",
    duration: "Flexible (Modular Semesters)",
    format: "Online Live",
    language: "Urdu",
    shortDescription:
      "A disciplined, personalized memorization track emphasizing strong retention (Muraja'ah), daily revision, and spiritual connection.",
    fullDescription:
      "Designed for students committed to embedding the words of Allah into their hearts. This program couples daily individual Sabaq (new lesson) sessions with a systematic Sabqi and Manzil (continuous revision) framework so that memorized portions remain solid and enduring.",
    eligibility:
      "Proficiency in Tajweed and fluent recitation of the Quran without errors.",
    prerequisites: [
      "Successful completion of Tajweed assessment",
      "Commitment to daily revision discipline",
    ],
    objectives: [
      "Memorize selected Ajza' or complete the Holy Quran systematically",
      "Develop long-term retention through structured revision cycles",
      "Understand the overarching theme and message of memorized Surahs",
      "Build spiritual discipline and reverence for the Quran in daily life",
    ],
    curriculum: [
      {
        weekOrModule: "Stage 1",
        title: "Foundations & Juz 30 / Juz 29",
        topics: [
          "Techniques of active auditory and visual retention",
          "Mastery of short Surahs with perfect Tajweed and pause rules",
          "Establishing the daily Sabaq, Sabqi, and Manzil routine",
        ],
      },
      {
        weekOrModule: "Stage 2",
        title: "Key Surahs of Reflection (Surah Al-Baqarah & Yasin)",
        topics: [
          "Memorization of foundational long Surahs with contextual markers",
          "Identification of Mutashabihat (recurrent similar verses)",
          "Weekly cumulative retention drills with assigned mentor",
        ],
      },
      {
        weekOrModule: "Stage 3",
        title: "Progressive Ajza' Memorization",
        topics: [
          "Personalized pacing adapted to student capability",
          "Cross-referencing similar Ayahs across different Surahs",
          "Rigorous quarterly comprehensive evaluations",
        ],
      },
      {
        weekOrModule: "Stage 4",
        title: "Consolidation & Continuous Review (Itqan)",
        topics: [
          "Multi-Juz recital in single sittings",
          "Preservation strategies for working adults and full-time students",
          "Mentorship on leading prayer and community recitations",
        ],
      },
    ],
    featured: true,
    iconName: "Bookmark",
    isDemo: true,
  },
  {
    id: "prog-3",
    slug: "tafseer-and-quran-understanding",
    title: "Tafseer & Quranic Understanding",
    arabicTitle: "تَفْسِيرُ الْقُرْآنِ وَتَدَبُّرُهُ",
    category: "Tafseer & Quran Understanding",
    level: "Intermediate",
    duration: "24 Weeks (6 Months)",
    format: "Hybrid (Live & Recorded)",
    language: "Bilingual (Urdu & English)",
    shortDescription:
      "Explore the profound meanings, linguistic nuances, causes of revelation (Asbab al-Nuzul), and life lessons of the Quran.",
    fullDescription:
      "Go beyond superficial reading to unlock deep contemplative reflection (Tadabbur). Drawing from classical commentaries (Ibn Kathir, Al-Tabari, Al-Qurtubi) alongside contemporary explanations, this course unpacks how divine revelation addresses contemporary dilemmas and illuminates human character.",
    eligibility:
      "Seekers of Islamic knowledge who desire thematic comprehension and spiritual depth.",
    prerequisites: [
      "Ability to read the Quran",
      "Interest in reflective study and note-taking",
    ],
    objectives: [
      "Understand the methodologies of classical Tafseer and scholarly consensus",
      "Study Asbab al-Nuzul (occasions of revelation) to grasp context",
      "Cultivate the art of Tadabbur (contemplation) for personal ethical reform",
      "Clarify modern misconceptions surrounding controversial verses",
    ],
    curriculum: [
      {
        weekOrModule: "Module 1",
        title: "Principles of Tafseer (Usul al-Tafseer)",
        topics: [
          "How the Quran interprets itself; Sunnah as the prime commentary",
          "The role of the Sahabah, Tabi'un, and classical Arabic linguistics",
          "Methodologies of classical and contemporary Mufassirun",
        ],
      },
      {
        weekOrModule: "Module 2",
        title: "Surah Al-Fatihah & Foundations of Tawheed",
        topics: [
          "Deep dive into the mother of the Book (Umm al-Kitab)",
          "The three categories of Tawheed as demonstrated in the Quran",
          "The psychology of guidance and deviation",
        ],
      },
      {
        weekOrModule: "Module 3",
        title: "Selected Meccan & Medinan Surahs",
        topics: [
          "Contrasting themes: Creed and resurrection vs. legislative ethics",
          "In-depth analysis of Surah Yusuf, Al-Kahf, and Al-Hujurat",
          "Prophetic narratives and lessons for resilient faith",
        ],
      },
      {
        weekOrModule: "Module 4",
        title: "Contemporary Tadabbur & Practical Living",
        topics: [
          "Addressing modern philosophical doubts through Quranic paradigms",
          "The Quranic blueprint for family stability and moral society",
          "Final capstone project on reflective personal journal",
        ],
      },
    ],
    featured: true,
    iconName: "Search",
    isDemo: true,
  },
  {
    id: "prog-4",
    slug: "hadith-studies",
    title: "Hadith Studies & Prophetic Traditions",
    arabicTitle: "دِرَاسَاتُ الْحَدِيثِ النَّبَوِيِّ",
    category: "Hadith Studies",
    level: "Intermediate",
    duration: "20 Weeks (5 Months)",
    format: "Hybrid (Live & Recorded)",
    language: "Urdu",
    shortDescription:
      "A systematic journey through prophetic guidance, terminology (Mustalah al-Hadith), and moral lessons from the Sahih collections.",
    fullDescription:
      "Delve into the preservation, authentication, and transformative wisdom of the Prophetic traditions. Students study the rigorous science of Sanad (chain) and Matn (text), explore selections from Imam Nawawi's 40 Hadith and Riyad al-Salihin, and learn to apply Sunnah in modern daily challenges.",
    eligibility:
      "Enthusiasts of Hadith literature and students seeking authentic foundations in Sunnah.",
    prerequisites: ["Basic familiarity with Islamic terminology"],
    objectives: [
      "Understand the rigorous sciences of Hadith verification and classification",
      "Study Imam Nawawi's foundational Forty Hadith with comprehensive commentary",
      "Appreciate the Sahabah's unmatched dedication to transmitting the Sunnah",
      "Recognize weak/fabricated narrations and avoid unverified dissemination",
    ],
    curriculum: [
      {
        weekOrModule: "Module 1",
        title: "Mustalah al-Hadith (Science of Hadith Nomenclature)",
        topics: [
          "Definition of Hadith, Sunnah, Athar, Khabar, Sanad, and Matn",
          "Criteria of Sahih (Authentic), Hasan (Good), and Da'eef (Weak) narrations",
          "The preservation of Hadith: Oral transmission, early codification, and compilation",
        ],
      },
      {
        weekOrModule: "Module 2",
        title: "Imam an-Nawawi's 40 Hadith (Part 1)",
        topics: [
          "Hadith 1: Actions are by Intentions (Al-A'malu bin-Niyyat)",
          "Hadith 2: The Gabriel Tradition (Islam, Iman, Ihsan)",
          "Hadith 3-10: Pillars of Faith, Halal/Haram, and Sincerity in Religion",
        ],
      },
      {
        weekOrModule: "Module 3",
        title: "Imam an-Nawawi's 40 Hadith (Part 2)",
        topics: [
          "Hadith 11-25: Restraint of the tongue, brotherhood, removing harm",
          "Hadith 26-42: Charity, repentance, self-reckoning, and reliance on Allah",
          "Contextualizing prophetic maxims in modern societal challenges",
        ],
      },
      {
        weekOrModule: "Module 4",
        title: "Selections from Riyad al-Salihin",
        topics: [
          "Chapters on Patience (Sabr), Truthfulness (Sidq), and Sincerity",
          "Prophetic manners in trade, family relations, and speech",
          "Research methodology for verifying contemporary viral quotes",
        ],
      },
    ],
    featured: true,
    iconName: "Scroll",
    isDemo: true,
  },
  {
    id: "prog-5",
    slug: "fiqh-and-islamic-studies",
    title: "Essential Fiqh for Daily Living",
    arabicTitle: "الْفِقْهُ الْمُيَسَّرُ لِلْعِبَادَاتِ وَالْمُعَامَلَاتِ",
    category: "Fiqh & Islamic Studies",
    level: "Beginner",
    duration: "14 Weeks (3.5 Months)",
    format: "Online Live",
    language: "Urdu",
    shortDescription:
      "Clarify the practical rulings of Taharah (purification), Salah (prayer), Sawm (fasting), Zakat, and ethical transactions.",
    fullDescription:
      "Islamic jurisprudence made straightforward, accessible, and practical. This program focuses on 'Fard 'Ayn' (individual obligations), guiding learners through correct worship rituals, contemporary financial ethics, family rights, and navigating modern ethical dilemmas with scholarly clarity.",
    eligibility:
      "Anyone seeking clarity on performing worship correctly according to classical jurisprudence.",
    prerequisites: ["None - designed for all practicing Muslims"],
    objectives: [
      "Master correct rulings of Taharah: Wudu, Ghusl, Tayammum, and purification doubts",
      "Perform Salah with all essential Arkan (pillars), Shuroot, and Sunan fulfilled",
      "Understand calculations for Zakat and rules governing Ramadan fasting",
      "Comprehend ethical boundaries in modern work, commerce, and digital trade",
    ],
    curriculum: [
      {
        weekOrModule: "Module 1",
        title: "Fiqh of Purification (Taharah)",
        topics: [
          "Categories of water and purity; types of impurities (Najasat)",
          "Complete practical breakdown of Wudu, Ghusl, and Tayammum",
          "Wiping over foot coverings (Masah 'ala al-Khuffayn) and medical bandages",
        ],
      },
      {
        weekOrModule: "Module 2",
        title: "Fiqh of Prayer (Salah)",
        topics: [
          "Conditions (Shurut), Pillars (Arkan), and Obligations (Wajibat) of Salah",
          "Sujud al-Sahw (prostrations of forgetfulness) and congregational rules",
          "Traveler's prayer (Qasr & Jam'), Friday congregational prayer, and Janazah",
        ],
      },
      {
        weekOrModule: "Module 3",
        title: "Fiqh of Fasting (Sawm) & Zakat",
        topics: [
          "Validating the fast, things that invalidate, and permissible exemptions",
          "Calculation of Zakat on gold, savings, investments, and business inventory",
          "Zakat al-Fitr and Sadaqah rules",
        ],
      },
      {
        weekOrModule: "Module 4",
        title: "Fiqh of Financial & Social Ethics (Mu'amalat)",
        topics: [
          "Principles of lawful earnings; prohibition of Riba (interest) and Gharar (uncertainty)",
          "Rights of parents, spouses, and children in Islamic jurisprudence",
          "Contemporary medical and ethical questions",
        ],
      },
    ],
    featured: false,
    iconName: "Scale",
    isDemo: true,
  },
  {
    id: "prog-6",
    slug: "classical-arabic-foundations",
    title: "Classical Quranic Arabic Foundations",
    arabicTitle: "مَبَادِئُ اللُّغَةِ الْعَرَبِيَّةِ لِفَهْمِ الْقُرْآنِ",
    category: "Arabic & Islamic Learning",
    level: "Beginner",
    duration: "20 Weeks (5 Months)",
    format: "Online Live",
    language: "Bilingual (Urdu & English)",
    shortDescription:
      "Decode the language of the Quran through foundational Nahw (syntax), Sarf (morphology), and high-frequency Quranic vocabulary.",
    fullDescription:
      "Unlock direct comprehension of the Quran in its original tongue without relying solely on translations. Through an intuitive approach tailored for non-native speakers, students grasp word forms, sentence construction, and grammatical markers, experiencing the direct eloquence of divine speech.",
    eligibility: "Students able to read Arabic text without vowel confusion.",
    prerequisites: ["Ability to read Arabic text"],
    objectives: [
      "Acquire 80% of high-frequency Quranic root words and patterns",
      "Understand foundational Sarf (verb conjugation patterns: past, present, command)",
      "Master essential Nahw: nominal sentences (Jumlah Ismiyyah) and verbal sentences (Jumlah Fi'liyyah)",
      "Translate simple Quranic verses directly during personal recitation",
    ],
    curriculum: [
      {
        weekOrModule: "Module 1",
        title: "The Arabic Word & Parts of Speech",
        topics: [
          "Division of words: Ism (Noun), Fi'l (Verb), and Harf (Particle)",
          "The four characteristics of an Ism: Gender, Number, Definiteness, and Case (I'rab)",
          "Prepositions (Huroof al-Jarr) and the genitive case",
        ],
      },
      {
        weekOrModule: "Module 2",
        title: "Phrases & Sentence Architecture (Nahw)",
        topics: [
          "Adjectival phrase (Murakkab Tauseefi) and possessive phrase (Murakkab Idafi)",
          "Constructing the nominal sentence (Mubtada' and Khabar)",
          "Demonstrative pronouns (Asma' al-Isharah) and relative pronouns",
        ],
      },
      {
        weekOrModule: "Module 3",
        title: "Verbal Systems & Conjugation (Sarf)",
        topics: [
          "Root letter system (Thulathi Mujarrad) and semantic patterns",
          "Conjugating the past tense (Fi'l Madi) with all pronoun variations",
          "Conjugating the present/future tense (Fi'l Mudari') and imperative (Amr)",
        ],
      },
      {
        weekOrModule: "Module 4",
        title: "Quranic Textual Analysis & Direct Reading",
        topics: [
          "Analyzing short Surahs (Surah Al-Ikhlas, Al-Falaq, An-Nas, Al-Kawthar)",
          "Identifying subject (Fa'il), object (Maf'ul), and adverbial particles",
          "Bridging grammar with emotional connection in Salah",
        ],
      },
    ],
    featured: false,
    iconName: "Feather",
    isDemo: true,
  },
];
