// singleton
//Object.create
// object literals
const User = {
    firstName : "Karan",
    lastName : "Goyal",
    age : 30,
    isActive : true,
    favouriteSports : ["cricket", "tennis"]
}

//console.log(User.favouriteSports)
User.greeting = function(){
    console.log(`Hello ${this.firstName}`)
}

console.log(User.greeting())
console.log(User.age)

const myObject = new Object()

myObject.id = "123abc"
myObject.email = "karan@abc.com"
myObject.nestedObject = {
    sport:"Cricket",
    movie:"DDLJ"
}
console.log(myObject)

// Object destructuring

const {id} = myObject
console.log(id)



