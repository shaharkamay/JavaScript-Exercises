"use strict";

function getMaxRange(arr) {

    return (arr[arr.length - 1] - arr[0]);
}

function getMedianOrgan(arr) {
    return arr[Math.floor(arr.length/2)];
}

function compareNumbers(a, b) {
    return a - b;
}

const grades =  [73, 91, 88, 56, 62, 84, 95, 96, 88, 92];
let halfArray = grades.slice(Math.floor(grades.length/2));
grades.sort(compareNumbers);
halfArray.sort(compareNumbers);
console.log("Stats:\n\tRange: " + getMaxRange(grades) + "\n\tMedian: " + getMedianOrgan(grades) + "\n\tHalf Range: " + getMaxRange(halfArray));