"use strict";
function retorno(a) {
    return a;
}
console.log(retorno("A Game"));
console.log(retorno(2000));
console.log(retorno(true));
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const fruits = ["Banana", "Pêra", "Uva", "Laranja", "Limão", "Maçã"];
function firstFive(lista) {
    return lista.slice(0, 5);
}
console.log(firstFive(number));
console.log(firstFive(fruits));
function notNull(arg) {
    if (arg !== null)
        return arg;
    else
        return null;
}
notNull("Hamilton")?.toLowerCase();
notNull(200)?.toFixed();
function tipoDado(a) {
    const resultado = {
        dado: a,
        tipo: typeof a,
    };
    console.log(resultado);
    return resultado;
}
tipoDado(true);
tipoDado(200);
// extends
function extractText(el) {
    return {
        texto: el.innerText,
        el,
    };
}
const link1 = document.querySelector("a");
if (link1) {
    console.log(extractText(link1).el);
}
function $(selector) {
    return document.querySelector(selector);
}
const link2 = $("a");
// método
const link3 = document.querySelector(".link");
async function getData(url) {
    const response = await fetch(url);
    return await response.json();
}
async function handleData() {
    const notebook = await getData("https://api.origamid.dev/json/notebook.json");
    console.log(notebook);
}
handleData();
