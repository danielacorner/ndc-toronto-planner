export interface Session {
  id: string;
  title: string;
  speaker: string;
  time: string;
  startTime: string; // ISO string or simple time for sorting
  endTime: string;
  day: number; // 1 to 4 (May 5-8)
  track: string;
  description: string;
  tags: string[];
}

export const SESSIONS: Session[] = [
  // MAY 7 - DAY 1 (Mapping 2026-05-07 to ID 1)
  {
    id: "7-1",
    title: "Opening Keynote",
    speaker: "TBA",
    time: "09:00 - 10:00",
    startTime: "09:00",
    endTime: "10:00",
    day: 1,
    track: "Keynote",
    description: "The official opening keynote of NDC Toronto 2026.",
    tags: ["Keynote", "General"]
  },
  {
    id: "7-2",
    title: "Carbon: graduating from the experiment",
    speaker: "TBA",
    time: "10:20 - 11:20",
    startTime: "10:20",
    endTime: "11:20",
    day: 1,
    track: "Languages",
    description: "Deep dive into the Carbon programming language.",
    tags: ["C++", "Carbon", "Languages"]
  },
  {
    id: "7-3",
    title: "Between the Layers– Interpreting Large Language Models",
    speaker: "TBA",
    time: "10:20 - 11:20",
    startTime: "10:20",
    endTime: "11:20",
    day: 1,
    track: "AI",
    description: "Understanding how LLMs actually work under the hood.",
    tags: ["AI", "LLM", "Deep Learning"]
  },
  {
    id: "7-4",
    title: "Let’s catch up with C#! Exciting new features in C# 9 to C# 14!",
    speaker: "TBA",
    time: "10:20 - 11:20",
    startTime: "10:20",
    endTime: "11:20",
    day: 1,
    track: ".NET",
    description: "A whirlwind tour of the latest C# features.",
    tags: [".NET", "C#", "Programming"]
  },
  {
    id: "7-5",
    title: "Be curious, not judgemental",
    speaker: "TBA",
    time: "10:20 - 11:20",
    startTime: "10:20",
    endTime: "11:20",
    day: 1,
    track: "Soft Skills",
    description: "Improving engineering culture through curiosity.",
    tags: ["Culture", "Soft Skills", "Leadership"]
  },
  {
    id: "7-6",
    title: "Boosting Software Efficiency : A Case Study of 100% Performance Improvement",
    speaker: "TBA",
    time: "11:40 - 12:40",
    startTime: "11:40",
    endTime: "12:40",
    day: 1,
    track: "Performance",
    description: "How to achieve massive performance gains in systems engineering.",
    tags: ["Performance", "Embedded", "C++"]
  },
  {
    id: "7-7",
    title: "Agents & Arbiters - An Adventurer’s Guide to Multi-Agent Collaboration",
    speaker: "TBA",
    time: "11:40 - 12:40",
    startTime: "11:40",
    endTime: "12:40",
    day: 1,
    track: "AI",
    description: "Using LangGraph.js for complex AI workflows.",
    tags: ["AI", "JavaScript", "Agents"]
  },
  {
    id: "7-8",
    title: "The past, present, and future of AI for application developers",
    speaker: "TBA",
    time: "11:40 - 12:40",
    startTime: "11:40",
    endTime: "12:40",
    day: 1,
    track: "AI",
    description: "A historical and forward-looking perspective on AI in development.",
    tags: ["AI", "Future", "Development"]
  },
  {
    id: "7-9",
    title: "Calm at Scale",
    speaker: "TBA",
    time: "11:40 - 12:40",
    startTime: "11:40",
    endTime: "12:40",
    day: 1,
    track: "Architecture",
    description: "Maintaining system stability at scale.",
    tags: ["Architecture", "Scale", "Reliability"]
  },
  {
    id: "7-10",
    title: "Everything you learned about SSL is deprecated",
    speaker: "TBA",
    time: "11:40 - 12:40",
    startTime: "11:40",
    endTime: "12:40",
    day: 1,
    track: "Security",
    description: "Modern TLS and security standard updates.",
    tags: ["Security", "SSL", "TLS"]
  },
  {
    id: "7-11",
    title: "Principle Misunderstandings",
    speaker: "TBA",
    time: "13:40 - 14:40",
    startTime: "13:40",
    endTime: "14:40",
    day: 1,
    track: "Design",
    description: "Commonly misapplied software design principles.",
    tags: ["Design", "SOLID", "Patterns"]
  },
  {
    id: "7-12",
    title: "Algorithms & Combinators",
    speaker: "TBA",
    time: "13:40 - 14:40",
    startTime: "13:40",
    endTime: "14:40",
    day: 1,
    track: "Computer Science",
    description: "Deep dive into algorithmic complexity.",
    tags: ["CS", "Algorithms", "Math"]
  },
  {
    id: "7-13",
    title: "Aspire 13: One AppHost, Many Languages, Fewer Headaches?",
    speaker: "TBA",
    time: "13:40 - 14:40",
    startTime: "13:40",
    endTime: "14:40",
    day: 1,
    track: ".NET",
    description: "Exploring the latest in .NET Aspire.",
    tags: [".NET", "Cloud Native", "Microservices"]
  },
  {
    id: "7-14",
    title: "Becoming an Engineering Manager Without Losing Your Technical Soul",
    speaker: "TBA",
    time: "13:40 - 14:40",
    startTime: "13:40",
    endTime: "14:40",
    day: 1,
    track: "Leadership",
    description: "Transitioning to management while staying technical.",
    tags: ["Leadership", "Career", "Management"]
  },
  {
    id: "7-15",
    title: "Threat Modeling Developer Behaviour: The Psychology of Bad Code",
    speaker: "TBA",
    time: "13:40 - 14:40",
    startTime: "13:40",
    endTime: "14:40",
    day: 1,
    track: "Security",
    description: "Why developers write insecure code and how to fix it.",
    tags: ["Security", "Psychology", "DevEx"]
  },
  {
    id: "7-16",
    title: "Lessons learned while coding my first functional type system in constexpr C++",
    speaker: "TBA",
    time: "15:00 - 16:00",
    startTime: "15:00",
    endTime: "16:00",
    day: 1,
    track: "Languages",
    description: "Metaprogramming adventures in modern C++.",
    tags: ["C++", "Metaprogramming", "Types"]
  },
  {
    id: "7-17",
    title: "10 tips to level up your ai-assisted coding",
    speaker: "TBA",
    time: "15:00 - 16:00",
    startTime: "15:00",
    endTime: "16:00",
    day: 1,
    track: "AI",
    description: "Practical advice for working with AI coding tools.",
    tags: ["AI", "Productivity", "Tools"]
  },
  {
    id: "7-18",
    title: "OpenTelemetry in a Brownfield World",
    speaker: "TBA",
    time: "15:00 - 16:00",
    startTime: "15:00",
    endTime: "16:00",
    day: 1,
    track: "Observability",
    description: "Adding tracing and metrics to legacy systems.",
    tags: ["Observability", "DevOps", "Legacy"]
  },
  {
    id: "7-19",
    title: "Like Having an Intern? The Impact of LLMs on Careers",
    speaker: "TBA",
    time: "15:00 - 16:00",
    startTime: "15:00",
    endTime: "16:00",
    day: 1,
    track: "Career",
    description: "How AI is changing the software engineering landscape.",
    tags: ["AI", "Career", "Future"]
  },
  {
    id: "7-20",
    title: "Postmodern Programming",
    speaker: "TBA",
    time: "16:20 - 17:20",
    startTime: "16:20",
    endTime: "17:20",
    day: 1,
    track: "Philosophy",
    description: "A critical look at modern software development practices.",
    tags: ["Philosophy", "Programming", "Culture"]
  },
  {
    id: "7-21",
    title: "Cursed C#",
    speaker: "TBA",
    time: "16:20 - 17:20",
    startTime: "16:20",
    endTime: "17:20",
    day: 1,
    track: ".NET",
    description: "The weird, the bad, and the ugly of C#.",
    tags: ["C#", ".NET", "Fun"]
  },
  {
    id: "7-22",
    title: "How to Break AI Systems",
    speaker: "TBA",
    time: "16:20 - 17:20",
    startTime: "16:20",
    endTime: "17:20",
    day: 1,
    track: "Security",
    description: "Red teaming AI applications.",
    tags: ["AI", "Security", "Red Teaming"]
  },
  {
    id: "7-23",
    title: "NDC Party",
    speaker: "Everyone",
    time: "18:40 - 21:40",
    startTime: "18:40",
    endTime: "21:40",
    day: 1,
    track: "Social",
    description: "Food, drinks, and networking.",
    tags: ["Social", "Networking", "Party"]
  },

  // MAY 8 - DAY 2 (Mapping 2026-05-08 to ID 2)
  {
    id: "8-1",
    title: "Expression-based C++ for Better Code?",
    speaker: "TBA",
    time: "09:00 - 10:00",
    startTime: "09:00",
    endTime: "10:00",
    day: 2,
    track: "Languages",
    description: "Exploring expression-based patterns in C++.",
    tags: ["C++", "Languages", "Clean Code"]
  },
  {
    id: "8-2",
    title: "Building AI That Learns and Adapts: MRI Diagnostics",
    speaker: "TBA",
    time: "09:00 - 10:00",
    startTime: "09:00",
    endTime: "10:00",
    day: 2,
    track: "AI",
    description: "Case study in medical AI diagnostics.",
    tags: ["AI", "Healthcare", "Machine Learning"]
  },
  {
    id: "8-3",
    title: "Load Fast, Don’t Suck: Advice For Core Web Vitals",
    speaker: "TBA",
    time: "09:00 - 10:00",
    startTime: "09:00",
    endTime: "10:00",
    day: 2,
    track: "Web",
    description: "Practical performance advice for modern web apps.",
    tags: ["Web", "Performance", "UX"]
  },
  {
    id: "8-4",
    title: "Incrementally Rebuilding Stack Overflow's Monolith",
    speaker: "TBA",
    time: "09:00 - 10:00",
    startTime: "09:00",
    endTime: "10:00",
    day: 2,
    track: "Architecture",
    description: "Architecture journey of Stack Overflow.",
    tags: ["Architecture", "Scale", "Stability"]
  },
  {
    id: "8-5",
    title: "Benchmarking and optimizing the Carbon compiler",
    speaker: "TBA",
    time: "10:20 - 11:20",
    startTime: "10:20",
    endTime: "11:20",
    day: 2,
    track: "Languages",
    description: "Performance engineering for compilers.",
    tags: ["Performance", "Compilers", "Carbon"]
  },
  {
    id: "8-6",
    title: "Prompt-Jacking: The Rise of a New Supply Chain Risk",
    speaker: "TBA",
    time: "10:20 - 11:20",
    startTime: "10:20",
    endTime: "11:20",
    day: 2,
    track: "Security",
    description: "New security threats in AI prompts.",
    tags: ["Security", "AI", "Prompts"]
  },
  {
    id: "8-7",
    title: "Why Web Components are the foundation we should’ve used",
    speaker: "TBA",
    time: "10:20 - 11:20",
    startTime: "10:20",
    endTime: "11:20",
    day: 2,
    track: "Web",
    description: "The case for standard web components.",
    tags: ["Web", "Standards", "Components"]
  },
  {
    id: "8-8",
    title: "Don’t Let AI Trash Your Codebase",
    speaker: "TBA",
    time: "11:40 - 12:40",
    startTime: "11:40",
    endTime: "12:40",
    day: 2,
    track: "AI",
    description: "Maintaining quality in the age of AI code generation.",
    tags: ["AI", "Quality", "Clean Code"]
  },
  {
    id: "8-9",
    title: "The Science, Psychology, and Secrets of Stellar UI",
    speaker: "TBA",
    time: "11:40 - 12:40",
    startTime: "11:40",
    endTime: "12:40",
    day: 2,
    track: "Design",
    description: "UI design principles grounded in psychology.",
    tags: ["Design", "UI", "UX"]
  },
  {
    id: "8-10",
    title: "Use a Rust SAT Solver to play better pickleball!",
    speaker: "TBA",
    time: "11:40 - 12:40",
    startTime: "11:40",
    endTime: "12:40",
    day: 2,
    track: "Rust",
    description: "Fun application of Rust and SAT solvers.",
    tags: ["Rust", "Math", "Fun"]
  },
  {
    id: "8-11",
    title: "Writing a Windows Kernel Driver in an hour or two",
    speaker: "TBA",
    time: "13:40 - 14:40",
    startTime: "13:40",
    endTime: "14:40",
    day: 2,
    track: "Systems",
    description: "Intro to Windows kernel development.",
    tags: ["Windows", "C++", "Kernel"]
  },
  {
    id: "8-12",
    title: "Building a Doom-Like World to Explore Agentic Systems",
    speaker: "TBA",
    time: "13:40 - 14:40",
    startTime: "13:40",
    endTime: "14:40",
    day: 2,
    track: "AI",
    description: "Visualizing AI agents in 3D worlds.",
    tags: ["AI", "Gaming", "Agents"]
  },
  {
    id: "8-13",
    title: "Legacy Architecture Migration Patterns with DDD",
    speaker: "TBA",
    time: "13:40 - 14:40",
    startTime: "13:40",
    endTime: "14:40",
    day: 2,
    track: "Architecture",
    description: "Using Domain Driven Design for migrations.",
    tags: ["Architecture", "DDD", "Migration"]
  },
  {
    id: "8-14",
    title: "The Future of Information Retrieval: RAG",
    speaker: "TBA",
    time: "15:00 - 16:00",
    startTime: "15:00",
    endTime: "16:00",
    day: 2,
    track: "AI",
    description: "Retrieval Augmented Generation deep dive.",
    tags: ["AI", "RAG", "Search"]
  },
  {
    id: "8-15",
    title: "Why Great Models Fail: Lessons From 9 Years of ML",
    speaker: "TBA",
    time: "15:00 - 16:00",
    startTime: "15:00",
    endTime: "16:00",
    day: 2,
    track: "AI",
    description: "Real world lessons in machine learning deployment.",
    tags: ["AI", "MLOps", "History"]
  },
  {
    id: "8-16",
    title: "From LLM Theory to Practical Agentic Implementations",
    speaker: "TBA",
    time: "16:20 - 17:20",
    startTime: "16:20",
    endTime: "17:20",
    day: 2,
    track: "AI",
    description: "Building production ready AI agents.",
    tags: ["AI", "Production", "Agents"]
  },
  {
    id: "8-17",
    title: "Union types in C#",
    speaker: "TBA",
    time: "16:20 - 17:20",
    startTime: "16:20",
    endTime: "17:20",
    day: 2,
    track: ".NET",
    description: "Pattern matching and union types in modern C#.",
    tags: [".NET", "C#", "Functional"]
  },
  {
    id: "8-18",
    title: "Brains and Belonging",
    speaker: "TBA",
    time: "17:40 - 18:40",
    startTime: "17:40",
    endTime: "18:40",
    day: 2,
    track: "Soft Skills",
    description: "Closing session on brain health and community.",
    tags: ["Community", "Identity", "Wellbeing"]
  }
];

export const DAYS = [
  { id: 1, date: "May 7, 2026", label: "May 7" },
  { id: 2, date: "May 8, 2026", label: "May 8" },
];
