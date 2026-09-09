export interface SkillCategory {
  title: string;
  subtitle: string;
  iconName: string;
  items: {
    name: string;
    level?: string;
    description: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Computer Engineering",
    subtitle: "Computational rigor, software foundations & modern engineering paradigms",
    iconName: "Binary",
    items: [
      {
        name: "Computer Science Fundamentals",
        description: "Deep comprehension of compute models, operating systems, memory hierarchies, and system abstractions."
      },
      {
        name: "Software Concepts & Architecture",
        description: "Object-oriented design patterns, modular architecture, API design, and clean code principles."
      },
      {
        name: "Data Structures & Algorithms",
        description: "Algorithmic analysis, tree traversal, graph theory, hash tables, and computational complexity (Big O)."
      },
      {
        name: "Web & Modern Technologies",
        description: "Full-stack development foundations with TypeScript, modern frameworks, and responsive frontend systems."
      },
      {
        name: "Database Concepts & Systems",
        description: "Relational database modeling, SQL query design, data integrity rules, and storage optimization."
      },
      {
        name: "Git & Developer Workflows",
        description: "Version control workflows, reproducible development environments, code review, and collaborative Git practices."
      }
    ]
  },
  {
    title: "Academic & Scholarly",
    subtitle: "Classical Islamic tradition, philological precision & textual criticism",
    iconName: "BookOpen",
    items: [
      {
        name: "Hadith Scholarship & Isnad Analysis",
        description: "Rigorous study of transmission chains (Isnad), narrator reliability verification (Ilm ar-Rijal), and textual criticism (Matn)."
      },
      {
        name: "Classical Arabic Language",
        description: "Comprehensive mastery of Arabic syntax (Nahw), morphology (Sarf), and classical rhetoric (Balagha)."
      },
      {
        name: "Classical Islamic Research",
        description: "Systematic investigation of primary classical Arabic literature, manuscripts, commentaries, and foundational compendiums."
      },
      {
        name: "Usul al-Fiqh & Legal Hermeneutics",
        description: "Foundational principles of Islamic jurisprudence, textual deduction, linguistic analysis, and semantic derivation."
      },
      {
        name: "Historical & Manuscript Collation",
        description: "Comparative variant reading methodologies, transcription verification, and marginalia examination."
      }
    ]
  },
  {
    title: "Professional Skills",
    subtitle: "Clear articulation, client communication & disciplined synthesis",
    iconName: "PenTool",
    items: [
      {
        name: "Technical & Content Writing",
        description: "Drafting thorough technical explanations, documentation, pedagogical guides, and articulate essays."
      },
      {
        name: "Academic Research & Methodology",
        description: "Structured research design, citation integrity, critical literature reviews, and evidence-grounded thesis defense."
      },
      {
        name: "Freelancing & Client Delivery",
        description: "Independent project scoping, milestone delivery, proactive communication, and disciplined execution."
      },
      {
        name: "Interdisciplinary Synthesis",
        description: "Unique ability to translate computational concepts to humanistic research and vice versa with precision."
      }
    ]
  }
];
