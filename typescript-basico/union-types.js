"use strict";
let teste = 200;
teste = "4000";
console.log(teste);
function isNumber(value) {
    if (typeof value === "number") {
        return true;
    }
    return false;
}
console.log(isNumber("200"));
const button = document.querySelector("button");
// continua só se o button for diferente de null e undefined
button?.click();
// exercício
function toNumber(value) {
    if (typeof value === "string") {
        return Number(value);
    }
    else if (typeof value === "number") {
        return value;
    }
    else {
        throw "value deve ser um número ou uma string";
    }
}
console.log(toNumber(2));
