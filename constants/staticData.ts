import { topicData } from "@/types/topic-data";

export const staticTopicData: topicData[] = [
  {
    id: 0,
    title: "React Fundamentals",
    uri: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
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
      },
      {
        question: "What is a component in React?",
        answer: "A component in React is a reusable piece of UI that can be either a function or a class, used to encapsulate and manage its own state and lifecycle."
      },
      {
        question: "What are props in React?",
        answer: "Props (short for properties) are read-only attributes passed from a parent component to a child component to provide it with data or event handlers."
      },
      {
        question: "What is the virtual DOM in React?",
        answer: "The virtual DOM is a lightweight copy of the actual DOM that React uses to efficiently update and render UI components by comparing changes."
      },
      {
        question: "What is React Router?",
        answer: "React Router is a library for managing navigation and routing in a React application, allowing you to define different views or pages based on the URL."
      },
      {
        question: "What is the difference between functional and class components in React?",
        answer: "Functional components are simpler, use hooks for state and side effects, while class components have a more complex structure with lifecycle methods."
      },
      {
        question: "What is a higher-order component (HOC) in React?",
        answer: "A higher-order component is a function that takes a component and returns a new component with additional props or functionality."
      }
    ]
  },
  {
    id: 1,
    title: "Python",
    uri: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    flashcards: [
      {
        question: "What is a list in Python?",
        answer: "A list is an ordered, mutable collection of items in Python, created using square brackets []."
      },
      {
        question: "How do you create a function in Python?",
        answer: "You create a function in Python using the 'def' keyword, followed by the function name and parentheses."
      },
      {
        question: "What does the 'len()' function do?",
        answer: "The 'len()' function returns the number of items in an object, such as the length of a string or the number of elements in a list."
      },
      {
        question: "What is a dictionary in Python?",
        answer: "A dictionary is an unordered collection of key-value pairs in Python, created using curly braces {} and accessed using keys."
      },
      {
        question: "What is a tuple in Python?",
        answer: "A tuple is an ordered, immutable collection of items in Python, created using parentheses ()."
      },
      {
        question: "How do you handle exceptions in Python?",
        answer: "Exceptions in Python are handled using the 'try' and 'except' blocks, which allow you to catch and handle errors during runtime."
      },
      {
        question: "What is a Python module?",
        answer: "A Python module is a file containing Python code, including functions, classes, and variables, that can be imported and used in other Python scripts."
      },
      {
        question: "What is the difference between 'append()' and 'extend()' methods for lists?",
        answer: "'append()' adds a single item to the end of a list, while 'extend()' adds all items from an iterable to the end of the list."
      },
      {
        question: "How do you read a file in Python?",
        answer: "You read a file in Python using the 'open()' function with the 'r' mode, and then using methods like 'read()', 'readline()', or 'readlines()'."
      },
      {
        question: "What are Python decorators?",
        answer: "Decorators are functions that modify the behavior of other functions or methods. They are applied using the '@' symbol above the function definition."
      }
    ]
  },
  {
    id: 2,
    title: "Javascript Fundamentals",
    uri: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    flashcards: [
      {
        question: "What is a variable in JavaScript?",
        answer: "A variable in JavaScript is a container for storing data values, declared using keywords like 'var', 'let', or 'const'."
      },
      {
        question: "What is a function in JavaScript?",
        answer: "A function in JavaScript is a reusable block of code designed to perform a specific task, defined using the 'function' keyword or as an arrow function."
      },
      {
        question: "What is a closure in JavaScript?",
        answer: "A closure is a function that retains access to its lexical scope even when the function is executed outside that scope."
      },
      {
        question: "What is the difference between '==' and '===' in JavaScript?",
        answer: "'==' performs a loose comparison and can coerce types, while '===' performs a strict comparison and does not coerce types."
      },
      {
        question: "What is a promise in JavaScript?",
        answer: "A promise is an object representing the eventual completion or failure of an asynchronous operation and its resulting value."
      },
      {
        question: "How do you declare a JavaScript object?",
        answer: "You declare a JavaScript object using curly braces {} with key-value pairs, like { key: 'value' }."
      },
      {
        question: "What is event delegation in JavaScript?",
        answer: "Event delegation is a technique where you attach a single event listener to a parent element to handle events from its child elements."
      },
      {
        question: "What is the 'this' keyword in JavaScript?",
        answer: "The 'this' keyword refers to the context in which a function is called, which can vary depending on how the function is invoked."
      },
      {
        question: "What is an IIFE in JavaScript?",
        answer: "An Immediately Invoked Function Expression (IIFE) is a function that runs as soon as it is defined, typically used to create a private scope."
      },
      {
        question: "What is destructuring in JavaScript?",
        answer: "Destructuring is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables."
      }
    ]
  },
]
