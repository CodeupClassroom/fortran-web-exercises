"use strict";


function findAverage(grades) {
    let sum = 0;
    // grades.forEach(function (grade) {
    //     sum += grade;
    // })
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    return sum / grades.length;
}

console.log(findAverage([95, 74, 86, 100]));