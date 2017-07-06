
//Origamid Menu

(function( $, window ) {
$.fn.origamidMenu = function( options ) {
	
	// Opções	
	var settings = $.extend({
			breakpoint: 768,
			top: 50,
			color: 'white',
			background: 'black'
	}, options );
	
	var mobileWidth = settings.breakpoint,
			color = settings.color,
			background = settings.background,
			hambugerActive = false,
			hamburger = '<a id="origamid-icon"></a>',
			menu = $(this);
	
	var styles = '<style>\
					#origamid-menu { background-color: ' + background + '; top: ' + settings.top + 'px; }\
					#origamid-menu li { border-color: ' + color + '; }\
					#origamid-menu li:last-of-type { border-color: ' + color + '; }\
					#origamid-menu li a { color: ' + color + '; }\
					#origamid-menu li a:hover { color: ' + background + '; background: ' + color + '; }\
					#origamid-icon::before { background:' + color + '; }\
					#origamid-icon::after { box-shadow: 0 4px 0 0 ' + color + ', 0 -4px 0 0 ' + color + '; }\
					#origamid-icon.active::before, #origamid-icon.active::after { background:' + color + '; }\
				</style>';

	var menuFunction = function() {
		var width = $(window).width();
		if (width < mobileWidth) {
			menu.attr('id', 'origamid-menu');
			if(!hambugerActive) {
				hambugerActive = true;
				menu.before(hamburger);
				$('#origamid-menu').append(styles);
			} else {
				return false;
			}

		} else if (width > mobileWidth) {
			hambugerActive = false;
			$('#origamid-icon').remove();
			$('#origamid-menu style').remove();
			menu.attr('id', '');
		}

		$('#origamid-icon').on('click touchstart', function(e) {
			e.preventDefault();
			$('#origamid-icon').toggleClass('active');
			menu.toggleClass('active');
		});
	}
	
	menuFunction();
	$(window).resize(menuFunction);
};
}( jQuery, window ));

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

//Owl Carousel

$('#lancamentos').owlCarousel({
    loop:true,
    margin:60,
    dots: true,
    responsive:{
        0:{
            items:2,
            margin: 15
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

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
});

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
});



$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$('.menu-mobile ul').origamidMenu({
	breakpoint: 960,
	top: 80,
	background: "#864dd9",
	color: "white"
});