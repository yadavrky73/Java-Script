// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myHeors);
console.log(myArr[1]);

// Array methods

myArr.push(6)         //insert value last index
myArr.push(7)

myArr.pop()    //. remove the value back
console.log(myArr);

myArr.unshift(9)          // add the value 0 index/first index  
console.log(myArr)
myArr.shift()             // remove the value 0 index/first index  
myArr.shift() 

console.log(myArr);


// array method return the true or false

console.log("method_1", myArr.includes(9));      //return the true or false 
console.log("method_2", myArr.indexOf(3));
console.log("method_2", myArr.indexOf(23));      //if that index not in array than return the -1 value


//join ---------------------

const newArr = myArr.join()          // join convert the array to string  
console.log(myArr);                  //return    [ 2, 3, 4, 5, 6 ]
console.log( newArr);                 //return than one ---2,3,4,5,6


// slice, splice.  

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)      //slice return the array particular range not change the original array

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)    //slice return the array particular range and change the org array only remaining part is there in array
console.log("C ", myArr);
console.log(myn2);