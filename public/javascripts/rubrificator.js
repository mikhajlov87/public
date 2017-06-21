$('.panel.rubrificator__panel').on('click', function () {
    var $panel = $('.panel.rubrificator__panel');
    $panel.find('h4.heading.tab__heading').removeClass('active');
    $panel.find('.control-link').addClass('cl-effect-4');
    $(this).find('h4.heading.tab__heading').addClass('active');
    $(this).find('.control-link').removeClass('cl-effect-4');
});
