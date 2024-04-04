import { isEven } from "./condicionales";
import { add } from "./buclesFor";

const array1: string[] = ["Casa", "Coche", "Ciudad", "Cesta"];
const array2: string[] = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
const array3: string[] = ["Venezuela", "Veneno", "Voltaje"];

const sum1: number = add(array1);
const sum2: number = add(array2);
const sum3: number = add(array3);

console.log(`La suma de caracteres para el array 1 es ${sum1}, y es ${isEven(sum1) ? "par" : "impar"}.`);
console.log(`La suma de caracteres para el array 2 es ${sum2}, y es ${isEven(sum2) ? "par" : "impar"}.`);
console.log(`La suma de caracteres para el array 3 es ${sum3}, y es ${isEven(sum3) ? "par" : "impar"}.`);
