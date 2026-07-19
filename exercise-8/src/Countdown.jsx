import { useState, useEffect } from "react";

function Countdown() {
  const [initialTime, setInitialTime] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timeId;
    if (isRunning && timeLeft) {
      timeId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timeId);
  }, [isRunning, timeLeft]);

  const handleStart = () => {
    if (timeLeft > 1) {
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(initialTime);
  };

  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 0) {
      setInitialTime(value);
      setTimeLeft(value);
      setIsRunning(false);
    }
  };

  return (
    <div>
      <h3>Countdown timer</h3>
      <label>set time (seconds); </label>
      <input type="number" value={initialTime} onChange={handleInputChange} />
      <p>time left: {timeLeft} seconds</p>
      <button disabled={isRunning} onClick={handleStart}>
        start
      </button>
      <button disabled={!isRunning} onClick={handleStop}>
        stop
      </button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}
export default Countdown;
