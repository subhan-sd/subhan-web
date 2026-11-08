export type SkillTier = 'production' | 'working' | 'exploring';

export interface SkillItem {
  name: string;
  category: string;
  tier: SkillTier;
  context: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend Engineering",
    description: "Building responsive, accessible, and high-performance user interfaces with modern component architectures.",
    skills: [
      { name: "TypeScript", category: "frontend", tier: "production", context: "Strict typing across all enterprise frontend projects" },
      { name: "React.js", category: "frontend", tier: "production", context: "Component lifecycles, hooks, and scalable state patterns" },
      { name: "Next.js", category: "frontend", tier: "production", context: "SSR, SSG, App Router, and edge-ready architectures" },
      { name: "JavaScript (ES6+)", category: "frontend", tier: "production", context: "Deep core language knowledge and asynchronous flows" },
      { name: "Tailwind CSS", category: "frontend", tier: "production", context: "Design systems, utility tokens, responsive interfaces" },
      { name: "HTML5 / Semantic CSS", category: "frontend", tier: "production", context: "Accessibility, layout specifications, and DOM performance" },
      { name: "Vue.js", category: "frontend", tier: "working", context: "Options & Composition API on client internal portals" },
    ]
  },
  {
    id: "backend",
    name: "Backend Engineering",
    description: "Engineering scalable microservices, resilient APIs, and transactional backend systems.",
    skills: [
      { name: "Node.js", category: "backend", tier: "production", context: "Event loop optimization, streaming, enterprise service backends" },
      { name: "NestJS", category: "backend", tier: "production", context: "Modular enterprise architecture, dependency injection, DTO validation" },
      { name: "Express.js", category: "backend", tier: "production", context: "Lightweight microservice APIs and custom middlewares" },
      { name: "REST API Design", category: "backend", tier: "production", context: "Idempotency, versioning, OpenAPI/Swagger specifications" },
      { name: "PHP", category: "backend", tier: "working", context: "Enterprise maintenance and service layer development" },
      { name: "Laravel", category: "backend", tier: "working", context: "Eloquent ORM, authentication, queue workers" },
      { name: "CodeIgniter", category: "backend", tier: "working", context: "Legacy enterprise platform integrations" },
    ]
  },
  {
    id: "database",
    name: "Database & Distributed Systems",
    description: "Designing reliable storage schemas, caching layers, and asynchronous event streams.",
    skills: [
      { name: "PostgreSQL", category: "database", tier: "production", context: "Relational modeling, indexing, query optimization" },
      { name: "Redis", category: "database", tier: "production", context: "Session caching, rate limiting, and fast key-value lookups" },
      { name: "Apache Kafka", category: "database", tier: "production", context: "Event-driven pub/sub pipelines, event decoupling" },
      { name: "MySQL", category: "database", tier: "working", context: "Relational storage and transaction management" },
      { name: "Vector Databases", category: "database", tier: "exploring", context: "ChromaDB, pgvector, embeddings indexing for RAG" },
    ]
  },
  {
    id: "devops",
    name: "DevOps & Infrastructure",
    description: "Containerization, GitOps workflows, and automated continuous delivery.",
    skills: [
      { name: "Docker", category: "devops", tier: "production", context: "Multi-stage Dockerfiles, container isolation, orchestration" },
      { name: "Jenkins", category: "devops", tier: "working", context: "Pipeline-as-code, automated unit testing, build artifacts" },
      { name: "Argo CD", category: "devops", tier: "production", context: "GitOps deployment synchronization and environment tracking" },
      { name: "Git & GitHub", category: "devops", tier: "production", context: "Trunk-based branching, PR reviews, CI workflow triggers" },
      { name: "Cloudflare Workers & CDN", category: "devops", tier: "working", context: "Edge execution, DNS management, caching headers" },
    ]
  },
  {
    id: "ai",
    name: "AI & Machine Learning (Emerging Focus)",
    description: "Systematic transition into intelligent software architectures, ML fundamentals, and LLM integrations.",
    skills: [
      { name: "Python", category: "ai", tier: "working", context: "Data manipulation, NumPy, Pandas, algorithmic scripting" },
      { name: "Machine Learning Math", category: "ai", tier: "exploring", context: "Linear algebra, multivariable calculus, probability & statistics" },
      { name: "Classical ML Algorithms", category: "ai", tier: "exploring", context: "Scikit-Learn, regression, tree classifiers, cross-validation" },
      { name: "PyTorch & Deep Learning", category: "ai", tier: "exploring", context: "Tensors, autograd, forward/backward passes, neural nets" },
      { name: "LLM Engineering", category: "ai", tier: "exploring", context: "Prompt engineering, token mechanics, structured output parsing" },
      { name: "RAG & Vector Retrieval", category: "ai", tier: "exploring", context: "Semantic search, document chunking, embeddings similarity" },
      { name: "AI Agents & Tool Calling", category: "ai", tier: "exploring", context: "Function calling, ReAct loops, multi-step execution flows" },
      { name: "Evaluation & Observability", category: "ai", tier: "exploring", context: "Ground truth scoring, hallucination mitigation, latency profiling" },
    ]
  }
];

export const tierLabels: Record<SkillTier, { label: string; badgeClass: string; description: string }> = {
  production: {
    label: "Professional Experience",
    badgeClass: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    description: "Actively delivered and maintained in enterprise production environments"
  },
  working: {
    label: "Working Knowledge",
    badgeClass: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    description: "Applied in project workflows, tooling, and secondary stacks"
  },
  exploring: {
    label: "Currently Learning",
    badgeClass: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    description: "Active research, hands-on implementations, and continuous self-study"
  }
};
