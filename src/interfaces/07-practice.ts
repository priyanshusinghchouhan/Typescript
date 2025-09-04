// Generics

function identity<T>(arg: T){
    return arg
}


let output1 = identity<string>("hey");
let output2 = identity<number>(100);

console.log(output1.toUpperCase())
console.log(output2)


function getElement<T>(arr: T[]){
    return arr[0]
}

interface User {
    name: string
}

const el1 = getElement(["hey", "hii"])
console.log(el1?.toUpperCase())

const el2 = getElement([4,7,9,7])
console.log(el2)

const el3 = getElement<User>([{name: "Cubarsi"}])
console.log(el3)