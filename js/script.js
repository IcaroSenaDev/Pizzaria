 
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

 
menuBtn.addEventListener('click', () => {
  const aberto = navMenu.classList.toggle('aberto');
  menuBtn.setAttribute('aria-expanded', aberto);
});

 
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('aberto');
    menuBtn.setAttribute('aria-expanded', false);
  });
});

 
document.addEventListener('click', (e) => {
  const cliqueForaDoMenu = !menuBtn.contains(e.target) && !navMenu.contains(e.target);
  if (cliqueForaDoMenu) {
    navMenu.classList.remove('aberto');
    menuBtn.setAttribute('aria-expanded', false);
  }
});
