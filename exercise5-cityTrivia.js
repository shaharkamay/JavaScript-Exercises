"use strict";
function guessCity(capital, coastal, famous, ancient) {
    let isCityProperty = {
        "Jerusalem": [true, false, true, true],
        "Tel-Aviv": [false, true, true, false],
        "Acre": [false, true, false, true],
        "Katzrin": [false, false, false, true],
        "Zikim": [false, true, false, false],
        "Musmus": [false, false, false, false]
    }
    let propArr = [capital, coastal, famous, ancient];
    if(compareCityAndProp(isCityProperty, "Jerusalem", propArr)) return "Jerusalem";
    else if (compareCityAndProp(isCityProperty, "Tel-Aviv", propArr)) return "Tel-Aviv";
    else if (compareCityAndProp(isCityProperty, "Acre", propArr)) return "Acre";
    else if (compareCityAndProp(isCityProperty, "Katzrin", propArr)) return "Katzrin";
    else if (compareCityAndProp(isCityProperty, "Zikim", propArr)) return "Zikim";
    else if (compareCityAndProp(isCityProperty, "Musmus", propArr)) return "Musmus";
    return undefined;
}

function compareCityAndProp(obj, city, propArr) {
    return obj[city].toString() === propArr.toString();
}

console.log(guessCity(false, true, true, false));