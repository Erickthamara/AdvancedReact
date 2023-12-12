import { useState } from "react";

const ToggleChallenge = () => {
  const [value, setValue] = useState(true);
  const changeState = () => {
    value ? setValue(false) : setValue(true);
  };

  return (
    <div>
      <button className="btn" type="button" onClick={changeState}>
        CLICK ME
      </button>
      {value ? <FirstComponent /> : <SecondComponent />}
    </div>
  );
};

const FirstComponent = () => (
  <h2 style={{ marginTop: "3rem" }}>First Component</h2>
);
const SecondComponent = () => (
  <h2 style={{ marginTop: "3rem" }}>Second Component</h2>
);

export default ToggleChallenge;
