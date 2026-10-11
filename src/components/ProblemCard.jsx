import { Link } from "react-router-dom";

export default function ProblemCard({ problem }) {
  const { title, description, difficulty, minutes, folder } = problem;

  return (
    <article className="card">
      <div className="card-top">
        <span className="card-badge">{difficulty}</span>
        <span className="card-time">{minutes} min</span>
      </div>

      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <code className="card-folder">{folder}</code>

      <Link to={`/problems/${problem.id}`} className="card-link">
        Start problem
      </Link>
    </article>
  );
}
