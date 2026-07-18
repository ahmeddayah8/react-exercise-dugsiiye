import { useState, useEffect } from "react";

function App() {
  const [horizontal, setHorizontal] = useState(0);
  const [vertical, setVertical] = useState(0);

  useEffect(() => {
    const handleMove = (e) => {
      setHorizontal(e.clientX);
      setVertical(e.clientY);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div>
      <p>Mouse x: {horizontal}px</p>
      <p>Mouse y: {vertical}px</p>
    </div>
  );
}

export default App;
