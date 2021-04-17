$(document).ready(function(){
	// owl carousel
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2,
            margin:5
        },
        992:{
            items:3
        }
    }
    });

});
