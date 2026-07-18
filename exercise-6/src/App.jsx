import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("hello");

  useEffect(() => {
    document.title = `${title}, ${name}`;
    console.log(title);
  }, [title, name]);

  return (
    <>
      <h1>Enter your name</h1>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h1>choose a greeting</h1>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </>
  );
}

export default App;
