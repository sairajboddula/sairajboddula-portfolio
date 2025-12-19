import type { Metadata } from "next";

export const links = {
  sourceCode: "https://github.com/sairajboddula/next-portfolio",
  ownerName: "Sairaj Boddula",
  ownerEmail: "sairajboddula@gmail.com",
} as const;

export const siteConfig: Metadata = {
  title: `${links.ownerName}'s Portfolio`,
  description: "Modern & Minimalist Python & AI Portfolio.",
  keywords: [
    "Sairaj Boddula",
    "Python Developer",
    "Gen AI",
    "Agentic AI",
    "LLM Platforms",
    "OpenAI",
    "LangChain",
    "LangGraph",
    "Snowflake",
    "Snowpark",
    "FastAPI",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Three.js",
    "Framer Motion",
    "Software Developer",
    "Accenture",
    "AI Compiler",
    "Code Analyzer",
    "Automation",
    "Jenkins",
    "Power BI",
    "SQL",
    "Java",
    "Modern Portfolio",
    "Minimalist Portfolio",
  ] as Array<string>,
  authors: {
    name: links.ownerName,
    url: "https://github.com/sairajboddula",
  },
} as const;
