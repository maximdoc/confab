$(function () {

    $('.events__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        variableWidth: true,
        focusOnSelect: true,
        appendArrows:'.wrapper__arrows',
        prevArrow:'.slick__prev',
        nextArrow:'.slick__next'
    });

    $('.menu_btn').on('click', function (){
        $('.menu_btn').toggleClass('menu_btn--active');
        $('.menu__list').toggleClass('menu__list--active');
    });

    $('.header_menu-link').on('click', function (){
        $('.menu_btn').removeClass('menu_btn--active');
        $('.menu__list').removeClass('menu_list--active');
    });

});