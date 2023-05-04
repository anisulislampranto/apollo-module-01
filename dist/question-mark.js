"use strict";
var _a, _b;
// ternary operator
var age = 20;
if (age >= 18) {
    console.log('You are adult');
}
else {
    console.log('You are not adult');
}
var isAdult = age >= 18 ? 'yes' : 'no';
console.log(isAdult);
// Nullish coalescing operator
// Null and Undefined 
var isAuthenticatedUser = '';
var userName = isAuthenticatedUser !== null && isAuthenticatedUser !== void 0 ? isAuthenticatedUser : 'guest';
var userName2 = isAuthenticatedUser ? isAuthenticatedUser : 'guest';
var manush1 = {
    name: 'montu',
    age: 20,
    profession: 'pain',
    address: {
        city: 'string',
        road: 'string',
    }
};
var home = (_b = (_a = manush1 === null || manush1 === void 0 ? void 0 : manush1.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : 'noHome'; // no home
console.log(home);
