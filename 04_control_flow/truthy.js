const userEmail = [] //array-------  true value empty array ----[]    

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

const useString = "fds"           //string -----------     false  --empty string---""

if (useString) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

const name = ""     //return kummaryadav. that is falsy value
if(name){
    console.log('rohit');
}else{
console.log('kumaryadav')
}

const name1 = []     //return rohit. that is truthy value
if(name1){
    console.log('rohit');
}else{
console.log('kumaryadav')
}


// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){} ,true

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}    // object. call us object.keys(namme)

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

console.log('true or false' , false=='0');   //return true
console.log('true or false' , false =='');   //return true
console.log('true or false' , 0=='');   //return true
console.log('true or false' , 0=='');   //return true

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15
//val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")