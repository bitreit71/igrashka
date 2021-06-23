
$(document) .ready(function() {
    $('.header__burger,.header__menubar_closed-img').click(function(event) {
        $('.header__burger,.screen-1__menu-container') .toggleClass('active');
        $('.popup-1,.popups__background-1').removeClass('active2');
        $('.popup-2,.popups__background-2').removeClass('active3');
        $('.popup-3,.popups__background-3').removeClass('active4');    
    });
    
    $('.screen-1__button-1,.popup-1__closed,.popups__background-1').click(function(event) {
        $('.popup-1,.popups__background-1').toggleClass('active2');
        $('.popup-2,.popups__background-2').removeClass('active3');
        $('.popup-3,.popups__background-3').removeClass('active4');   
    });

    $('.screen-1__show-popup-2,.popup-2__closed,.popups__background-2').click(function(event) {
        $('.popup-2,.popups__background-2').toggleClass('active3');
        $('.popup-1,.popups__background-1').removeClass('active2');
        $('.popup-3,.popups__background-3').removeClass('active4');  
    });

    $('.screen-1__show-popup-3,.popup-3__closed,.popups__background-3').click(function(event) {
        $('.popup-3,.popups__background-3').toggleClass('active4');   
        $('.popup-1,.popups__background-1').removeClass('active2');
        $('.popup-2,.popups__background-2').removeClass('active3');
    });






    $('.header__p1').click(function(event) {
        $('.screen-1__menu-container,.header__burger').removeClass('active');    
    });

    $('.header__p2').click(function(event) {
        $('.') .toggleClass('active6');
        $('.popup-1,.popups__background-1').removeClass('active2');
        $('.popup-2,.popups__background-2').removeClass('active3');
        $('.popup-3,.popups__background-3').removeClass('active4');    
    });

    $('.header__p3').click(function(event) {
        $('.popup-2,.popups__background-2').toggleClass('active3'); 
    });

    $('.header__p5').click(function(event) {
        $('.popup-3,.popups__background-3').toggleClass('active4'); 
    });





    $(".popup-1__press-1,.popup-1__press-2").click(function() {
        $(this).toggleClass("pressed");
    });


    $('.popup-1__tabs-content').each(function() {
        let ths = $(this);
        ths.find('.popup-1__tabs-item-1,.popup-1__tabs-item-2').not(':first').hide();
        ths.find('.popup-1__tab').click(function() {
            ths.find('.popup-1__tab').removeClass('active').eq($(this).index()).addClass('active');
            ths.find('.popup-1__tabs-item-1,.popup-1__tabs-item-2').hide().eq($(this).index()).show();
        }).eq(0).addClass('active');
    });
});