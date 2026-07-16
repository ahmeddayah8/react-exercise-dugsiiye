import { useState } from "react";

function Fruits () {

    const [items, setItems] = useState (["apple", "banana", "milka"])

    const addItem = () => {
        setItems ([...items, "orange"])
    }
    return (
        <>
            <h1>Arrays</h1>
        <ul>
            {
                items.map(items => (
                    <li>{items}</li>
                ))
            }
        </ul>

        <button onClick={addItem}>Add orange</button>
        
        </>
    )
}

export default Fruits