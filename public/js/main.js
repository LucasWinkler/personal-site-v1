const navHeight = 80;

// Set the selected nav item to active
function setActiveNavItem($navLinks, $link) {
  const $li = $link.parent();

  $navLinks.each(function() {
    $(this).removeClass('active');
  });

  if (!$li.hasClass('logo')) $link.addClass('active');
}

// Scrolls to the link that was clicked
function scrollToLink(hash) {
  // If the hash offset is undefined then scroll to
  // the top else scroll to the top of the hash offset.
  $('html, body').animate(
    { scrollTop: hash.offset() ? hash.offset().top - navHeight : 0 },
    700
  );
}

// Sets the active nav item on scroll
function setActiveNavItemOnScroll($navLinks, $window) {
  const $scrollPos = $window.scrollTop();

  $navLinks.each(function() {
    const $link = $(this);
    const $hash = $(this.hash);

    if ($scrollPos <= 0 || !$hash.offset()) {
      $link.removeClass('active');
      return;
    }

    const scrollOffset = $hash.offset().top - navHeight;

    if ($scrollPos >= scrollOffset) {
      $link.addClass('active');
      $link.siblings().removeClass('active');
    }
  });
}

// Toggles the light nav and transparent nav
function toggleLightNav($window) {
  const $nav = $('#nav-bar');

  $nav.toggleClass('nav-light', $window.scrollTop() > $nav.height());
}

// Toggles the nav menu and hamburger menu
function toggleHamburgerMenu($hamburgerButton) {
  $hamburgerButton.toggleClass('is-active');
  $('#nav-bar ul').toggleClass('active');
}

// Add event handlers when the DOM is ready
$(() => {
  const $navLinks = $('#nav-bar a');
  const $scrollingLinks = $('a.scroll');
  const $hamburgerButton = $('.hamburger');

  $navLinks.click(function() {
    setActiveNavItem($navLinks, $(this));
  });

  $scrollingLinks.click(function(e) {
    e.preventDefault();
    scrollToLink($(this.hash));
  });

  $(window).scroll(function() {
    const $window = $(this);

    setActiveNavItemOnScroll($navLinks, $window);
    toggleLightNav($window);
  });

  $hamburgerButton.click(function() {
    toggleHamburgerMenu($hamburgerButton);
  });
});
