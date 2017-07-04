

/*Slider*/

(function() {
    function slider (sliderName, velocidade) {
        var sliderClass = '.' + sliderName,
            activeClass = 'active',
            rotate = setInterval(rotateSlide, velocidade);

        $(sliderClass+ '> :first').addClass(activeClass);

        $(sliderClass).hover(function() {
            clearInterval(rotate);
        }, function() {
            rotate = setInterval(rotateSlide, velocidade);
        });

        function rotateSlide() {
            var activeSlide = $(sliderClass+ '> .' + activeClass),
                nextSlide = activeSlide.next();
            
            if(nextSlide.length == 0) {
                nextSlide = $(sliderClass+ '> :first');
            }
            activeSlide.removeClass(activeClass);
            nextSlide.addClass(activeClass);
        }
    }

    slider('introducao', 3000);
})();

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:60,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});