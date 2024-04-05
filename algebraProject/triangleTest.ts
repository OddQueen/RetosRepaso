
import { Triangle } from "./triangle";
import { Point } from "./Point";

let vertex1 = new Point(0, 0);
let vertex2 = new Point(3, 0);
let vertex3 = new Point(0, 4);

let myTriangle = new Triangle(vertex1, vertex2, vertex3);

let sidesLength = myTriangle.calculateLengthSides();
console.log("Longitud de los lados del triángulo son:", sidesLength);
