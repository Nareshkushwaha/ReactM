import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(100);

  const increment = () => {
    setCounter(counter + 51);
  };

  const decrement = () => {
    if (counter - 12 < 100) {
      alert(" Counter value is above decres 100!");
    }
    setCounter(counter - 12);
  };

  const reset = () => {
    setCounter(100);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Counter Value: {counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
