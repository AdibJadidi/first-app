import React, { useState, useEffect } from "react";
const FunctionalTimer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("hi adib");
      setCount(count + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return <div>Functional Timer</div>;
};

export default FunctionalTimer;
