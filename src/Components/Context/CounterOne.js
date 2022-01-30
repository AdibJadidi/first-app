import React, { useContext } from "react";
import { useCount, useCountActions } from "./CounterProvider";

const CounterOne = () => {
  const count = useCount();
  const dispatch = useCountActions();

  return (
    <div>
      <p>Count is : {count}</p>
      <button onClick={() => dispatch({ type: "add", value: 1 })}>
        add One
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        decrement
      </button>
    </div>
  );
};

export default CounterOne;
