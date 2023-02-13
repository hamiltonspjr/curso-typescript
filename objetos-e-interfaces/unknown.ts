function typeGuard2(value: unknown) {
  if (typeof value === "string") {
    return value.toLowerCase();
  }
  if (typeof value === "number") {
    return value.toFixed();
  }
  if (value instanceof HTMLElement) {
    return value.innerText;
  }
}

console.log(typeGuard2("ORIGAMID"));
console.log(typeGuard2(200));
console.log(typeGuard2(document.body));
