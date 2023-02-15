"use strict";
let chave;
chave = "nome";
// typeof do typescript
function coordenas(x, y) {
    return { x, y };
}
let coord;
coord = (x, y) => {
    return { x, y };
};
function selecionar(seletor) {
    return document.querySelector(seletor);
}
selecionar("body");
// checkInterface
async function fetchData(url) {
    const base = "http://api.origamid.dev/json";
    const response = await fetch(base + url);
    return await response.json();
}
function checkInterface(obj, key) {
    if (obj && typeof obj === "object" && key in obj) {
        return true;
    }
    else {
        return false;
    }
}
async function handleData() {
    const jogo = await fetchData("/jogo.json");
    if (checkInterface(jogo, "desenvolvedora")) {
        console.log(jogo.desenvolvedora.toLowerCase());
    }
    const livro = await fetchData("/livro.json");
    if (checkInterface(livro, "ano")) {
        console.log(livro.autor);
    }
}
handleData();
