import { useEffect, useRef, useState } from "react";

const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  const refContainer = useRef(null);
  const notFirst = useRef(false);
  // console.log(refContainer);

  useEffect(() => {
    if (!notFirst.current) {
      notFirst.current = true;
      return;
    }
    console.log("Not first");
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const info = refContainer.current.value;
    console.log(info);
  };
  // useEffect(() => {
  //   console.log(refContainer);
  // }, []);

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            ref={refContainer}
            className="form-input"
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        increase
      </button>
    </div>
  );
};

export default UseRefBasics;
