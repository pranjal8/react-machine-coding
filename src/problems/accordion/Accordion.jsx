import { useState } from "react";
import "./accordion.css";

const QUESTIONS = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "A JavaScript library for building user interfaces out of reusable components.",
  },
  {
    id: 2,
    question: "What is state?",
    answer:
      "Data that a component owns and can change over time. When it changes, React re-renders the component.",
  },
  {
    id: 3,
    question: "What are props?",
    answer:
      "Inputs passed from a parent to a child component. They are read-only inside the child.",
  },
  {
    id: 4,
    question: "What is the virtual DOM?",
    answer:
      "A lightweight copy of the UI that React compares with the previous version, so it only updates the parts of the real DOM that changed.",
  },
  {
    id: 5,
    question: "Why do list items need a key?",
    answer:
      "Keys let React tell items apart between renders, so it updates, moves, or removes the right one instead of rebuilding the whole list.",
  },
  {
    id: 6,
    question: "What is lifting state up?",
    answer:
      "Moving state to the closest common parent of the components that need it, then passing the value down as props and the update function down as a callback. This keeps sibling components in sync because they all read from the same source of truth.",
  },
];

const Accordion = () => {
  const [openIds, setOpenIds] = useState([QUESTIONS[0].id]);
  const [mode, setMode] = useState("single");

  function handleToggle(itemId) {
    setOpenIds((prev) => {
      if (prev.includes(itemId)) return prev.filter((id) => id !== itemId);
      return mode === "single" ? [itemId] : [...prev, itemId];
    });
  }

  function changeMode(nextMode) {
    if (nextMode === mode) return;
    setMode(nextMode);
    setOpenIds([]);
  }

  return (
    <div>
      <div>
        <h2>FAQ</h2>
        <p>Mode: {mode}-open</p>
      </div>

      <div className="buttons">
        <button
          type="button"
          className={mode === "single" ? "active" : ""}
          onClick={() => changeMode("single")}
        >
          Single Open
        </button>
        <button
          type="button"
          className={mode === "multiple" ? "active" : ""}
          onClick={() => changeMode("multiple")}
        >
          Multi Open
        </button>
      </div>

      <QuestionList
        questions={QUESTIONS}
        openIds={openIds}
        onToggle={handleToggle}
      />
    </div>
  );
};

export default Accordion;

function QuestionList({ questions, openIds, onToggle }) {
  return (
    <section>
      {questions.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openIds.includes(item.id)}
          onToggle={() => onToggle(item.id)}
        />
      ))}
    </section>
  );
}

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="accordion-item">
      <div className="accordion-header">
        <h3>{item.question}</h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Collapse" : "Expand"}
        >
          {isOpen ? "↑" : "↓"}
        </button>
      </div>

      {isOpen && <p>{item.answer}</p>}
    </div>
  );
}
