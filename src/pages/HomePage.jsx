import { problems } from "../data/problems";
import ProblemCard from "../components/ProblemCard";

const HomePage = () => {
  return (
    <div className="container">
      <header className="site-header">
        <div>
          <h1 className="site-title">React Machine Coding</h1>
          <p className="site-subtitle">
            Build small, interview-style problems. One folder per problem.
          </p>
        </div>

        <button type="button" className="theme-btn">
          Switch to dark mode
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
