"use strict";
// const rollNumbers: number[] = [1, 2, 4, 5, 6, 9];
// const rollNumbers: Array<number> = [1, 2, 4, 5, 6, 9];
// const rollNumbers2: string [] = ['1', '2', '4', '5', '6', '9'];
// const rollNumbers2: Array<string> = ['1', '2', '4', '5', '6', '9'];
// const rollNumbers: number[] = [1, 2, 4, 5, 6, 9];
var rollNumbers = [1, 2, 4, 5, 6, 9];
// const rollNumbers2: string [] = ['1', '2', '4', '5', '6', '9'];
var rollNumbers2 = ['1', '2', '4', '5', '6', '9'];
var rollNumbers3 = [true, false, true, false, true, false];
var userNameRollNumber = [{ name: 'x', roll: 9 }, { name: 'y', roll: 10 }];
var relation = ['pranto', 'mahi'];
// 
var relationWithSalary = [{ name: 'pranto', salary: 100000 }, 'mahi'];
// better/preferred way
var relationWithSalary2 = [{ name: 'pranto', salary: 100000 }, 'mahi'];
var crushOne = {
    name: 'mahi',
    husband: false,
};
var crushTwo = {
    name: 'mahi',
    husband: 'pranto',
};
var crushThree = {
    name: 'mahi',
    husband: {
        name: 'pranto',
        age: 25
    },
};
var crushFour = {
    name: 'mahi',
    husband: {
        name: 'pranto',
        age: 25
    },
};
// wont work
// const crushFive: CurshInterface<boolean> = {
//     name: 'mahi',
//     husband: false,
// }
// one way
var crushSix = {
    name: 'mahi',
    husband: false,
};
var crushSeven = {
    name: 'mahi',
    husband: false,
};
var crushEight = {
    name: 'mahi',
    husband: {
        name: 'pranto',
        age: 25
    },
    salary: {
        name: 'mahi',
        age: 25
    }
};
