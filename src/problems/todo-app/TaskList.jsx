import Task from "./Task";

export default function TaskList(props) {
  const { todos, onChange, onDelete } = props;

  return (
    <div>
      <ul style={{ listStyleType: "none", paddingLeft: 0, marginLeft: 0 }}>
        {todos.map((item) => (
          <li key={item.id}>
            <Task todo={item} onChange={onChange} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}
