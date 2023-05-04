// Arrow function
const createArray1 = (param: string): string[] => {
    return [param]
}

const createArray = <T>(param: T): T[] => {
    return [param]
}

const createArray2 = <x, y, z>(param1: x, param2: y, param3: z): [x,y,z] => {
    return [param1,param2,param3]
}


type name = {name: string}

const res = createArray<string>('hello')
const res2 = createArray<boolean>(false)
const res3 = createArray<{name: string}>({ name: 'name' })
const res4 = createArray<name>({ name: 'name' })

const res5 = createArray2<string, string, number>('hello', 'hello', 5)
const res6 = createArray2<string, string, string[]>('hello', 'hello', ['5'])
const res7 = createArray2<string, string, Array<string>>('hello', 'hello', ['5'])

// spread operator
// const myInfo = {
//     name: 'pranto',
//     age: 20,
//     profession: 'pain',
//     address: 'dhaka',
// }
// // const newData = {...myInfo, crush}

// const addInMyCrushMind = <T> (myInfo: T) => {
//     const crush = 'mahi';
//     const newData = {...myInfo, crush}
//     return newData
// }

// const res8 = addInMyCrushMind(myInfo)


