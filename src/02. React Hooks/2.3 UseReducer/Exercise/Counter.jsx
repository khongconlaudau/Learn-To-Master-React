import { useReducer, useState } from "react";

const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "incrementByValue":
      return { count: state.count + action.payload };
    case "decrementByValue":
      return { count: state.count - action.payload };
    default:
      return state;
  }
};
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState(0);
  const handledIncrement = () => {
    dispatch({ type: "incrementByValue", payload: +inputValue });
    setInputValue(0);
  };
  const handledDecrement = () => {
    dispatch({ type: "incrementByValue", payload: -inputValue });
    setInputValue(0);
  };
  return (
    <div>
      <h1>{state.count}</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={handledIncrement}>Increment By Value</button>
      <button onClick={handledDecrement}>Decrement By Value</button>
    </div>
  );
};

export default Counter;
