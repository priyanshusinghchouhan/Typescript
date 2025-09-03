//🟦 1) Arrays & tuples

// Challenge A:
// Create an array of your 5 football players (strings). Log the 2nd player.


let footballers: Array<string> = ["Messi", "Pedri", "Inigo", "Virgil Van dijk", "Neymar"]

console.log(footballers[1]);


// Challenge B:
// Create a tuple [playerName: string, jerseyNumber: number, isCaptain: boolean] for Pedri.
let player: [playername: string, jerseyNo: number, isCaptain: boolean] = ["Pedri", 8, true]
console.log(player);


console.log("<--------------  ------------->")


// 🟦 2) Enums

// Challenge C:
// Create an enum Role with values Midfielder, Forward, Defender, Goalkeeper.
// Make a player object with name and role: Role. Print the role.

enum Role {
    Midfielder = "MF", 
    Forward = "Fw", 
    Defender = "CB", 
    Goalkeeper = "GK"
}

let Pedri: Role = Role.Midfielder
console.log(Pedri)

let Inigo: Role = Role.Defender
console.log(Inigo)

let Cubarsi: Role = Role.Defender
console.log(Cubarsi)

let Tek: Role = Role.Goalkeeper
console.log(Tek)

console.log("<------------  ------------>")
// 🟦 3) Union & Intersection Types

// Challenge D (Union):
// Write a function printScore(score: number | string) that logs:
// "Score is: 2-1" if string
// "Score is: 3" if number

function printScore(score: number | string){
    console.log(`Score line is ${score}`)
    console.log(`Score line is ${score}`)
}

printScore(2)
printScore("2-3")

console.log("<------------  ------------>")

// Example 2 
// Given a list of users, filter out the users that are legal (greater than 18 years of age)

interface User{
    firstName: string,
    lastName: string,
    age: number
}


function agelimit(u: User[]){
    return u.filter((y) => y.age >= 18)
}

console.log(agelimit([
    {firstName: "Pedri", lastName: "Gonzalez", age: 22},
    {firstName: "Jofre", lastName: "Torrent", age: 17},
    {firstName: "Alejandro", lastName: "Balde", age: 21},
    {firstName: "Dro", lastName: "Fernandez", age: 17}
]))
