// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",    //symbol defind 
   mySym : "mykey1",     //normal js obejcts key and value
    age: 18,
    "location local": "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser)
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["location local"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "hitesh@rohit.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log('hello World')
console.log(JsUser.greetingTwo());