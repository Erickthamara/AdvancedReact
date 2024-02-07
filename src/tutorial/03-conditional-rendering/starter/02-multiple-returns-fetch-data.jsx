import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rawData = await fetch(url);
        if (!rawData.ok) {
          setisError(true);
          setIsLoading(false);
          return;
        }
        const data = await rawData.json();
        console.log(data);
        setUser(data);
      } catch (error) {
        setisError(true);
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an err...</h2>;
  }
  const { name, avatar_url, bio } = user;
  return (
    <div>
      <h2>Fetch Data</h2>

      <h2>{name}</h2>
      <img
        src={avatar_url}
        alt={`Picture of ${name}`}
        style={{ width: "150px", borderRadius: "5px" }}
      />
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
