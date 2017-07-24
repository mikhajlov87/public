$(function () {

  $('.header a.btn.subscribe').click(function(event) {
    $('.header a.btn.subscribe').toggleClass('active');

  });

  $('[data-toggle="tooltip"], [data-toggle2="tooltip"]').tooltip();
  $('.action-menu li').on('click', function (e) {
    e.preventDefault();
    $('.action-menu').find('li').removeClass('active')
    $('.site .content div[id^="collapse"]').collapse('hide');
    $(this).toggleClass('active');
  });
  $('.site .header .nav-pills a').on('click', function (e) {
    e.preventDefault();
    $('.action-menu').find('li').removeClass('active')
    $('.site .content div[id^="collapse"]').collapse('hide');
  });
});
