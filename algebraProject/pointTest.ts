
import { Point } from "./point";

let myPoint = new Point(3, 5);

console.log("Coordenada X:", myPoint.getX());
console.log("Coordenada Y:", myPoint.getY());

myPoint.setX(10);
myPoint.setY(8);

console.log("Nuevas coordenadas:", myPoint.toString());
