// hamburger //
var open = document.getElementById('hamburger');
var changeIcon = true;

open.addEventListener("click", function(){

    var over = document.querySelector('.over');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    over.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
    }
    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }
});

// parallax//
$(function(){
  var speed = 0.5;
  var viewporth = $(window).height();
  var st = $(window).scrollTop();
  
  var parallaxImages = [];
  function prlxUpdateValues() {
    parallaxImages = [];
    $('.parallax').each(function(index) {
      var parallaxImage = {};
      parallaxImage.element = $(this);
      parallaxImage.offset = parallaxImage.element.offset().top;
      parallaxImages.push(parallaxImage);
    });
    prlxDraw();
  }
  function prlxDraw() {
    $.each(parallaxImages, function(index, parallaxImage) {
      //if(parallaxImage.offset<=st+viewporth)
        parallaxImage.element.css('background-position','center '+((st-parallaxImage.offset)*speed)+'px');
    });
  }
  
  $(window).on('resize', function() {
    prlxUpdateValues();
  });

  prlxUpdateValues();
  $(window).on('scroll', function() {
    st = $(window).scrollTop();
    prlxDraw();
  });

  
});


// Back to top

(function() {
  $(document).ready(function() {
    return $(window).scroll(function() {
      return $(window).scrollTop() > 200 ? $("#back-to-top").addClass("show") : $("#back-to-top").removeClass("show")
    }), $("#back-to-top").click(function() {
      return $("html,body").animate({
        scrollTop: "0"
      })
    })
  })
}).call(this);


//Scroll Down
$(function() {
    $('.scroll-down').click (function() {
     $('html, body').animate({scrollTop: $('div.cont').offset().top }, 'slow');
    return false;
   });
  });