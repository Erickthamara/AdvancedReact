import { Component, useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);
  const login = () => {
    setUser({ name: "John" });
  };
  const logOut = () => {
    setUser(null);
  };
  return (
    <div>
      <h2>user challenge</h2>
      {!user ? (
        <LoggIn func={login} />
      ) : (
        <LoggOut func={logOut} user={user.name} />
      )}
    </div>
  );
};

const LoggIn = (prop) => {
  return (
    <div>
      <h4>Please Login</h4>
      <button type="button" className="btn" onClick={() => prop.func()}>
        Login
      </button>
    </div>
  );
};
const LoggOut = (prop) => {
  return (
    <div>
      <h4>Hello there {prop.user}</h4>
      <button type="button" className="btn" onClick={() => prop.func()}>
        Logout
      </button>
    </div>
  );
};

export default UserChallenge;
