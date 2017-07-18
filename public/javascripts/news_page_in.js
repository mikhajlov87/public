$(document).ready(function () {
    var logOut = $('.log-out'),
        profile = $('.profile-wrapper');

    setTimeout(function () {
        profile.animate({'right': 0 }, 500);
    }, 1000);

    logOut.on('click', function (event) {
        var _this = $(this);
        event.preventDefault();
        profile.animate({'right': '-180px' }, 500);
        setTimeout(function () {
            window.location.href = _this.attr("href");
        }, 500);
    });
});
