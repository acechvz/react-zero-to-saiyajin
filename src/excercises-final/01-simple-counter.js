// FINAL: class component vs functional component
import React, { useEffect, useState } from "react";

const updateTitle = (count) => {
  document.title = `Count ${count}`;
};

const Counter = ({ max = 15, step = 1 }) => {
  const [count, setCount] = useState(0);

  const increment = () =>
    setCount((c) => {
      if (c >= max) return c;
      return c + step;
    });
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  useEffect(() => {
    updateTitle(count);
  }, [count]);

  useEffect(() => {
    const id = setInterval(() => {
      console.log(`Count: ${count}`);
    }, 3000);

    return () => clearInterval(id);
  }, [count]);

  return (
    <div className="counter">
      <div className="counter-count">
        <img src="../../scouter.jpg" alt="" />
        <span>{count * 100}</span>
      </div>
      <div className="counter-actions">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
