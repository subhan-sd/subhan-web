export type MilestoneStatus = 'completed' | 'in_progress' | 'planned';

export interface MilestoneItem {
  order: number;
  title: string;
  tagline: string;
  status: MilestoneStatus;
  statusLabel: string;
  description: string;
  topics: string[];
  keyImplementations: string[];
}

export interface AiJourneyData {
  title: string;
  subtitle: string;
  philosophy: string;
  milestones: MilestoneItem[];
}

export const aiJourney: AiJourneyData = {
  title: "From Software Engineering to AI Engineering",
  subtitle: "A systematic, engineering-first roadmap bridging high-scale web systems and production-grade intelligent applications.",
  philosophy: "Rather than treating AI as black-box prompt magic, I approach AI Engineering through the lens of systems engineering: robust data pipelines, mathematical foundations, reproducible evaluations, and production reliability.",
  milestones: [
    {
      order: 1,
      title: "Mathematics for Machine Learning",
      tagline: "Theoretical groundings for model mechanics and optimization",
      status: "completed",
      statusLabel: "Foundations Solidified",
      description: "Mastering the mathematical machinery behind model training, loss landscapes, and probabilistic reasoning.",
      topics: [
        "Linear Algebra: Matrices, eigenvectors, SVD, dot products, vector spaces",
        "Multivariable Calculus: Gradients, Jacobians, Hessians, chain rule",
        "Probability & Statistics: Bayes theorem, distributions, maximum likelihood estimation"
      ],
      keyImplementations: [
        "Vectorized gradient descent implementations from mathematical first principles",
        "Covariance matrix calculation and dimensional projection scripts"
      ]
    },
    {
      order: 2,
      title: "Python & Data Engineering",
      tagline: "High-throughput data manipulation and pipeline hygiene",
      status: "completed",
      statusLabel: "Foundations Solidified",
      description: "Building scalable ingestion, transformation, and validation pipelines for unstructured and tabular data.",
      topics: [
        "NumPy vectorized operations and memory layout optimizations",
        "Pandas data transformation, filtering, and missing data imputation",
        "Data validation schemas with Pydantic and type hinting"
      ],
      keyImplementations: [
        "High-performance dataset preprocessor for document batching",
        "Automated schema validation pipelines with strict error trapping"
      ]
    },
    {
      order: 3,
      title: "Classical Machine Learning",
      tagline: "Supervised and unsupervised baseline algorithms",
      status: "completed",
      statusLabel: "Practiced",
      description: "Understanding trade-offs between linear models, tree-based ensembles, and clustering algorithms before reaching for deep networks.",
      topics: [
        "Scikit-Learn: Linear/Logistic Regression, SVMs, Decision Trees, Random Forests, XGBoost",
        "Unsupervised Learning: K-Means, PCA dimensional reduction",
        "Validation strategies: K-Fold cross-validation, precision/recall, ROC-AUC"
      ],
      keyImplementations: [
        "Credit default risk prediction benchmark using XGBoost and SHAP explainability",
        "Customer segmentation pipeline using PCA and K-Means"
      ]
    },
    {
      order: 4,
      title: "Deep Learning with PyTorch",
      tagline: "Neural network architectures and tensor computation",
      status: "in_progress",
      statusLabel: "Active Exploration",
      description: "Constructing and training feedforward and recurrent neural networks with PyTorch autograd engine.",
      topics: [
        "Tensors, computational graphs, and backward propagation mechanics",
        "Loss functions: Cross-entropy, MSE, contrastive loss",
        "Optimizers: AdamW, SGD, learning rate schedulers, weight decay",
        "CNNs and Transformer self-attention building blocks"
      ],
      keyImplementations: [
        "Custom MLP built from scratch using pure PyTorch tensors and modules",
        "Self-attention mechanism recreation to understand Q, K, V matrix projections"
      ]
    },
    {
      order: 5,
      title: "LLM Engineering & Prompt Systems",
      tagline: "Harnessing foundation models for deterministic structured workflows",
      status: "in_progress",
      statusLabel: "Active Exploration",
      description: "Designing reliable interfaces between non-deterministic language models and deterministic software systems.",
      topics: [
        "Tokenization mechanics (BPE, SentencePiece) and context window economics",
        "Structured outputs with JSON schema enforcement and Pydantic validation",
        "Few-shot prompting, system steering, and defensive prompt injection guards"
      ],
      keyImplementations: [
        "Enterprise document extraction pipeline generating guaranteed valid JSON",
        "Token count and cost optimization proxy for API consumption"
      ]
    },
    {
      order: 6,
      title: "RAG & Vector Search Systems",
      tagline: "Grounding generative models with semantic document retrieval",
      status: "in_progress",
      statusLabel: "Active Exploration",
      description: "Developing production-grade Retrieval-Augmented Generation architectures to eliminate hallucination.",
      topics: [
        "Document ingestion, hierarchy-aware chunking, and sliding window strategies",
        "Embedding models and similarity metrics (Cosine, Euclidean, Dot Product)",
        "Vector databases (ChromaDB, pgvector) and hybrid search (BM25 + Semantic)",
        "Context re-ranking and citation attribution loops"
      ],
      keyImplementations: [
        "Domain handbook question-answering prototype with citation verification",
        "Hybrid search evaluation comparing keyword BM25 vs dense embeddings"
      ]
    },
    {
      order: 7,
      title: "AI Agents & Tool Calling",
      tagline: "Autonomous multi-step reasoning and environment interaction",
      status: "planned",
      statusLabel: "Upcoming Phase",
      description: "Engineering autonomous agent loops capable of planning, invoking external APIs, and error recovery.",
      topics: [
        "ReAct (Reasoning + Acting) loops and execution state management",
        "OpenAI / Anthropic tool-use and OpenAPI spec invocation",
        "Multi-agent coordination and human-in-the-loop fallback safeguards"
      ],
      keyImplementations: [
        "SQL database query agent with safety sandboxing and read-only constraints",
        "Automated customer ticket triage agent with SLA routing"
      ]
    },
    {
      order: 8,
      title: "Evaluation, Observability & Deployment",
      tagline: "Production hygiene, testing suites, and edge deployment",
      status: "planned",
      statusLabel: "Upcoming Phase",
      description: "Closing the loop with automated eval benchmarks, latency profiling, and model monitoring in production.",
      topics: [
        "LLM evaluation frameworks (RAGAS, Deepeval, LangSmith metrics)",
        "Hallucination detection, toxicity auditing, and PII masking",
        "Model serving (FastAPI, vLLM, ONNX Runtime, Cloudflare Workers AI)",
        "Tracing, latency budgets, and token streaming telemetry"
      ],
      keyImplementations: [
        "Continuous evaluation harness running regression tests on prompt changes",
        "Telemetry exporter capturing latency, token usage, and user feedback signals"
      ]
    }
  ]
};
