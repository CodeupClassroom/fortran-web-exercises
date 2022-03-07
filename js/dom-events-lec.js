"use strict";


let handler = function (event) {
    alert("You clicked something!");
}

// FUNCTION EXPRESSION ONLY ACCESIBLE BELOW
// document.addEventListener("click", handler);


// THREE STEPS OF EVENT LISTENERS
// ACCESS (GRAB) ELEMENT
let header = document.querySelector("#main-header");

// ATTACH EVENT LISTENER
header.addEventListener("click", headerClick);

// WHAT HAPPENS ON HEADER CLICK
function headerClick(event) {
    header.style.backgroundColor = "yellow";
}


let input = document.querySelector("#search");

// input.addEventListener("keyup", function (event) {
//     // PRINT ELEMENT
//     console.log(event.target);
//
//     // PRINT KEY CODE
//     console.log(event.code);
// });

input.addEventListener("keyup", upperCaseTextInput)

function upperCaseTextInput(event) {
    console.log(event.target.value);
    event.target.value = event.target.value.toUpperCase();
}


let moreBtn = document.querySelector("#more");

moreBtn.addEventListener("click", function (e) {
    let p = e.target.previousElementSibling
    if (p.classList.contains("hidden")) {
        p.classList.remove("hidden");
        e.target.innerText = "Less";
    } else {
        p.classList.add("hidden");
        e.target.innerText = "More";
    }
});



