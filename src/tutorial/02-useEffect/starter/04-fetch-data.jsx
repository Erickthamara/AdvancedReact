import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const peopleData = async () => {
      try {
        const data = await fetch(url);
        const people = await data.json();
        setUsers(people);
      } catch (error) {
        console.error(`You have this error: ${error}`);
      }
    };
    peopleData();
  }, []);
  //console.log(`This is the data ${users}`);

  return (
    <div>
      <h2>{}</h2>
      {users.map((oneUser) => {
        const { login, url, avatar_url, id } = oneUser;
        return (
          <div key={id}>
            <img src={avatar_url} alt="" />
            <h2>{login}</h2>
            <a href={url}>Profile</a>
          </div>
        );
      })}
    </div>
  );
};
export default FetchData;
