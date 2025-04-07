import React, { useState, useEffect, useRef } from "react";

function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setelapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setelapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }
  function stop() {
    setIsRunning(false);
  }
  function reset() {
    setelapsedTime(0);
    setIsRunning(false);
  }
  function formatTime() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let min = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let sec = Math.floor((elapsedTime / 1000) % 60);
    let milsec = Math.floor((elapsedTime % 1000) / 10);

    return `${padZero(min)}:${padZero(sec)}:${padZero(milsec)}`;
  }
  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }
  return (
    <div className="stopwatch">
      <div className="display">{formatTime()}</div>
      <div className="controls">
        <button onClick={start} className="start-btn">
          Start
        </button>
        <button onClick={stop} className="stop-btn">
          Stop
        </button>
        <button onClick={reset} className="reset-btn">
          Reset
        </button>
      </div>
    </div>
  );
}

export default StopWatch;
