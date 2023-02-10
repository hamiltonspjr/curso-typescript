function retorno<variavel>(a: variavel): variavel {
  return a;
}
console.log(retorno<string>("A Game"));
console.log(retorno(2000));
console.log(retorno(true));

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const fruits = ["Banana", "Pêra", "Uva", "Laranja", "Limão", "Maçã"];

function firstFive<T>(lista: T[]): T[] {
  return lista.slice(0, 5);
}

console.log(firstFive(number));
console.log(firstFive(fruits));

function notNull<T>(arg: T) {
  if (arg !== null) return arg;
  else return null;
}

notNull("Hamilton")?.toLowerCase();
notNull(200)?.toFixed();

function tipoDado<T>(a: T) {
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

function extractText<T extends HTMLElement>(el: T) {
  return {
    texto: el.innerText,
    el,
  };
}

const link1 = document.querySelector("a");
if (link1) {
  console.log(extractText(link1).el);
}

function $<T extends Element>(selector: string): T | null {
  return document.querySelector(selector);
}
const link2 = $<HTMLAnchorElement>("a");

// método

const link3 = document.querySelector<HTMLAnchorElement>(".link");

interface Empresa {
  nome: string;
  fundacao: number;
  pais: string;
}

interface Notebook {
  nome: string;
  descricao: string;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
  preco: number;
  seguroAcidentes: boolean;
}

async function getData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

async function handleData() {
  const notebook = await getData<Notebook>(
    "https://api.origamid.dev/json/notebook.json"
  );
  console.log(notebook);
}

handleData();
