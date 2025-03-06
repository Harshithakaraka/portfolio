
  // theme
  $(".theme-button").click(function(){
    $("body").toggleClass("bodyg")
    $(".wht").toggleClass("blck")
    
   })




  //  fade-in-efeect-on-scroll
  function animateIfInView() {
    $.each($('.wow'), function (key, value) {
      if (isElementInViewport($(value))) {
        $(value).addClass('wow-in-view');
      } else {
        // (Optional) Fade out when out of view
        $(value).removeClass('wow-in-view');
      };
    });
  }

  // http://stackoverflow.com/a/7557433/5628
  function isElementInViewport(el) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
  }
  //////////////////////
  $('#tabs-nav li:first-child').addClass('active');
  $('.tab-c').hide();
  $('.tab-c:first').show();

  // Click function
  $('#tabs-nav li').click(function () {
    $('#tabs-nav li').removeClass('active');
    $(this).addClass('active');
    $('.tab-c').hide();

    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
  });
  document.addEventListener('DOMContentLoaded', () => {
  const roles = ["Cloud Enthusiast", "Web Developer", "Tech Enthusiast", "Fast Learner"];
  let currentIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const roleElement = document.getElementById('role');
  const typingSpeed = 150; // typing speed in milliseconds
  const deletingSpeed = 100; // deleting speed in milliseconds
  const delayBetweenRoles = 1000; // delay before typing the next role

  function typeRole() {
      const currentRole = roles[currentIndex];
      if (isDeleting) {
          roleElement.textContent = currentRole.substring(0, charIndex - 1);
          charIndex--;
          if (charIndex === 0) {
              isDeleting = false;
              currentIndex = (currentIndex + 1) % roles.length;
              setTimeout(typeRole, typingSpeed);
          } else {
              setTimeout(typeRole, deletingSpeed);
          }
      } else {
          roleElement.textContent = currentRole.substring(0, charIndex + 1);
          charIndex++;
          if (charIndex === currentRole.length) {
              isDeleting = true;
              setTimeout(typeRole, delayBetweenRoles);
          } else {
              setTimeout(typeRole, typingSpeed);
          }
      }
  }

  typeRole(); // Start the typing effect
});


