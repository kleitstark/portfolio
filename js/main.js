//Loader

function closeLoader() {
  setTimeout(() => {
    const loader = document.querySelector('.loader');
    loader.style.opacity = '0';
  }, 1100);
  setTimeout(() => {
    const loader = document.querySelector('.loader');
    loader.style.display = 'none';
  },1500);
}
closeLoader()

particlesJS.load('particles-js', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/130527/particles.json', function() {
  console.log('callback - particles.js config loaded');
});    

//Typed String
var typed = new Typed(".auto-type", {
  strings: ["Francesco Santoro","a Software Developer", "a Musician", "a Drummer", "Sleeping :)"],
  typeSpeed: 80,
  backSpeed: 20,
  loop: true
})


//active nav

$(document).on('click', 'ul li', function() {
  $(this).addClass('active').siblings().removeClass('active')
});

//sticky nav on scroll




$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  var x = $( "#click" );
  if ($(x).prop("checked") == true) {
      $("#header").addClass("sticky2");
  } else {
    if ($(x).prop("checked") == false && scroll > 30) {
      $("#header").addClass("sticky");
    } else if ($(x).prop("checked") == false && scroll < 30) {
      $("#header").removeClass("sticky");
    }
  }
});   


//collapse navbar  NICE JQUERY :)

$(".link-page").on('click', function() {
  $("#click").prop("checked", false);
})


//parallax

                                         
  
