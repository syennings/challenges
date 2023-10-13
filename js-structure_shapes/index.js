console.clear();

import { Square } from "./components/Square/Square.js";
import { Circle } from "./components/Circle/Circle.js";
import { Pentagon } from "./components/Pentagon/Pentagon.js";

const root = document.getElementById("root");
const circle = Circle();
const pentagon = Pentagon();
const square = Square();

root.append(circle, square, pentagon);
