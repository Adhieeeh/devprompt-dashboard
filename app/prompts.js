export const interviewPrompts = [
  {
    id: 1,
    topic: "JavaScript",
    question: "What is the difference between Prototypal Inheritance and Classical Inheritance?",
    hint: "Think about objects linking directly to other objects vs blueprint classes generating instances."
  },
  {
    id: 2,
    topic: "Next.js Framework",
    question: "Explain the concept of React Server Components (RSC) and why they improve load times.",
    hint: "RSCs render exclusively on the cloud server, meaning zero JavaScript bundle weight is sent to the client browser for those elements."
  },
  {
    id: 3,
    topic: "Web Performance",
    question: "What is 'Hydration' in the context of server-side rendered applications?",
    hint: "It is the process where client-side JavaScript attaches event listeners to the static HTML sent by the server."
  },
  {
    id: 4,
    topic: "Computer Science",
    question: "What is the Big O time complexity of searching through a balanced Binary Search Tree (BST)?",
    hint: "Every decision splits the remaining search space exactly in half. Think logarithmically."
  },
  {
    id: 5,
    topic: "React.js",
    question: "What are React Hooks and how do they differ from class-based components?",
    hint: "Hooks allow you to use state and other React features without writing a class. They enable functional components to have side effects and manage state."
  }
];