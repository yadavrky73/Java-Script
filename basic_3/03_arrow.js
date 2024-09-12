const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

// console.log(this);   //current 

// browser ke under global object = window

function oneThis(){
    console.log(this);      //return the global obejct  this function not null 
}
oneThis();

console.log('above onwThis is this keyword');
function chai(){
    let username = "hitesh"
    //console.log(this)
    console.log(this.username);         //return the undefined
}

chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);        
// }

const chai1 =  () => {           //arrow function 
    let username = "hitesh"
    console.log(this);
    console.log(username)
}


chai1()

//add two nummber usinf arrow function

const sumTwo = (num1 , num2)=> {
    return num1+num2;
}
console.log(sumTwo(12, 23))

const addTwo = (num1, num2) =>  num1 + num2
console.log(addTwo(999,99))
const addTwodd = (num1, num2) => ( num1 + num2 )
console.log(addTwodd(99,99))

const addTwo1 = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()