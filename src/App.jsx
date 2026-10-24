import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProblemPage from "./pages/ProblemPage";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<HomePage theme={theme} onToggleTheme={toggleTheme} />}
        />
        <Route path="/problems/:id" element={<ProblemPage />} />
      </Routes>
    </>
  );
}

export default App;
