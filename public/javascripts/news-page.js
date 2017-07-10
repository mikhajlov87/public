$('.audio').find('button').on('click', function () {
    if ( $(this).find('i').hasClass('fa-play') ) {
        $(this).find('i').removeClass('fa-play');
        $(this).find('i').addClass('fa-pause');
    } else {
        $(this).find('i').removeClass('fa-pause');
        $(this).find('i').addClass('fa-play');
    }
});
