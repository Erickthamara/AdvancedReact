import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(1);
  const incrementCount = () => {
    //setCount(count + 1);
    setCount((currentState) => {
      return currentState + 1;
    });
    console.log(count);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button type="button" className="btn" onClick={incrementCount}>
        INCREMENT
      </button>
    </div>
  );
};

export default UseStateGotcha;
