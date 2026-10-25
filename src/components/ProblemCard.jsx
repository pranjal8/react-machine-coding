import { Link } from "react-router-dom";

export default function ProblemCard({ problem }) {
  const {
    id,
    title,
    description,
    difficulty,
    minutes,
    priority,
    group,
    folder,
    tags,
  } = problem;

  return (
    <article className="card">
      <div className="card-top">
        <div className="card-badges">
          <span
            className={`card-badge card-badge--${difficulty.toLowerCase()}`}
          >
            {difficulty}
          </span>
          {priority && (
            <span className="card-priority">Priority {priority}</span>
          )}
          {group && <span className="card-group">{group}</span>}
        </div>
        <span className="card-time">{minutes} min</span>
      </div>

      <h3 className="card-title">{title}</h3>

      {description && <p className="card-description">{description}</p>}

      <code className="card-folder">{folder}</code>

      {tags.length > 0 && (
        <ul className="card-tags">
          {tags.map((tag) => (
            <li key={tag} className="card-tag">
              {tag}
            </li>
          ))}
        </ul>
      )}

      <Link to={`/problems/${id}`} className="card-link">
        Start problem
      </Link>
    </article>
  );
}
