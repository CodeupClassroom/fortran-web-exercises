"use strict";

let numbers = [7 ,-8 ,4 ,2 ,2 ,6];

for (let i = numbers.length - 1; i >= 0 ; i--) {
        console.log(numbers[i]);
}

let instructors = ['Casey', 'Docrob', 'Ry', 'Jay', 'David'];

instructors.sort();

console.log(instructors);

numbers.sort();

console.log(numbers);

// SPLITTING AND JOINING

let userInfo = "ry,sutton,08/11/1994/,ryasutton,ford,mustang";

// let userInfoArr = userInfo.split(',');
let userInfoArr = userInfo.split('');
console.log(userInfoArr);

let userInfoAgain = userInfoArr.join(',');

console.log(userInfoAgain);


let dt = new Date().toString();
console.log(dt.split('T')[0]);




