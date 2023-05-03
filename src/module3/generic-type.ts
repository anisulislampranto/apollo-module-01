// const rollNumbers: number[] = [1, 2, 4, 5, 6, 9];
// const rollNumbers: Array<number> = [1, 2, 4, 5, 6, 9];
// const rollNumbers2: string [] = ['1', '2', '4', '5', '6', '9'];
// const rollNumbers2: Array<string> = ['1', '2', '4', '5', '6', '9'];

// const rollNumbers3: Array<boolean> = [true, false, true, false, true, false];

// const userNameRollNumber: Array<{name: string, roll: number}> = [{name: 'x', roll: 9}, {name: 'y', roll: 10}]




// instead we can use generic type
type GenericArray<T> = Array<T>

// const rollNumbers: number[] = [1, 2, 4, 5, 6, 9];
const rollNumbers: GenericArray<number> = [1, 2, 4, 5, 6, 9];
// const rollNumbers2: string [] = ['1', '2', '4', '5', '6', '9'];
const rollNumbers2: GenericArray<string> = ['1', '2', '4', '5', '6', '9'];

const rollNumbers3: GenericArray<boolean> = [true, false, true, false, true, false];

// const userNameRollNumber: GenericArray<{name: string, roll: number}> = [{name: 'x', roll: 9}, {name: 'y', roll: 10}]

// instead we can do this way generic way
type NameRollType = {name: string, roll: number}
const userNameRollNumber: GenericArray<NameRollType> = [{name: 'x', roll: 9}, {name: 'y', roll: 10}]

// Let see generic tuple 
type GenericTuple<T, U> = [T, U]

const relation: GenericTuple<string, string> = ['pranto', 'mahi']


// type alias
// type RelationWithSalaryType = {name: string, salary: number}

// type interface
interface RelationWithSalaryInterface {
    name: string,
    salary: number
}


// 
const relationWithSalary: GenericTuple<RelationWithSalaryInterface, string> = [{name: 'pranto', salary: 100000}, 'mahi']
// better/preferred way
const relationWithSalary2: GenericTuple<RelationWithSalaryInterface, string> = [{name: 'pranto', salary: 100000}, 'mahi']



// we will use type alias for all premetive type


// genericInterface

interface GenericInterface<T>{
    name: string,
    husband: T
}

const crushOne: GenericInterface<boolean> = {
    name: 'mahi',
    husband: false,
}

const crushTwo: GenericInterface<string> = {
    name: 'mahi',
    husband: 'pranto',
}


const crushThree: GenericInterface<{name: string, age: number}> = {
    name: 'mahi',
    husband: {
        name: 'pranto',
        age: 25
    },
}

// another way
interface HusbandInterface {
    name: string,
    age: number
}

const crushFour: GenericInterface<HusbandInterface> = {
    name: 'mahi',
    husband: {
        name: 'pranto',
        age: 25
    },
}


// 

interface CurshInterface<T, U>{
    name: string,
    husband: T,
    salary?: U
}

// wont work
// const crushFive: CurshInterface<boolean> = {
//     name: 'mahi',
//     husband: false,
// }

// one way
const crushSix: CurshInterface<boolean, null> = {
    name: 'mahi',
    husband: false,
}

// anither way
interface CurshInterfacec<T, U = null>{
    name: string,
    husband: T,
    wife?: U
}
const crushSeven: CurshInterfacec<boolean> = {
    name: 'mahi',
    husband: false,
}


interface PersonInterface {name: string, age: number}

const crushEight: CurshInterface<PersonInterface, PersonInterface> = {
    name: 'mahi',
    husband: {
        name: 'pranto',
        age: 25
    },
    salary: {
        name: 'mahi',
        age: 25
    }
}