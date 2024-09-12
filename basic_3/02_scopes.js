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
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

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