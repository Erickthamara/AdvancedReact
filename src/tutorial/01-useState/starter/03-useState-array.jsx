import { data } from "../../../data.js";
import { useState } from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeAllPeople = () => {
    setPeople([]);
  };
  const removeOnePerson = (id) => {
    console.log(id);
    const newList = people.filter((people) => {
      return people.id !== id;
    });
    setPeople(newList);
  };

  return (
    <>
      <h1>useState array example</h1>
      <div>
        {people.map((person) => {
          const { name, id } = person;
          return (
            <div key={id}>
              <h3>{name}</h3>
              <button
                type="button"
                className="btn"
                onClick={() => removeOnePerson(id)}
              >
                DELETE
              </button>
            </div>
          );
        })}
      </div>
      <button
        type="button"
        style={{ marginTop: "2rem" }}
        className="btn"
        onClick={removeAllPeople}
      >
        Clear All ITEMS
      </button>
    </>
  );
};

export default UseStateArray;
