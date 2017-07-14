$(document).ready(function () {
    var socialSign = $('.iuic-social-sign');

    setTimeout(function () {
        socialSign.animate({ 'right': '15px' }, 500);
    }, 1000);

    socialSign.find('.btn-link').on('click', function (event) {
        var url = $(this).attr("href");
        event.preventDefault();
        socialSign.animate({ 'right': '-150px' }, 500);
        window.location.href = url;
    });
});
