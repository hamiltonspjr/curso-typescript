type Produto1 = {
  preco: number;
};

type Carro = {
  rodas: number;
  portas: number;
};

function handleProdutoCarro(dados: Produto1 & Carro) {
  dados.rodas;
  dados.portas;
  dados.preco;
}

// adicionar propriedades

// em type
type TipoCarro = {
  rodas: number;
  portas: number;
};

type TipoCarroComPreco = TipoCarro & {
  preco: number;
};

// em interface

interface InterfaceCarro {
  rodas: number;
  portas: number;
}

interface InterfaceCarro {
  preco: number;
}

interface Window {
  userId: number;
}

window.userId = 200;
console.log(window.userId);
