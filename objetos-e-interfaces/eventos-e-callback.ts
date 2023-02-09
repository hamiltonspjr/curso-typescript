/* const btn = document.querySelector("button");

function handleClick(event: PointerEvent) {
  console.log(event.pageX);
}

btn?.addEventListener("pointerdown", handleClick);

function ativarMenu(event: Event) {
  if (event instanceof MouseEvent) {
    console.log(event.pageX);
  }
  if (event instanceof TouchEvent) {
    console.log(event.touches[0].pageX);
  }
}

document.documentElement.addEventListener("mousedown", ativarMenu);
document.documentElement.addEventListener("touchstart", ativarMenu);
window.addEventListener("keydown", ativarMenu);
 */

/* const btn = document.querySelector("button"); */

/* function handleClick(this: HTMLButtonElement, event: MouseEvent) {
  console.log(this);
} */

/* function handleClick(event: MouseEvent) {
  const elemento = event.currentTarget;
  if (elemento instanceof HTMLElement) {
    console.log(elemento.innerText);
  }
}

btn?.addEventListener("click", handleClick); */

const btn = document.getElementById("btn-mobile");

function handleClick(event: PointerEvent) {
  const button = event.currentTarget;
  const nav = document.querySelector("#nav");
  if (button instanceof HTMLElement && nav) {
    nav.classList.toggle("active");
    const active = nav.classList.contains("active");
    if (active) {
      button.setAttribute("aria-expanded", "true");
      button.setAttribute("aria-label", "Fechar Menu");
    } else {
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Abrir Menu");
    }
  }
}

btn?.addEventListener("pointerdown", handleClick);
