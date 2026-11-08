export type ProjectCategory = 'fullstack' | 'backend-infra' | 'ai-ml' | 'opensource';

export interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  category: ProjectCategory;
  problem: string;
  architecture: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: 'Production' | 'Active Development' | 'Prototype / Research' | 'Completed';
  featured: boolean;
  metricsOrHighlight: string;
}

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: 'fullstack', label: 'Full Stack Engineering' },
  { id: 'backend-infra', label: 'Backend & Infrastructure' },
  { id: 'ai-ml', label: 'AI & Machine Learning' },
  { id: 'opensource', label: 'Open Source & Experimental' },
];

export const projects: ProjectItem[] = [
  {
    id: "enterprise-portal-suite",
    title: "Enterprise Multi-Tenant Underwriting & Portal Suite",
    slug: "enterprise-portal-suite",
    tagline: "High-throughput insurance operations portal with real-time verification queues",
    category: "fullstack",
    problem: "Manual administrative validation and high transaction volume caused document verification bottlenecks across distributed business units.",
    architecture: "Decoupled Next.js micro-frontend consuming NestJS modular services, with background event dispatching via Kafka and session caching in Redis.",
    technologies: ["Next.js", "TypeScript", "NestJS", "Kafka", "PostgreSQL", "Redis", "Docker", "Tailwind CSS"],
    githubUrl: "https://github.com/subhan-sd",
    status: "Production",
    featured: true,
    metricsOrHighlight: "Accelerated underwriting turnaround time and unified disparate administrative dashboards."
  },
  {
    id: "event-driven-payment-orchestrator",
    title: "Event-Driven Transaction & Notification Orchestrator",
    slug: "event-driven-payment-orchestrator",
    tagline: "Resilient asynchronous event bus handling high-frequency ledger events",
    category: "backend-infra",
    problem: "Synchronous HTTP chains between payment verification, policy generation, and customer notification frequently suffered cascading timeout failures.",
    architecture: "Event-driven asynchronous pipeline utilizing Apache Kafka for message ordering, idempotency tokens in Redis, and dead-letter queue (DLQ) retry handlers.",
    technologies: ["Node.js", "TypeScript", "Apache Kafka", "PostgreSQL", "Redis", "Docker", "Argo CD"],
    githubUrl: "https://github.com/subhan-sd",
    status: "Production",
    featured: true,
    metricsOrHighlight: "Zero message loss on peak traffic spikes with automated exponential backoff recovery."
  },
  {
    id: "rag-document-agent",
    title: "Domain Knowledge RAG & Intelligent Query Agent",
    slug: "rag-document-agent",
    tagline: "Local retrieval-augmented generation engine with semantic chunking and source grounding",
    category: "ai-ml",
    problem: "Standard LLMs generate hallucinations when querying complex, domain-specific internal policy handbooks and technical specifications.",
    architecture: "Python pipeline extracting structured PDFs, semantic chunking with overlapping windows, ChromaDB vector indexing, and LangChain/PyTorch embeddings with precision re-ranking.",
    technologies: ["Python", "PyTorch", "LangChain", "ChromaDB", "FastAPI", "OpenAI / HuggingFace", "Docker"],
    githubUrl: "https://github.com/subhan-sd",
    status: "Prototype / Research",
    featured: true,
    metricsOrHighlight: "Strict citation verification loop eliminating unsupported generated claims."
  },
  {
    id: "cloud-edge-developer-hub",
    title: "Edge-Powered Technical Portfolio & Content Engine",
    slug: "cloud-edge-developer-hub",
    tagline: "Zero-bundle-bloat personal branding and writing platform running on Cloudflare Workers",
    category: "opensource",
    problem: "Traditional monolithic portfolio templates suffer from slow initial paint, excessive JavaScript bundles, and brittle CMS maintenance.",
    architecture: "Static-first Astro architecture compiled to Cloudflare Workers edge runtime, React islands for selective interactivity, and MDX Content Collections.",
    technologies: ["Astro", "React", "TypeScript", "Cloudflare Workers", "Tailwind CSS", "MDX"],
    githubUrl: "https://github.com/subhan-sd/subhan-web",
    liveUrl: "https://subhan.dev",
    status: "Active Development",
    featured: true,
    metricsOrHighlight: "Sub-100ms global edge delivery with 100/100 Lighthouse performance metrics."
  },
  {
    id: "microservice-ci-pipeline",
    title: "Automated GitOps & Multi-Environment Delivery Pipeline",
    slug: "microservice-ci-pipeline",
    tagline: "Declarative infrastructure synchronization and automated validation suite",
    category: "backend-infra",
    problem: "Inconsistent deployment procedures between staging and production resulted in unexpected runtime configuration drift.",
    architecture: "GitOps deployment configuration leveraging Argo CD for continuous state reconciliation, automated Jenkins lint/test runners, and Docker multi-stage builds.",
    technologies: ["Argo CD", "Jenkins", "Docker", "Kubernetes Manifests", "Shell", "GitHub Actions"],
    githubUrl: "https://github.com/subhan-sd",
    status: "Completed",
    featured: false,
    metricsOrHighlight: "Eliminated configuration drift and enabled single-commit rolling deployments."
  },
  {
    id: "neural-eval-bench",
    title: "LLM Output Evaluation & Guardrail Harness",
    slug: "neural-eval-bench",
    tagline: "Heuristic and model-based evaluation benchmark for generative API pipelines",
    category: "ai-ml",
    problem: "Lack of systematic unit tests for prompt iterations and model upgrades in production-bound AI applications.",
    architecture: "Python CLI harness calculating ROUGE, BLEU, semantic similarity, and deterministic rule violations against custom test sets.",
    technologies: ["Python", "PyTorch", "Scikit-Learn", "FastAPI", "Pydantic"],
    githubUrl: "https://github.com/subhan-sd",
    status: "Prototype / Research",
    featured: false,
    metricsOrHighlight: "Benchmarking test suite executing pre-deployment safety and ground truth regression runs."
  }
];
