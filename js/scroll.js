// Funzione principale che si attiva ad ogni scroll per gestire vari elementi
window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY;
  const heroElement = document.getElementById('hero');
  const backToTopButton = document.querySelector('.js-back-to-top-button');
  const windowWidth = window.innerWidth;
  
  // Nasconde hero per mostrare solo particles
  // Logica basata su valori di scorrimento fissi e larghezza della finestra
  const hidePosition = windowWidth > 1300 ? 400 : 300; 

  if (heroElement) {
    if (scrollPosition > hidePosition) {
      heroElement.style.opacity = '0';
      heroElement.style.transition = 'opacity 0.3s ease';
    } else {
      heroElement.style.opacity = '1';
      heroElement.style.transition = 'opacity 0.5s ease';
    }
  }

  // Logica per mostrare/nascondere il pulsante "To Top"
  if (scrollPosition > 1000) {
    backToTopButton.classList.add('is-active');
  } else {
    backToTopButton.classList.remove('is-active');
  }
});

// Gestisce il pulsante "To Top"
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
const backToTopButton = document.querySelector('.js-back-to-top-button');
if(backToTopButton) {
    backToTopButton.addEventListener('click', scrollToTop);
}