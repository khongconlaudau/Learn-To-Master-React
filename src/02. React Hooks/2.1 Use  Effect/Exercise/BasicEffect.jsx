import { useEffect, useState } from "react"

const BasicEffect = () => {
    const [value, setValue] = useState(0);
    useEffect(() =>{
        console.log("call useEffect");
    },[])
    return <div>
        <h1>{value}</h1>
        <button onClick={() => setValue(value +1)}>+</button>
    </div>
}

export default BasicEffect