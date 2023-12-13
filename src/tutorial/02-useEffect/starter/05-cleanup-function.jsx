import { useEffect } from "react";
import { useState } from "react";

const CleanupFunction = () => {
  const [name, setName] = useState("");
  const toggleName = () => {
    name ? setName("") : setName("Ricko");
  };

  return (
    <div>
      <h1>Cleanup Function</h1>
      <button type="button" className="btn" onClick={toggleName}>
        TOGGLE
      </button>
      {!name ? <h2>{`What is your name?`}</h2> : <DisplayName name={name} />}
    </div>
  );
};

const DisplayName = (props) => {
  const { name } = props;
  useEffect(() => {
    console.log("Display name has run for the firts time");
    /*  const id = setInterval(() => {
      console.log("Hello Interval");
    }, 1000); */
    const someFunc = () => {
      //some function
    };
    window.addEventListener("scroll", someFunc);
    return () => {
      window.removeEventListener("scroll", someFunc);
    };
  }, []);

  return <h2>My name is: {name}</h2>;
};

export default CleanupFunction;
