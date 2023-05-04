type PersonType = {
    name: string,
    age: number,
    profession: string,
}

type newType  = 'name' | 'age' | 'profession' // manually
type newType2 = keyof PersonType

const a: newType = 'name'
const b: newType2 = "profession"

function getValue<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

const res0 = getValue({name: 'pranto', age: 20, profession: 'pain'}, 'name')