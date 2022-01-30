import React, { useReducer } from "react";

const initialState = {
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { ...state, counter: state.counter + action.value };
    case "decrement":
      return { ...state, counter: state.counter - action.value };
      break;

    default:
      break;
  }
};
const CounterReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>Count is : {count.counter}</h3>
      <button onClick={() => dispatch({ type: "add", value: 1 })}>
        add one
      </button>
      <button onClick={() => dispatch({ type: "add", value: 5 })}>
        add five
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        decrement one
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 4 })}>
        decrement four
      </button>
    </div>
  );
};

export default CounterReducer;
