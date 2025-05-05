{


    // class Student {
    //     name: string;
    //     age: number;
    //     address: string;


    //     constructor(name: string, age:number, address: string){
    //         this.name = name;
    //         this.age = age;
    //         this.address = address;
            
    //     }

    //     getSleep(numOfHours: number){
    //         console.log(`${this.name} will sleep for ${numOfHours}`);
    //     }
    // }

    // const Student1 = new Student('Rakib', 20, 'dhaka')
    // Student1.age;



    // class Teacher {
    //     name: string;
    //     age: number;
    //     address: string;
    //     designation: string;


    //     constructor(name: string, age:number, address: string, designation: string){
    //         this.name = name;
    //         this.age = age;
    //         this.address = address;
    //         this.designation = designation;
            
    //     }

    //     takeClass(numOfHours: number){
    //         console.log(`${this.name} will take class for ${numOfHours}`);
    //     }
    // }

    // const teacher = new Teacher('sir', 40, 'dhaka','professor')
    // teacher.designation;



    //use inheritance

    class Person {
        name: string;
        age: number;
        address: string;


        constructor(name: string, age:number, address: string){
            this.name = name;
            this.age = age;
            this.address = address;
            
        }

        getSleep(numOfHours: number){
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }
    }

    class Student extends Person{
        


        constructor(name: string, age:number, address: string){
           super(name, age, address)
        }

        getSleep(numOfHours: number){
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }
    }

    const student1 = new Student('Rakib', 20, 'dhaka')
    // student1.;



    class Teacher extends Person{
        designation: string;


        constructor(name: string, age:number, address: string, designation: string){
            super(name, age, address)
            this.designation = designation;
            
        }

        takeClass(numOfHours: number){
            console.log(`${this.name} will take class for ${numOfHours}`);
        }
    }

    const teacher = new Teacher('sir', 40, 'dhaka','professor')
    teacher.designation;



}