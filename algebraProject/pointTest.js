"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var myPoint = new point_1.Point(3, 5);
console.log("Coordenada X:", myPoint.getX());
console.log("Coordenada Y:", myPoint.getY());
myPoint.setX(10);
myPoint.setY(8);
console.log("Nuevas coordenadas:", myPoint.toString());
console.log("~Añadir método distancia~");
var point1 = new point_1.Point(3, 4);
var point2 = new point_1.Point(6, 8);
console.log("Distancia al origen para point1:", point1.distanceToOrigin());
console.log("Distancia al origen para point2:", point2.distanceToOrigin());
console.log("Distancia entre point1 y point2:", point1.calculateDistance(point2));
console.log("~Calcular cuadrante~");
var point3 = new point_1.Point(7, 4);
var point4 = new point_1.Point(-2, 5);
var point5 = new point_1.Point(-4, -3);
var point6 = new point_1.Point(6, -2);
var point7 = new point_1.Point(0, 5);
var point8 = new point_1.Point(-3, 0);
var point9 = new point_1.Point(0, 9);
console.log("Cuadrante de point3:", point3.calcularQuadrant());
console.log("Cuadrante de point4:", point4.calcularQuadrant());
console.log("Cuadrante de point5:", point5.calcularQuadrant());
console.log("Cuadrante de point6:", point6.calcularQuadrant());
console.log("Cuadrante de point7:", point7.calcularQuadrant());
console.log("Cuadrante de point8:", point8.calcularQuadrant());
console.log("Cuadrante de point9:", point9.calcularQuadrant());
console.log("~Calcular punto más cercano~");
var myOtherPoint = new point_1.Point(3, 5);
var pointsArray = [
    new point_1.Point(7, 4),
    new point_1.Point(-2, 5),
    new point_1.Point(-4, -3),
    new point_1.Point(6, -2),
    new point_1.Point(0, 5),
    new point_1.Point(-3, 0),
    new point_1.Point(0, 9)
];
var nearestPoint = myOtherPoint.calculateNearest(pointsArray);
console.log("Punto más cercano es:", nearestPoint.toString());
