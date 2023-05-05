type volume = {
    height : number,
    width : number,
    depth : number
}

type Area<T> = {
    // [key in keyof volume] : volume [key]
    readonly [key in keyof T] : T[key]
}

const area1: Area<{name: string, width: number}> = {
    name: 'don',
    width: 9
}

// area1.name = 'donn'