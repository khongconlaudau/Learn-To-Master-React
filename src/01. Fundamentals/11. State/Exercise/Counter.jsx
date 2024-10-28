import { useState } from "react"

const Counter = () =>{
    const [count, setCount] = useState(0);

    const increase = () => setCount(count + 1)
    return <div>
        <h1>{count}</h1>
        <button onClick={increase}>+</button>
    </div>
}

export default Counter;