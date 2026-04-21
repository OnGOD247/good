// syntax for creating a function
function functionName(){
    // code to be executed

}

function greet(){
    console.log("Welcome back, Aaron!")
}
greet()

function farewell(name){
    console.log("see you again, Aaron")
}
farewell()
// parameters are expected values
// argument are the values themselves

// let x = 5
// let y = 10
// console.log(x+y)

function add (){
    let a = 5
    let b = 10
    return a + b
}
console.log(add())

function addition(a, b){
    return a + b
}
console.log(addition(2, 3))

function isAdult(age){
    return age >= 18
}
console.log(isAdult(20))
console.log(isAdult(16))
console.log(isAdult(18))

function addition(a, b){
    return a + b
}
console.log(addition(2, 3))
console.log(addition(10, 20))