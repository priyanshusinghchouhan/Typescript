//Classes & OOPs in TS


// Player Lite
// Create a class Player with name, position and a method describe() → "Pedri plays Midfielder".

class player{
    name: string
    postion: string

    constructor(name: string, postion: string){
        this.name = name;
        this.postion = postion
    }

    describe(): string {
        return `${this.name} is a ${this.postion}`
    }
}


const pedri = new player("Pedri", "Midfielder");
console.log(pedri.describe())


console.log("<-------------  ------------->");


// Wallet
// class Wallet with private balance, methods add(amount), spend(amount) (throw if insufficient), and getBalance().

class Wallet {
    private balance: number

    constructor(initial = 0){
        this.balance = initial
    }

    add(amount: number): number{
        console.log(`Amount ${amount} credited in your account`)
        return this.balance += amount
    }

    spend(amount: number): number{
        if(amount > this.balance){
            console.log("Insufficient balance")
            return this.balance -= amount
        }else{
            console.log(`Amount ${amount} debited in your account`)
            return this.balance -= amount
        }
        
    }

    getBalance(): number{
        return this.balance
    }
}


const newUser = new Wallet(1000)
newUser.add(500)
newUser.spend(1501)
console.log(`Remaining balance is ${newUser.getBalance()}`)


console.log("<-------------  ------------->");


//Interfaces have another special property. You can implement interfaces as a class.
interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}


class Employee implements Person {
    name: string;
    age: number;
    phone: number

    constructor(n: string, a: number, p: number) {
        this.name = n;
        this.age = a;
        this.phone = p;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name} of ${this.age} here is ur new mobile number ${this.phone}`);
    }
}

const Lewa = new Employee("Lewandowski", 37, 2483722);
console.log(Lewa)
Lewa.greet("Good Morning")


//ugly way
// class Manager extends Employee{
//     address: {
//         City: string
//         state: string
//         pincode: number
//     }

//     constructor(name: string, age: number, phone: number, address: {City: string,  state: string, pincode: number}){
//         super(name, age, phone)
//         this.address = address
//     }
// }


// cleaner way
type Address = {
    City: string
    state?: string
    pincode: number
}


class Manager extends Employee {
    address: Address

    constructor(name: string, age: number, phone: number, address: Address){
        super(name, age, phone)
        this.address = address
    }
}

let manager1 = new Manager("Flick", 37, +2483722, {City:"Allianz", state: "Munich", pincode: 2749823})
let manager2 = new Manager("Pep", 40, +908722, {City:"Barcelona", pincode: 7369823})
console.log(manager1)
console.log(manager2)


