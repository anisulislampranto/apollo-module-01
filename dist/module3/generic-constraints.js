"use strict";
// const addInMyCrushMind = <T> (myInfo: T) => {
//     const crush = 'mahi';
//     const newData = {...myInfo, crush}
//     return newData
// }
// 
// const addInMyCrushMind = <T extends {name: string, age: number}> (myInfo: T) => {
//     const crush = 'mahi';
//     const newData = {...myInfo, crush}
//     return newData
// }
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var addInMyCrushMind = function (myInfo) {
    var crush = 'mahi';
    var newData = __assign(__assign({}, myInfo), { crush: crush });
    return newData;
};
var myInfo = {
    name: 'pranto',
    age: 20,
    profession: 'pain',
    address: 'dhaka',
    addresss: 'dhaka',
    addressss: 'dhaka',
};
var res8 = addInMyCrushMind(myInfo);
