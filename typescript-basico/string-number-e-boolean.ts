const frase = "Front End";
const preco = 500;
const condi = preco > 100;

if (typeof frase === "string") {
  console.log("Frase é uma string");
}
if (typeof preco === "number") {
  console.log("Preco é um number");
}
if (typeof condi === "boolean") {
  console.log("Condi é um boolean");
}

const frase1 = new String("Front End");
const frase2 = String("Front End");
const frase3 = "Front End";

console.log(typeof frase1);
console.log(typeof frase2);
console.log(typeof frase3);
