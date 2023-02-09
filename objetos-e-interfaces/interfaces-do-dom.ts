const video = document.querySelector("#videoPrincipal");

if (video instanceof HTMLVideoElement) {
  video.volume;
}

// querySelectorAll

const links = document.querySelectorAll(".link");
links.forEach((link) => {
  if (link instanceof HTMLAnchorElement) {
    console.log(link.href);
  }
});

// exercício
console.dir(links);
function modificar(element: HTMLElement) {
  element.style.color = "#e70";
  element.style.border = "3px solid #e70";
}

links.forEach((link) => {
  if (link instanceof HTMLElement) {
    modificar(link);
  }
});
