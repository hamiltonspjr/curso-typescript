const produto4 = ["Notebook", 2500];

if (typeof produto4[0] === "string") {
  console.log(produto4[0].toLowerCase());
}

const produto5: [string, number] = ["Notebook", 2500];

produto5[0].toLowerCase();
produto5[1].toFixed();

// as const

function getText(selector: string) {
  const el = document.querySelector<HTMLElement>(selector);
  if (el) {
    return [el, el.innerText] as const;
  } else {
    return null;
  }
}

const button1 = getText("button");

// exercício

// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json

async function getSales() {
  const response = await fetch("https://api.origamid.dev/json/vendas.json");
  const json = await response.json();
  addSales(json);
}

getSales();

// 2 - Defina o tipo/interface de cada venda (tuple)
interface Fabricante {
  marca: string;
  cor: string;
}

type Venda = [string, number, string, Fabricante];

// 3 - Some o total das vendas e mostre na tela
function addSales(vendas: Venda[]) {
  const total = vendas.reduce((total, venda) => {
    return total + venda[1];
  }, 0);

  document.body.innerHTML += `<p>Total: R$ ${total}</p>`;
}
