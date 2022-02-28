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


function removeAll(anArr, valueToRemove) {
    let filteredArr = [];
    // anArr.forEach(function (ele) {
    //     if (valueToRemove !== ele) {
    //         filteredArr.push(ele);
    //     }
    // });

    for (let i = 0; i < anArr.length; i++) {
        if (valueToRemove === anArr[i]) {
            continue;
        }
        filteredArr.push(anArr[i]);
    }

    return filteredArr;
}

let bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];

console.log(removeAll(bugs, "ant"));