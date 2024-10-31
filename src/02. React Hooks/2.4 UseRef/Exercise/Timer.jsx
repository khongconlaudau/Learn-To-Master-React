import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((preCount) => preCount +1 );
    }, 1000);

    // clean up function
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => clearInterval(intervalRef.current)}>Stop Timer</button>
    </div>
  );
};

export default Timer;
