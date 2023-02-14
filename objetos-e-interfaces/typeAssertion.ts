// as
const video1 = document.querySelector(".player") as HTMLVideoElement;

//video1.volume; // ERRO

interface Produto {
  nome: string;
  preco: number;
}

async function fetchProduto() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  return response.json() as Promise<Produto>;
}

async function handleProduto() {
  const produto = await fetchProduto();
  console.log(produto.nome);
}

handleProduto();

// ! non-null operator

const video2 = document.querySelector("video")!;

video2.volume;
