// Add event handlers when the DOM is ready
$(() => {
  const navbar = $('#nav-bar');

  // Set the selected nav item to active
  navbar.on('click', 'a', function() {
    const a = $(this);
    const li = a.parent();

    $('#nav-bar ul li a').removeClass('active');
    if (!li.hasClass('logo')) a.addClass('active');
  });

  // Smooth scrolling for navbar items
  navbar.on('click', 'a', function(e) {
    if (this.hash !== '') {
      e.preventDefault();

      const hash = this.hash;

      // The height of the nav-bar when it has been scrolled
      const offset = 80;

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - offset
        },
        700,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });

  // Smooth scroll to the top when the logo is clicked
  $('#nav-bar .logo').click(function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: '0' }, 700);
  });

  // Change navbar styling when scrolling past the header
  $(window).scroll(() => {
    const scrollPos = $(this).scrollTop();
    const offset = 30;

    scrollPos >= offset
      ? navbar.addClass('nav-light')
      : navbar.removeClass('nav-light');
  });

  // Transition the hamburger menu and show/hide secondary nav
  const hamburger = $('.hamburger');
  hamburger.on('click', () => {
    hamburger.toggleClass('is-active');
    $('#nav-bar ul').toggleClass('active');
  });
});
