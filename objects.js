let student = {
name: "Ngozi Adeyemi",
age: 21,
department: "Computer Science",
}
console.log(student.name)
console.log(student.department)
//arrays holds a list while objects describes a property

let employee ={
    name: "Tunde Balogun",
    role: "Frontend Developer",
    salary: 450000,
    City: "Lagos"
};
const{name, role, salary, city} = employee
console.log(name)
console.log(role)
console.log(salary)
console.log(city)

let courses = {
CSC401 : "Data Structures",
CSC402 : "Algorithms",
CSC403 : "Operating System",
csc404 : "Database System"
}
let {CSC401 : CSC400} = courses
console.log(CSC400)

let person = {
    name : "Amina",
    Opay : "true",
}
console.log(person)
let {opay: palmpay} = person
console.log(palmpay)
let profile = {name: "Ada", age:"22"};
let updatedProfile = {
    ...profile,
    city: "Abuja"
};
console.log(updatedProfile);

const user = {
    name : "Aaron",
    password : "1234",
    isMale : true,
    city: "Lagos",
    age : 25
}

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
// //for in
// for (let key in user){
//     console.log("these are the keys: " + key)
//     console.log("these are the values: " + user[key])
// }