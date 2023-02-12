import React, { useState, useEffect } from "react";

function Currenttime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <h1>{time}</h1>;
}

export default Currenttime;
