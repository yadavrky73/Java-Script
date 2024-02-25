//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//stack and heap -------------------

//stack ------pass the copy of org data   and stack is a primitive datatype

//heap  ----- heap reference of original value.   and heap is a none primitive datatype


//stack --------


let stackID = "rohit"

let stackIdName = stackID
stackIdName = "kedar"


console.log(stackID)   //parent value not change becouse we pass the only copy
console.log(stackIdName)



//heap -----------


let myHeap = {
    name: "Rohit",
    age: 22,
}

let MyHeap_1 = myHeap

MyHeap_1.name = "Amit"   // in heap change the parent value as 

console.log(myHeap)
console.log(MyHeap_1)
