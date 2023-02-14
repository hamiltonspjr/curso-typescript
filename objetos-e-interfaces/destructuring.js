"use strict";
const { body } = document;
function handleData({ nome, preco }) {
    nome.includes("book");
    preco?.toFixed();
}
handleData({
    nome: "Notebook",
    preco: 200.4,
    marca: "Apple",
});
function handleClick({ currentTarget, pageX, }) {
    if (currentTarget instanceof HTMLElement) {
        currentTarget.innerHTML = `<h1>Mouse click em x: ${pageX}</h1>`;
    }
}
document.documentElement.addEventListener("click", handleClick);
// ...rest
function comparar(tipo, ...numeros) {
    if (tipo === "menor") {
        return Math.min(...numeros);
    }
    if (tipo === "maior") {
        return Math.max(...numeros);
    }
}
console.log(comparar("menor", 3, 4, 5, 6, 7, 8, 9, 10));
