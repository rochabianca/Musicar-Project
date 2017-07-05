

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

$('#lancamentos').owlCarousel({
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

$('#mais-vendidos, #mais-vendidos-2').owlCarousel({
    loop:true,
    margin: 15,
    dots: true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})

$('#nacionais, #classicos, #pop-rock').owlCarousel({
    loop:true,
    margin: 15,
    dots: true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:5
        }
    }
})



$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});