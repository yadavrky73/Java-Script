

//browser , function  main this kp execute krne pr value window aati h
//or arrow module main undefind of this keyword value
//js work on single trede



//javascript execute context   ---1. global javascript execute context  , 2. function javascript execute context.   , 3. eval javascript context


execute

//1. global execute  page
//2. memory pase     for example    - n : undefind   , square : defind   , square1 ,  square2 , result1 and result2 undefind 
var n = 5;

function square(n) {
    var ans = n * n;
    return ans;
  }
  
  var square1 = square(n);
  var square2 = square(8);  
  
  let result1 = console.log(square1)
  let result2 = console.log(square2)

//3. execution phase - 
// execution n = 5
// execution squqre function --- all three step execute again

//jitne bar function aayega hhar bar execute hoga ;- memory phase and execution phase

//final execution content after delete the global execute content