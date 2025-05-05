{

    // class Counter {
    //     count: number = 0;

    //     increment(){
    //         return (this.count = this.count + 1)
    //     }

    //     decrement(){
    //         return (this.count = this.count - 1)
    //     }
    // }

    // const instance1 = new Counter()
    // console.log(instance1.increment());   // take different memory
    // console.log(instance1.increment());   // take different memory
    // console.log(instance1.increment());   // take different memory

    // const instance2 = new Counter()
    // console.log(instance2.increment());   // take different memory

    // const instance3 = new Counter() 
    // console.log(instance3.increment());   // take different memory



    //  use statics
    class Counter {
        static count: number = 0;

        increment() {
            return (Counter.count = Counter.count + 1)
        }

        decrement() {
            return (Counter.count = Counter.count - 1)
        }
    }

    const instance1 = new Counter()
    console.log(instance1.increment());  
    console.log(instance1.increment());  

    const instance2 = new Counter()
    console.log(instance2.increment());  

    const instance3 = new Counter()
    console.log(instance3.increment());   

}