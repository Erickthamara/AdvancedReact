import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <div>{user && <MyComponent object={user.name} />}</div>
    </div>
  );
};

export default ShortCircuitExamples;

const MyComponent = (prop) => {
  console.log(prop);
  const { name } = prop;
  console.log(name);
  return <h2>{`The name is ${prop.object}`}</h2>;
};
