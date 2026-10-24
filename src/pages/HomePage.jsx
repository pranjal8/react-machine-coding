import { problems } from "../data/problems";
import ProblemCard from "../components/ProblemCard";
import { Sun, Moon } from "lucide-react";

const HomePage = ({ onToggleTheme, theme }) => {
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
          Switch to {theme === "light" ? "dark" : "light"} mode
        </button>
      </header>

      <main>
        <div className="section-head">
          <h2 className="section-title">Practice problems</h2>
          <span className="section-count">{problems.length} problems</span>
        </div>

        <div className="grid">
          {problems.map((item) => (
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
      </main>
    </div>
  );
};

export default HomePage;
