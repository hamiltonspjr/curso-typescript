// keyof
interface Produto {
  nome: string;
  preco: number;
}

let chave: keyof Produto;
chave = "nome";

// typeof do typescript

function coordenas(x: number, y: number) {
  return { x, y };
}

let coord: typeof coordenas;
coord = (x: number, y: number) => {
  return { x, y };
};

// querySelector
interface Elementos {
  a: HTMLAnchorElement;
  video: HTMLVideoElement;
  div: HTMLElement;
  body: HTMLBodyElement;
  audio: HTMLAudioElement;
}

function selecionar<Chave extends keyof Elementos>(
  seletor: Chave
): Elementos[Chave] | null {
  return document.querySelector(seletor);
}

selecionar("body");

// checkInterface

async function fetchData<T>(url: string): Promise<T> {
  const base = "http://api.origamid.dev/json";
  const response = await fetch(base + url);
  return await response.json();
}

interface Jogo {
  nome: string;
  ano: number;
  desenvolvedora: string;
  plataformas: string[];
}

interface Livro {
  nome: string;
  ano: number;
  autor: string;
  paginas: number;
}

function checkInterface<T>(obj: unknown, key: keyof T): obj is T {
  if (obj && typeof obj === "object" && key in obj) {
    return true;
  } else {
    return false;
  }
}

async function handleData() {
  const jogo = await fetchData("/jogo.json");
  if (checkInterface<Jogo>(jogo, "desenvolvedora")) {
    console.log(jogo.desenvolvedora.toLowerCase());
  }
  const livro = await fetchData("/livro.json");
  if (checkInterface<Livro>(livro, "ano")) {
    console.log(livro.autor);
  }
}

handleData();
