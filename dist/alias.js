"use strict";
var crush1 = {
    name: 'crash',
    age: 20,
    profession: 'pain',
    address: 'dhaka',
};
var crush2 = {
    name: 'crash 2',
    age: 20,
    profession: 'pain',
    address: 'dhaka',
};
var crush3 = {
    name: 'crash 3',
    age: 20,
    profession: 'pain',
    address: 'dhaka',
};
var crush4 = {
    name: 'crash 4',
    age: 20,
    profession: 'pain',
    address: 'dhaka',
};
var isCrushMarried = true;
var crushName = 'crash';
var calculate = function (num1, num2, operation) {
    return operation(num1, num2);
};
calculate(1, 2, function (x, y) { return x + y; });
calculate(1, 2, function (x, y) { return x - y; });
calculate(1, 2, function (x, y) { return x / y; });
calculate(1, 2, function (x, y) { return x * y; });
