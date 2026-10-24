import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { problems } from "../data/problems";
import { solutions } from "../problems";

function ProblemPage() {
  const { id } = useParams();
  const problem = problems.find((p) => p.id === id);
  const Solution = solutions[id];

  if (!problem) {
    return (
      <div className="container">
        <p>Problem not found.</p>
        <Link to="/">← Back to problems</Link>
      </div>
    );
  }

  const { requirements = [], breakdown = [], hints = [] } = problem;

  return (
    <div className="container">
      <div className="topbar">
        <Link to="/" className="back-link">
          ← Back to problems
        </Link>
      </div>

      <div className="problem-title-row">
        <h1 className="problem-title">{problem.title}</h1>

        <span
          className={`card-badge card-badge--${problem.difficulty.toLowerCase()}`}
        >
          {problem.difficulty}
        </span>
        <span className="card-time">Suggested time: {problem.minutes} min</span>
      </div>

      <div className="problem-layout">
        <section className="solution-panel">
          <h2>Your solution</h2>
          {Solution ? <Solution /> : <p>Not built yet.</p>}
        </section>

        <aside className="requirements">
          <h2>Requirements</h2>
          <p className="problem-description">{problem.description}</p>

          {requirements.length > 0 ? (
            <ul>
              {requirements.map((req) => (
                <li key={req}>{req}</li>
              ))}
            </ul>
          ) : (
            <p>Coming soon.</p>
          )}

          {breakdown.length > 0 && (
            <Breakdown key={`b-${id}`} steps={breakdown} />
          )}
          {hints.length > 0 && <Hints key={`h-${id}`} hints={hints} />}
        </aside>
      </div>
    </div>
  );
}

function Breakdown({ steps }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="hints">
      <h2>Breakdown</h2>
      {open && (
        <ol>
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      )}
      <button className="hint-btn" onClick={() => setOpen(!open)}>
        {open ? "Hide breakdown" : "Show breakdown"}
      </button>
    </div>
  );
}

function Hints({ hints }) {
  const [shown, setShown] = useState(0);

  return (
    <div className="hints">
      <h2>Hint</h2>
      {shown > 0 && (
        <ol>
          {hints.slice(0, shown).map((hint) => (
            <li key={hint}>{hint}</li>
          ))}
        </ol>
      )}
      {shown < hints.length && (
        <button className="hint-btn" onClick={() => setShown(shown + 1)}>
          {shown === 0 ? "Show hint" : "Show next hint"}
        </button>
      )}
    </div>
  );
}

export default ProblemPage;
