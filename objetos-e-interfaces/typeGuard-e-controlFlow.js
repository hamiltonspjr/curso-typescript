"use strict";
function typeGuard(value) {
    if (typeof value === "string") {
        return value.toLowerCase();
    }
    if (typeof value === "number") {
        return value.toFixed(1);
    }
    if (value instanceof HTMLElement) {
        return value.innerText;
    }
}
console.log(typeGuard(200.0555));
console.log(typeGuard("TESTE"));
console.log(typeGuard(document.body));
// IN
const obj = {
    nome: "Origamid",
};
if ("nome" in obj) {
    console.log(true);
}
else {
    console.log(false);
}
async function fetchProduto() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    const json = await response.json();
    handleProduto(json);
}
function handleProduto(data) {
    if ("preco" in data && "nome" in data) {
        document.body.innerHTML += `
      <p>Nome: ${data.nome}</p>
      <p>Preço: R$ ${data.preco + 100}</p>
    `;
    }
}
fetchProduto();
