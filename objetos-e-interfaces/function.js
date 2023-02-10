"use strict";
function somar(a, b, c) {
    return a + b + (c ? c : 0);
}
console.log(somar(3, 4, 3));
const subtrair = (a, b) => a - b;
console.log(subtrair(4, 3));
// void
function pintarTela(cor) {
    document.body.style.background = cor;
}
pintarTela("#e75");
function isString(value) {
    if (typeof value === "string") {
        return true;
    }
}
console.log(isString("teste"));
console.log(isString(200));
// never
function abortar(mensagem) {
    throw new Error(mensagem);
}
function normalizar(valor) {
    if (typeof valor === "string") {
        return valor.trim().toLowerCase();
    }
    else {
        return valor.map((item) => item.trim().toLowerCase());
    }
}
console.log(normalizar(" Produto "));
console.log(normalizar([" BANANA ", " LARANJA         "]));
function $(seletor) {
    return document.querySelector(seletor);
}
$("a")?.click();
$("video")?.volume;
$(".item");
function arredondarValor(value) {
    if (typeof value === "string") {
        return Math.ceil(Number(value)).toString();
    }
    else {
        return Math.ceil(value);
    }
}
arredondarValor("123.5");
arredondarValor(500);
