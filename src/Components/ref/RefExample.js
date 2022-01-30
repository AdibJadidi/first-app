import { useRef, useEffect, useState } from "react";

const RefExample = () => {
  const [name, setname] = useState("");

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setname({ name: e.target.value });
    console.log(name);
  };
  const resetHandler = () => {
    inputRef.current.value = "";
  };
  return (
    <div>
      <input type="text" ref={inputRef} onChange={changeHandler} />
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default RefExample;
