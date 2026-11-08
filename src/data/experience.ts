export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  period: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  location: string;
  employmentType: string;
  tagline: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  impactNotes?: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: "ifg",
    company: "Indonesia Financial Group (IFG)",
    position: "Software Engineer",
    period: "July 2026 — Present",
    startDate: "2026-07",
    endDate: "Present",
    isCurrent: true,
    location: "Jakarta, Indonesia",
    employmentType: "Full-time",
    tagline: "State-owned financial & insurance holding enterprise",
    description: "Architecting and maintaining core digital platforms and integration services for Indonesia's state-owned insurance and underwriting holding ecosystem.",
    responsibilities: [
      "Engineered resilient frontend and backend services supporting mission-critical enterprise workflows and compliance reporting.",
      "Collaborated across cross-functional product squads, security auditors, and infrastructure engineers to ensure high availability and zero-downtime releases.",
      "Implemented streamlined CI/CD pipelines and deployment automation utilizing Argo CD and container orchestrations."
    ],
    technologies: ["Next.js", "TypeScript", "NestJS", "Kafka", "PostgreSQL", "Docker", "Argo CD", "Redis"],
    impactNotes: "Strengthened ecosystem reliability and standardized frontend architecture across multi-subsidiary portals."
  },
  {
    id: "jasindo",
    company: "PT Asuransi Jasa Indonesia (Jasindo)",
    position: "Software Developer / Software Engineer",
    period: "June 2023 — July 2026",
    startDate: "2023-06",
    endDate: "2026-07",
    isCurrent: false,
    location: "Jakarta, Indonesia",
    employmentType: "Full-time",
    tagline: "Leading general insurance provider in Indonesia",
    description: "Developed and optimized insurance underwriting portals, claims management engines, and internal policy processing platforms.",
    responsibilities: [
      "Designed and delivered responsive, high-performance web applications using React.js, Vue.js, and TypeScript.",
      "Built resilient RESTful API endpoints and background queue processors handling high-volume transaction verifications.",
      "Optimized relational database queries on PostgreSQL and caching strategies with Redis, reducing page load latencies.",
      "Integrated Jenkins CI pipelines to automate unit testing and container image builds."
    ],
    technologies: ["React.js", "Vue.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Redis", "Docker", "Jenkins"],
    impactNotes: "Dramatically cut manual underwriting verification overhead by modernizing legacy administrative modules into clean digital workflows."
  },
  {
    id: "pegadaian",
    company: "PT Pegadaian",
    position: "Software Developer",
    period: "April 2022 — April 2023",
    startDate: "2022-04",
    endDate: "2023-04",
    isCurrent: false,
    location: "Jakarta / Remote, Indonesia",
    employmentType: "Contract / Project-based",
    tagline: "State-owned pawnbroking and financial services corporation",
    description: "Contributed to financial transaction systems, customer service portals, and internal operational tooling.",
    responsibilities: [
      "Developed web features for customer transaction histories, appraisal tracking, and agent verification screens.",
      "Built clean, modular backend services in PHP / Laravel and Node.js interfacing with core banking APIs.",
      "Maintained data integrity and stringent audit logging for sensitive transaction datasets."
    ],
    technologies: ["PHP", "Laravel", "JavaScript", "Node.js", "MySQL", "REST API", "Git"],
    impactNotes: "Accelerated loan status checking and agent inquiry turnaround times through modernized internal interfaces."
  },
  {
    id: "telkom",
    company: "Telkom Indonesia",
    position: "Software Engineering Intern",
    period: "Internship & Foundation",
    startDate: "2021",
    endDate: "2022",
    isCurrent: false,
    location: "Bandung / Jakarta, Indonesia",
    employmentType: "Internship",
    tagline: "Indonesia's premier telecommunications & digital network conglomerate",
    description: "Gained foundational enterprise software engineering experience building internal management dashboards and API integration prototypes.",
    responsibilities: [
      "Participated in sprint planning, agile standups, and codebase reviews within Telkom's digital product initiatives.",
      "Implemented responsive web UI components and integrated client-side views with enterprise REST endpoints.",
      "Conducted debugging, cross-browser compatibility testing, and documentation of technical service contracts."
    ],
    technologies: ["JavaScript", "HTML/CSS", "Bootstrap", "PHP", "CodeIgniter", "REST API", "Git"],
    impactNotes: "Built solid fundamentals in enterprise-grade software standards, team collaboration, and clean code hygiene."
  }
];
