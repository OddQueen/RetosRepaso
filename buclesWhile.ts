
function hasEven(myNums: number[]): boolean {
    let i = 0;
    while (i < myNums.length) {
        if (myNums[i] % 2 === 0) {
            return true;
        }
        i++;
    }
    return false;
}

console.log("¿Existe un número par en el array?");
console.log(hasEven([1, 3, 5, 7, 9])); 
console.log(hasEven([1, 2, 3, 5, 7])); 

function startWithM(myNames: string[]): boolean {
    let i = 0;
    while (i < myNames.length) {
        if (myNames[i][0].toLowerCase() !== 'm') {
            return false;
        }
        i++;
    }
    return true;
}


console.log("¿Todos los nombres empiezan por M?");
console.log(startWithM(["Marta", "Manuel", "Mónica"])); 
console.log(startWithM(["Ana", "Marcos", "María"])); 