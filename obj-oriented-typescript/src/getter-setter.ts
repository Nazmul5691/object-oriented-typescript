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


        // public addDeposit(amount: number){
        //     this._balance = this._balance + amount
        //     // console.log(this.balance);
        // }

        // use setter
        set balance(amount: number){
            this._balance = this._balance + amount;
        }

        // public getBalance(){
        //     return this._balance;
        // }

        // use getter
        get balance(){
            return this._balance;
        }



    }

    

    const person = new BankAccount(10,'nazmul', 2000)
    const myBalance = person.balance;
    console.log(myBalance);
    
    person.balance= 500;
    const myNewBalance = person.balance;
    console.log(myNewBalance);




}