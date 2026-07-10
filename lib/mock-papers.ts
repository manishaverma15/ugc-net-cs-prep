import { units } from "@/lib/units";
import type { Question } from "@/types/unit";

export interface MockPaper {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

const extraMockQuestions: Record<string, Question[]> = {
  "discrete-structures-and-optimization": [
    {
      id: "mock-dso-1",
      year: "Mock",
      prompt: "Which of the following is an example of a binary relation?",
      options: ["A set of numbers", "A mapping from A to B", "A loop", "A stack"],
      answer: "A mapping from A to B",
      explanation: "A binary relation is a set of ordered pairs from one set to another.",
    },
  ],
  "computer-system-architecture": [
    {
      id: "mock-csa-1",
      year: "Mock",
      prompt: "A register is primarily used to store:",
      options: ["Large data files", "Current instruction or data", "Permanent files", "Network packets"],
      answer: "Current instruction or data",
      explanation: "Registers hold temporary data and instructions used by the CPU.",
    },
  ],
  "programming-languages": [
    {
      id: "mock-pl-1",
      year: "Mock",
      prompt: "Which feature is most associated with object-oriented programming?",
      options: ["Pointers", "Inheritance", "Assembly jumps", "Bitwise operations"],
      answer: "Inheritance",
      explanation: "Inheritance is a core object-oriented programming feature.",
    },
  ],
  "data-structures-and-algorithms": [
    {
      id: "mock-dsa-1",
      year: "Mock",
      prompt: "Which traversal typically uses a queue?",
      options: ["DFS", "Preorder", "Level-order", "Postorder"],
      answer: "Level-order",
      explanation: "Level-order traversal processes nodes by breadth, which fits a queue-based approach.",
    },
  ],
  "theory-of-computation": [
    {
      id: "mock-toc-1",
      year: "Mock",
      prompt: "A PDA is more powerful than a finite automaton because it has:",
      options: ["More states", "A stack", "A tape head", "A parser"],
      answer: "A stack",
      explanation: "A pushdown automaton uses a stack to remember unbounded information.",
    },
  ],
  "compiler-design": [
    {
      id: "mock-cd-1",
      year: "Mock",
      prompt: "The main role of a parser is to:",
      options: ["Tokenize the source", "Check grammar structure", "Optimize code", "Generate machine code"],
      answer: "Check grammar structure",
      explanation: "The parser validates whether the token sequence follows the language grammar.",
    },
  ],
  "operating-system": [
    {
      id: "mock-os-1",
      year: "Mock",
      prompt: "Deadlock occurs when:",
      options: ["Processes finish quickly", "A process waits indefinitely for resources", "The CPU is idle", "Memory is freed"],
      answer: "A process waits indefinitely for resources",
      explanation: "Deadlock is a state where processes are stuck waiting for one another.",
    },
  ],
  "database-management-system": [
    {
      id: "mock-dbms-1",
      year: "Mock",
      prompt: "The main purpose of normalization is to:",
      options: ["Increase redundancy", "Reduce data redundancy", "Speed up network traffic", "Create indexes"],
      answer: "Reduce data redundancy",
      explanation: "Normalization organizes data to reduce redundancy and anomalies.",
    },
  ],
  "computer-networks": [
    {
      id: "mock-cn-1",
      year: "Mock",
      prompt: "A router is primarily used to:",
      options: ["Connect devices in the same LAN", "Forward packets between different networks", "Store DNS records", "Convert binary to decimal"],
      answer: "Forward packets between different networks",
      explanation: "Routers direct traffic between networks.",
    },
  ],
  "software-engineering": [
    {
      id: "mock-se-1",
      year: "Mock",
      prompt: "Coupling in software design measures:",
      options: ["The quality of comments", "The interdependence between modules", "The number of lines of code", "The complexity of loops"],
      answer: "The interdependence between modules",
      explanation: "Coupling reflects how strongly modules depend on one another.",
    },
  ],
};

function buildFullQuestionBank(): Question[] {
  return units.flatMap((unit) => {
    const unitQuestions = unit.questions.slice(0, 9).map((question) => ({
      ...question,
      sourceUnit: unit.title,
    }));

    const extraQuestion = extraMockQuestions[unit.slug]?.[0];
    const additionalQuestions = extraQuestion
      ? [{ ...extraQuestion, sourceUnit: unit.title }]
      : [];

    return [...unitQuestions, ...additionalQuestions];
  });
}

export function getMockPapers(): MockPaper[] {
  const fullBank = buildFullQuestionBank();
  const firstHalf = fullBank.slice(0, 50);
  const secondHalf = fullBank.slice(50, 100);

  return [
    {
      id: "mock-paper-1",
      title: "Mock Paper 1",
      description: "100 questions covering every unit for a full revision round.",
      questions: fullBank.slice(0, 100),
    },
    {
      id: "mock-paper-2",
      title: "Mock Paper 2",
      description: "100 questions arranged in a second mixed practice paper from all units.",
      questions: [...secondHalf, ...firstHalf],
    },
    {
      id: "mock-paper-3",
      title: "Mock Paper 3",
      description: "100 questions with a fresh mixed set for deeper revision.",
      questions: [...firstHalf.map((q, index) => ({ ...q, id: `${q.id}-paper3-${index}` })), ...secondHalf.map((q, index) => ({ ...q, id: `${q.id}-paper3b-${index}` }))],
    },
    {
      id: "mock-paper-4",
      title: "Mock Paper 4",
      description: "100 questions designed as a final revision challenge across all units.",
      questions: [...secondHalf.map((q, index) => ({ ...q, id: `${q.id}-paper4-${index}` })), ...firstHalf.map((q, index) => ({ ...q, id: `${q.id}-paper4b-${index}` }))],
    },
  ];
}
