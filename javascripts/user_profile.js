$(document).ready(function () {
  var infoBrowser = navigator.userAgent + '', 
      browser = infoBrowser.search(/Firefox/i);
  if (browser !== -1) {
    $('.modal.profile-wrapper .modal-content .profile-col-right').css('padding-right', '0');
  }
  $('.into-profile').on('click', showUserProfile);
  $('.make-profile-toolbar').on('click', showUserProfile);
  $('.specialist-card').on('click',showUserProfile);
  $('.profile-header .nav-stacked li').on('click', showUserProfile);
  $('.close-profile').on('click', function () {
    $('.body-wrapper').show();
    $('.panel-collapse').collapse('hide');
  });
  $('.carousel').carousel({
    interval: 0
  });
  $('#collapseConversation1 .chat-wrapper a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
  });
  $('.tagRemove').click(function(e) {
    e.preventDefault();
    $(this).parent(li).remove();
  });
  $('.mail-enter-profile').on('click', function () {
    $('.mail-form').toggle();
    $(this).toggleClass('mail-enter-active');
  });
  $('.btn-edit').on('click', function () {
    $(this).toggleClass('mail-enter-active').blur();
  });
  openDiffAccordeons ('#user-info-extended', '#collapseEditMain', '.profile-edit');
  openDiffAccordeons ('.job-offers .panel-collapse', '#collapseEditJob', '.profile-edit');
  openDiffAccordeons ('.partners .panel-collapse', '#collapsePartner');
  openDiffAccordeons ('.conversations .panel-collapse', '#collapseNewConversation');
  openDiffAccordeons ('.events .panel-collapse', '#collapseCalendar');
  openDiffAccordeons ('.gallery .panel-collapse', '#collapseThumbnail1');
  openDiffAccordeons ('.video-gallery .panel-collapse', '#collapseVideo');
  openDiffAccordeons ('.action-sites-user .panel-collapse', '#collapseActionSite');
  openDiffAccordeons ('.articles-user .panel-collapse', '#collapsePublication');
  $('.btn-edit').on('click', function () {
    $('.profile-edit').toggle();
  });
  $('.left-side-content > .collapse').on('resize, show.bs.collapse, shown.bs.collapse', function () {
    var height = $(this).height();
    $(this).css('margin-top', 'calc(50% - ' + (height/2) + 'px)');
  });
  $('#collapseNewConversation').on('show.bs.collapse', function () {
    $('.new-dialog').addClass('btn-active-tab');
  });
  $('#collapseNewConversation').on('hide.bs.collapse', function () {
    $('.new-dialog').removeClass('btn-active-tab');
  });
  $('.job-offers .btn-tab').on('click', function () {
    $(this).toggleClass('btn-active-tab');
  });
  $('.partners .btn-tab').on('click', function () {
    $(this).toggleClass('btn-active-tab');
  });
  $('.modal.profile-wrapper .modal-content .profile-col-right .profile-accordion .events td.author .name a').on('click', function(e) {
    e.stopPropagation();
  });
  $('.profile-accordion .panel-profile').on('show.bs.collapse', function() {
    $(this).find('.acc-label').addClass('opened');
  });
  $('.profile-accordion .panel-profile').on('hide.bs.collapse', function() {
    $(this).find('.acc-label').removeClass('opened');
  });
  $('.user-info-extended button.btn-block').on('click', function () {
    $(this).toggleClass('active');
  });
});
function showUserProfile () {
  var btnClass = $(this).attr('class'),
      collapseClass = '.' + btnClass + ' .panel-collapse';
  $('.body-wrapper').hide();
  $('#profileModal').modal('show');
  $(collapseClass).collapse('show');
}
function openDiffAccordeons (main, leftPanel, additional) {
  function openCollapses (leftPanel, action, additional) {
    $(leftPanel).collapse(action);
    if (action == 'show') {
      $(additional).slideDown();
    } else {
      $(additional).slideUp();
    }
  }
  $(main).on({
    'show.bs.collapse' : function () {
      openCollapses(leftPanel, 'show', additional);
    },
    'hide.bs.collapse' : function () {
      openCollapses(leftPanel, 'hide', additional);
    }}).children().on('show.bs.collapse, hide.bs.collapse', function (event) {
    event.stopPropagation();
  });
}

// var vocationListHeight =  $('#modalAddVocation ul.vocation-list').height();
// var categoryListHeight = $('#modalAddVocation ul.category-list').height();
// vocationListHeight = categoryListHeight;
