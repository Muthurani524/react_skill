import { useState } from "react";
import "./App.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);

  return (
    <div className="counter-container">
      <h2>Count: {count}</h2>
      <button className="button" onClick={handleIncrement}>
        Increment
      </button>
      <button className="button" onClick={() => setCount(0)}>
        Reset
      </button>
      <button className="button" onClick={() => setCount(count - 1)} >Decrement</button>
    </div>
  );
}
