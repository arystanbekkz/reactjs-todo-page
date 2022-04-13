import React, {useState, useEffect} from 'react'
import {TodoForm} from "../components/TodoForm";
import {TodoList} from "../components/TodoList";

export function TodoPage() {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')))

    function handleCreate({text, date}) {
        setTodos([...todos, {text, date}])
         
    }
    todos.length > 0 && localStorage.setItem('todos', JSON.stringify(todos))
    

    function handleRemove(index) {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    return (
        <div style={{backgroundColor: "#E3E9FF", minHeight: "100vh", display: "flex", alignItems: "flex-start", justifyContent: "center"}}>
            <div style={{width: "600px", padding: "30px"}}>
                <TodoForm onCreate={handleCreate} />
                <TodoList todos={todos} onRemove={handleRemove} />
            </div>
        </div>
    )
}