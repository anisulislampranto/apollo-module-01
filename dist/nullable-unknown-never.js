"use strict";
// Nullable
var searchName = function (value) {
    if (value === null) {
        console.log('null');
    }
    else {
        console.log('not null');
    }
};
searchName(null);
// kmh^-1 --> ms^-1
// Unknown type
var getMayCarSpeed = function (speed) {
    if (typeof speed === 'number') {
        var convertedSpeed = (speed * 1000) / 3600;
        console.log('my speed', convertedSpeed);
    }
    else if (typeof speed === 'string') {
        var _a = speed.split(' '), value = _a[0], unit = _a[1]; // ['100', 'kmh^-1']
        var convertedSpeed = (parseFloat(value) * 1000) / 3600;
        console.log('my speed', convertedSpeed);
    }
    else {
        console.log('wrong type');
    }
};
getMayCarSpeed(999);
getMayCarSpeed('100 kmh^-1');
getMayCarSpeed(true);
// Never type
// Never Ever return anything
// function throwErr(message: string): never {
//     throw new Error(message);
// }
// throwErr('err hoise')
