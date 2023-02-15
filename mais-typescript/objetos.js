"use strict";
const produto7 = {
    nome: "Notebook",
    quantidade: 10,
    cor: "azul",
};
const produto8 = {
    nome: "Geladeira",
    quantidade: 30,
    freezer: true,
};
function mostrarQuantidade(produto) {
    console.log(produto.quantidade + 20);
}
mostrarQuantidade(produto7);
mostrarQuantidade(produto8);
// partial
function mostrarQuantidadePartial(produto) {
    if (produto.quantidade) {
        console.log(produto.quantidade + 100);
    }
}
mostrarQuantidadePartial(produto8);
const artigo = {
    titulo: "Como aprender HTML",
    visualizacoes: 3000,
    tags: ["HTML", "Front End"],
    autor: "André",
    lancamento: "15/02/2023",
};
function mostrarTitulo(obj) {
    if ("titulo" in obj) {
        console.log(obj.titulo);
    }
}
mostrarTitulo(artigo);
