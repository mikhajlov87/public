$('.main-article__play-button').on('click', function () {
    var img = $(this).find('img');
    var audio = $('#audio');
    if (img.attr('src') === 'images/play-button.png') {
        img.attr('src', 'images/pause-button.png');
        audio.play();
    } else {
        img.attr('src', 'images/play-button.png');
        audio.pause();
    }
});
