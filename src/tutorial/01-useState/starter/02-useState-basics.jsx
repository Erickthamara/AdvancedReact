import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h2>The number is {count}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        CLICK ME
      </button>
    </>
  );
};

export default UseStateBasics;
