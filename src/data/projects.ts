export interface Project {
  id: string;
  title: string;
  category: "Computer Engineering" | "Scholarly & Research" | "Writing & Publications";
  description: string;
  longDescription: string;
  tags: string[];
  links: {
    github?: string;
    live?: string;
    read?: string;
  };
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "isnad-graph-analyzer",
    title: "Hadith Isnad Graph & Narrator Traversal",
    category: "Computer Engineering",
    description:
      "A computational tool modeling transmission chains of Hadith as directed acyclic graphs for biographical connectivity analysis.",
    longDescription:
      "Leveraging graph theory and data structures to model classical Hadith transmission networks (Isnads). Implements biographical cross-referencing algorithms to evaluate narrator contiguity, historical era overlap, and transmission strength according to traditional Rijal principles.",
    tags: ["TypeScript", "Graph Theory", "Data Structures", "Hadith Sciences"],
    links: {
      github: "https://github.com/basitmajeed",
      live: "https://github.com/basitmajeed"
    },
    featured: true
  },
  {
    id: "classical-arabic-root-engine",
    title: "Classical Arabic Morphological Engine",
    category: "Computer Engineering",
    description:
      "Algorithmic stemmer and morphological breakdown utility designed for classical Arabic triliteral and quadriliteral root systems.",
    longDescription:
      "A software utility exploring the rule-based patterns (Awzan) of classical Arabic Sarf (morphology). Deconstructs complex classical inflections into root radicals, augmented affixes, and semantic valency representations.",
    tags: ["TypeScript", "Arabic NLP", "Morphology (Sarf)", "Algorithms"],
    links: {
      github: "https://github.com/basitmajeed"
    },
    featured: true
  },
  {
    id: "hadith-methodology-monograph",
    title: "Methodological Precision in Hadith Criticism",
    category: "Scholarly & Research",
    description:
      "A rigorous scholarly examination of early Hadith authentication criteria and their epistemological foundations.",
    longDescription:
      "A formal research paper detailing the dual criteria of Adalah (probity) and Dhabt (retention accuracy) among early Hadith critics (Mutaqaddimun), comparing classical verification protocols with modern historical-critical methods.",
    tags: ["Hadith Studies", "Usul al-Hadith", "Epistemology", "Academic Paper"],
    links: {
      read: "https://instagram.com/abbasitlone"
    },
    featured: true
  },
  {
    id: "arabic-syntactic-dependency-visualizer",
    title: "Arabic Syntactic & I'rab Parser Framework",
    category: "Computer Engineering",
    description:
      "Interactive dependency parser mapping grammatical roles (I'rab) and sentence structure for classical Arabic passages.",
    longDescription:
      "Translates classical Nahw relationships (Mubtada', Khabar, Fa'il, Maf'ul) into visual hierarchical dependency trees, aiding students in mastering sentence diagramming and structural syntax.",
    tags: ["Next.js", "Tailwind CSS", "Arabic Linguistics", "Interactive UI"],
    links: {
      github: "https://github.com/basitmajeed",
      live: "https://github.com/basitmajeed"
    }
  },
  {
    id: "classical-hermeneutics-writings",
    title: "Essays on Classical Scholarship & Modernity",
    category: "Writing & Publications",
    description:
      "A series of analytical essays and translations exploring Islamic jurisprudence, linguistic rhetoric, and intellectual history.",
    longDescription:
      "Published articles addressing foundational principles of text interpretation, classical rhetorical devices in Balagha, and the importance of intellectual rigor in contemporary Muslim scholarship.",
    tags: ["Essay Series", "Classical Hermeneutics", "Intellectual History"],
    links: {
      read: "https://facebook.com/Abuamrahabbasit"
    }
  },
  {
    id: "digital-portfolio-system",
    title: "Minimalist Production Portfolio System",
    category: "Computer Engineering",
    description:
      "Modern, ultra-performant editorial portfolio site built with Next.js App Router, TypeScript, and accessible Tailwind styling.",
    longDescription:
      "Engineered with clean architectural separation, strict typing, responsive design tokens, zero-layout-shift image optimization, and full static export readiness.",
    tags: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    links: {
      github: "https://github.com/basitmajeed",
      live: "/"
    }
  }
];
