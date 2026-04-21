
let items = ["milk", "milo", "rice"]
console.log(items[0])
console.log(items.length)
//foreACH
let fruits = ["apple", "banana", "orange", "grape", "mango"]
let names = ["esther", "john", "doe", "jane", "smith"]

names.forEach(function(name){
    console.log("TECH_CRUSH_2026_COHORT_6 "  +  name)//named function
})

fruits.forEach(function(fruit){
    console.log("i eat "  +  fruit)
})
//map methods
let scores = [90, 80, 70, 60, 50]
let newScores = scores.map(x => {
    console.log("as a good teacher, i decided to add 5 marks to all my students")
    return x + 5
})
console.log(newScores)
let students = ["esther", "john", "doe", "jane", "smith"]
let nameTag = students.map(function(name){
    return "TECH_CRUSH_2026_COHORT_6 " + name
})
console.log(nameTag)
//filter method
let jambScores = [200, 250, 300, 150, 180, 280, 290, 100]
let passed = jambScores.filter((score)=>{
    return score >= 200
})
console.log(passed)
let ages = [18, 25, 30, 15, 20, 35, 40]
let adults = ages.filter(function(age){
    return age>=18
})
console.log(adults)


//find
const studentsNames = ["john", "john", "ada", "jane", "smith", "bola", "john"]
const found = studentsNames.find((name)=>{
    return name === "john"
})
console.log(found)

//reduce method
let cartprices = [1500, 800, 2200, 1000];
let total = cartprices.reduce(function(accumulator, currentprice){
    return accumulator + currentprice;
},1000);
console.log(total)

//arrow function version
let grandtotal = cartprices.reduce((acc, price) => {
    return acc + price;
}, 0);
console.log(grandtotal);

//push: add item to the end of an array , pop: removes from last , shift:removes the first element from the array ,
//  unshift : add element to the begining of the array

let colors = ["red", "blue", "green"];
colors.push("yellow");

let lastcolor = colors.pop();
console.log(lastcolor);

let firstcolor = colors.shift()
console.log(colors);
console.log(firstcolor);

let newlength = colors.unshift("purple");
console.log(colors);
console.log(newlength);
