"use strict";
// normal function 
function add(num1, num2) {
    return num1 + num2;
}
// add('1', 2) // not allowed
add(1, 2); // allowed
// arrow function
var add2 = function (num1, num2) { return num1 + num2; };
var arr = [1, 2, 3, 4, 5]; // string not allowed in this array because we have defined the type of this array as number
var newArr = arr.map(function (item) { return item * item; });
var person = {
    name: 'montu',
    bdt: 2000,
    addBdt: function (money) {
        // return this.bdt + 1
        return "My balance is " + (this.bdt + money);
    }
};
// using void there is no return type
var personn = {
    name: 'montu',
    bdt: 2000,
    addBdt: function (money) {
        // return this.bdt + 1
        console.log("My balance is " + (this.bdt + money));
    }
};
// default parameter
function add3(num1, num2) {
    if (num1 === void 0) { num1 = 10; }
    return num1 + num2;
}
function add4(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
add3(1, 2); // allowed
// add3(1) // not allowed
add4(1, 2); // allowed
add4(1); // allowed
// spread operator
var bondhura = ['musfira', 'nusaiba', 'mahi'];
var bondhura2 = ['siam', 'hafsa', 'sufiyan'];
var myBestFriend = {
    firstName: 'musfira',
    age: 20,
    company: 'programming hero',
};
var bestFriend = bondhura[0];
var firstName = myBestFriend.firstName;
var string = myBestFriend.firstName; // not going to take it as a string type instead it will take it as a name alias mean firstName will be known as string
// if we console.log(string) it will show the firstName value
console.log(string);
// bondhura.push(...bondhura2)
// console.log(bondhura);
// rest parameter
var greetFriends = function (friend1, friend2, friend3) {
    console.log("Hello " + friend1 + ", " + friend2 + ", " + friend3);
};
// greetFriends('musfira', 'nusaiba', 'mahi', 'bhai') // not allowed
// use this instead
var greetFriendss = function () {
    var friends = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        friends[_i] = arguments[_i];
    }
    friends.forEach(function (friend) {
        console.log("Hello " + friend);
    });
};
greetFriendss('musfira', 'nusaiba', 'mahi', 'bhai', 'siam', 'hafsa', 'sufiyan', 'arekjon'); // allowed
// Array and object destructuring
