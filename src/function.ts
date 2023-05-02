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