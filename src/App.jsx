import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProblemPage from "./pages/ProblemPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/problems/:id" element={<ProblemPage />} />
      </Routes>
    </>
  );
}

export default App;
