import { useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState([]);
  const [data, setData] = useState("");

  const add = () => setTodo([...todo, data]);
  const change = (event) => {
    setData(event.target.value.trim());
  };
  return (
    <div>
      <input type="text" value={data} onChange={change} />
      <button onClick={add}>Add</button>
      <ul>
        {todo.map((act) => (
          <li key={Math.random()}>{act}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
