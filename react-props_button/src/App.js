import React from "react";
import "./styles.css";

export default function App() {
  return (
    <Button
      className="Button"
      color="green"
      isDisabled={false}
      text="Click Meeeee"
    />
  );
}

export function Button({ color, isDisabled, text }) {
  const buttonStyle = {
    color: "white",
    backgroundColor: isDisabled ? "red" : color,
    padding: "10px",
  };
  const buttonText = isDisabled ? "Can't click it no more" : text;

  return (
    <button onClick={handleClick} style={buttonStyle} disabled={isDisabled}>
      {buttonText}{" "}
    </button>
  );
}

const handleClick = () => {
  alert("Button Clicked");
};

//onClick
//style
//disabled doesn't allow me to click
