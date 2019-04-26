// Add event handlers when the DOM is ready
$().ready(() => {
  // Set the selected nav item to active
  $('#navbar').on('click', 'a', function() {
    const a = $(this);
    const li = a.parent();

    $('#navbar .container ul li a').removeClass('active');
    if (!li.hasClass('logo')) a.addClass('active');
  });

  // Smooth scrolling for navbar items
  $('#navbar').on('click', 'a', function(event) {
    if (this.hash !== '') {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        700,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });

  // Change navbar styling on scroll
  $(window).scroll(function() {
    const scrollPos = $(this).scrollTop();

    if (scrollPos >= 30) {
      $('#navbar').addClass('nav-light');
    } else {
      $('#navbar').removeClass('nav-light ');
    }
  });
});
