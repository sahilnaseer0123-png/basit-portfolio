export interface SocialLink {
  name: string;
  url: string;
  handle: string;
  icon: "github" | "linkedin" | "instagram" | "facebook" | "mail";
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  focus: string;
  details: string[];
}

export const profileData = {
  name: "Basit Majeed",
  title: "Student of Islamic Studies, Arabic & Computer Engineering | Writer & Research Enthusiast",
  shortTitle: "Scholar & Engineer",
  tagline: "Bridging Computer Engineering, Hadith Scholarship & Classical Arabic Research",
  email: "contact.basitmajeed@gmail.com",
  location: "Kashmir, India",
  status: "Open for Research Collaborations & Engineering Projects",
  heroBio:
    "A multidisciplinary student and researcher uniting computational rigor with classical Islamic traditions. Devoted to software engineering, critical Hadith analysis, Arabic morphology, and analytical writing.",
  fullBio: [
    "I operate at the intersection of classical scholarship and contemporary computing. As a student of Computer Engineering alongside rigorous studies in Islamic Sciences and Classical Arabic, my mission is to harmonize analytical algorithmic thinking with centuries-old methodologies of Hadith criticism and philological inquiry.",
    "My academic work spans software engineering fundamentals, classical Arabic grammar (Nahw and Sarf), and the systematic authentication of historical texts through traditional Isnad analysis. Simultaneously, I produce technical and academic writing designed to distill nuanced Islamic principles and software architecture into clear, structured discourse.",
    "Whether designing software solutions or cataloging classical Arabic manuscripts, I adhere to uncompromising standards of precision, research ethics, and intellectual depth."
  ],
  education: [
    {
      degree: "Computer Engineering",
      institution: "University Engineering Institute",
      period: "Present",
      focus: "Computer Science Fundamentals & Software Engineering",
      details: [
        "Core coursework in Data Structures, Algorithms, Operating Systems, Database Architecture, and Computer Networks.",
        "Focusing on high-reliability software concepts and analytical problem solving."
      ]
    },
    {
      degree: "Classical Islamic Studies & Arabic Philology",
      institution: "Traditional Seminars & Guided Scholarly Mentorship",
      period: "Ongoing",
      focus: "Hadith Sciences, Arabic Grammar (Nahw/Sarf), Usul al-Hadith",
      details: [
        "Systematic study of Hadith terminology, biographical evaluation (Ilm ar-Rijal), and textual criticism (Matn analysis).",
        "Mastery of classical Arabic grammar, vocabulary, and rhetorical frameworks (Balagha)."
      ]
    }
  ] as EducationItem[],
  socialLinks: [
    {
      name: "Email",
      url: "mailto:contact.basitmajeed@gmail.com",
      handle: "contact.basitmajeed@gmail.com",
      icon: "mail",
      description: "Direct academic, writing & technical inquiries"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/abbasitlone",
      handle: "@abbasitlone",
      icon: "instagram",
      description: "Personal thoughts, books & scholarly reflections"
    },
    {
      name: "Facebook",
      url: "https://facebook.com/Abuamrahabbasit",
      handle: "@Abuamrahabbasit",
      icon: "facebook",
      description: "Scholarly community discussions & articles"
    },
    {
      name: "GitHub",
      url: "https://github.com",
      handle: "github.com/basitmajeed",
      icon: "github",
      description: "Open-source code, computational tools & utilities"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      handle: "linkedin.com/in/basitmajeed",
      icon: "linkedin",
      description: "Professional background, network & recommendations"
    }
  ] as SocialLink[],
  stats: [
    { label: "Dual Focus", value: "CS + Hadith" },
    { label: "Languages", value: "Arabic & English" },
    { label: "Research Domains", value: "3 Core Fields" },
    { label: "Philosophy", value: "Rigor & Precision" }
  ]
};
