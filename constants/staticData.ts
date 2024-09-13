import { topicData } from "@/types/topic-data";

export const questionData = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces, maintained by Facebook."
  },
  {
    question: "What is JSX?",
    answer: "JSX is a syntax extension for JavaScript, used in React to describe what the UI should look like."
  },
  {
    question: "What is the Virtual DOM?",
    answer: "The Virtual DOM is a lightweight copy of the actual DOM, used by React to optimize UI updates."
  },
  {
    question: "What is the difference between state and props in React?",
    answer: "State is a local data storage that is mutable, while props are read-only and passed from parent components."
  },
  {
    question: "What is the use of useEffect in React?",
    answer: "The useEffect hook allows you to perform side effects in function components, such as fetching data or subscribing to events."
  },
  {
    question: "What is Next.js?",
    answer: "Next.js is a React framework that enables server-side rendering and static site generation for better performance and SEO."
  },
  {
    question: "How do you handle state management in React?",
    answer: "State management in React can be handled using built-in hooks like useState and useReducer, or external libraries like Redux."
  }
];

export const staticTopicData: topicData[] = [
  {
    id: 0,
    title: "React Fundamentals",
    uri: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
    numberOfCards: 4,
    flashcards: [
      {
        question: "What is React?",
        answer: "React is a JavaScript library for building user interfaces, maintained by Facebook."
      },
      {
        question: "What is JSX?",
        answer: "JSX is a syntax extension for JavaScript, used in React to describe what the UI should look like."
      },
      {
        question: "How do you handle state management in React?",
        answer: "State management in React can be handled using built-in hooks like useState and useReducer, or external libraries like Redux."
      },
      {
        question: "What is the use of useEffect in React?",
        answer: "The useEffect hook allows you to perform side effects in function components, such as fetching data or subscribing to events."
      }
    ]
  },
  {
    id: 1,
    title: "Python",
    uri: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    numberOfCards: 8,
    flashcards: [
      {
        question: "What is React?",
        answer: "React is a JavaScript library for building user interfaces, maintained by Facebook."
      },
      {
        question: "What is JSX?",
        answer: "JSX is a syntax extension for JavaScript, used in React to describe what the UI should look like."
      },
      {
        question: "How do you handle state management in React?",
        answer: "State management in React can be handled using built-in hooks like useState and useReducer, or external libraries like Redux."
      },
      {
        question: "What is the use of useEffect in React?",
        answer: "The useEffect hook allows you to perform side effects in function components, such as fetching data or subscribing to events."
      }
    ]
  },
  {
    id: 2,
    title: "Javascript Fundamentals",
    uri: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    numberOfCards: 8,
    flashcards: [
      {
        question: "What is React?",
        answer: "React is a JavaScript library for building user interfaces, maintained by Facebook."
      },
      {
        question: "What is JSX?",
        answer: "JSX is a syntax extension for JavaScript, used in React to describe what the UI should look like."
      },
      {
        question: "How do you handle state management in React?",
        answer: "State management in React can be handled using built-in hooks like useState and useReducer, or external libraries like Redux."
      },
      {
        question: "What is the use of useEffect in React?",
        answer: "The useEffect hook allows you to perform side effects in function components, such as fetching data or subscribing to events."
      }
    ]
  },
]
