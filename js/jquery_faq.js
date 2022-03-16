$('dd').addClass("invis");

$('dl').after("<button id='invisible-toggler' type='button'>Toggle Invisible</button>");

$('#invisible-toggler').click(function () {
    $(this)
        .siblings("dl")
        .children("dd")
        .toggleClass("invis");
});


