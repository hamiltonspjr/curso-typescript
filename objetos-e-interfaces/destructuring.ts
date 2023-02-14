const { body }: { body: HTMLElement } = document;

function handleData({ nome, preco }: { nome: string; preco?: number }) {
  nome.includes("book");
  preco?.toFixed();
}

handleData({
  nome: "Notebook",
  preco: 200.4,
  marca: "Apple",
});

function handleClick({
  currentTarget,
  pageX,
}: {
  currentTarget: EventTarget | null;
  pageX: number;
}) {
  if (currentTarget instanceof HTMLElement) {
    currentTarget.innerHTML = `<h1>Mouse click em x: ${pageX}</h1>`;
  }
}

document.documentElement.addEventListener("click", handleClick);

// ...rest

function comparar(tipo: "menor" | "maior", ...numeros: number[]) {
  if (tipo === "menor") {
    return Math.min(...numeros);
  }
  if (tipo === "maior") {
    return Math.max(...numeros);
  }
}
console.log(comparar("menor", 3, 4, 5, 6, 7, 8, 9, 10));
