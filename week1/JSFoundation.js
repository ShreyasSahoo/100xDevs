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
    age: 20
}
console.log(obj.age)