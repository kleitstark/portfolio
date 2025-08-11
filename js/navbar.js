// ==========================================================================
// Gestione della Navigazione
// ==========================================================================

// Funzione per aggiornare la classe 'active' nella navbar in base alla posizione dello scroll
function updateActiveNavLink() {
  const scrollPosition = $(document).scrollTop();
  let activeFound = false;

  $('section').each(function () {
    const currentSection = $(this);
    const sectionTop = currentSection.offset().top;
    const sectionHeight = currentSection.outerHeight();
    
    if (scrollPosition >= sectionTop - 150 && scrollPosition < sectionTop + sectionHeight - 150) {
      $('#menu li').removeClass('active');
      $('#menu li a[href="#' + currentSection.attr('id') + '"]').parent().addClass('active');
      activeFound = true;
    }
  });

  if (!activeFound && scrollPosition < 150) {
    $('#menu li').removeClass('active');
    $('#menu li a[href="#home"]').parent().addClass('active');
  }
}

// Gestisce il click sui link della navbar per lo scorrimento istantaneo
$('#menu a').on('click', function(event) {
  event.preventDefault(); 
  const targetId = $(this).attr('href');
  
  $('#menu li').removeClass('active');
  $(this).parent().addClass('active');

  $('html, body').scrollTop($(targetId).offset().top);
});

// Listener principale per gli eventi di scorrimento e click sul menu
$(window).on('scroll', function () {
  const scroll = $(window).scrollTop();
  const menuCheckbox = $('#click');
  const fasIcon = $('.fas');

  // Gestisce lo "sticky header"
  if (scroll > 30) {
    $('#header').addClass('sticky');
    fasIcon.css('color', 'white');
  } else {
    $('#header').removeClass('sticky');
    // Ripristina il colore solo se il menu non è aperto
    if (!menuCheckbox.is(':checked')) {
      fasIcon.css('color', 'white');
    }
  }

  // Aggiorna la classe 'active' in base alla posizione di scorrimento
  updateActiveNavLink();
});

// Gestisce il click sul menu a tendina
$('#click').change(function () {
  const menuCheckbox = $('#click');
  const fasIcon = $('.fas');
  const scroll = $(window).scrollTop();
  
  if (menuCheckbox.is(':checked')) {
    $('#header').removeClass('sticky');
    fasIcon.css('color', '#fede28');
  } else {
    // Quando il menu si chiude, ripristina lo stato in base allo scroll
    if (scroll > 30) {
      $('#header').addClass('sticky');
    } else {
      $('#header').removeClass('sticky');
    }
    fasIcon.css('color', 'white');
  }
});

// Collapsa la navbar quando si clicca su un link (su mobile)
$('.link-page').on('click', function () {
  $('#click').prop('checked', false);
  $('.fas').css('color', 'white');
});