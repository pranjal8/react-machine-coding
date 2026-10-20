export const problems = [
  {
    id: "counter-app",
    title: "Counter",
    difficulty: "Easy",
    minutes: 30,
    description:
      `Implement increment, decrement, reset, and a configurable step value. \nTests: useState, event handling, controlled inputs.`,
    folder: "src/problems/counter-app",
  },
  {
    id: "todo-app",
    title: "Todo App",
    difficulty: "Easy",
    minutes: 30,
    description:
      `Add, delete, edit, complete, and filter tasks. Persist tasks in localStorage. \nTests: arrays in state, CRUD, immutable updates, persistence.`,
    folder: "src/problems/todo-app",
  },
  {
    id: "search-filter-sort",
    title: "Search Filter Sort",
    difficulty: "Easy",
    minutes: 30,
    description:
      `Display a list of products with text search, category filters, and price sorting. \nTests: derived state, array methods, controlled inputs.`,
    folder: "src/problems/todo-app",
  },
  {
    id: "accordion",
    title: "Accordion",
    difficulty: "Easy",
    minutes: 30,
    description:
      `Expand and collapse sections. Support single-open and multiple-open modes.\nTests: conditional rendering, component state, props.`,
    folder: "src/problems/accordion",
  },
  {
    id: "modal",
    title: "Modal",
    difficulty: "Medium",
    minutes: 60,
    description:
      `Open and close a modal, handle Escape, backdrop clicks, and confirmation actions. \nTests: reusable components, events, cleanup, accessibility.`,
    folder: "src/problems/modal",
  },
  {
    id: "star-rating",
    title: "Star Rating",
    difficulty: "Easy",
    minutes: 25,
    description:
      `Hover and click to rate, with a configurable number of stars. \nTests: state, mouse events, reusable UI.`,
    folder: "src/problems/star-rating",
  },
  {
    id: "clock",
    title: "Clock",
    difficulty: "Easy",
    minutes: 30,
    description: "",
    folder: "src/problems/clock",
  },
  {
    id: "autocomplete",
    title: "Autocomplete",
    difficulty: "Medium",
    minutes: 45,
    description: `Show suggestions while typing. 
      Debounce API requests.
      Support keyboard navigation and selection. 
      Handle loading, errors, and no results. 
      \n Tests: useEffect, debounce, asynchronous requests.`,
    folder: "src/problems/autocomplete",
  },
  {
    id: "multi-step-form",
    title: "Multi Step Form",
    difficulty: "Easy",
    minutes: 30,
    description:
      `Create a three-step form with validation, Previous/Next buttons, and a final review screen. \nTests: form state, validation, navigation, data persistence.`,
    folder: "src/problems/multi-step-form",
  },
  {
    id: "tic-tac-toe",
    title: "Tic Tac Toe",
    difficulty: "Medium",
    minutes: 45,
    description: "Two players, win detection, reset and move history.",
    folder: "src/problems/tic-tac-toe",
  },
  {
    id: "infinite-scroll",
    title: "Infinite Scroll",
    difficulty: "Medium",
    minutes: 60,
    description: "Load more items as the user nears the bottom of the list.",
    folder: "src/problems/infinite-scroll",
  },
];
