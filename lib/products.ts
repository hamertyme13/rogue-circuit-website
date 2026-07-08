export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: "Planning" | "In Development" | "Beta" | "Active";

  progress: number;

  stack: string[];

  featured: boolean;

  icon: string;
};

export const products: Product[] = [
  {
    id: "gigos",
    name: "GigOS",
    tagline: "The Operating System for Gig Workers",

    description:
      "Track earnings, expenses, mileage, taxes, and AI-powered recommendations from one dashboard.",

    status: "In Development",

    progress: 72,

    featured: true,

    icon: "GO",

    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "AI",
    ],
  },

  {
    id: "career",

    name: "AI Career Assistant",

    tagline: "Guidance for modern job moves",

    description:
      "Resume optimization, interview preparation, and career coaching powered by applied AI.",

    status: "Active",

    progress: 95,

    featured: false,

    icon: "CA",

    stack: [
      "Python",
      "LLMs",
      "Automation",
    ],
  },

  {
    id: "document-chatbot",

    name: "Document Chatbot",

    tagline: "Ask better questions of files",

    description:
      "A retrieval assistant for searching, summarizing, and reasoning across document libraries.",

    status: "Beta",

    progress: 68,

    featured: false,

    icon: "DC",

    stack: [
      "Next.js",
      "LLMs",
      "PostgreSQL",
    ],
  },

  {
    id: "sports-analytics",

    name: "Sports Analytics",

    tagline: "Data intelligence for performance",

    description:
      "Analyze trends, player performance, and decision signals with Python-powered models.",

    status: "Active",

    progress: 90,

    featured: false,

    icon: "SA",

    stack: [
      "Python",
      "SQLite",
      "Dashboards",
    ],
  },

  {
    id: "startup-tycoon",

    name: "AI Startup Tycoon",

    tagline: "Strategy gameplay meets AI systems",

    description:
      "A simulation game about building, automating, and scaling an AI-native software company.",

    status: "Planning",

    progress: 35,

    featured: false,

    icon: "ST",

    stack: [
      "TypeScript",
      "Game Logic",
      "AI",
    ],
  },
];
