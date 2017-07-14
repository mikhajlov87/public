var socialSign = $('.iuic-social-sign');

socialSign.find('.btn-link').on('click', function (event) {
    var url = $(this).attr("href");
    event.preventDefault();
    socialSign.animate({ 'right': '-150px' }, 750);
    window.location.href = url;
});
