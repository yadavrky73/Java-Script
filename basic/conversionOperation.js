let score = "Rohit"

score = Number(score);
console.log(typeof score);
console.log(score);

let phone = 234567

console.log(phone)     //return 234567

let valueInNumber = Number(score)
console.log(typeof(valueInNumber));    //return number
console.log(valueInNumber);       //return NaN

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0



let type = "HH2324"
let valueConvertInNumber = Number(type)
//console.log(typeof(valueConvertInNumber));    //number
//console.log(valueConvertInNumber);     //NaN

// let typeNum = 45678
// let valueConvertInString = String(typeNum)
// console.log(typeof(valueConvertInString));     //return string
// console.log(valueConvertInString);       //return 45678 and type is string

let typeNull = null
let valueConvertInNum = Number(typeNull)
console.log(typeof(valueConvertInNum));     //return number
console.log(valueConvertInNum);      //return 0

let typeUndefind = true
let typeUndefindNum = Number(typeUndefind)
console.log(typeof(typeUndefindNum));      //return number
console.log(typeUndefindNum);      //return 1

let typeUndefindfalse = false
let typeUndefindNumfalse = Number(typeUndefindfalse)
console.log(typeof(typeUndefindNumfalse));      //return number
console.log(typeUndefindNumfalse);      //return 0

let typeUndefindUndefined = undefined
let typeUndefindNumUndefined = Number(typeUndefindUndefined)
console.log(typeof(typeUndefindNumUndefined));      //return number
console.log(typeUndefindNumUndefined);         //return NaN



let isLoggedIn = ""      //1--true , 0---false.  convert.     empty string ===false

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);    //return false. 


// 1 => true; 0 => false
// "" => false
// "hitesh" => true

//--------operation-----------------


let value = -3
let negValue = --value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


let str1 = "hello"
let str2 = " rohit"

let str3 = str1 + str2
console.log(str3);   //return = hello rohit

let str4 = "test"

let num = 2
let con = str4+num
console.log(con);     //return = test2



console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log((3 + 4) * 5 % 3);

console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter--;
console.log(--gameCounter);
console.log(gameCounter--);
console.log(gameCounter);
console.log(gameCounter++);
console.log(gameCounter);
// link to stud
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion