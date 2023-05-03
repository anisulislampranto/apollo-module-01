let emni: any;

emni = 'this is the';

(emni as string)

// below syntax won't work on tsx
<string> emni.length 

function kgToGram(param: string | number): string | number | undefined {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000
        return `The converted result is: ${value} gram`
    }

    if (typeof param === 'number') {
        const value = param * 1000
        return value
    }
}

const result = kgToGram(1000) as number
const result1 = <string> kgToGram("1000")

type CustomErrorType = {
    message: string
}

try {
    
} catch (error) {
    console.log((error as CustomErrorType).message);
}

console.log('res', result);
