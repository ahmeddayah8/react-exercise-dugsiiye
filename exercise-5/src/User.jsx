import { useState } from "react";

function User() {
  const [user, setUser] = useState({ name: "ali", bio: "dev", age: 30 });

  const updateAge = () => {
    setUser({...user, age: user.age + 1 })
  }

  return (
    <>
      <h1>Objects</h1>
      <p>
        name: {user.name}, bio: {user.bio}, age: {user.age}.,
      </p>
      <button onClick={updateAge}>increase age</button>
    </>
  )
}

export default User;
