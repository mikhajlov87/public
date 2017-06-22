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

$('#carousel-example-generic').find('img').on('click', function () {
    var carousel = $('#carousel-example-generic'),
        imgContainer = $('.image-click-container'),
        value = $(this).attr('src');

    $('.static-panel').fadeOut();
    carousel.fadeOut();
    imgContainer.fadeIn();
    imgContainer.find('img').attr('src', value);
});

$('.image-click-container').on('click', function () {
    $(this).fadeOut();
    $('.static-panel').fadeIn();
    $('#carousel-example-generic').fadeIn();
});
