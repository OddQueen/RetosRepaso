
import { Point } from "./point";

let myPoint = new Point(3, 5);

console.log("Coordenada X:", myPoint.getX());
console.log("Coordenada Y:", myPoint.getY());

myPoint.setX(10);
myPoint.setY(8);

console.log("Nuevas coordenadas:", myPoint.toString());

const point1 = new Point(3, 4); 
const point2 = new Point(6, 8); 


console.log("Distancia al origen para point1:", point1.distanceToOrigin());
console.log("Distancia al origen para point2:", point2.distanceToOrigin());

console.log("Distancia entre point1 y point2:", point1.calculateDistance(point2));