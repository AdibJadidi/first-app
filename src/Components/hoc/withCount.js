import React, { useState } from "react";

const withCount = (WrappedComponent) => {
  const UpdateComponenet = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
      setCount(count + 1);
    };
    return <WrappedComponent count={count} incrementCount={incrementCount} />;
  };
  return UpdateComponenet;
};

export default withCount;
