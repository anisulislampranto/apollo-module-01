type a1 = number
type a3 = undefined
type a4 = number


type a2 = a1 extends null ? true : false
// nested conditional type
type d = a1 extends null ? null : a3 extends number ? number : a4 extends null ? null : never

type Sheikh = {wife1: string, wife2: string}


type CheckProperty<T,k> =  T extends k ? true : false

type CheckWife1 = CheckProperty<Sheikh, 'wife1'>
