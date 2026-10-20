import { useState } from "react";

export default function AddTodo(props) {
  const { onAdd } = props;
  const [input, setInput] = useState("");

  function handleAdd() {
    const trimmed = input.trim();
    if (!trimmed) return;

    onAdd(trimmed);
    setInput("");
  }
  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />{" "}
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
