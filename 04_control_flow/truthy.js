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



console.log('true or false' , false=='0');   //return true
console.log('true or false' , false =='');   //return true
console.log('true or false' , 0=='');   //return true
console.log('true or false' , 0=='');   //return true


// Nullish Coalescing Operator (??): null undefined
let val1;
val1 = 5 ?? 10
console.log('val1',val1);
 val2 = null ?? 10
console.log('val2',val2);
val3 = undefined ?? 15
console.log('val3',val3);
val4 = null ?? 10 ?? 20
console.log('val4',val4);



console.log(val1);

// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

const cond = true;
cond <= false ? console.log("less retrun true value") : console.log('return the false');