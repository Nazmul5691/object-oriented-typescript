{

    //oop

    // class Animal {
    //     name: string;
    //     species: string;
    //     sound: string;


    //     constructor(name: string, species: string, sound: string){
    //         this.name = name;
    //         this.species = species;
    //         this.sound = sound;
    //     }

    //      makeSound(){
    //            console.log(`the ${this.name} says ${this.sound}`);
    //       }

    // }

    // const dog = new Animal('kutta', 'dog', 'ghew ghew')
    // const cat = new Animal('bilai', 'cat', 'mew mew')

    // dog.name;
    // cat.sound






    // use parameters properties
    class Animal {
        constructor(public name: string, public species: string, public sound: string) { }


        makeSound(){
            console.log(`The ${this.name} says ${this.sound} `);
        }

    }

   

    const dog = new Animal('kutta', 'dog', 'ghew ghew')
    const cat = new Animal('bilai', 'cat', 'mew mew')

    dog.sound;
    cat.sound;

    dog.makeSound()
    cat.makeSound()


}