{

    class BankAccount{
        public readonly id: number;
        public name:string;
        // private _balance: number;
        protected _balance: number;        // use protected for access in child class


        constructor(id: number, name: string, _balance: number){
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }

        public addDeposit(amount: number){
            this._balance = this._balance + amount
            // console.log(this.balance);
        }

        public getBalance(){
            return this._balance;
        }
    }

    class Student extends BankAccount{
        text(){
            this._balance
        }
    }

    const person = new BankAccount(10,'nazmul', 1000)
    // person.balance
    // person.balance = 2000;
    // console.log(person.balance);
    // person.id =
    person.addDeposit(5000)
    const newBalance = person.getBalance()
    console.log(newBalance);






}