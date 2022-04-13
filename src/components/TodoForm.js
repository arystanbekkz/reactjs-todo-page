import {Button, TextField} from "@mui/material";
import {useState} from "react";


export function TodoForm({ onCreate }) {
    const [text, setText] = useState('')
    
    function formatTwoDigits(number) {
        if (number < 10) {
            return '0' + number
        }
        return number
    }

    function formatDate(date) {
        return `${date.toLocaleDateString()} ${formatTwoDigits(date.getHours())}:${formatTwoDigits(date.getMinutes())}`
    }

    function handleSubmit(e) {
        e.preventDefault();
        const date = formatDate(new Date());
        text && onCreate({text, date: date});
        setText('');
    }

    return (
        <form onSubmit={handleSubmit} style={{display: "flex", justifyContent: "space-between", padding: "8px"}}>
            <TextField label="Name" value={text} onChange={(e) => setText(e.target.value)} size="small" style={{width: "85%"}} />
            <Button type="submit" variant="contained" size="small">Create</Button>
        </form>
    )
}
