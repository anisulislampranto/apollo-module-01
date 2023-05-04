"use strict";
var emni;
emni = 'this is the';
emni
    // below syntax won't work on tsx
    < string > emni.length;
function kgToGram(param) {
    if (typeof param === 'string') {
        var value = parseFloat(param) * 1000;
        return "The converted result is: " + value + " gram";
    }
    if (typeof param === 'number') {
        var value = param * 1000;
        return value;
    }
}
var result = kgToGram(1000);
var result1 = kgToGram("1000");
try {
}
catch (error) {
    console.log(error.message);
}
console.log('res', result);
