/* -----------------------------------------------
					Js Main
--------------------------------------------------

    Template Name: Baha - Personal Portfolio Template
    Author: Malyarchuk
    Copyright: 2019

--------------------------------------------------

Table of Content

	1. Preloader
	2. Sound Start
	3. Isotope Portfolio Setup
	4. Blogs Masonry Setup
	5. YouTube Video
	6. Active Current Link
	7. Mobile Toggle Click Setup
	8. Testimonials OwlCarousel
	9. Chart Setup
	10. Portfolio Tilt Setup
	11. Portfolio Image Link
	12. Portfolio Video Link
	13. Blog Video Link
	14. Validate Contact Form
	15. Glitch Effect
	16. Google Map

----------------------------------- */

$(window).on('load', function() {
		
	/* -----------------------------------
				1. Preloader
	----------------------------------- */
	$("#preloader").delay(1000).addClass('loaded');
	
	/* -----------------------------------
    2. Sound Setup
	----------------------------------- */
	if($(window).length) {
		$('.music-bg').css({'visibility':'visible'});
		$('body').addClass("audio-on");
		if ($('body').hasClass('audio-off')) {
        $('body').removeClass('audio-on');
		} 
		$(".music-bg").on('click', function() {
			$('body').toggleClass("audio-on audio-off");         
			if ($('body').hasClass('audio-off')) {
				audio.pause();
			} 
			if ($('body').hasClass('audio-on')) {
				audio.play();
			}
		});
	}
	
	/* -----------------------------------
			3. Isotope Portfolio Setup
	----------------------------------- */
    if( $('.portfolio-items').length ) {
        var $elements = $(".portfolio-items"),
            $filters = $('.portfolio-filter ul li');
        $elements.isotope();

        $filters.on('click', function(){
            $filters.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).data('filter');
            $(".portfolio-items").isotope({
                filter: selector,
                hiddenStyle: {
                    transform: 'scale(.2) skew(30deg)',
                    opacity: 0
                },
                visibleStyle: {
                    transform: 'scale(1) skew(0deg)',
                    opacity: 1,
                },
                transitionDuration: '.5s'
            });
        });
    }
	
	/* -----------------------------------
			4. Blogs Masonry Setup
	----------------------------------- */
    $('.blog-masonry').isotope({ layoutMode: 'moduloColumns' });
	
	/* -----------------------------------
	    5. YouTube Video
	----------------------------------- */
	
	
});

$(document).ready(function() {
    "use strict";
	
	/* -----------------------------------
			6. Active Current Link
	----------------------------------- */
    $('.header-main ul li a').on('click',function() {
        if($('.header-main.on').length) {
            $('.header-main').removeClass('on');
        }
    });
	
	/* -----------------------------------
		7. Mobile Toggle Click Setup
	----------------------------------- */
    $('.header-toggle').on('click', function() {
        $('.header-main').toggleClass('on');
    });
	
	/* -----------------------------------
	        8. Testimonials OwlCarousel
	----------------------------------- */
	$(".testimonial .owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        smartSpeed: 500,
        responsiveClass: true,
        dots: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            800: {
                items: 1,
            },
            1000: {
                items: 2,
            },
        },
    });
	
        /* -----------------------------------
            9. Chart Setup
        ----------------------------------- */
	if ($('.chart').length > 0) {
	$('.chart').easyPieChart({
            trackColor:'#0e0f10',
            scaleColor:false,
            easing: 'easeOutBounce',
            scaleLength: 4,
            lineCap: 'square',
            lineWidth:5,
            size:130,
            animate: {
                        duration: 2500,
                        enabled: true
                }
	});
	}
	
	/* -----------------------------------
	10. Portfolio Tilt Setup
	----------------------------------- */
    $('.pt-portfolio .portfolio-items .item figure').tilt({
        maxTilt: 3,
        glare: true,
        maxGlare: .6,
        reverse: true
    });
	
	/* -----------------------------------
	11. Portfolio Image Link
	----------------------------------- */
	$(".portfolio-items .image-link").magnificPopup({
		type: "image"
	});
	
	/* -----------------------------------
	12. Portfolio Video Link
	----------------------------------- */
	$(".portfolio-items .video-link").magnificPopup({
		type: "iframe"
	});
	
	/* -----------------------------------
	13. Blog Video Link
	----------------------------------- */
	$(".pt-blog .blog-item .thumbnail .btn-play").magnificPopup({
		type: "iframe"
	});
	
	/* -----------------------------------
    14. Validate Contact Form
    ----------------------------------- */
    function cleanForm() {
        $('#name').val('');
        $('#celphone').val('');
        $('#email').val('');
        $('#note').val('');
        
    }
	$('#cancel').click(function (e) { 
        e.preventDefault();
        cleanForm()
    });
    document.getElementById('sendForm').addEventListener('click', async () => {
        let name = $('#name').val();
        let celphone = $('#celphone').val();
        let email = $('#email').val();
        let note = $('#note').val();
        
        
        
        let message = {
            name,
            celphone,
            email,
            note
        }
        console.log(message);   
        fetch('/api/send', { method: 'POST', body: JSON.stringify(message),headers:{'Content-Type': 'application/json'}})
        .then((t) => {
            console.log('Todo en orden')
            $( "#loader").hide();
                $( "#success").slideDown( "slow" );
                setTimeout(function() {
                $( "#success").slideUp( "slow" );
                }, 3000);
            cleanForm()
        })
        .catch(( e ) => {  
            console.log(e)
            $( "#loader").hide();
            $( "#error").slideDown( "slow" );
            setTimeout(function() {
            $( "#error").slideUp( "slow" );
            }, 3000);
        })
    })

    
	/* -----------------------------------
	5. Glitch Effect
	----------------------------------- */
	/*
	$(".glitch").mgGlitch({
		destroy: false,
		glitch: true,
		scale: true,
		blend: true,
		blendModeType: "hue",
		glitch1TimeMin: 200,
		glitch1TimeMax: 400,
		glitch2TimeMin: 10,
		glitch2TimeMax: 100
	});*/
	
});
