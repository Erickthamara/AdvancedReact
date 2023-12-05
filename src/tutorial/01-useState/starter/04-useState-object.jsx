import { useState } from "react";

const person1 = { name: "John", age: 25, hobby: "Swimming" };
const person2 = { name: "Mitchelle", age: 20, hobby: "Dancing" };

const UseStateObject = () => {
  console.log(`${person1}`);
  console.log(person1);
  const [person, setPerson] = useState(person1);
  const changePerson = () => {
    setPerson(person2);
  };
  console.log(`Data is ${JSON.stringify(person)}`);
  const { name, age, hobby } = person;
  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{hobby}</h2>
      <button type="button" className="btn" onClick={changePerson}>
        CHANGE PERSON
      </button>
    </div>
  );
};

export default UseStateObject;
