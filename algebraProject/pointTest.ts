
import { Point } from "./point";

let myPoint = new Point(3, 5);

console.log("Coordenada X:", myPoint.getX());
console.log("Coordenada Y:", myPoint.getY());

myPoint.setX(10);
myPoint.setY(8);

console.log("Nuevas coordenadas:", myPoint.toString());

console.log("~Añadir metodo distancia~"); 
const point1 = new Point(3, 4); 
const point2 = new Point(6, 8); 

console.log("Distancia al origen para point1:", point1.distanceToOrigin());
console.log("Distancia al origen para point2:", point2.distanceToOrigin());

console.log("Distancia entre point1 y point2:", point1.calculateDistance(point2));


console.log("~Calcular cuadrante~");
let point3 = new Point(7, 4);
let point4 = new Point(-2, 5); 
let point5 = new Point(-4, -3); 
let point6 = new Point(6, -2); 
let point7 = new Point(0, 5);
let point8 = new Point(-3, 0); 
let point9 = new Point(0, 9); 

console.log("Cuadrante de point3:", point3.calcularQuadrant());
console.log("Cuadrante de point4:", point4.calcularQuadrant());
console.log("Cuadrante de point5:", point5.calcularQuadrant());
console.log("Cuadrante de point6:", point6.calcularQuadrant());
console.log("Cuadrante de point7:", point7.calcularQuadrant());
console.log("Cuadrante de point8:", point8.calcularQuadrant());
console.log("Cuadrante de point7:", point9.calcularQuadrant());
