"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var myPoint = new point_1.Point(3, 5);
console.log("Coordenada X:", myPoint.getX());
console.log("Coordenada Y:", myPoint.getY());
myPoint.setX(10);
myPoint.setY(8);
console.log("Nuevas coordenadas:", myPoint.toString());
