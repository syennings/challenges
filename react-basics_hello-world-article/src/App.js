import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

export function HelloWorldArticle() {
  return (
    <article>
      <h1> Hello </h1>
      <p> Working with React</p>
    </article>
  );
}
