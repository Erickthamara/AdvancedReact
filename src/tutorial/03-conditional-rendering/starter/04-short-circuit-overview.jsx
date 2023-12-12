import { useState } from "react";

const ShortCircuitOverview = () => {
  const [value1, setValue1] = useState("Hello");
  const [value2, setValue2] = useState("");

  return (
    <div>
      <h2>And EG : {`Hello world` && value2}</h2>
      <h2>And EG2: {value1 && `Hello world`}</h2>
      <h2>OR EG : {`Hello world` || value2}</h2>
      <h2>OR EG2: {value1 || `Hello world`}</h2>
    </div>
  );
};
export default ShortCircuitOverview;
