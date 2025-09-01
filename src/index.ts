function greet(name: string){
    console.log("Hello", name)
}

greet("Pedri")


function sum(x: number, y: number): number{
    return x + y;
}


console.log(sum(5,3));


function adult(age: number){
    if(age > 18){
        console.log("U r an adult");
    }else{
        console.log("U r not an adult");
    }
}


adult(20);



function delayedCall(fn : () => void){
    setTimeout(fn, 1000);
}


delayedCall(function(){
    console.log("Hello")
})