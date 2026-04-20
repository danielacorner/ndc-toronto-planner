export interface Session {
  id: string;
  title: string;
  speaker: string;
  time: string;
  startTime: string; 
  endTime: string;
  day: number; 
  track: string;
  description: string;
  tags: string[];
}

export const SESSIONS: Session[] = [
  // MAY 7 - DAY 1
  {
    id: "7-1",
    title: "Opening Keynote: The Art of Code",
    speaker: "Dylan Beattie",
    time: "09:00 - 10:00",
    startTime: "09:00",
    endTime: "10:00",
    day: 1,
    track: "Keynote",
    description: "Software development is often seen as a purely logical pursuit, but it is also a creative one. Join Dylan Beattie as he explores the intersection of art, music, and programming, demonstrating how creativity can make us better engineers and how code can be a medium for artistic expression. A journey through the history of creative computing and the future of human-centric programming.",
    tags: ["Keynote", "Creativity", "Art"]
  },
  {
    id: "7-2",
    title: "Carbon: graduating from the experiment",
    speaker: "Chandler Carruth",
    time: "10:20 - 11:20",
    startTime: "10:20",
    endTime: "11:20",
    day: 1,
    track: "Languages",
    description: "Carbon is an experimental successor for C++, focusing on performance, interoperability, and modern features. In this session, Chandler Carruth provides an update on the project's progress, its design goals, and how it aims to address the limitations of C++ while maintaining its strengths. Explore the language's syntax, safety features, and the road ahead for the Carbon community as it moves beyond the experimental phase.",
    tags: ["C++", "Carbon", "Languages", "Systems"]
  },
  {
    id: "7-3",
    title: "Between the Layers– Interpreting Large Language Models",
    speaker: "Conor Hoekstra",
    time: "10:20 - 11:20",
    startTime: "10:20",
    endTime: "11:20",
    day: 1,
    track: "AI",
    description: "What actually happens inside an LLM when you ask it a question? This session dives deep into the architecture of transformers and the mathematical mechanics of attention and weights. Conor Hoekstra breaks down complex conceptual layers into understandable components, helping developers build more intuitive mental models of the AI tools they use every day.",
    tags: ["AI", "LLM", "Deep Learning", "Transformers"]
  },
  {
    id: "7-4",
    title: "Let’s catch up with C#! Exciting features from C# 9 to C# 14!",
    speaker: "Filip Ekberg",
    time: "10:20 - 11:20",
    startTime: "10:20",
    endTime: "11:20",
    day: 1,
    track: ".NET",
    description: "C# is evolving faster than ever. From records and patterns to the latest improvements in C# 14, Filip Ekberg takes you on a fast-paced tour of the language's most impactful features. Learn how to write cleaner, safer, and more expressive code by leveraging the full power of the modern C# compiler and runtime.",
    tags: [".NET", "C#", "Programming", "Evolution"]
  },
  {
    id: "7-5",
    title: "Be curious, not judgemental",
    speaker: "Chris Ayers",
    time: "10:20 - 11:20",
    startTime: "10:20",
    endTime: "11:20",
    day: 1,
    track: "Soft Skills",
    description: "Engineering culture is often built on rigid standards and immediate judgement. This talk presents a different approach: fostering a culture of curiosity. By asking 'why' instead of assuming 'wrong', teams can unlock innovation, improve mentorship, and build a more resilient and inclusive technical environment. Inspired by principles from both engineering and psychology.",
    tags: ["Culture", "Soft Skills", "Leadership", "Mentorship"]
  },
  {
    id: "7-6",
    title: "Boosting Software Efficiency : A Case Study of 100% Improvement",
    speaker: "Alex Dathskovsky",
    time: "11:40 - 12:40",
    startTime: "11:40",
    endTime: "12:40",
    day: 1,
    track: "Performance",
    description: "Performance engineering isn't just about tweaking loops. In this case study, Alex Dathskovsky details how a 100% performance improvement was achieved in a complex embedded system through architectural redesign, cache optimization, and rigorous benchmarking. Learn practical strategies for identifying bottlenecks and implementing high-impact optimizations in your own systems.",
    tags: ["Performance", "Embedded", "C++", "Optimization"]
  },
  {
    id: "7-7",
    title: "Agents & Arbiters - A Guide to Multi-Agent Collaboration",
    speaker: "Chris Ayers",
    time: "11:40 - 12:40",
    startTime: "11:40",
    endTime: "12:40",
    day: 1,
    track: "AI",
    description: "The next generation of AI applications will involve multiple specialized 'agents' working together to solve complex tasks. This session introduces LangGraph.js, a framework for building stateful, multi-agent workflows. Explore patterns for agent interaction, conflict resolution, and complex decision-making processes that go beyond simple RAG or chat interfaces.",
    tags: ["AI", "JavaScript", "Agents", "LangGraph"]
  },
  {
    id: "7-8",
    title: "The past, present, and future of AI for application developers",
    speaker: "David Whitney",
    time: "11:40 - 12:40",
    startTime: "11:40",
    endTime: "12:40",
    day: 1,
    track: "AI",
    description: "We've moved from symbolic AI to deep learning and now to generative agents. David Whitney examines the trajectory of artificial intelligence through the lens of the application developer. What remains the same? What has fundamentally changed? And most importantly, how should developers prepare for a future where AI is a core primitive in software architecture?",
    tags: ["AI", "Future", "Development", "Architecture"]
  },
  {
    id: "7-9",
    title: "Calm at Scale",
    speaker: "Dean Schuster",
    time: "11:40 - 12:40",
    startTime: "11:40",
    endTime: "12:40",
    day: 1,
    track: "Architecture",
    description: "Scaling a system often brings chaos—unpredictable failures, operational overhead, and developer burnout. This session explores the concept of 'Calm Scaling': building architectures and operational processes that maintain stability and developer peace of mind even under massive load. Learn strategies for observability, self-healing, and human-centric infrastructure design.",
    tags: ["Architecture", "Scale", "Reliability", "Operations"]
  },
  {
    id: "7-10",
    title: "Everything you learned about SSL is deprecated",
    speaker: "Barry Stahl",
    time: "11:40 - 12:40",
    startTime: "11:40",
    endTime: "12:40",
    day: 1,
    track: "Security",
    description: "Security standards move fast. TLS 1.0/1.1 are gone, SSL is a legacy term, and certificate management is increasingly automated. Barry Stahl provides a reality check on modern secure communication. From the death of old ciphers to the emergence of Post-Quantum Cryptography, ensure your understanding of transport security is grounded in current best practices rather than outdated tutorials.",
    tags: ["Security", "SSL", "TLS", "Encryption"]
  },
  {
    id: "7-11",
    title: "Principle Misunderstandings",
    speaker: "Dylan Beattie",
    time: "13:40 - 14:40",
    startTime: "13:40",
    endTime: "14:40",
    day: 1,
    track: "Design",
    description: "SOLID, DRY, YAGNI—we all know the acronyms, but do we really understand the principles? Dylan Beattie takes a critical (and often humorous) look at how software design principles are often misapplied or taken to dogmatic extremes. Discover how to use these patterns as tools for pragmatism rather than sources of unnecessary complexity.",
    tags: ["Design", "SOLID", "Patterns", "Pragmatism"]
  },
  {
    id: "7-12",
    title: "Algorithms & Combinators",
    speaker: "Conor Hoekstra",
    time: "13:40 - 14:40",
    startTime: "13:40",
    endTime: "14:40",
    day: 1,
    track: "Computer Science",
    description: "Combinators are higher-order functions that define the logic of algorithm composition. In this session, Conor Hoekstra explains the power of combinatory logic and how it can simplify algorithm design in both functional and object-oriented languages. Learn how to think about puzzles and problems in terms of pure transformations and elegant compositions.",
    tags: ["CS", "Algorithms", "Math", "Logic"]
  },
  {
    id: "7-13",
    title: "Aspire 13: One AppHost, Many Languages, Fewer Headaches?",
    speaker: "Chris Ayers",
    time: "13:40 - 14:40",
    startTime: "13:40",
    endTime: "14:40",
    day: 1,
    track: ".NET",
    description: ".NET Aspire has revolutionized how we build and orchestrate cloud-native applications. But how does it handle non-.NET components like Node.js, Python, or Rust services? Chris Ayers demonstrates the power of the Aspire AppHost as a polyglot orchestrator, showing how it can unify your entire stack with consistent service discovery, observability, and local development flows.",
    tags: [".NET", "Cloud Native", "Microservices", "Aspire"]
  },
  {
    id: "7-14",
    title: "Becoming an EM Without Losing Your Technical Soul",
    speaker: "David Whitney",
    time: "13:40 - 14:40",
    startTime: "13:40",
    endTime: "14:40",
    day: 1,
    track: "Leadership",
    description: "Moving from IC to EM is one of the hardest transitions in tech. Many fear they will 'lose their edge' or become disconnected from the code. David Whitney shares a framework for staying technically relevant while excelling as a people manager. Learn how to provide technical leadership, lead through architectures, and mentor without micromanaging.",
    tags: ["Leadership", "Career", "Engineering Manager"]
  },
  {
    id: "7-15",
    title: "Threat Modeling Developer Behaviour: Psychology of Bad Code",
    speaker: "David Whitney",
    time: "13:40 - 14:40",
    startTime: "13:40",
    endTime: "14:40",
    day: 1,
    track: "Security",
    description: "Most security vulnerabilities are not the result of malice, but of predictable human behavior under pressure. This talk examines the intersection of psychology and cybersecurity. By understanding why developers take shortcuts or miss edge cases, we can design systems and processes that are secure by default and resilient to human error.",
    tags: ["Security", "Psychology", "Culture", "Threat Modeling"]
  },
  {
    id: "7-16",
    title: "Coding a functional type system in constexpr C++",
    speaker: "Daniel Nikpayuk",
    time: "15:00 - 16:00",
    startTime: "15:00",
    endTime: "16:00",
    day: 1,
    track: "Languages",
    description: "Constexpr is one of the most powerful features in modern C++, allowing complex computations at compile-time. Daniel Nikpayuk shares lessons learned from implementing a full functional type system using only constexpr primitives. A deep dive into metaprogramming, compile-time performance, and the boundaries of what the C++ compiler can do.",
    tags: ["C++", "Metaprogramming", "Types", "Functional"]
  },
  {
    id: "7-17",
    title: "10 tips to level up your ai-assisted coding",
    speaker: "Barry Stahl",
    time: "15:00 - 16:00",
    startTime: "15:00",
    endTime: "16:00",
    day: 1,
    track: "AI",
    description: "Using AI for coding is more than just autocompleting lines. Barry Stahl shares ten high-impact strategies for integrating LLMs into your workflow—from prompt engineering for complex refactoring to using AI as a rubber-ducking partner for architectural decisions. Maximize the value of tools like Copilot and Cursor without compromising code quality.",
    tags: ["AI", "Productivity", "GitHub Copilot", "Cursor"]
  },
  {
    id: "7-18",
    title: "OpenTelemetry in a Brownfield World",
    speaker: "Chris Ayers",
    time: "15:00 - 16:00",
    startTime: "15:00",
    endTime: "16:00",
    day: 1,
    track: "Observability",
    description: "It's easy to add observability to a new microservice, but what about the 10-year-old monolith? Chris Ayers provides a practical guide to introducing OpenTelemetry into legacy 'brownfield' environments. Learn how to instrument old codebases, bridge gaps between different tracing standards, and gain visibility into systems that have been black boxes for years.",
    tags: ["Observability", "DevOps", "Legacy", "OpenTelemetry"]
  },
  {
    id: "7-19",
    title: "Like Having an Intern? The Impact of LLMs on Careers",
    speaker: "David Whitney",
    time: "15:00 - 16:00",
    startTime: "15:00",
    endTime: "16:00",
    day: 1,
    track: "Career",
    description: "Generative AI is often likened to having a 'senior intern' or 'eternal junior dev'. But how does this affect the traditional career ladder? David Whitney discusses the changing expectations for junior, mid, and senior engineers. Will we still need junior devs? How does the path to mastery change when the basics can be automated?",
    tags: ["AI", "Career", "Future of Work", "Skills"]
  },
  {
    id: "7-20",
    title: "Postmodern Programming",
    speaker: "Dylan Beattie",
    time: "16:20 - 17:20",
    startTime: "16:20",
    endTime: "17:20",
    day: 1,
    track: "Philosophy",
    description: "The era of big paradigms—OO, Functional, Agile—is giving way to a more fragmented, 'postmodern' approach to software. Dylan Beattie examines how we navigate a world where there is no single right way to build things. A look at the cultural shifts in tech, the rise of the specialized generalist, and how we find meaning and quality in an increasingly complex industry.",
    tags: ["Philosophy", "Programming", "Culture", "Complexity"]
  },
  {
    id: "7-21",
    title: "Cursed C#",
    speaker: "Filip Ekberg",
    time: "16:20 - 17:20",
    startTime: "16:20",
    endTime: "17:20",
    day: 1,
    track: ".NET",
    description: "C# is a beautiful language, but it has some dark, dusty corners. In this session, Filip Ekberg explores 'Cursed C#': legal code that you definitely shouldn't write. From bizarre uses of 'dynamic' to unsafe pointer manipulations and weird compiler edge cases. A fun session that teaches you deep language internals through the lens of what NOT to do.",
    tags: ["C#", ".NET", "Fun", "Internals"]
  },
  {
    id: "7-22",
    title: "How to Break AI Systems (Before Someone Else Does)",
    speaker: "Chris Ayers",
    time: "16:20 - 17:20",
    startTime: "16:20",
    endTime: "17:20",
    day: 1,
    track: "Security",
    description: "As we integrate AI into critical systems, we must understand its unique failure modes. Chris Ayers demonstrates 'Red Teaming' for AI: prompt injection, data poisoning, and model evasion attacks. Learn how to think like an attacker to build more secure and robust AI applications that can withstand the adversarial landscape of modern software.",
    tags: ["AI", "Security", "Red Teaming", "Adversarial"]
  },
  {
    id: "7-23",
    title: "NDC Party: Retro Tech Night",
    speaker: "The Community",
    time: "18:40 - 21:40",
    startTime: "18:40",
    endTime: "21:40",
    day: 1,
    track: "Social",
    description: "The legendary NDC Party! Join us for a night of retro gaming, drinks, and networking with fellow developers. This year's theme is 'Retro Tech'—come as you are or in your favorite vintage tech-inspired outfit. Food, music, and the best community in software development.",
    tags: ["Social", "Networking", "Party", "Gaming"]
  },

  // MAY 8 - DAY 2
  {
    id: "8-1",
    title: "Expression-based C++ for Better Code?",
    speaker: "Conor Hoekstra",
    time: "09:00 - 10:00",
    startTime: "09:00",
    endTime: "10:00",
    day: 2,
    track: "Languages",
    description: "Most C++ is statement-based, leading to mutable state and complex control flow. Conor Hoekstra explores the 'expression-based' alternative, borrowing ideas from functional programming. Learn how to write code that is more declarative, easier to reason about, and often more performant by treating logic as compositions of expressions rather than sequences of statements.",
    tags: ["C++", "Languages", "Clean Code", "Composition"]
  },
  {
    id: "8-2",
    title: "Building AI That Learns and Adapts: MRI Diagnostics",
    speaker: "Brenda Luo",
    time: "09:00 - 10:00",
    startTime: "09:00",
    endTime: "10:00",
    day: 2,
    track: "AI",
    description: "AI in healthcare requires extreme precision and adaptability. Brenda Luo shares a case study in building adaptive AI models for MRI diagnostic assistance. Explore the challenges of domain-specific model training, the importance of explainability in medical AI, and how machine learning is directly improving patient outcomes in radiology.",
    tags: ["AI", "Healthcare", "Machine Learning", "Medicine"]
  },
  {
    id: "8-3",
    title: "Load Fast, Don’t Suck: Advice For Core Web Vitals",
    speaker: "Dean Schuster",
    time: "09:00 - 10:00",
    startTime: "09:00",
    endTime: "10:00",
    day: 2,
    track: "Web",
    description: "Core Web Vitals are now a key ranking factor for Google and a critical component of user experience. Dean Schuster provides practical, battle-tested advice for optimizing LCP, FID, and CLS. Go beyond the basics of image optimization to understand the impact of JavaScript execution, rendering patterns, and server-side performance on modern web applications.",
    tags: ["Web", "Performance", "UX", "SEO"]
  },
  {
    id: "8-4",
    title: "Incrementally Rebuilding Stack Overflow's Monolith",
    speaker: "Connell Sharp",
    time: "09:00 - 10:00",
    startTime: "09:00",
    endTime: "10:00",
    day: 2,
    track: "Architecture",
    description: "Stack Overflow is one of the internet's most legendary monoliths. But as the platform evolves, how do you modernize such a massive and critical system without breaking it? Connell Sharp shares the architectural strategy behind the incremental modernization of Stack Overflow, detailing the patterns, tools, and cultural shifts required to evolve a monolith at scale.",
    tags: ["Architecture", "Scale", "Modernization", "Stack Overflow"]
  },
  {
    id: "8-5",
    title: "Benchmarking and optimizing the Carbon compiler",
    speaker: "Chandler Carruth",
    time: "10:20 - 11:20",
    startTime: "10:20",
    endTime: "11:20",
    day: 2,
    track: "Languages",
    description: "The performance of a compiler is just as critical as the performance of the code it produces. Chandler Carruth dives into the performance engineering of the Carbon compiler. Learn about the benchmarking suites, profiling tools, and optimization techniques used to ensure that Carbon remains a high-performance system for developers worldwide.",
    tags: ["Performance", "Compilers", "Systems", "Benchmarking"]
  },
  {
    id: "8-6",
    title: "Prompt-Jacking: The Rise of a New Supply Chain Risk",
    speaker: "Chris Ayers",
    time: "10:20 - 11:20",
    startTime: "10:20",
    endTime: "11:20",
    day: 2,
    track: "Security",
    description: "As applications integrate third-party AI agents and prompt templates, a new security blind spot has emerged. Prompt-Jacking involves hijacking the instructions of an AI agent to leak sensitive data or execute unauthorized actions. This talk demonstrates how these attacks work and provides a blueprint for securing your AI supply chain against instruction manipulation.",
    tags: ["Security", "AI", "Prompts", "Supply Chain"]
  },
  {
    id: "8-7",
    title: "Why Web Components are the foundation we should’ve used",
    speaker: "Chris Ayers",
    time: "10:20 - 11:20",
    startTime: "10:20",
    endTime: "11:20",
    day: 2,
    track: "Web",
    description: "Frameworks come and go, but the web platform is forever. This session makes the case for Web Components as the sustainable, framework-agnostic foundation for modern design systems. Learn how to build interoperable UI components that work across React, Vue, Angular, or no framework at all, reducing maintenance overhead and future-proofing your frontend.",
    tags: ["Web", "Standards", "Web Components", "Design Systems"]
  },
  {
    id: "8-8",
    title: "Don’t Let AI Trash Your Codebase",
    speaker: "David Whitney",
    time: "11:40 - 12:40",
    startTime: "11:40",
    endTime: "12:40",
    day: 2,
    track: "AI",
    description: "The ease of generating code with AI can lead to a massive influx of technical debt if not managed carefully. David Whitney provides a framework for 'Responsible AI Adoption' in engineering teams. Learn how to implement rigorous standards, code review practices, and architectural oversight specifically tailored for an AI-augmented development world to ensure your codebase remains high-quality.",
    tags: ["AI", "Quality", "Technical Debt", "Best Practices"]
  },
  {
    id: "8-10",
    title: "Use a Rust SAT Solver to play better pickleball!",
    speaker: "Barry Stahl",
    time: "11:40 - 12:40",
    startTime: "11:40",
    endTime: "12:40",
    day: 2,
    track: "Rust",
    description: "Pickleball scheduling is a notorious NP-hard problem. In this fun and technical session, Barry Stahl demonstrates how to use Rust and a SAT (Boolean Satisfiability) solver to generate optimal match schedules. A great introduction to Rust, formal logic solvers, and how complex computer science can solve everyday (and sporty) problems.",
    tags: ["Rust", "Logic", "Math", "Fun"]
  },
  {
    id: "8-11",
    title: "Writing a Windows Kernel Driver in an hour or two",
    speaker: "Filip Ekberg",
    time: "13:40 - 14:40",
    startTime: "13:40",
    endTime: "14:40",
    day: 2,
    track: "Systems",
    description: "Kernel development is often seen as a dark art. Filip Ekberg demystifies the Windows Driver Model and shows you how to build, deploy, and debug your first kernel driver. We'll explore the unique constraints of kernel mode, the tools of the trade, and how to safely write code that runs at the highest privilege level of the operating system.",
    tags: ["Windows", "C++", "Kernel", "Drivers"]
  },
  {
    id: "8-12",
    title: "Building a Doom-Like World to Explore Agentic Systems",
    speaker: "Guy Royse",
    time: "13:40 - 14:40",
    startTime: "13:40",
    endTime: "14:40",
    day: 2,
    track: "AI",
    description: "Visualizing AI logic can be difficult. What if we put our agents in a 3D environment inspired by classic 2.5D shooters like DOOM? Guy Royse demonstrates how to use game engine concepts to visualize AI goal planning, decision trees, and agent interactions. A creative and highly visual session on the future of autonomous agent development.",
    tags: ["AI", "Gaming", "Agents", "Visualization"]
  },
  {
    id: "8-13",
    title: "Legacy Architecture Migration Patterns with DDD",
    speaker: "Barry Stahl",
    time: "13:40 - 14:40",
    startTime: "13:40",
    endTime: "14:40",
    day: 2,
    track: "Architecture",
    description: "Migrating a legacy system is as much about domains as it is about databases. Barry Stahl explains how to use Domain-Driven Design (DDD) to identify 'seams' in legacy code and map out a migration strategy. Learn patterns like the Strangler Fig, Anticorruption Layers, and Tactical DDD to move your architecture forward without a high-risk 'big bang' rewrite.",
    tags: ["Architecture", "DDD", "Migration", "Legacy"]
  },
  {
    id: "8-14",
    title: "The Future of Information Retrieval: RAG",
    speaker: "Aleksander Stensby",
    time: "15:00 - 16:00",
    startTime: "15:00",
    endTime: "16:00",
    day: 2,
    track: "AI",
    description: "Retrieval-Augmented Generation (RAG) has become the standard for connecting LLMs to private data. But what's next? Aleksander Stensby explores the evolution of RAG, from simple vector search to complex multi-stage retrieval, hybrid search, and semantic reranking. Learn the advanced techniques required to move RAG from a demo to a production-grade information retrieval system.",
    tags: ["AI", "RAG", "Search", "Information Retrieval"]
  },
  {
    id: "8-15",
    title: "Why Great Models Fail: Lessons From 9 Years of ML",
    speaker: "Aleksander Stensby",
    time: "15:00 - 16:00",
    startTime: "15:00",
    endTime: "16:00",
    day: 2,
    track: "AI",
    description: "A perfect model on a test set doesn't mean a successful application. Aleksander Stensby shares hard-won lessons from nearly a decade of deploying machine learning models in production. Discover the common pitfalls—data drift, silent failures, UX mismatch, and infrastructure bottlenecks—that cause even the most promising AI projects to fail in the real world.",
    tags: ["AI", "MLOps", "Production", "Machine Learning"]
  },
  {
    id: "8-16",
    title: "From LLM Theory to Practical Agentic Implementations",
    speaker: "Aleksander Stensby",
    time: "16:20 - 17:20",
    startTime: "16:20",
    endTime: "17:20",
    day: 2,
    track: "AI",
    description: "Moving beyond prompts means building autonomous agents. This session bridges the gap between high-level LLM theory and the technical reality of building agentic systems. Aleksander Stensby covers state management, tool integration, and recursive logic patterns that enable agents to execute multi-step tasks independently and reliably in production environments.",
    tags: ["AI", "Agents", "Implementation", "Production"]
  },
  {
    id: "8-17",
    title: "Union types in C#",
    speaker: "Filip Ekberg",
    time: "16:20 - 17:20",
    startTime: "16:20",
    endTime: "17:20",
    day: 2,
    track: ".NET",
    description: "Tagged unions and pattern matching are staples of functional programming that are finally becoming first-class citizens in C#. Filip Ekberg demonstrates how to use these features to write safer, data-centric code. Explore the current state of union types in C# and how to implement robust error handling and state management using these modern functional patterns.",
    tags: [".NET", "C#", "Functional", "Types"]
  },
  {
    id: "8-18",
    title: "Closing: Brains and Belonging",
    speaker: "Dylan Beattie",
    time: "17:40 - 18:40",
    startTime: "17:40",
    endTime: "18:40",
    day: 2,
    track: "Soft Skills",
    description: "In the final session of NDC Toronto 2026, Dylan Beattie brings us back to the human element. How do our brains process the overwhelming rate of change in tech? And how do we build professional communities where everyone feels they belong? A reflective and inspiring conclusion to the conference that looks at the future of the person behind the keyboard.",
    tags: ["Community", "Wellbeing", "Inclusion", "Closing"]
  }
];

export const DAYS = [
  { id: 1, date: "May 7, 2026", label: "May 7" },
  { id: 2, date: "May 8, 2026", label: "May 8" },
];
