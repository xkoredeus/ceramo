$('.main-slider').owlCarousel({
    nav: true,
    dots: false,
    items: 1,
    loop: false,
    navText: ["<img src='img/main-slider__prev.png' alt='main-slider__prev.png'>", "<img src='img/main-slider__next.png' alt='main-slider__next.png'>"]
});
$('.offers__slider').owlCarousel({
    nav: true,
    dots: false,
    items: 4,
    loop: false,
    margin: 20,
    navText: ["<img src='img/offers__prev.png' alt='offers__prev.png'>", "<img src='img/offers__next.png' alt='offers__next.png'>"]
});

//Tabs
$(document).ready(function () {
$(".tab-content__item").hide();
$(".tabs__container div.tab-content__item:first-child").show();
    $('ul.tabs__list > li').click(function () {
        if (!($(this).hasClass('active'))) {
            var thisLi = $(this);
            var numLi = thisLi.index();
            thisLi.addClass('active').siblings().removeClass('active');
            thisLi.parent().next().children('div').hide().eq(numLi).fadeIn('slow');
        }
    });
});