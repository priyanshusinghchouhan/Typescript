// More Typescript APIs
// 1) Pick :-

interface User {
    id: string,
    name: string,
    age: number,
    email: string,
    password: string
}

type UserType = Pick<User, "name" | "age" | "email">

function updateUser (u: UserType){
    console.log(`Updated User(using Pick): ${u.name} of age ${u.age} has email ${u.email}`)
}


let user1: User = {id: "dkajh49495", name: "Pedri", age: 21, email: "pedri@gmail.com", password: "ksajh"}

console.log(user1)
updateUser( {name: "Pedri Gonazalex", age: 22, email: "pedritooo@gmail.com"})


console.log("<--------------- ----------------->");


//2) Partial

type UpdatePartial = Partial<UserType>

function updateUserpartial (u: UpdatePartial){
    console.log(`Updated User(using Partial): ${u.name} of age ${u.age}`)
}

updateUserpartial( {name: "Cubarsi", age: 20})

console.log("<--------------- ----------------->");


//3) Readonly

interface Config {          //interface Config { 
   endpoint: string;       //   readonly endpoint: string;  
   apiKey: string;        //    readonly apiKey: string;
}                        //   }


const config: Readonly<Config> = {          // const config: Config = { 
  endpoint: 'https://api.example.com',     //     endpoint: 'https://api.example.com',
  apiKey: 'abcdef123456',                 //      apiKey: 'abcdef123456',
};                                       //    };

// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.


console.log("<--------------- ----------------->");



// Records and maps
type Users = Record<string, {age: number, name: string}>

const footballers: Users = {
    "hdue811": {age: 33, name: "Inigo Martinez"},
    "kdnq633": {age: 18, name: "Robert Lewandowski"}
}

console.log(footballers);


console.log("<--------------- ----------------->");


interface players {
    nationality: string,
    name: string,
    age: number,
    club: string
}

const mapPlayers = new Map<string, players>();

mapPlayers.set("zahsiu765", {nationality: "Spanish", name: "Yamal", age: 18, club: "Barcelona"})
mapPlayers.set("kaehq532", {nationality: "Brazilian", name: "Raphina", age: 27, club: "Barcelona"})
mapPlayers.set("iei25443", {nationality: "Spanish", name: "Inigo", age: 33, club: "Al Nassr"})


console.log(mapPlayers.get("zahsiu765"));
console.log(mapPlayers.get("iei25443"));
console.log(mapPlayers.get("kaehq532"));



console.log("<--------------- ----------------->");


//Exclude

type Event = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<Event, 'scroll'>;

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // ok
//handleEvent('scroll') // error


