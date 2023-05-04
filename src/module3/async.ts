// Mocking async functions
const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = 'data';
        if (data) {
            resolve(data)
        } else {
            reject('No data')
        }
    })
}

const makePromiseBoolean = (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        const data: boolean = false;
        if (data) {
            resolve(data)
        } else {
            reject('No data')
        }
    })
}


type DataType = {
    data: string

}

const makePromiseObject = (): Promise<DataType> => {
    return new Promise<DataType>((resolve, reject) => {
        const data: DataType = {data: 'pranto'};
        if (data) {
            resolve(data)
        } else {
            reject('No data')
        }
    })
}

const getPromiseData = async (): Promise<string> => {
    const data = await makePromise()
    return data
}

const getPromiseDataBoolean = async (): Promise<boolean> => {
    const data = await makePromiseBoolean()
    return data
}

const getPromiseDataObject = async (): Promise<DataType> => {
    const data = await makePromiseObject()
    return data
}


interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

// Json Placeholder
const getTodo = async (): Promise<ITodo> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return await res.json()
}

const getTodoData = async (): Promise<void> => {
    const data = await getTodo()
    console.log(data);
    
}

getTodoData()