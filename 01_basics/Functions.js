function addTwoNumbers(number1, number2){
    return number1+number2
}

let number3 = addTwoNumbers(2,3)
console.log(number3)
// Passing variable number of paramters to a function using rest operator
function addMultipleNumbers(...numbers){
    return numbers
}

console.log(addMultipleNumbers(2,3,4,5))


// function with object as a paramter
let User = {
    firstName: "Karan",
    lastName: "Goyal" 

}

function getLastName(anyObject){
    return anyObject.lastName

}

console.log(getLastName(User))


// function with array as a parameter

const myArr = new Array(1,2,3,)

function getSecondElement(ipArr){
    return ipArr[1]

}

console.log(getSecondElement(myArr))


// Two ways of defining a function

// Way 1
function myFunc1 (testParameter1){
    return testParameter1

}

// Way 2
const myFunc2 = function(testParameter2){
    return testParameter2

}

// The above two ways have a difference
// The function as defined in way 1 can be called before defining and it still wokrs
// The function as defined in way 2 does not work before defining


// Arrow Functions
// Step - 1: original function syntax

// const myFunction = function(){
    
// }

// Step - 2: remove the word function

// const myFunction = (){
    
// }

// Step - 3: introduce the arrow syntax

// const myFunction = () => {
    
// }

// Step - 4: in-line function with implicit return

// const myFunction = () => (// no need to use return statement here, but return will still happen)


// Immediately Invoked Function Expression (IIFE)
// Named IIFE
// Method-1
const myFunction= function(){
    console.log(`DB CONNECTED!`)   
}();
// Method-2
(function myFunction2(){
    console.log(`DB CONNECTED 2!`) 
})();

// Un-named IIFE
(()=>{
    console.log(`DB CONNECTED 3!`) 
})();


