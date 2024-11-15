import React, { useState } from 'react'

interface Todo  {
    id: number,
    task: string,
    isCompleted: boolean,
}
const TodoList = () => {
    const [todo, setTodo] = useState<Todo[]>([]);

    const addTodo = (task: string) =>{
        const newTodo : Todo = {
            id: todo.length+1,
            task,
            isCompleted: false
        }

        setTodo((prevTodo) => ([...prevTodo, newTodo]))
    }
  return (
    <div>
        <h2>Todo List</h2>
        <button onClick={() => addTodo("New Todo")}>Add New Todo</button>
        <ul>
            {todo.map((e) => (
                <li key={e.id}>{e.task} {e.isCompleted ? "Completed" : ""}</li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList