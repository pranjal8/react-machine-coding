import { useState } from "react";

const UpdaterFunction = () => {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending((p) => p + 1);
    await delay(3000, "done");
    setPending((p) => p - 1);
    setCompleted((c) => c + 1);
  }
  return (
    <div>
      <h3>Pending: {pending} </h3>
      <h3>Completed: {completed}</h3>
      <button onClick={handleClick}>Buy</button>
    </div>
  );
};

export default UpdaterFunction;

function delay(ms, value) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(value);
    }, ms),
  );
}
