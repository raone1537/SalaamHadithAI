import React, { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-GB", { timeZone: "GMT" }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div id="clock">{time}</div>;
}
