"use strict";
const numeros = [10, 20, 30, 40, 50, 3];
const valores = [10, "Taxas", 30, "Produto", 50, 3];
function maiorQue10(data) {
    return data.filter((n) => n > 10);
}
console.log(maiorQue10(numeros));
function filtrarValores(data) {
    return data.filter((item) => typeof item === "string");
}
console.log(filtrarValores(valores));
async function fetchCursos() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const data = await response.json();
    console.log(data);
    mostrarCursos(data);
}
fetchCursos();
function mostrarCursos(cursos) {
    cursos.forEach((curso) => {
        let color;
        if (curso.nivel === "iniciante") {
            color = "blue";
        }
        else if (curso.nivel === "avancado") {
            color = "red";
        }
        document.body.innerHTML += `
      <div>
        <h2 style="color: ${color};">${curso.nome}</h2>
        <p>Horas: ${curso.horas}</p>
        <p>Aulas: ${curso.aulas}</p>
        <p>Tipo: ${curso.gratuito ? "Gratuito" : "Pago"}</p>
        <p>Tags: ${curso.tags.join(", ")}</p>
        <p>Aulas: ${curso.idAulas.join(" | ")}</p>
      </div>
    `;
    });
}
