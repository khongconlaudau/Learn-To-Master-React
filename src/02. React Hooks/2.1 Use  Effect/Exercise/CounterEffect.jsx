import { useEffect, useState } from "react";

const CounterEffect = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("call useEffect");
    document.title = `Increasement ${value}`;
  }, [value]);
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>+</button>
    </div>
  );
};

export default CounterEffect;
