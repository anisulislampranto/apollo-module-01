const crush1: {
    name: string;
    age: number;
    profession: string;
    address: string;
} = {
    name: 'crash',
    age: 20,
    profession: 'pain',
    address: 'dhaka',
};

const crush2: {
    name: string;
    age: number;
    profession: string;
    address: string;
} = {
    name: 'crash 2',
    age: 20,
    profession: 'pain',
    address: 'dhaka',
};

// now for every type we'll hae to write the same code again and again
// so we can use type alias to make it easier

type crushType = {
    name: string;
    age: number;
    profession: string;
    address: string;
};

const crush3: crushType = {
    name: 'crash 3',
    age: 20,
    profession: 'pain',
    address: 'dhaka',
};

const crush4: crushType = {
    name: 'crash 4',
    age: 20,
    profession: 'pain',
    address: 'dhaka',
};


// in case of boolean 
type crushMarriedType = boolean;
const isCrushMarried: crushMarriedType = true;

// in case of string 
type crushNameType = string;
const crushName: crushNameType = 'crash';

// in case of function
type OperationType = (x: number, y: number) => number;
const calculate = (num1: number, num2: number, operation: OperationType) => {
    return operation(num1, num2)
}

calculate(1, 2, (x,y) => x + y);
calculate(1, 2, (x,y) => x - y);
calculate(1, 2, (x,y) => x / y);
calculate(1, 2, (x,y) => x * y);
