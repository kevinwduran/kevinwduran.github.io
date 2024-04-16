// Função para adicionar efeito branco transparente no header
const headerBg = document.querySelector(".header-bg");

window.addEventListener("scroll", () => {
  if (window.scrollY >= headerBg.offsetTop && window.scrollY > 0) {
    headerBg.style.background =
      "linear-gradient(to bottom, #fff 20%, rgba(255, 255, 255, 0) 100%)";
  } else {
    headerBg.style.background = "none";
  }
});

// Função para menu hamburguer (mobile e tablet) (Responsividade)
const close = document.querySelector(".close-icon");
const open = document.querySelector(".menu-icon");
const nav_ul = document.querySelector(".header-menu");

function openMenu() {
  nav_ul.classList.add("open");
}
function closeMenu() {
  nav_ul.classList.remove("open");
}
// add
open.addEventListener("click", openMenu);
close.addEventListener("click", closeMenu);

// Função para verificar se o elemento está na janela de visualização
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Função para adicionar a classe de animação quando o elemento estiver visível
function checarElementosTelaAtual() {
  const elementos = document.querySelectorAll(".animation");
  elementos.forEach((elemento) => {
    if (isElementInViewport(elemento)) {
      elemento.classList.add("animate-show-right");
    }
  });
}

// Verificar quando a página é rolada e verificar elementos visíveis
window.addEventListener("scroll", checarElementosTelaAtual);
