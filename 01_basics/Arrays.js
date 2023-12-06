// let myArr = new Array(1,2,3,4,5)
// console.log(myArr)

// let myArr2 = new Array(1,2, "Karan", true, null)
// console.log(myArr2)

const myArr1 = new Array(1,2,3)
const myArr2 = new Array(4,5,6)
const arr1PlusArr2 = [...myArr1, ...myArr2]
console.log(arr1PlusArr2)

arr1PlusArr2.push(7)
console.log(arr1PlusArr2)

