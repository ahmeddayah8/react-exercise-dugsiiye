import { useReducer, useState } from "react";

const initialState = []

const reducer = (state, action) => {
    switch (action.type) {
        case "Add" : 
        return [...state, action.payload]
        case "toggle" :
            return state.map((todo) => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo);
        case "delete" :
            return state.filter((todo) => todo.id !== action.payload)

    }
}

function TodoApp () {

    const [state, dispatch] = useReducer(reducer, initialState)

    const [text, setText] = useState('')

    const handleAdd = () => {
        if(text.trim('')) {
            const newTodo = {
                id: Date.now(),
                text,
                completed: false
            }

            dispatch({type: "Add", payload: newTodo})
            setText('')
        }
    }

    return (
        <div>
            <h1>ToDo List</h1>
            <input type="text"
            value={text}
            placeholder="Enter your Task"
            onChange={(e) => setText(e.target.value)} />
            <button onClick={handleAdd}>Add</button>

            <ul>
                {
                    state.map(todo => (
                        <li key={todo.id}>
                            <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
                             onClick={() => dispatch({type: "toggle", payload: todo.id})}>
                                {todo.text}</span>
                            <button onClick={()=> dispatch({type: "delete", payload: todo.id})}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoApp