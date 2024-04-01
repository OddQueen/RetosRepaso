function evenNumbers(num: number): void {
    for (let i = 1; i <= num; i += 2) {
        console.log(i);
    }
}

evenNumbers(10);

function myRevert<T>(myArr: T[]): T[] {
    const revertedArray: T[] = [];
    for (let i = myArr.length - 1; i >= 0; i--) {
        revertedArray.push(myArr[i]);
    }
    return revertedArray;
}

console.log(myRevert([1, 2, 3, 4, 5]));

function isRainbow(colors: string[]): void {
    const rainbowColors: string[] = ["rojo", "naranja", "amarillo", "verde", "cian", "azul", "violeta"];
    for (let color of colors) {
        let found = false;
        for (let rainbowColor of rainbowColors) {
            if (color === rainbowColor) {
                found = true;
                break;
            }
        }
        if (found) {
            console.log(`${color} está en el arcoíris`);
        } else {
            console.log(`${color} no está en el arcoíris`);
        }
    }
}

isRainbow(["rojo", "naranja", "amarillo", "negro", "cian", "azul", "violeta"]);

export function add(myWords: string[]): number {
    let sum: number = 0;
    for (let word of myWords) {
        sum += word.length;
    }
    return sum;
}

console.log(add(["Que", "poco", "he", "descansado"]));
