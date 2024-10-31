import { useEffect, useState } from "react";
import UseFetch from "./useFetch";

const App = () => {
  const [data] = UseFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div>
      <ul>
        {data.map((d) => (
          <li key={Math.random()}>{d.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default App;
