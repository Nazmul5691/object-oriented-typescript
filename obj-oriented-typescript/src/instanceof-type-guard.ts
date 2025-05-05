{


    class Animal{
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }

        makeSound(){
            console.log('i am make sound');
        }
        
    }

    class Dog extends Animal{
        constructor(name: string, species: string){
            super(name, species)
        }

        makeBarking(){
            console.log('i am barking');
        }
    }


    class Cat extends Animal{
        constructor(name: string, species: string){
            super(name, species)
        }

        makeBarking(){
            console.log('i am meaw');
        }
    }

    const dog = new Dog('i am dog', 'dog')
    const cat = new Dog('i am cat', 'cat')

    dog.makeBarking;
    cat.makeBarking;



}