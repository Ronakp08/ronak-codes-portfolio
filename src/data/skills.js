import {
  Code2,
  Sparkles,
  Code,
  Feather,
  Box,
  Tag,
  Layout,
  Grid,
  Leaf,
  Zap,
  Shield,
  Terminal,
  Coffee,
  Database,
  Server,
  GitBranch,
  Send,
  FileText,
  Wifi,
  Repeat,
  Brain,
  MessageSquare,
  Cpu,
  Share2,
} from "lucide-react";

export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: Code2 },
      { name: "JavaScript", icon: Sparkles },
      { name: "TypeScript", icon: Code },
      { name: "Tailwind CSS", icon: Feather },
      { name: "Bootstrap", icon: Box },
      { name: "HTML/CSS", icon: Tag },
      { name: "Material-UI", icon: Layout },
      { name: "AgGrid", icon: Grid },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: Leaf },
      { name: "Express.js", icon: Zap },
      { name: "NestJS", icon: Shield },
      { name: "Python", icon: Terminal },
      { name: "Flask", icon: Coffee },
      { name: "Django", icon: Database },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", icon: Database },
      { name: "Mongoose", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "Sequelize", icon: Server },
      { name: "PostgreSQL", icon: Database },
      { name: "Clickhouse", icon: Database },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Docker", icon: Box },
      { name: "Git", icon: GitBranch },
      { name: "Postman", icon: Send },
      { name: "Swagger", icon: FileText },
      { name: "RabbitMQ", icon: Zap },
      { name: "Socket.IO", icon: Wifi },
      { name: "Debezium", icon: Repeat },
    ],
  },
  {
    category: "AI/Data Science",
    skills: [
      { name: "Python ML", icon: Brain },
      { name: "Flask GraphQL", icon: Code2 },
      { name: "Neo4j", icon: Share2 },
      { name: "LLM Integration", icon: Brain },
      { name: "ChatGPT API", icon: MessageSquare },
    ],
  },
  {
    category: "CMS & ERP",
    skills: [
      { name: "ERPNext", icon: Cpu },
      { name: "Frappe", icon: Cpu },
    ],
  },
];

export const experienceData = [
  {
    title: "Full Stack Developer",
    company: "Triveni Global Software Services LLP",
    duration: "May 2025 - Present (6+ months)",
    description: "Developing dynamic industry-specific ERP project with custom features. Working with MERN stack, Docker, TypeScript, and advanced technologies.",
    skills: ["Node.js", "Express.js", "NestJS", "MongoDB", "Sequelize", "TypeScript", "Docker", "Swagger"],
  },
  {
    title: "Data Science Developer (Internship)",
    company: "Triveni Global Software Services LLP",
    duration: "January 2025 - April 2025",
    description: "Worked on DataScience project involving ML algorithms, graph databases, and columnar database optimization. Implemented bucketing, MinHashLSH algorithms.",
    skills: ["Python", "React", "Flask", "Neo4j", "Clickhouse", "Machine Learning", "GraphQL"],
  },
  {
    title: "Full Stack Developer (Training)",
    company: "Triveni Global Software Services LLP",
    duration: "January 2025 - April 2025",
    description: "Completed comprehensive training in MERN stack, database design, and ERP customization.",
    skills: ["HTML/CSS", "Bootstrap", "JavaScript", "SQL", "Python", "Django", "React"],
  },
];

export const statsData = [
  { label: "Years of Experience", value: "1.5+" },
  { label: "Live Projects", value: "1+" },
  { label: "Personal Projects", value: "10+" },
  { label: "Tech Stack Proficiency", value: "15+" },
];
