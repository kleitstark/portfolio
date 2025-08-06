//Loader

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

particlesJS.load('particles-js', 'assets/particles.json', function () {
  console.log('callback - particles.js config loaded');
});

/*Typed String
var typed = new Typed(".auto-type", {
  strings: ["Francesco Santoro  ","a Software Developer  ", "a Musician  ", "a Drummer  "],
  typeSpeed: 100,
  backSpeed: 40,
  loop: true,
  cursor: '_'
})
*/

const myText = new AutoTyping({
  id: 'typed',
  typeText: ['Francesco Santoro  ', 'a Software Developer  ', 'a Musician  ', 'a Drummer  '],
  textColor: '#fdd228',
  cursor: '_',
  cursorColor: '#fff',
  deleteSpeed: 50,
}).init();

//active nav

$(document).on('click', 'ul li a', () => {
  $(this).addClass('active').siblings().removeClass('active');
});

//sticky nav on scroll

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  var x = $('#click');
  if ($(x).prop('checked') == false && scroll < 30) {
    $('#header').removeClass('sticky');
  } else if ($(x).prop('checked') == false && scroll > 30) {
    $('#header').addClass('sticky');
  }
});

//!!!!!!!!!!!

$('#click').change(function () {
  var scroll = $(window).scrollTop();
  var y = $('#click');
  if ($(y).is(':checked')) {
    $('#header').removeClass('sticky');
    $('.fas').css('color', '#fede28');
  } else if ($(y).not(':checked') && scroll < 30) {
    $('#header').removeClass('sticky');
    $('.fas').css('color', 'white');
  } else if ($(y).not(':checked') && scroll > 30) {
    $('#header').addClass('sticky');
    $('.fas').css('color', 'white');
  }
});

/*hide show social icon 
$("#click").change( function() {
  var y = $( "#click" );
  if ($(y).is(':checked')){
    $('.footer').hide()
  } else {
    $('.footer').show()
  }
})
*/

//active li on scroll

$(document).ready(function () {
  // Funzione per aggiungere la classe active agli elementi della navbar
  function setActiveNav() {
    var scrollPosition = $(document).scrollTop();
    console.log(scrollPosition);

    // Verifica la posizione dello scroll e aggiungi la classe active di conseguenza
    if (scrollPosition < 807) {
      $('#menu li').removeClass('active'); // Rimuovi la classe active da tutti gli elementi della navbar
      $('#menu li a[href="#home"]').parent().addClass('active'); // Aggiungi la classe active all'elemento della navbar corrispondente
    } else if (scrollPosition >= 807 && scrollPosition < 1915) {
      $('#menu li').removeClass('active');
      $('#menu li a[href="#about"]').parent().addClass('active');
    } else if (scrollPosition >= 1915 && scrollPosition < 3640) {
      $('#menu li').removeClass('active');
      $('#menu li a[href="#resumes"]').parent().addClass('active');
    } else if (scrollPosition >= 3640 && scrollPosition < 3654) {
      $('#menu li').removeClass('active');
      $('#menu li a[href="#content"]').parent().addClass('active');
    } else if (scrollPosition >= 3654) {
      $('#menu li').removeClass('active');
      $('#menu li a[href="#contact"]').parent().addClass('active');
    }
  }

  // Attiva la funzione quando si scorre la pagina
  $(window).on('scroll', setActiveNav);
});

/*
window.addEventListener('scroll', function() {
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  console.log("Valore dello scroll:", scrollPosition);
});
*/

//collapse navbar  NICE JQUERY :)

$('.link-page').on('click', function () {
  $('#click').prop('checked', false);
  $('.fas').css('color', 'white');
});

//Nasconde hero per mostrare solo particles nella sezione carousel
window.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY;
  var heroElement = document.getElementById('hero');

  if (scrollPosition > 700) {
    if (heroElement) {
      heroElement.style.opacity = 0;
      heroElement.style.transition = 'opacity 0.3s ease';
    }
  } else {
    if (heroElement) {
      heroElement.style.display = 'flex';
      heroElement.style.opacity = 100;
      heroElement.style.transition = 'opacity 0.5s ease';
    }
  }
});

/* To Top Button*/
let backToTopButton = document.querySelector('.js-back-to-top-button');

const onscroll = () => {
  if (window.scrollY > 1000) {
    backToTopButton.classList.add('is-active');
  } else {
    backToTopButton.classList.remove('is-active');
  }
};

window.addEventListener('scroll', onscroll);

scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

backToTopButton.addEventListener('click', scrollToTop);

/*
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  var x = $( "#click" );

  if ($(x).prop("checked") == false && scroll < 30) {
      $("#header").removeClass("sticky");
  } else if ($(x).prop("checked") == false && scroll > 30) {
    $("#header").addClass("sticky");
  } 
});  

*/
