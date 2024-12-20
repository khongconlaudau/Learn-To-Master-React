import React, { useContext } from 'react'
import { MyContext } from './Context'
const Counter : React.FC = () => {
    const {count, increment, decrement} = useContext(MyContext)
  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter