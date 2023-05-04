"use strict";
// Arrow function
var createArray1 = function (param) {
    return [param];
};
var createArray = function (param) {
    return [param];
};
var createArray2 = function (param1, param2, param3) {
    return [param1, param2, param3];
};
var res = createArray('hello');
var res2 = createArray(false);
var res3 = createArray({ name: 'name' });
var res4 = createArray({ name: 'name' });
var res5 = createArray2('hello', 'hello', 5);
var res6 = createArray2('hello', 'hello', ['5']);
var res7 = createArray2('hello', 'hello', ['5']);
// spread operator
// const myInfo = {
//     name: 'pranto',
//     age: 20,
//     profession: 'pain',
//     address: 'dhaka',
// }
// // const newData = {...myInfo, crush}
// const addInMyCrushMind = <T> (myInfo: T) => {
//     const crush = 'mahi';
//     const newData = {...myInfo, crush}
//     return newData
// }
// const res8 = addInMyCrushMind(myInfo)
