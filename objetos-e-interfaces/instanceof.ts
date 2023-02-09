// class
/* class Produto {
  nome: string;
  preco: number;
  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }
  precoReal() {
    return `R$ ${this.preco}`;
  }
} */

//const livro = new Produto("A Guerra dos Tronos", 200);

// usando o instanceof
//console.log(livro instanceof Produto);

class Produto {
  nome: string;
  constructor(nome: string) {
    this.nome = nome;
  }
}

class Livro extends Produto {
  autor: string;
  constructor(nome: string, autor: string) {
    super(nome);
    this.autor = autor;
  }
}

class Jogo extends Produto {
  jogadores: number;
  constructor(jogadores: number, nome: string) {
    super(nome);
    this.jogadores = jogadores;
  }
}

function buscarProduto(busca: string) {
  if (busca === "O Hobbit") {
    return new Livro("O Hobbit", "J. R. R. Tolkien");
  }
  if (busca === "Dark Souls") {
    return new Jogo(1, "Dark Souls");
  }
  return null;
}

const produto1 = buscarProduto("Dark Souls");

if (produto1 instanceof Livro) {
  console.log(produto1.autor);
} else if (produto1 instanceof Jogo) {
  console.log(produto1.jogadores);
}

if (produto1 instanceof Produto) {
  console.log(produto1.nome);
}

// exercício

const link = document.getElementById("origamid");
console.dir(link);
if (link instanceof HTMLAnchorElement) {
  link.href = link.href.replace("http://", "https://");
}
