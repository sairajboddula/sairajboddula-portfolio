import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "Software Developer at Accenture ",
    description: "Focusing on Gen AI, Agentic AI, and scaling applications.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Always evolving with the latest tech",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for AI & Compilers.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Building an AI-Powered Compiler",
    description: "The Deep Dive",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "AI-Powered-Compiler",
    des: "A multi-language compiler supporting Python, Java, JavaScript, R, Kotlin, and Jython with AI enhancements.",
    img: "/p1.png",
    iconLists: ["/python.svg", "/ai.svg", "/tail.svg", "/ts.svg", "/three.svg"],
    link: "https://github.com/sairajboddula/AI-Powered-Compiler",
    sourceCode: "https://github.com/sairajboddula/AI-Powered-Compiler",
  },
  {
    id: 2,
    title: "AI-Personal-Assistant",
    des: "An AI-driven personal assistant project with structured backend and frontend components for seamless interaction.",
    img: "/p2.png",
    iconLists: ["/python.svg", "/ai.svg", "/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/sairajboddula/AI-Personal-Assistant",
    sourceCode: "https://github.com/sairajboddula/AI-Personal-Assistant",
  },
  {
    id: 3,
    title: "Code-analyzer",
    des: "A powerful tool designed for comprehensive code analysis, supporting various source codes and test frameworks.",
    img: "/p3.png",
    iconLists: ["/python.svg", "/ai.svg", "/sql.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/sairajboddula/Code-analyzer",
    sourceCode: "https://github.com/sairajboddula/Code-analyzer",
  },
  {
    id: 4,
    title: "pdf-comparison-tool",
    des: "An efficient utility for comparing PDF files to identify differences and maintain document integrity.",
    img: "/p4.png",
    iconLists: ["/python.svg", "/sql.svg", "/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/sairajboddula/pdf-comparison-tool",
    sourceCode: "https://github.com/sairajboddula/pdf-comparison-tool",
  },
] as const;

export const testimonials = [
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
] as const;

export const companies = [
  { id: 1, name: "Python", img: "/python.svg" },
  { id: 2, name: "Java", img: "/java.svg" },
  { id: 3, name: "SQL", img: "/sql.svg" },
  { id: 4, name: "OpenAI", img: "/openai.svg" },
  { id: 5, name: "Vertex AI", img: "/vertexai.svg" },
  { id: 6, name: "Anthropic Claude", img: "/claude.svg" },
  { id: 7, name: "Gemini", img: "/ai.svg" },
  { id: 8, name: "Hugging Face", img: "/huggingface.svg" },
  { id: 9, name: "LangChain", img: "/langchain.svg" },
  { id: 10, name: "LangGraph", img: "/langgraph.svg" },
  { id: 11, name: "MCP", img: "/mcp.svg" },
  { id: 12, name: "Snowflake", img: "/snowflake.svg" },
  { id: 13, name: "FastAPI", img: "/fastapi.svg" },
  { id: 14, name: "Firebase", img: "/firebase.svg" },
  { id: 15, name: "Jenkins", img: "/jenkins.svg" },
  { id: 16, name: "Power BI", img: "/powerbi.svg" },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Software Developer at Accenture",
    desc: "Developing and optimizing AI-driven applications and complex systems for global clients.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "AI & Machine Learning Enthusiast",
    desc: "Actively working on compilers, code analyzers, and generative AI projects.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Scalable Web Solutions",
    desc: "Building robust backends and interactive frontends using Node.js and modern JS frameworks.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Personal AI Assistant Developer",
    desc: "Engineered high-accuracy voice and chat processing systems for personalized user interaction.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/sairajboddula",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/sairaj-boddula",
  },
] as const;

export const techStack = {
  stack1: ["Python (Snowpark, GenAI)", "Java", "SQL", "Shell Scripting"],
  stack2: ["OpenAI", "LangChain", "Snowflake", "FastAPI", "Jenkins", "Power BI"],
} as const;
