import {Button} from "@mui/material";

export function TodoItem({ todo, onRemove }) {
    return (
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px", backgroundColor: "white", padding: "8px", borderRadius: "8px"}}>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "50px"}}>
                <p style={{margin: "0 10px 10px 0"}}>{todo.text}</p>
                <span style={{color: "#797979", fontSize: "12px"}}>Created {todo.date}</span>
            </div>
            <Button size="small" variant="contained" onClick={onRemove}>Delete</Button>
        </div>
    )
}