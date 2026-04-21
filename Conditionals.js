//  if-else statements
let userAge = 15
if (userAge >= 18){
    console.log("welcome to club 9ja")
} else { 
    console.log("sorry you are not allowed to enter")
}

// else-if statements
let gender = "non-binary"
if (gender === "female"){
    console.log("welcome to the ladies section")
} else if ( gender === "male"){
    console.log("welcome to the male section")
} else if ( gender === "other"){
    console.log("welcome to the other section")
} else {
    console.log("we dont know where you belong")
}

let username = "aaron"
let password = "password123"
if (username=== "aaron" && password === "password123"){
    console.log("login successsful")
}else if (username === "aaron" || password === "password123"){
    console.log("username or password is correct")
}else{
    console.log("login failed")
}

let votingage= "18"
if ( votingage >=18 ){
    console.log("elegible to vote")
}else {
    console.log(" not allowed to vote")

}