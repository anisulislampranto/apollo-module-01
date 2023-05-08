class Animal {    
    constructor(public name: string, public species: string, public sound: string){
    }

    makeSound(){
        console.log(`The ${this.species} ${this.name} says ${this.sound}`);
    }
}

const dog = new Animal('dog', 'mammal', 'woof');
const cat = new Animal('cat', 'mammal', 'meow');
dog.makeSound()
cat.makeSound()