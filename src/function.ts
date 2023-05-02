// normal function 
function add(num1: number, num2: number): number{
    return num1 + num2;
}

// add('1', 2) // not allowed
add(1, 2) // allowed

// arrow function
const add2 = (num1: number, num2: number): number => num1 + num2

const arr = [1,2,3,4,5] // string not allowed in this array because we have defined the type of this array as number
const newArr = arr.map((item: number) => item * item)

const person: {
    name: string,
    bdt: number,
    addBdt(money: number): string
} = {
    name: 'montu',
    bdt: 2000,
    addBdt(money: number){
        // return this.bdt + 1
        return `My balance is ${this.bdt + money}`
    }

}

// using void there is no return type
const personn: {
    name: string,
    bdt: number,
    addBdt(money: number): void 
} = {
    name: 'montu',
    bdt: 2000,
    addBdt(money: number){
        // return this.bdt + 1
        console.log(`My balance is ${this.bdt + money}`)
    }

}

// default parameter
function add3(num1: number= 10, num2: number): number{ // not allowed
    return num1 + num2;
}

function add4(num1: number, num2: number = 10): number{
    return num1 + num2;
}

add3(1, 2) // allowed
// add3(1) // not allowed

add4(1, 2) // allowed
add4(1) // allowed


// spread operator
const bondhura = ['musfira', 'nusaiba', 'mahi']
const bondhura2 = ['siam', 'hafsa', 'sufiyan']
const myBestFriend = {
    firstName: 'musfira',
    age: 20,
    company: 'programming hero',
}

const [bestFriend] = bondhura;
const {firstName} = myBestFriend;
const {firstName: string } = myBestFriend; // not going to take it as a string type instead it will take it as a name alias mean firstName will be known as string
// if we console.log(string) it will show the firstName value
console.log(string)



// bondhura.push(...bondhura2)
// console.log(bondhura);


// rest parameter
const greetFriends = (friend1: string, friend2: string, friend3: string) : void => {
    console.log(`Hello ${friend1}, ${friend2}, ${friend3}`);
}
// greetFriends('musfira', 'nusaiba', 'mahi', 'bhai') // not allowed

// use this instead
const greetFriendss = (...friends: string[]) : void => {
    friends.forEach(friend => {
        console.log(`Hello ${friend}`);
    }
    )
}
greetFriendss('musfira', 'nusaiba', 'mahi', 'bhai', 'siam', 'hafsa', 'sufiyan', 'arekjon') // allowed

// Array and object destructuring