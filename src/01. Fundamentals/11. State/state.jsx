import { useState } from "react";
import Counter from "./Exercise/Counter";
import TodoList from "./Exercise/TodoList";
import ShoppingList from "./Exercise/ShoppingList";
import Profile from "./Exercise/Profile";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const increment = () => setCount(count + 1);
//   const decrement = () => setCount(count - 1);
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//     </div>
//   );
// };

const App = () => {
  return (
    <div>
      <Counter/>
      <TodoList/>
      <ShoppingList />
      <Profile />
    </div>
  );
};

export default App;
