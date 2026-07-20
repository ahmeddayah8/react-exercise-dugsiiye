import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isCountingDown, setIsCountingDown] = useState(false);

  useEffect(() => {
    let timeId;

    if (isRunning) {
      timeId = setInterval(() => {
        setCount((prev) => {
          if (isCountingDown) {
            if (prev <= 0) {
              setIsRunning(false);
              return 0;
            }
            return prev - 1;
          } else {
            return prev + 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(timeId);
  }, [isRunning, isCountingDown]);

  const handleDecrement = () => {
    if (count <= 0) return; 
    setIsCountingDown(true);
    setIsRunning(true);
  };

  const handleIncrement = () => {
    setIsCountingDown(false);
    setIsRunning(true);
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <button disabled={!isRunning} onClick={handleDecrement}>
        decrement
      </button>
      <button disabled={isRunning} onClick={handleIncrement}>
        increment
      </button>
    </>
  );
}
export default Counter;
