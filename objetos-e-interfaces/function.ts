function somar(a: number, b: number, c?: number): number {
  return a + b + (c ? c : 0);
}

console.log(somar(3, 4, 3));

const subtrair = (a: number, b: number) => a - b;
console.log(subtrair(4, 3));

// void

function pintarTela(cor: string): void {
  document.body.style.background = cor;
}

pintarTela("#e75");

function isString(value: any) {
  if (typeof value === "string") {
    return true;
  }
}

console.log(isString("teste"));
console.log(isString(200));

// never

function abortar(mensagem: string): never {
  throw new Error(mensagem);
}

//abortar("Um erro ocorreu");
//console.log("Tente novamente");

// overload
function normalizar(valor: string): string;
function normalizar(valor: string[]): string[];
function normalizar(valor: string | string[]): string | string[] {
  if (typeof valor === "string") {
    return valor.trim().toLowerCase();
  } else {
    return valor.map((item) => item.trim().toLowerCase());
  }
}
console.log(normalizar(" Produto "));
console.log(normalizar([" BANANA ", " LARANJA         "]));

function $(seletor: "a"): HTMLAnchorElement | null;
function $(seletor: "video"): HTMLVideoElement | null;
function $(seletor: string): Element | null;
function $(seletor: string): Element | null {
  return document.querySelector(seletor);
}
$("a")?.click();
$("video")?.volume;
$(".item");

// exercício

function arredondarValor(value: string): string;
function arredondarValor(value: number): number;
function arredondarValor(value: string | number): string | number {
  if (typeof value === "string") {
    return Math.ceil(Number(value)).toString();
  } else {
    return Math.ceil(value);
  }
}

arredondarValor("123.5");
arredondarValor(500);
