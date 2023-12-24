import { useState } from "react";
import { data } from "../../../data";
import { useEffect } from "react";

const UserChallenge = () => {
  const [newname, setNewName] = useState("");
  const [people, setPeople] = useState(data);
  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newname) {
      alert("Enter a value");
      return;
    }
    const fakeId = Date.now();
    const newList = [...people, { id: fakeId, name: newname }];
    setPeople(newList);
    setNewName("");
  };
  const deleteName = (id) => {
    const deletedList = people.filter((person) => person.id !== id);
    setPeople(deletedList);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={newname}
            onChange={handleNameChange}
          />
        </div>

        <button type="submit" className="btn btn-block" onSubmit={handleSubmit}>
          submit
        </button>
      </form>
      <h3>People Data</h3>

      {people.map((person) => {
        const personName = person.name;
        console.log("I work");
        return (
          <div key={person.id}>
            <h4>{personName}</h4>
            <button className="btn" onClick={() => deleteName(person.id)}>
              DELETE
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
