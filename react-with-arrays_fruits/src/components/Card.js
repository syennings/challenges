import "./Card.css";
import { Fragment } from "react";
import { fruits } from "../Fruits";

export default function Card() {
  return (
    <dl>
      <h2> List of Fruits </h2>
      {fruits.map(({ id, name, color }) => (
        <Fragment key={id}>
          <div className="card" style={{ backgroundColor: color }}>
            fruit: {name}
          </div>
          <div className="card--red">color: {color}</div>
        </Fragment>
      ))}
    </dl>
  );
}

// {`card card--${color}`};
//<div className="card" style={{ backgroundColor: color }}>//
