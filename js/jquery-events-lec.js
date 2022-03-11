"use strict";

$(document).ready(function () {

    // MOUSE EVENTS
    $('li').click(function () {
        $(this).css('background-color', 'yellow');
    });

    $('p').click(function () {
        console.log($(this).css('background-color'));
        if ($(this).css('background-color') === 'rgba(0, 0, 0, 0)') {
            $(this).css('background-color', 'yellow');
        } else {
            $(this).css('background-color', 'rgba(0, 0, 0, 0)');
        }
    });

    $('h1').dblclick(function (e) {
        console.log(e);
        $(this).css('color', 'teal');
    });

    $('.sec-intro').hover(function () {
            $(this).css('font-style', 'italic');
        },
        function () {
            $(this).css('font-style', 'normal');
        });

    // KEYBOARD EVENTS

    // $('#search').keyup(function (e) {
    //     console.log(e.key);
    // });

    $('#search').keydown(function (e) {
        console.log(e.key);
    });

    // $('#search').keypress(function (e) {
    //     console.log(e.key);
    // });

})