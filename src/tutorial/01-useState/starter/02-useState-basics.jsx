import { useState } from "react";

const data = [
  { id: 1, name: "john" },
  { id: 2, name: "peter" },
  { id: 3, name: "susan" },
  { id: 4, name: "anna" },
];

const UseStateBasics = () => {
  const [people, setPerson] = useState(data);
  const clearAll = () => {
    setPerson([]);
  };
  const deleteOnePerson = (passedID) => {
    // console.log(passedID);
    const newList = people.filter((person) => {
      return passedID != person.id;
    });
    //console.log(newList);
    setPerson(newList);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        console.log(name);
        return (
          <div key={id}>
            <h3>{name}</h3>
            <button
              type="button"
              className="btn"
              onClick={() => deleteOnePerson(id)}
            >
              DELETE
            </button>
          </div>
        );
      })}
      <div>
        <button
          className="btn"
          type="button"
          style={{ marginTop: "2rem" }}
          onClick={clearAll}
        >
          CLEAR ALL
        </button>
      </div>
    </>
  );
};

export default UseStateBasics;
