import React from "react";
import "./styles.css";

export default function App() {
  return (
    <article className="article">
      <h2 className="article__title"> Hello This is the Title </h2>
      <label htmlFor="link"> write some notes </label>
      <input id="link" />
      <a
        href="https://en.wikipedia.org/wiki/South_Asian_river_dolphin"
        className="article__link"
      >
        South Asian River Dolphin Link
      </a>
    </article>
  );
}
