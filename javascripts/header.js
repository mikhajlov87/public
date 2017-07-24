$('.dropdown-toggle').dropdown();
$('.login-by-mail').on('click', function () {
	$('.login-form').toggleClass('active');
	$('#user_email').focus();
	$(this).hide();
});
$('#dropdownCountry').on('click', function () {
	$('#dropdownAboutUs').toggle();
});
// $('#modalCountryInfo').modal(options);
$('.country-name').on('click', function (e) {
		var imgPath = $(this).prev().attr('src');
    var img = $("<img>", {src: imgPath, "class": "dropdown-img"});
    var dropdown = $('#dropdownCountry');
    dropdown.addClass('text-left');
    dropdown.text( $(this).text() );
    dropdown.prepend(img);
});

$('.responsive-link').on('click', function (event) {
    if ( $(this).hasClass('active-link') ) {
        event.preventDefault();
    } else {
        $('.responsive-link').removeClass('.active-link');
        $(this).addClass('.active-link');
    }
});
