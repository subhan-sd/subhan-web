export interface Profile {
  name: string;
  shortName: string;
  title: string;
  roles: string[];
  location: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  positioning: string;
  heroHeadline: string;
  heroSubheadline: string;
  availability: {
    isAvailable: boolean;
    statusText: string;
  };
  contacts: {
    email: string;
    linkedin: string;
    github: string;
  };
  avatarUrl: string;
  cvUrl: string;
  bio: string[];
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
}

export const profile: Profile = {
  name: "Subhan Fadz Kamil Singandaru",
  shortName: "Subhan Singandaru",
  title: "Software Engineer | Full Stack Engineer | AI Engineering Enthusiast",
  roles: ["Software Engineer", "Full Stack Engineer", "System Architect", "AI Engineering Enthusiast"],
  location: "Bogor, Indonesia",
  country: "Indonesia",
  coordinates: {
    lat: -6.5971,
    lng: 106.8060,
  },
  positioning: "Building scalable software systems and exploring intelligent applications through AI engineering.",
  heroHeadline: "Engineering Scalable Software.\nExploring Intelligent Systems.",
  heroSubheadline: "I'm Subhan, a Software Engineer focused on building scalable web applications, reliable backend systems, and intuitive digital experiences. Currently expanding my engineering journey into Artificial Intelligence and Machine Learning.",
  availability: {
    isAvailable: true,
    statusText: "Available for selected opportunities",
  },
  contacts: {
    email: "subhan.singandaru2@gmail.com",
    linkedin: "https://www.linkedin.com/in/subhan-singandaru-4b31b0214/",
    github: "https://github.com/subhan-sd",
  },
  avatarUrl: "https://avatars.githubusercontent.com/u/71243799?v=4",
  cvUrl: "/documents/Subhan_Fadz_Kamil_Singandaru_CV.pdf",
  bio: [
    "I am a Software Engineer with progressive experience delivering robust web and backend applications across financial services, insurance, and telecommunications sectors in Indonesia.",
    "My core background spans modern TypeScript frontends, microservices architectures, distributed messaging with Kafka, and containerized deployment workflows using Docker, Jenkins, and Argo CD.",
    "Driven by curiosity and engineering rigor, I am currently deepening my technical breadth into AI Engineering—focusing on machine learning foundations, PyTorch, LLM integration, and Retrieval-Augmented Generation (RAG) to engineer reliable, real-world intelligent systems."
  ],
  stats: [
    {
      label: "Enterprise Experience",
      value: "4+",
      description: "Leading organizations (IFG, Jasindo, Pegadaian, Telkom)"
    },
    {
      label: "Engineering Focus",
      value: "Full Stack + AI",
      description: "Scalable web apps transitioning into intelligent systems"
    },
    {
      label: "Architecture Paradigm",
      value: "Modern & Resilient",
      description: "Microservices, Event-Driven (Kafka), CI/CD (Argo CD)"
    }
  ]
};
