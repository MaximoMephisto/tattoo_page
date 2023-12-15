window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.carousel__indicadores',
        draggable: true,
        arrows: {
        prev: '.carousel__anterior',
        next: '.carousel__siguiente'
        },
        responsive: [{
            breakpoint: 540,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            }
            },  {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }]
    });
});