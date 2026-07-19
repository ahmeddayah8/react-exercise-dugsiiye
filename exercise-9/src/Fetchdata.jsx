import { useState, useEffect } from "react";

function Fetchdata() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {


      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error("error", error);
      }
    };
    fetchUsers();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <ul>
        <h2>list of users</h2>
        {users.map((users) => (
          <li key={users.name}>{users.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Fetchdata;
