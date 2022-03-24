'use strict';
var scopeyBoi = 'string scoping thing';

const super_secret_key = {name: "casey", age: 21}; // you can't change the value bc strings are immutable

super_secret_key.name = 'bob';

//differences b/t let and var


// {
//     let sample = "hi there";
//     {
//         {
//             {
//                 {
//                     console.log(sample);
//                 }
//             }
//         }
//     }
// }

// let sample = 'hi there';
//
// let scopeyBoi = function(){
//     console.log(sample);
// }
//
// scopeyBoi();



//
// function notLexicalThings(){
//     console.log(this.global.parseInt('12')); //'this' is currently NOT lexical
// }
//
// notLexicalThings();
// function lexicalThings(){
//     console.log(this); //'this' is currently not lexical
// }
//
// lexicalThings();


// let lexicalThings = () => {
//         console.log(this.global); //'this' is currently NOT lexical
//     this['new prop'] = "string boi";
//     return this;
// }
//
// console.log(lexicalThings())


export function hopeThisIsVisible(){
    console.log('this function is visible');
}























