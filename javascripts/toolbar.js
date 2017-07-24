$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (!$('body').is('[class^="adminsinfo"]')) {
    if (y > 300) {
      $('.make-profile-toolbar').show();
      $('.my-profile-toolbar').show();
      // $('.city-menu').show();
    } else {
      $('.make-profile-toolbar').hide();
      $('.my-profile-toolbar').hide();
      // $('.city-menu').hide();
    }
  }
});
if ($('body').is('[class^="adminsinfo"]')) {
  $('.my-profile-toolbar').show();
}
$('#main-search').on('mouseover', function () {
  $('.search-input').focus().attr('placeholder', '');
}).on('focusout', function () {
  var $body = $('body'),
      $search = $('.search-input');
  switch (true) {
    case $body.is('[class^="news_page"]'):
    case $body.is('[class^="town_page_news"]'):
      $search.attr('placeholder', 'Поиск');
      break;
    case $body.is('[class^="action-site"]'):
    case $body.is('[class^="sites_page"]'):
    case $body.is('[class^="town_page_sites"]'):
      $search.attr('placeholder', 'Искать объекты');
      break;
    default:
      $search.attr('placeholder', 'Искать специалистов');
  }
});
