const loader = document.querySelector('.loader');
const main = document.querySelector('.main');



function init() {
    setTimeout(() => {
      loader.style.opacity = 100;
      loader.style.display = 'none';

      main.style.display = 'flex';
      setTimeout (() => (main.style.opacity = 1), 50);
    }, 1300);
  }
init();





