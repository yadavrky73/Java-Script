//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);
//{}  // scope cold

function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
        console.log(website);
    }
    // console.log(website);
     two()
}

one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++
// addone(55)      //in that case we can declare the function before call  
function addone(num){
    return num+1
}
console.log(addone(55))

//addTwo(22, 34);   //in thhat case we can not declare the function before call
const addTwo = function(num1 , num2){
    return num1+num2
}
let fun = addTwo(22 , 22);
console.log(fun);
//var

var y = 300;    // global scope

// if or else or loop ke ander wala blog scope 
if(true){
    var y= 10;
    let x=10;
    const z=10;
}

//


//console.log('y' , y);    //return the y = 10;
// console.log('x' , x);      // x is undefing 
// console.log('z' , z);   // z is undefing



var aa = 100;
if (true){
var aa=200;
}
console.log(aa);