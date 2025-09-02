interface Product{
    id: number,
    name: string,
    price: number,
    description?: string
}

const laptop: Product = {
    id: 1,
    name: "MSI Bravo 15",
    price: 54000,
    description: "Laptop is suitable for coding, gaming, video editing and other stuffs"
}

console.log(laptop);


const jersey: Product = {
    id: 2,
    name: "Pedri 08",
    price: 3900,
    description: "A barcelona jersey featuring Pedri 08 at the back"
}


console.log(jersey);