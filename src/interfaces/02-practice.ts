//1) Interfaces with Functions

interface MathOp {
    (a: number, b: number) : number
}

const sum: MathOp = (a, b) => (a + b) // const sum: MathOp = (a: 3, b: 5) => (a + b)
const multiply: MathOp = (a, b) => (a * b);

console.log(sum(3,5))
console.log(multiply(2,4))



interface Logger {
    log(msg : string): void
}

const message: Logger = {
    log: (m) => console.log(m)
}


message.log("hey")



interface GreetFn {
    (name: string): string
}

const hello: GreetFn = (name) => `Hello, ${name}`;
console.log(hello("Pedrito") )


interface Predicate {
    (n: number): boolean
}

const isEven: Predicate = (n) => n % 2 === 0;

const even = [1,2,3,4,5,6,7,8,10,81,9373272832934].filter(isEven);
console.log(even);



interface formatter {
    (s : string): string
}

const trimAndUpper: formatter = (s) => {
    return  s.trim().toUpperCase()
    
}


console.log(trimAndUpper("pedritooooo"))