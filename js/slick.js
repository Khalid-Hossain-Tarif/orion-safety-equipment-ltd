//Header Hero Slider
$('.hero-slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    fade: true,
    cssEase: 'linear'
});

//Product Slider
$('.products-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,


    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});