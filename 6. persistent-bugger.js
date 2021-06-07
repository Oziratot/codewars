/*
Write a function, persistence, that takes in a positive parameter num 
and returns its multiplicative persistence, which is the number of times
you must multiply the digits in num until you reach a single digit. */

function persistence(num) {
    let arr = num.toString().split('');
    let i = 0
    while (arr.length > 1) {
        arr = arr.reduce((p, c) => p * c, 1).toString().split('');
        i++;
    }
    return i;
 }

console.log(persistence(39));