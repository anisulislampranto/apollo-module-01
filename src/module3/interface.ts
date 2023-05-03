// type User = {
//     name: string,
//     age: number
// }

// type ExtendedUser = User & {
//     role: string
// }

// when we are working with object, class we will use interface else type for all other cases

// object, function, array
//type alias
// For function we will use type alias because it's cleaner
// type addNumberType = (num1: number, num2: number) => number

// type interface
// interface IAddNumbers {
//     (num1: number, num2: number): number;
// }

// type rollNumbersType = number []
// interface IRollNumbers {
//     [index:number]:number;
// }

// const rollNumbers: IRollNumbers = [1,2,4,5,6,9] 

// const addNumbers:IAddNumbers = (num1, num2 ) => num1 + num2;


// interface IUSer {
//     name: string
//     age: number
// }

// interface IExtendedUser extends IUSer {
//     role: string
// } 

// const User: IExtendedUser = {
//     role: 'manush',
//     age: 5,
//     name: 'name'
// }

// const userWithTypeAlias: User = {
//     name: 'name',
//     age: 5
// }

// const userWithIinterface: IUSer = {
//     name: 'anam',
//     age: 9
// }

