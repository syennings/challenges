import { useState } from "react";
import "./styles.css";

export default function App() {
  // let code = "?";

  const validCode = "🐡🐠🐋";

  const [code, setCode] = useState("?");

  function handleClick(emoji) {
    setCode(emoji);
  }

  //function handleCode(event) {
  //   setCode(code + event.target.textContent)
  // }

  function resetCode() {
    setCode("?");
  }

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handleClick("🐡");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐋");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐠");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button type="button" onClick={resetCode}>
        Reset
      </button>
      <h2>{code}</h2>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
