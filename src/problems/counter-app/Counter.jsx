import { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div className="counter">
      <p className="counter-value"> {count}</p>

      <div className="counter-actions">
        <button onClick={() => setCount((prev) => Math.max(0, prev - step))}>
          -
        </button>

        <button onClick={() => setCount(0)}>Reset</button>

        <button onClick={() => setCount((prev) => prev + step)}>+</button>
      </div>

      <label className="counter-step">
        Step
        <input
          type="number"
          min="1"
          value={step}
          onChange={(e) => setStep(Number(e.target.value) || 1)}
        />
      </label>
    </div>
  );
};

export default Counter;
