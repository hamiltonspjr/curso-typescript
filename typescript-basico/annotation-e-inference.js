"use strict";
const produto = "Notebook";
const price = 15000;
const carro = {
    marca: "Audi",
    portas: 4,
};
const barato = 200 < 400 ? true : "produto caro";
console.log(barato);
// com funções precisa fazer a anotação
function somar(a, b) {
    return a + b;
}
console.log(somar(10, 5));
const nintendo = {
    nome: "Nintendo",
    preco: "200",
};
function transformarPreco(produto) {
    produto.preco = "R$ " + produto.preco;
    return produto;
}
const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);
// exercício 1
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
const testText = normalizarTexto("HAMILTON DE SOUZA");
console.log(testText);
// exercício 2
const input = document.querySelector("input");
const total = localStorage.getItem("total");
if (input && total) {
    input.value = total;
    calcularGanho(Number(input.value));
}
function calcularGanho(value) {
    const p = document.querySelector("p");
    if (p) {
        p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
    }
}
function totalMudou() {
    if (input) {
        localStorage.setItem("total", input.value);
        calcularGanho(Number(input.value));
    }
}
if (input) {
    input.addEventListener("keyup", totalMudou);
}
