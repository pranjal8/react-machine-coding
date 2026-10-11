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

  return (
    <div className="container">
      <div className="topbar">
        <Link to="/" className="back-link">← Back to problems</Link>
      </div>

      <div className="problem-title-row">
        <h1 className="problem-title">{problem.title}</h1>
        <span className="card-badge">{problem.difficulty}</span>
        <span className="card-time">Suggested time: {problem.minutes} min</span>
      </div>

      <div className="problem-layout">
        <section className="solution-panel">
          <h2>Your solution</h2>
          {Solution ? <Solution /> : <p>Not built yet.</p>}
        </section>

        <aside className="requirements">
          <h2>Requirements</h2>
        </aside>
      </div>
    </div>
  );
}

export default ProblemPage;