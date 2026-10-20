import { useState } from "react";

export default function Task(props) {
  const { todo, onDelete, onChange } = props;

  const [isEditing, setIsEditing] = useState(false);

  function handleSave() {
    setIsEditing(false);
  }

  function handleCancel() {
    setIsEditing(false);
  }

  let todoContent;

  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={(e) => {
            onChange({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}> Cancel</button>
      </>
    );
  } else {
    todoContent = (
      <>
        <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
          {todo.title}
        </span>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "4px",
        padding: "4px",
      }}
    >
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={(e) => {
            onChange({
              ...todo,
              done: e.target.checked,
            });
          }}
        />
      </label>
      {todoContent}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
}
