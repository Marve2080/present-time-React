import React from "react";
import { useState } from "react";

function App() {
  setInterval(nowTime, 1000);
  let time = new Date().toLocaleTimeString();
  const [now, presentTime] = useState(time);

  function nowTime() {
    const newTime = new Date().toLocaleTimeString();
    presentTime(newTime);
  }
  return (
    <div className="container">
      <h1>{now}</h1>
      <button onClick={nowTime}>Get Time</button>
    </div>
  );
}

export default App;
