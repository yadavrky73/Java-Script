const coding = ["js", "ruby", "java", "python", "cpp"]


// coding.forEach( function (val){            //normal function
//     console.log(val);
// } )

// coding.forEach( (testcode) => {
//     console.log(testcode);
// });

// coding.forEach( (item) => {          //arrow function 
//     console.log(item);
// } )

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item ,index, arr) => {
    
    console.log(item.languageName);
    console.log(item.languageFileName);
    console.log(index);
    console.log(arr);
} )