//2) Interfaces with Arrays(Index Signatures)


interface NumArray {
    [n: number]: number
}

const nums: NumArray = [8,5,9,10,11]
console.log(nums[3])


interface PriceMap {
    [index: string]: number
}

const prices: PriceMap = {MSIlaptop: 54000, mac: 71000, phone: 14000}
console.log(prices["MSIlaptop"])
console.log(prices["mac"])
console.log(prices["phone"])


interface StockMap {
    [sku: string]: {qty: number, price: number}
}


const first: StockMap = {MSI: {qty: 1, price: 54000}}
const second: StockMap = {BARCA: {qty: 1, price: 4000}}
const third: StockMap = {MAC: {qty: 1, price: 70000}}


console.log(first)
console.log(second)
console.log(third)