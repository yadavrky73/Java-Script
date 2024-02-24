const accountId = 12221

let accountEmial = "yrohitkumar027@gmail.com"

var accountPassword = "12345678"
accountCity = "delhi"

let accountState;

//accountId = 23123. //not allowed
accountEmial ="test@gmail.com"
accountPassword = "87654321"
accountCity = "jaipur"

// console.log(accountId)
// console.log(accountCity)
// console.log(accountPassword)

//console.log([accountId,accountEmial,accountPassword,accountCity]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountState = "RJ"
console.table([accountId,accountEmial,accountPassword,accountCity ,accountState]);
