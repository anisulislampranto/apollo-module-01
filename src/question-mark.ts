// ternary operator
const age: number = 20;

if (age >= 18) {
    console.log('You are adult')
} else {
    console.log('You are not adult')
}

const isAdult = age >= 18 ? 'yes' : 'no';
console.log(isAdult);

// Nullish coalescing operator
// Null and Undefined 

const isAuthenticatedUser = '';
const userName = isAuthenticatedUser ?? 'guest';
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : 'guest';

// console.log({userName}, {userName2});


type Manush = {
    name: string,
    age: number,
    profession: string,
    address: {
        city: 'string',
        road: 'string',
        home?: "",
    }
}

const manush1: Manush = {
    name: 'montu',
    age: 20,
    profession: 'pain',
    address: {
        city: 'string',
        road: 'string',
    }
}

const home = manush1?.address?.home ?? 'noHome'; // no home
console.log(home);
