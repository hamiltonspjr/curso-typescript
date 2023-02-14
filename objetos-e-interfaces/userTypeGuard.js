"use strict";
async function fetchCursos() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const json = await response.json();
    handleCursos(json);
}
fetchCursos();
function handleCursos(data) {
    if (data instanceof Array) {
        console.log("É uma instância de Array");
    }
    if (Array.isArray(data)) {
        console.log("é array");
        console.log(data);
    }
}
// Type Predicate
function isString(value) {
    return typeof value === "string";
}
function handleData(data) {
    if (isString(data)) {
        return data.toLowerCase();
    }
}
console.log(handleData("TESTE"));
// com objetos
async function fetchProduto() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    const json = await response.json();
    handleProduto1(json);
}
fetchProduto();
function isProduto(value) {
    if (value &&
        typeof value === "object" &&
        "nome" in value &&
        "preco" in value) {
        return true;
    }
    else {
        return false;
    }
}
function handleProduto1(data) {
    if (isProduto(data)) {
        console.log(data.nome);
    }
}
// exercício
async function fetchExercicio() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const json = await response.json();
    handleCurso(json);
}
fetchExercicio();
function isCurso(data) {
    if (data &&
        typeof data === "object" &&
        "nome" in data &&
        "horas" in data &&
        "aulas" in data) {
        return true;
    }
    else {
        return false;
    }
}
function handleCurso(data) {
    if (Array.isArray(data)) {
        data.filter(isCurso).forEach((item) => {
            document.body.innerHTML += `
        <div>
          <h2>${item.nome}</h2>
          <p>${item.horas}</p>
          <p>${item.tags.join(", ")}</p>
        </div>
      `;
        });
    }
}
