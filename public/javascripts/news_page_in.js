$(document).ready(function () {
    var logOut = $('.log-out'),
        profile = $('.profile-wrapper');

    setTimeout(function () {
        profile.animate({'right': 0 }, 500);
    }, 1000);

    logOut.on('click', function (event) {
        event.preventDefault();
        profile.animate({'right': '-180px' }, 500);
        window.location.href = $(this).attr("href");
    });
});
