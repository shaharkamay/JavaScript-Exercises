"use strict";
const input = "abccd";
const expectedOutput = "c";

function heavyChar(str) {
    str = str.toLowerCase();
    let arr = [];
    for (let i = 0; i < 26; i++) {
        arr.push(0);
    }
    for (let i = 0; i < str.length; i++) {
        arr[getLetterIndex(str[i])] += getLetterIndex(str[i]) + 1;
    }
    let heaviestLetter = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i] < arr[i + 1]) {
            heaviestLetter = i + 1;
        }
    }
    return getLetterFromIndex(heaviestLetter);
}

function getLetterIndex(char) {
    let letters = "abcdefghijklmnopqrstuvwxyz";
    return letters.indexOf(char);
}

function getLetterFromIndex(index) {
    let letters = "abcdefghijklmnopqrstuvwxyz";
    return letters[index];
}

console.log(heavyChar("abhbccdh"));
