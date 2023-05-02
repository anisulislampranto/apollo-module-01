type NoobDeveloper = {
    name: string;
};

// type JuniorDeveloper = {
//     name: string;
//     expertise: string;
//     experience: number;
// }

// instead of above we can use intersection type
type JuniorDeveloper = NoobDeveloper & {
    expertise: string;
    experience: number;
}

// Using enum is not recommended
// enum Level {
//     junior = 'jr',
//     mid = 'mid',
//     senior = 'sr'
// }

type nextLevelDeveloper = JuniorDeveloper & {
    leadershipExp: number;
    level: 'jr' | 'mid' | 'sr'
    // level: Level
}

// this is union type when we are using or operator
const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: 'mojnu',
    expertise: 'js',
    experience: 6,
}

const developer: nextLevelDeveloper = {
    name: 'mojnu',
    expertise: 'js',
    experience: 6,
    leadershipExp: 2,
    level: 'jr',
}