import {TodoItem} from "./TodoItem";

export function TodoList({todos, onRemove}) {
    let data = JSON.parse(localStorage.getItem('todos'));
    
    return (
        <div style={{margin: "40px 0"}}>
            {data.map((todo, index) => (
                <TodoItem key={index} todo={todo} onRemove={() => {
                        onRemove(index);
                    }
                } />
            ))}   
        </div>
    )
}