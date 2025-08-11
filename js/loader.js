// Gestione del Preloader
function closeLoader() {
  setTimeout(() => {
    const loader = document.querySelector('.loader');
    loader.style.opacity = '0';
  }, 1000);
  setTimeout(() => {
    const loader = document.querySelector('.loader');
    loader.style.display = 'none';
  }, 1200);
}
closeLoader();