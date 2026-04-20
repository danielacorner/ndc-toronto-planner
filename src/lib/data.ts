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
  {
    id: "1",
    title: "Opening Keynote",
    speaker: "TBA",
    time: "09:00 - 10:00",
    startTime: "09:00",
    endTime: "10:00",
    day: 1,
    track: "Keynote",
    description: "The official opening of NDC Toronto 2026.",
    tags: ["Keynote", "General"]
  },
  {
    id: "2",
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
    id: "3",
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
    id: "4",
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
    id: "5",
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
    id: "6",
    title: "Boosting Software Efficiency : A Case Study of 100% Performance Improvement",
    speaker: "TBA",
    time: "11:40 - 12:40",
    startTime: "11:40",
    endTime: "12:40",
    day: 1,
    track: "Performance",
    description: "How to achieve massive performance gains in embedded systems.",
    tags: ["Performance", "Embedded", "C++"]
  },
  {
    id: "7",
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
    id: "8",
    title: "The past, present, and future of AI for application developers",
    speaker: "TBA",
    time: "11:40 - 12:40",
    startTime: "11:40",
    endTime: "12:40",
    day: 1,
    track: "AI",
    description: "A historical and forward-looking perspective on AI in dev.",
    tags: ["AI", "Future", "Development"]
  },
  {
    id: "9",
    title: "Calm at Scale",
    speaker: "TBA",
    time: "11:40 - 12:40",
    startTime: "11:40",
    endTime: "12:40",
    day: 1,
    track: "Architecture",
    description: "Maintaining system stability and developer sanity at scale.",
    tags: ["Architecture", "Scale", "Reliability"]
  },
  {
    id: "10",
    title: "Everything you learned about SSL is deprecated",
    speaker: "TBA",
    time: "11:40 - 12:40",
    startTime: "11:40",
    endTime: "12:40",
    day: 1,
    track: "Security",
    description: "Modern TLS and why your old knowledge might be dangerous.",
    tags: ["Security", "SSL", "TLS"]
  },
  {
    id: "11",
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
    id: "12",
    title: "Algorithms & Combinators",
    speaker: "TBA",
    time: "13:40 - 14:40",
    startTime: "13:40",
    endTime: "14:40",
    day: 1,
    track: "Computer Science",
    description: "Deep dive into algorithmic complexity and combinatorics.",
    tags: ["CS", "Algorithms", "Math"]
  },
  {
    id: "13",
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
    id: "14",
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
    id: "15",
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
    id: "16",
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
    id: "17",
    title: "10 tips to level up your ai-assisted coding",
    speaker: "TBA",
    time: "15:00 - 16:00",
    startTime: "15:00",
    endTime: "16:00",
    day: 1,
    track: "AI",
    description: "Practical advice for working with Copilot and Cursor.",
    tags: ["AI", "Productivity", "Tools"]
  },
  {
    id: "18",
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
    id: "19",
    title: "Like Having an Intern? The Impact of LLMs on Software Engineering Careers",
    speaker: "TBA",
    time: "15:00 - 16:00",
    startTime: "15:00",
    endTime: "16:00",
    day: 1,
    track: "Career",
    description: "How AI is changing the junior developer role.",
    tags: ["AI", "Career", "Future"]
  },
  {
    id: "20",
    title: "Doors of (AI)pportunity: The Front and Backdoors of LLMs",
    speaker: "TBA",
    time: "15:00 - 16:00",
    startTime: "15:00",
    endTime: "16:00",
    day: 1,
    track: "Security",
    description: "Security risks and opportunities in LLM integration.",
    tags: ["AI", "Security", "LLM"]
  },
  {
    id: "21",
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
    id: "22",
    title: "Copilot, Cursor, and Custom LLMs: Navigating the New .NET Developer Experience",
    speaker: "TBA",
    time: "16:20 - 17:20",
    startTime: "16:20",
    endTime: "17:20",
    day: 1,
    track: ".NET",
    description: "How AI tools are reshaping the .NET ecosystem.",
    tags: [".NET", "AI", "DevEx"]
  },
  {
    id: "23",
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
    id: "24",
    title: "From Concert Hall to Code Review, Symphony to Software",
    speaker: "TBA",
    time: "16:20 - 17:20",
    startTime: "16:20",
    endTime: "17:20",
    day: 1,
    track: "Soft Skills",
    description: "What music can teach us about software engineering.",
    tags: ["Music", "Engineering", "Soft Skills"]
  },
  {
    id: "25",
    title: "How to Break AI Systems (Before Someone Else Does)",
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
    id: "26",
    title: "The Biggest Misconception of Computer Science",
    speaker: "TBA",
    time: "17:40 - 18:40",
    startTime: "17:40",
    endTime: "18:40",
    day: 1,
    track: "Computer Science",
    description: "Debunking common myths in CS education and practice.",
    tags: ["CS", "Education", "Theory"]
  },
  {
    id: "27",
    title: "\"Looks Good to Me\": A Practical Guide to Handling AI-Generated Code",
    speaker: "TBA",
    time: "17:40 - 18:40",
    startTime: "17:40",
    endTime: "18:40",
    day: 1,
    track: "AI",
    description: "Best practices for reviewing code written by LLMs.",
    tags: ["AI", "Code Review", "Quality"]
  },
  {
    id: "28",
    title: "The History of .NET",
    speaker: "TBA",
    time: "17:40 - 18:40",
    startTime: "17:40",
    endTime: "18:40",
    day: 1,
    track: ".NET",
    description: "From Project 42 to .NET 9 and beyond.",
    tags: [".NET", "History", "Microsoft"]
  },
  {
    id: "29",
    title: "Focus in a Fragmented World: A Developer’s Guide to Staying Productive",
    speaker: "TBA",
    time: "17:40 - 18:40",
    startTime: "17:40",
    endTime: "18:40",
    day: 1,
    track: "Productivity",
    description: "Strategies for deep work in the age of Slack and AI.",
    tags: ["Productivity", "Deep Work", "Mental Health"]
  },
  {
    id: "30",
    title: "Introducing the SQL MCP Server",
    speaker: "TBA",
    time: "17:40 - 18:40",
    startTime: "17:40",
    endTime: "18:40",
    day: 1,
    track: "Data",
    description: "A new way to interact with SQL databases using AI.",
    tags: ["SQL", "AI", "Data"]
  },
  {
    id: "31",
    title: "NDC Party",
    speaker: "Everyone",
    time: "18:40 - 21:40",
    startTime: "18:40",
    endTime: "21:40",
    day: 1,
    track: "Social",
    description: "Food, drinks, and networking.",
    tags: ["Social", "Networking", "Party"]
  }
];

export const DAYS = [
  { id: 1, date: "May 5, 2026", label: "Day 1" },
  { id: 2, date: "May 6, 2026", label: "Day 2" },
  { id: 3, date: "May 7, 2026", label: "Day 3" },
  { id: 4, date: "May 8, 2026", label: "Day 4" },
];
