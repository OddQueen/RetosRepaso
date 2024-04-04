"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

var condicionales_1 = require("./condicionales");

var buclesFor_1 = require("./buclesFor");

var array1 = ["Casa", "Coche", "Ciudad", "Cesta"];
var array2 = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
var array3 = ["Venezuela", "Veneno", "Voltaje"];

var sum1 = (0, buclesFor_1.add)(array1);
var sum2 = (0, buclesFor_1.add)(array2);
var sum3 = (0, buclesFor_1.add)(array3);
console.log("La suma de caracteres para el array 1 es ".concat(sum1, ", y es ").concat((0, condicionales_1.isEven)(sum1) ? "par" : "impar", "."));
console.log("La suma de caracteres para el array 2 es ".concat(sum2, ", y es ").concat((0, condicionales_1.isEven)(sum2) ? "par" : "impar", "."));
console.log("La suma de caracteres para el array 3 es ".concat(sum3, ", y es ").concat((0, condicionales_1.isEven)(sum3) ? "par" : "impar", "."));
