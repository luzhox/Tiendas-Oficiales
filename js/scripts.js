(function(d) {
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });


$('.slider-logos').slick({
    infinite:true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots:true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        autoplaySpeed: 1000,
        slidesToShow: 1,
        dots:false,
        slidesToScroll:1,
        arrows:false
      }
    }

  
  ]
});
   
})(document)