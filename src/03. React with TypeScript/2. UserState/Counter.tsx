import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState<number>(0)
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  )
}

export default Counter