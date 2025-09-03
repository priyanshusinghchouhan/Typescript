//2) Extending Interfaces


interface Engine { horsepower: number }
interface Wheels { count: number }
interface Car extends Engine, Wheels { brand: string }

const car: Car = { brand: "Tesla", horsepower: 670, count: 4 };
console.log(car)


interface Media {
    title: string;
    duration: number
}

interface Video extends Media{
    resolution: "720p" | "1080p" | "1440p"
}

const vid: Video = {title: 'Highlights', duration: 300, resolution: "1440p"}

function printMedia(m: Media){
    return console.log(`${m.title} - ${m.duration}`)
}

function printVideo(v: Video){
    return console.log(`${v.title} - ${v.duration} - ${v.resolution}`)
}

printMedia(vid)
printVideo(vid)



interface BaseItem { 
    id:number; 
    name:string; 
    price:number 
}

interface CartItem extends BaseItem { qty:number }

const cart: CartItem[] = [
  { id:1, name:"MSI Bravo 15", price:54000, qty:1 },

  { id:2, name:"Pedri 08 Jersey", price:3900, qty:2 }
];
const cartTotal = (items: CartItem[]) =>
  items.reduce((sum, it) => sum + it.price * it.qty, 0);

console.log(cartTotal(cart));