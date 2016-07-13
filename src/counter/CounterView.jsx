
import React, {Component} from 'react';

export default function({counter, onIncrement}) {
  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}
