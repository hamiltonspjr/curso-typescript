"use strict";
const produto4 = ["Notebook", 2500];
if (typeof produto4[0] === "string") {
    console.log(produto4[0].toLowerCase());
}
const produto5 = ["Notebook", 2500];
produto5[0].toLowerCase();
produto5[1].toFixed();
// as const
function getText(selector) {
    const el = document.querySelector(selector);
    if (el) {
        return [el, el.innerText];
    }
    else {
        return null;
    }
}
const button1 = getText("button");
// exercício
// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
async function getSales() {
    const response = await fetch("https://api.origamid.dev/json/vendas.json");
    const json = await response.json();
    addSales(json);
}
getSales();
// 3 - Some o total das vendas e mostre na tela
function addSales(vendas) {
    const total = vendas.reduce((total, venda) => {
        return total + venda[1];
    }, 0);
    document.body.innerHTML += `<p>Total: R$ ${total}</p>`;
}
