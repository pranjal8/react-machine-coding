import { useReducer, useState } from "react";

function TodoApp() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  

  function handleAdd() {
    const text = input.trim();
    if (!text) return;

    setList((prevList) => [
      ...prevList,
      { id: Date.now(), inputText: text, completed: false },
    ]);

    setInput("");
  }

  function handleToggle(id) {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  }

  function handleEdit(item) {

  }

  function handleDelete(id) {
    const filteredList = (prevList) =>
      prevList.filter((item) => item.id !== id);

    setList(filteredList);
  }

  return (
    <div>
      <h3>Todo App</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />{" "}
      <button onClick={handleAdd}>Add</button>
      <div>
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleToggle(item.id)}
              />
              <span
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                }}
              >
                {item.inputText}
              </span>
              <button onClick={() => handleEdit(item)}>Edit</button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
