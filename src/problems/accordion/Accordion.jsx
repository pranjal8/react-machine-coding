import { useState } from "react";
import "./accordion.css";

const QUESTIONS = [
  { id: 1, question: "What is React?", answer: "A library for building UIs." },
  { id: 2, question: "What is state?", answer: "Data a component owns." },
];

const Accordion = () => {
  const [openId, setOpenId] = useState(QUESTIONS[0].id);
  const [mode, setMode] = useState("single");

  function handleToggle(itemId) {
    setOpenId((prev) => (prev === itemId ? null : itemId));
  }

  function handleSingleOpen() {
    setMode("single");
    setOpenId(null);
  }
  function handleMultiOpen() {
    setMode("multiple");
    setOpenId(null);
  }

  return (
    <div>
      <div>
        <h2>FAQ</h2>
        <p>Mode: {mode}-open</p>
      </div>

      <div className="buttons">
        <button
          className={mode === "single" ? "active" : ""}
          onClick={handleSingleOpen}
        >
          Single Open
        </button>
        <button
          className={mode === "multiple" ? "active" : ""}
          onClick={handleMultiOpen}
        >
          Multi Open
        </button>
      </div>
      <QuestionList
        questions={QUESTIONS}
        openId={openId}
        onToggle={handleToggle}
      />
    </div>
  );
};

export default Accordion;

function QuestionList({ questions, openId, onToggle }) {
  return (
    <>
      <section>
        {questions.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={() => onToggle(item.id)}
          />
        ))}
      </section>
    </>
  );
}

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="accordion-item">
      <div className="accordion-header">
        {" "}
        <h3> {item.question}</h3>
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Collapse" : "Expand"}
        >
          {" "}
          {isOpen ? "↑" : "↓"}
        </button>{" "}
      </div>

      {isOpen && <p>{item.answer}</p>}
    </div>
  );
}
