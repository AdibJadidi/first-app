import React, { useState, useContext, useReducer } from "react";

const CounterContext = React.createContext();
const CounterContextDispatcher = React.createContext();
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

const CounterProvider = ({ children }) => {
  console.log({ children });
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={count}>
      <CounterContextDispatcher.Provider value={dispatch}>
        {children}
      </CounterContextDispatcher.Provider>
    </CounterContext.Provider>
  );
};

export default CounterProvider;

export const useCount = () => useContext(CounterContext);
export const useCountActions = () => {
  return useContext(CounterContextDispatcher);

  // const addCountOne = () => {
  //   setCount((prevCount) => prevCount + 1);
  // };
  // const addCountFive = () => {
  //   setCount((prevCount) => prevCount + 5);
  // };

  // return { addCountOne, addCountFive };
};
