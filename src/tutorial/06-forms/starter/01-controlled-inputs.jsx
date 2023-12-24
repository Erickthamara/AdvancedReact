import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const changeName = (e) => {
    //console.log(e.target.value);
    setName(e.target.value);
  };
  const changeEmail = (e) => {
    //console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>Controlled Inputs</h4>
      <div className="form-row"></div>
      <label htmlFor="name" className="form-label">
        name
      </label>
      <input
        type="text"
        id="name"
        className="form-input"
        value={name}
        onChange={changeName}
      />

      <div className="form-row"></div>
      <label htmlFor="email" className="form-label">
        email
      </label>
      <input
        type="text"
        id="email"
        className="form-input"
        value={email}
        onChange={changeEmail}
      />

      <button type="submit" className="btn btn-block">
        submit
      </button>
    </form>
  );
};
export default ControlledInputs;
