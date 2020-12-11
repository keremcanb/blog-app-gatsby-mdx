import React, { useState } from 'react';
import { CounterWrapper } from './styles';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <CounterWrapper>
      <h1>counter</h1>
      <span id="value">{count}</span>

      <div className="btn-container">
        <button className="btn dec-btn" onClick={() => setCount(count - 1)}>
          decrease
        </button>

        <button className="btn reset-btn" onClick={() => setCount(0)}>
          reset
        </button>

        <button className="btn inc-btn" onClick={() => setCount(count + 1)}>
          increase
        </button>
      </div>
    </CounterWrapper>
  );
};

export default Counter;
