import { useState } from "react";

const initialCounters = [0, 0, 0];

const ReplacingItemInArray = () => {
  const [counters, setCounters] = useState(initialCounters);

  const handleIncrementClick = (index) => {
    const nextCounter = counters.map((item, idx) => {
      if (index === idx) {
        return item + 1;
      } else {
        return item;
      }
    });

    setCounters(nextCounter);
  };

  return (
    <div>
      <ul>
        {counters.map((counter, index) => (
          <li key={index}>
            {counter}
            <button
              onClick={() => {
                handleIncrementClick(index);
              }}
            >
              +1
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReplacingItemInArray;
