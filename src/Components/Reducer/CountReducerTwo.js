import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return initialState;
      break;
    default:
      break;
  }
};
const CounterReducerTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>Count is : {count}</h3>
      <button onClick={() => dispatch({ type: "add", value: 1 })}>
        add one
      </button>
      <button onClick={() => dispatch({ type: "add", value: 5 })}>
        add five
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        decrement one
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>
        decrement four
      </button>
      <h3>CountTwo is : {countTwo}</h3>
      <button onClick={() => dispatchTwo({ type: "add", value: 1 })}>
        add one
      </button>
      <button onClick={() => dispatchTwo({ type: "add", value: 5 })}>
        add five
      </button>
      <button onClick={() => dispatchTwo({ type: "decrement", value: 1 })}>
        decrement one
      </button>
      <button onClick={() => dispatchTwo({ type: "reset" })}>
        decrement four
      </button>
    </div>
  );
};

export default CounterReducerTwo;
