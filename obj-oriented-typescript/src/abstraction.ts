{

    //abstraction : 1. interface , 2. abstract


    //idea 
    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    // real implementation
    class Car implements Vehicle1 {
        startEngine(): void {
            // console.log('i am starting the engine');
        }

        stopEngine(): void {
            // console.log('i am stop the engine');
        }

        move(): void {
            // console.log('i am moving the car');
        }
    }

    const toyotaCar = new Car();
    toyotaCar.startEngine()
    toyotaCar.stopEngine()
    toyotaCar.move()


    // use abstract

    abstract class Car2 {
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void;
        test() {
            console.log('i am just testing');
        }
    }

    class ToyotaCar extends Car2 {
        startEngine(): void {
            console.log('i am starting the engine');
        }

        stopEngine(): void {
            console.log('i am stop the engine');
        }

        move(): void {
            console.log('i am moving the car');
        }
    }

    const car = new ToyotaCar()
    car.startEngine()
    
}