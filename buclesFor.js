"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
function evenNumbers(num) {
    for (var i = 1; i <= num; i += 2) {
        console.log(i);
    }
}
evenNumbers(10);
function myRevert(myArr) {
    var revertedArray = [];
    for (var i = myArr.length - 1; i >= 0; i--) {
        revertedArray.push(myArr[i]);
    }
    return revertedArray;
}
console.log(myRevert([1, 2, 3, 4, 5]));
function isRainbow(colors) {
    var rainbowColors = ["rojo", "naranja", "amarillo", "verde", "cian", "azul", "violeta"];
    for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
        var color = colors_1[_i];
        var found = false;
        for (var _a = 0, rainbowColors_1 = rainbowColors; _a < rainbowColors_1.length; _a++) {
            var rainbowColor = rainbowColors_1[_a];
            if (color === rainbowColor) {
                found = true;
                break;
            }
        }
        if (found) {
            console.log("".concat(color, " est\u00E1 en el arco\u00EDris"));
        }
        else {
            console.log("".concat(color, " no est\u00E1 en el arco\u00EDris"));
        }
    }
}
isRainbow(["rojo", "naranja", "amarillo", "negro", "cian", "azul", "violeta"]);
function add(myWords) {
    var sum = 0;
    for (var _i = 0, myWords_1 = myWords; _i < myWords_1.length; _i++) {
        var word = myWords_1[_i];
        sum += word.length;
    }
    return sum;
}
exports.add = add;
console.log(add(["Que", "poco", "he", "descansado"]));
