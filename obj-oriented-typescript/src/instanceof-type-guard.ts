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

        makeMeaw(){
            console.log('i am meaw');
        }
    }

    // const getAnimal = (animal : Animal) =>{
    //     if(animal instanceof Dog){
    //         animal.makeBarking();
    //     }
    //     else if(animal instanceof Cat){
    //         animal.makeMeaw()
    //     }
    //     else{
    //         animal.makeSound()
    //     }
    // }


    // use function for smart way
    // const isDog = (animal : Animal) =>{
    // const isDog = (animal : Animal): boolean =>{
    const isDog = (animal : Animal): animal is Dog =>{
        return animal instanceof Dog;
    }

    const isCat = (animal : Animal): animal is Cat =>{
        return animal instanceof Cat;
    }

    const getAnimal = (animal : Animal) =>{
        if(isDog(animal)){
            animal.makeBarking();
        }
        else if(isCat(animal)){
            animal.makeMeaw()
        }
        else{
            animal.makeSound()
        }
    }


    const dog = new Dog('i am dog', 'dog')
    const cat = new Cat('i am cat', 'cat')

    // dog.makeBarking;
    // cat.makeMeaw;

    getAnimal(dog)
    getAnimal(cat)





}