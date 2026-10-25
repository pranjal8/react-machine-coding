import { problems } from "../data/problems";
import ProblemCard from "../components/ProblemCard";
import { Sun, Moon } from "lucide-react";
import { useState } from "react";

const groups = ["All", ...new Set(problems.map((p) => p.group))];
console.log(groups);
const HomePage = ({ onToggleTheme, theme }) => {
  const [input, setInput] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [group, setGroup] = useState("All");

  const query = input.trim().toLowerCase();

  const filteredProblems = problems
    .filter((item) => {
      return group === "All" || item.group === group;
    })
    .filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.tags?.some((tag) => tag.toLowerCase().includes(query)),
    )
    .sort((a, b) => {
      return sortOrder === "asc"
        ? a.priority - b.priority
        : b.priority - a.priority;
    });

  return (
    <div className="container">
      <header className="site-header">
        <div>
          <h1 className="site-title">React Machine Coding</h1>
          <p className="site-subtitle">
            Build small, interview-style problems. One folder per problem.
          </p>
        </div>

        <button type="button" className="theme-btn" onClick={onToggleTheme}>
          {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
        </button>
      </header>

      <main>
        <div className="section-head">
          <h2 className="section-title">Practice problems</h2>
          <input
            className="search-input"
            placeholder="Search by name or tag"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <span className="section-count">
            {filteredProblems.length} of {problems.length} problems
          </span>
        </div>

        <div className="controls">
          <div className="chips">
            {groups.map((item) => (
              <button
                key={item}
                type="button"
                className={`chip ${item === group ? "chip--active" : ""}`}
                onClick={() => setGroup(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc"> Priority: 1 to 41 </option>
            <option value="desc"> Priority: 41 to 1 </option>
          </select>
        </div>

        <div className="grid">
          {filteredProblems.map((item) => (
            /* 
            <ProblemCard
              key={item.id}
              title={item.title}
              description={item.description}
              difficulty={item.difficulty}
              minutes={item.minutes}
              folder={item.folder}
            />
          */

            //OR
            /* <ProblemCard key={item.id} {...item} /> */

            //OR
            <ProblemCard key={item.id} problem={item} />
          ))}
        </div>

        {filteredProblems.length === 0 && <p> No Problems match "{input}"</p>}
      </main>
    </div>
  );
};

export default HomePage;
