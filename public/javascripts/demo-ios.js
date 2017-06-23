$(document).ready(function () {
    var carousel = $('.owl-carousel');

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
            carousel.owlCarousel({
                margin: 0,
                loop: true,
                items: 1
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

    carousel.find('img').mousedown(function (event) {
        var carousel = $('.owl-carousel'),
            imgContainer = $('.image-click-container'),
            value = $(this).attr('src');

        var start = event.pageX, end;

        $(this).mouseup(function (event) {
            end = event.pageX;
            if (start === end) {
                $('.static-panel').hide();
                carousel.hide();
                imgContainer.fadeIn();
                imgContainer.find('img').attr('src', value).animate({ top: '180px' });
            }
        });
    });

    $('.image-click-container').on('click', function () {
        var that = $(this);

        that.find('img').animate({ top: '20px' });
        $('.static-panel').show();
        setTimeout(function () {
            that.fadeOut();
            $('.owl-carousel').show();
        }, 250);
    });
});
