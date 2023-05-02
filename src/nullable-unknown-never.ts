// Nullable
const searchName = (value: string | null) => {
    if (value === null) {
        console.log('null');
    } else {
        console.log('not null');
    }
}
searchName(null);

// kmh^-1 --> ms^-1
// Unknown type
const getMayCarSpeed = (speed: unknown) => {
    if (typeof speed === 'number') {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log('my speed',convertedSpeed);
    } else if (typeof speed === 'string') {
        const [value, unit] = speed.split(' '); // ['100', 'kmh^-1']
        const convertedSpeed = (parseFloat(value) * 1000) / 3600;
        console.log('my speed',convertedSpeed);
    }  else {
        console.log('wrong type');
    }
}

getMayCarSpeed(999);
getMayCarSpeed('100 kmh^-1');
getMayCarSpeed(true);


// Never type
// Never Ever return anything
// function throwErr(message: string): never {
//     throw new Error(message);
// }

// throwErr('err hoise')