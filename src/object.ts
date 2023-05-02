const user: {
    company: 'programming hero' //literal type
    readonly institute: string 
    name: string,
    age: number,
    isMarried: boolean,
    wife?: string,
} = {
    company: 'programming hero',
    institute: 'programming heroo',
    name: 'montu kaka',
    age: 20,
    isMarried: true,
    wife: 'kaki',
}

user.institute = 'programming hero' // not allowed