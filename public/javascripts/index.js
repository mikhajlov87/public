$('.offers-col > ul.list-group .list-group-item').on('click', function () {
  $(this).find('.city-crumb').on('click', function (e) {
    e.stopPropagation();
  });
  $(this).find('.btn-delete').on('click', function (e) {
    e.stopPropagation();
  });
});
$('.enter-buttons .email').on('click', function(event) {
	event.preventDefault();
	$('.e-mail-form').toggleClass('invisible');
});
$('.top-alert-close').on('click', function () {
	$('.top-alert').slideToggle();
})
;
