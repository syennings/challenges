import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCounter] = useState(0);

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={() => setCounter(count - 1)}>
          - 😖
        </button>
        <button type="button" onClick={() => setCounter(count + 1)}>
          + 😄
        </button>
      </div>
    </div>
  );
}
