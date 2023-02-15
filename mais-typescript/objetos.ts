interface ProdutoObj {
  nome: string;
  quantidade: number;
}

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

function mostrarQuantidade(produto: ProdutoObj) {
  console.log(produto.quantidade + 20);
}

mostrarQuantidade(produto7);
mostrarQuantidade(produto8);

// partial
function mostrarQuantidadePartial(produto: Partial<ProdutoObj>) {
  if (produto.quantidade) {
    console.log(produto.quantidade + 100);
  }
}
mostrarQuantidadePartial(produto8);

// [key: string]: unknown;

interface Post {
  titulo: string;
  visualizacoes: number;
  tags: string[];
  [key: string]: unknown;
}

const artigo: Post = {
  titulo: "Como aprender HTML",
  visualizacoes: 3000,
  tags: ["HTML", "Front End"],
  autor: "André",
  lancamento: "15/02/2023",
};

// record

type ObjetoLiteral = Record<string, unknown>;

function mostrarTitulo(obj: ObjetoLiteral) {
  if ("titulo" in obj) {
    console.log(obj.titulo);
  }
}

mostrarTitulo(artigo);
