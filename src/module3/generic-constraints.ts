// const addInMyCrushMind = <T> (myInfo: T) => {
//     const crush = 'mahi';
//     const newData = {...myInfo, crush}
//     return newData
// }
// 
// const addInMyCrushMind = <T extends {name: string, age: number}> (myInfo: T) => {
//     const crush = 'mahi';
//     const newData = {...myInfo, crush}
//     return newData
// }


type MandatoryType = { name: string, age: number}
interface MandatoryInterface {name: string, age: number}

const addInMyCrushMind = <T extends MandatoryInterface> (myInfo: T) => {
    const crush = 'mahi';
    const newData = {...myInfo, crush}
    return newData
}

type MyInfoType = {
    name: string,
    age: number,
    profession: string,
    address: string,
    addresss: string,
    addressss: string,
}

const myInfo: MyInfoType = {
    name: 'pranto',
    age: 20,
    profession: 'pain',
    address: 'dhaka',
    addresss: 'dhaka',
    addressss: 'dhaka',
}

const res8 = addInMyCrushMind<MyInfoType>(myInfo)