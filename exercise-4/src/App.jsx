import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0)
  // const increment = () => {
  //   setCount(count + 1);
  // }
  const [isVisible, setIsVisible] = useState(true);
  const toggle = () => {
    setIsVisible(!isVisible);
    console.log(isVisible)
  };

  return (
    <>
      {<p>the button is {isVisible ? "OFF" : "ON"}</p>}
      <button onClick={toggle}>
        {isVisible ? "Turn ON" : "Turn OFF"} 
      </button>
    </>
  );
}

export default App;
