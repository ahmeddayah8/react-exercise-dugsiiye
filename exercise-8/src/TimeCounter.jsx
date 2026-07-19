import { useState } from "react";
import { useEffect } from "react";

function TimeCounter() {
    const [time, setTime] = useState(0);

  const [isRuning, setIsRuning] = useState(false);

  useEffect(() => {
    let timeId;
    if (isRuning) {
      timeId = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timeId);
  }, [isRuning]);

  const handleStart = () => {
    setIsRuning(true);
  };

  const handleStop = () => {
    setIsRuning(false);
  };

  const handleReset = () => {
    setIsRuning(false);
    setTime(0);
  };
  return (
    <>
      <div></div>
      <h1>Stop watch {time} seconds</h1>
      <button disabled={isRuning} onClick={handleStart}>
        Start
      </button>
      <button disabled={!isRuning} onClick={handleStop}>
        Stop
      </button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
export default TimeCounter;
