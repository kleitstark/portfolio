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
  strings: ["Francesco Santoro","a Software Developer", "a Musician", "a Drummer", "going to sleep 😴"],
  typeSpeed: 60,
  backSpeed: 15,
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
  if ($(x).prop("checked") == false && scroll < 30) {
      $("#header").removeClass("sticky");
  } else if ($(x).prop("checked") == false && scroll > 30) {
    $("#header").addClass("sticky");
  } 
}); 

//!!!!!!!!!!!

$("#click").change( function() {
  var scroll = $(window).scrollTop();
  var y = $( "#click" );
  if ($(y).is(':checked')){
    $("#header").removeClass("sticky");
    $(".fas").css("color", "#fede28");
  } else if ($(y).not(':checked') && scroll < 30) {
    $("#header").removeClass("sticky");
    $(".fas").css("color", "white");
  } else if ($(y).not(':checked') && scroll > 30) {
    $("#header").addClass("sticky");
    $(".fas").css("color", "white");
  }
})




//active li on scroll

$(window).scroll(function() { 
  var scroll = $(window).scrollTop();

  if (scroll < 500) {
    $('.home-li').addClass('active').siblings().removeClass('active')
  } 
  else if (scroll > 500 && scroll < 1300) {
    $('.about').addClass('active').siblings().removeClass('active')
  }
  else {
    $('.portfolio').addClass('active').siblings().removeClass('active')
  }
});






//collapse navbar  NICE JQUERY :)

$(".link-page").on('click', function() {
  $("#click").prop("checked", false);
  $(".fas").css("color", "white");
})




/*parallax

$(window).scroll(function(){
  parallax();
})

function parallax() {
 $('.parallax--bg').css('background-position', 'center'+(wScroll)+'px')                              
}
*/







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