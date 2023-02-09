interface Produto {
  nome: string;
  preco: number;
  teclado: boolean;
}

function preencherDados(dados: Produto) {
  document.body.innerHTML += `
    <div>
    <h2>${dados.nome} </h2>
    <p> R$ ${dados.preco} </p>
    <p> Inclui teclado: ${dados.teclado ? "sim" : "não"} </p>
    </div>
  `;
}

preencherDados({
  nome: "Macbook",
  preco: 20000,
  teclado: true,
});

preencherDados({
  nome: "Macbook Pro",
  preco: 30000,
  teclado: true,
});

type NumberOrString = string | number;
let t: NumberOrString = 20;
t = "30";

// exercício

async function fetchProduct() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await response.json();
  console.log(data);
  showProduct(data);
}

fetchProduct();

interface Empresa {
  nome: string;
  fundacao: number;
  pais: string;
}

interface Product {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
}

function showProduct(data: Product) {
  document.body.innerHTML = `
  <div>
  <h2>${data.nome}</h2>
  <p>R$ ${data.preco}</p>
  <div>
    <h3>Fabricante: ${data.empresaFabricante.nome}</h3>
  </div>
  <div>
    <h3>Montadora: ${data.empresaMontadora.nome}</h3>
  </div>
  <p>${data.garantia} anos</p>
</div>
  `;
}
