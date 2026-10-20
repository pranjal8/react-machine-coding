import { useState } from "react";
import AddTodo from "./AddTodo";
import TaskList from "./TaskList";

const initialTodos = [
  { id: 1, title: "Buy milk", done: true },
  { id: 2, title: "Eat tacos", done: false },
  { id: 3, title: "Brew tea", done: false },
];

export default function TodoTask() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        title: title,
        done: false,
      },
    ]);

    //approach 2
    /*   setTodos((prev) => [
          ...prev,
          { id: crypto.randomUUID(), title, done: false },
        ]); 
    */
  }

  function handleChangeTodo(nextTodo) {
    /* 
      //edit and toggle
      map builds a new array. For each item, if the id matches it swaps in nextTodo, 
      otherwise it keeps the old one. The child already built the whole new todo, 
      so the parent doesn’t care which field changed.
    */

    setTodos((prev) =>
      prev.map((item) => (item.id === nextTodo.id ? nextTodo : item)),
    );
  }

  function handleDeleteTodo(todoId) {
    const deletedTodo = todos.filter((item) => item.id !== todoId);
    setTodos(deletedTodo);

    //approach 2
    // setTodos((prev) => prev.filter((item) => item.id !== todoId));
  }

  return (
    <div>
      <AddTodo onAdd={handleAddTodo} />

      <TaskList
        todos={todos}
        onChange={handleChangeTodo}
        onDelete={handleDeleteTodo}
      />
    </div>
  );
}
