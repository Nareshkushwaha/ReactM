import React, { useState } from 'react';

const Count = () => {
    const [count, setCount] = useState(10);

    const increment = () => {
        setCount(count + 1);
    };
     const decrement = () => {
        if (count <= 0) {
            alert("You are Enter mines value ");
        } else {
            setCount(count - 1);
        }
    };

    const reset = () => {
        setCount(10);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px', color:'red',backgroundColor:'yellow'}}>
            <h1>Count: {count}</h1>
            <button onClick={increment} style={{ margin: '5px', padding: '10px' }}>Increment</button>
            <button onClick={decrement} style={{ margin: '5px', padding: '10px' }}>Decrement</button>
            <button onClick={reset} style={{ margin: '5px', padding: '10px' }}>Reset</button>
        </div>
    );
};

export default Count;
