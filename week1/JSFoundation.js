//javascript is interpreted lang unlike C++ where the high level code is compiled to a binary ,which is then run.
//javascript interprets the code line by line at run time , hence can lead to a lot of run time errors

// variables in js
//let const var - key words
let variable = "word" 
variable = 10
console.log(variable)
// javascript is a dynamically typed lang , as one does not need to mention the datatype of a variable and the datatype of a variable can also change during the execution of the program

//datatypes 
// primitive - string number boolean float
// non-primitive - array object regex

let arr =[1,2,3]; //array - hold multiple variables of the same type
for(let i=0;i<3;i++){
    console.log(arr[i])
}
//obj - hold data in the form of key value pair
let obj = {
    name:"Shreyas",
    age: 20,
    isMarried: false
}
console.log(obj.age)

//concatenation
console.log("firstname "+obj.name)

//conditionals
if(obj.isMarried == true) console.log(obj.name+" is  married")
else console.log(obj.name+" is not married")

//loops
for(let i =0;i<10;i++){
    console.log(i)
}

// while( runs until this condition is true){

// }

//array of objects
const user1 = {
    firstName : "shreyas",
    gender : "male"
}
const user2 = {
    firstName : "sahoo",
    gender : "male"
}
const user3 = {
    firstName : "raj",
    gender : "male",
    metadata: {
        age: 20
    }
}
const users = [{
    firstName : "shreyas",
    gender : "male"
},{
    firstName : "sahoo",
    gender : "male",
    metadata: {
        age: 20
    }
}, {
    firstName : "raj",
    gender : "male"
}]
console.log(user3["metadata"]["age"] )

//function
function sum(a,b){
    return a+ b;
}
console.log(sum(10,2 ))

// functions can be passed to functions as arguments

function displaySum(a,b,func){
    console.log(func(a,b))
}
displaySum(10,8,sum);