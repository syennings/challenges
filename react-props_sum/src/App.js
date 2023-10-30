import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={5} valueB={10} />;
}

export function Sum({ valueA, valueB }) {
  return (
    <p>
      {" "}
      {"the result of " +
        valueA +
        " plus " +
        valueB +
        " equals to " +
        (valueA + valueB)}{" "}
    </p>
  );
}
