"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEven = void 0;

function zodiac(day, month) {
    var signo = "";
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        signo = "Aries";
    }
    else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        signo = "Tauro";
    }
    else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        signo = "Géminis";
    }
    else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        signo = "Cáncer";
    }
    else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        signo = "Leo";
    }
    else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        signo = "Virgo";
    }
    else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        signo = "Libra";
    }
    else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        signo = "Escorpio";
    }
    else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        signo = "Sagitario";
    }
    else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        signo = "Capricornio";
    }
    else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        signo = "Acuario";
    }
    else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        signo = "Piscis";
    }
    return signo;
}

function continent(country) {
    var continente = "";
    switch (country) {
        case "España":
        case "Francia":
        case "Alemania":
        case "Italia":
        case "Portugal":
            continente = "Europa";
            break;
        case "Estados Unidos":
        case "Canadá":
        case "México":
        case "Brasil":
        case "Argentina":
            continente = "América";
            break;
        case "China":
        case "India":
        case "Japón":
        case "Corea del Sur":
        case "Indonesia":
            continente = "Asia";
            break;
        case "Sudáfrica":
        case "Nigeria":
        case "Egipto":
        case "Kenia":
        case "Ghana":
            continente = "África";
            break;
        case "Australia":
        case "Nueva Zelanda":
        case "Fiyi":
        case "Papúa Nueva Guinea":
        case "Samoa":
            continente = "Oceanía";
            break;
        default:
            continente = "Este país no esxiste o está fuera de cobertura";
    }
    console.log("".concat(country, " se encuentra en ").concat(continente));
}
function isEven(number) {
    if (number % 2 === 0) {
        console.log("El número es par");
    }
    else {
        console.log("El número es impar");
    }
}
exports.isEven = isEven;

console.log(zodiac(4, 10)); 
continent("Fiyi"); 
isEven(1392); 
