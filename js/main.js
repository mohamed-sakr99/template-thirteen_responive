$(document).ready(function() {
    // header owl carosel
    $('.header .owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        animateOut: 'fadeOut',
        smartSpeed: 450
    })

      // brands owl carosel
      $('.brands .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        responsive: {0: {items:2}, 768: {items:4}, 992: {items:6}}
    })

    //side menu
    $('.menu').on('click', function(){
        $('.side-menu').toggleClass('open')
    });

    $('.fa-times').on('click', function(){
        $('.side-menu').removeClass('open')
    });

    // toggles betwee navs
    $(window).scroll(function(){
        if($(window).scrollTop() >= 30) {
            $('.nav-top').fadeIn(500);
            $('.nav-left').fadeOut(500);
        }else{
            $('.nav-top').fadeOut(500);
            $('.nav-left').fadeIn(500);
        }
    });

    // countdown
    var content = $('.countdown').html();
    $('.countdown').countdown('2021/01/01', function(event) {
        $(this).html(event.strftime(content));
      });
    
    // switch between links 
    var link = $('link[data-color="switch"]'),
        logo = $('.logo img')

    $('.fa-adjust').on('click', function(){
        if(link.attr('href')== 'css/style-dark.css') {
            link.attr('href','css/style-light.css')
            logo.attr('src','images/logo-dark.png')
        }else{
            link.attr('href','css/style-dark.css')
            logo.atrr('src','images/logo.png')
        }
    });
});