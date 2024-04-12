const headerBg = document.querySelector('.header-bg');

window.addEventListener('scroll', () => {
  if (window.scrollY >= headerBg.offsetTop && window.scrollY > 0) {
    headerBg.style.background = "linear-gradient(to bottom, #fff 20%, rgba(255, 255, 255, 0) 100%)";
  } else {
    headerBg.style.background = "none";
  }
});

