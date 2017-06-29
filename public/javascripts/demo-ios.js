$(document).ready(function () {
    var carousel = $('.app').find('.owl-carousel'),
        searchField = $('.search-field').find('input');

    carousel.owlCarousel({
        margin:2,
        loop:true,
        items:3
    });

    $('.launch-btn').on('click', function () {
        var display = $('.display-demo'),
            clock = $('.clock-container');
        display.toggleClass('on');
        if ( display.hasClass('on') ) {
            display.fadeIn();
            clock.fadeIn();
            $('.icon-ios').on('click', function () {
                $(this).animate({
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0
                }, 300);
                $('.clock-container').fadeOut();
                $(this).css({
                    'background': '#f0f0f0',
                    'border': 'none',
                    'cursor': 'default'
                });
                $('.app').fadeIn();
                $(this).unbind('click');
            });
        } else {
            clock.fadeOut();
            $('.app').fadeOut();
            $('.icon-ios').animate({
                width: '50px',
                height: '50px',
                bottom: '30px',
                left: '20px'
            }, 300).css({
                cursor: '',
                width: '',
                height: '',
                top: '',
                bottom: '',
                left: '',
                background: ''
            });
            setTimeout(function () {
                display.fadeOut();
            }, 150);
        }
    });

    setInterval( function () {
        var date = new Date(),
            hours = $('.hours'),
            minutes = $('.min'),
            dateContainer = $('.date-container'),
            options = {
                month: 'long',
                day: 'numeric',
                weekday: 'long',
                timezone: 'UTC'
            };

        if ( date.getHours() !== Number( hours.text() )) {
            ( date.getHours() < 10 ) ? hours.text( '0' + date.getHours() ) : hours.text( date.getHours() );
        }
        if ( date.getMinutes() !== Number( minutes.text() )) {
            ( date.getMinutes() < 10 ) ? minutes.text( '0' + date.getMinutes() ) : minutes.text( date.getMinutes() );
        }
        if ( date.toLocaleString('ru', options) !== dateContainer.text() ) {
            dateContainer.text( date.toLocaleString('ru', options) );
        }
    }, 1000 );

    // carousel.find('img').mousedown(function (event) {
    //     var start = event.pageX, end,
    //         this_carousel = $(this).parents('.owl-carousel');
    //
    //     $(this).mouseup(function (event) {
    //         end = event.pageX;
    //         if (start === end) {
    //             if ( this_carousel.hasClass('full-screen') ) {
    //                 $('.static-panel').show();
    //                 $('.header-app').show();
    //                 $('.app-page').toggleClass('full-screen');
    //                 $('.user-photos').show();
    //                 $('.public-date').show();
    //                 $('.photos-container').css({ 'border': '', 'padding': '' });
    //                 this_carousel.toggleClass('full-screen').animate({ top: '0' });
    //             } else {
    //                 $('.static-panel').hide();
    //                 $('.header-app').hide();
    //                 $('.app-page').toggleClass('full-screen');
    //                 $('.user-photos').hide();
    //                 $('.photos-container').css({ 'border': 'none', 'padding': '0' });
    //                 this_carousel.parents('.user-photos').show().find('.public-date').hide();
    //                 this_carousel.toggleClass('full-screen').animate({ top: '160px' });
    //             }
    //         }
    //     });
    // });

    $('.location').on('click', function () {
        $(this).hide();
        $('.app-page').hide();
        $('.search-page').show();
        $('.search-container').show();
    });
    
    $('.search-container').find('button').on('click', function () {
        if ( !( $(this).hasClass('active') ) ) {
            $('.search-container').find('button').toggleClass('active');
        }
    });
    
    searchField.focus(function () {
        $('.placeholder-search').hide();
        $(this).attr('placeholder', '');
    });

    searchField.blur(function () {
        if ( !( $(this).val() )) {
            $('.placeholder-search').show();
            $(this).attr('placeholder', 'Поиск');
        }
    });
});
