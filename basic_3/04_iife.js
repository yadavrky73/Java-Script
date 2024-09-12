// Immediately Invoked Function Expressions (IIFE)


function chai(name){         // ()-peranthicis lgane pr function blog ban jata h 
    // named IIFE
    console.log(`DB CONNECTED ${name}`);
}('Raman');                 // first () - function ki defidation likne wale hota h , section () function call the function

(function chai(name){
    // named IIFE
    console.log(`DB CONNECTED ${name}`);
})('rohit');

( (name) => {                // arrow function 
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')