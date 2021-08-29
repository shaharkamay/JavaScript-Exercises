"use strict";
const num = 856
let sum = 0
// your code goes here
let newNum = num.toString();

sum = Number(newNum.charAt(0)) + Number(newNum.charAt(1)) + Number(newNum.charAt(2));
console.log(sum)