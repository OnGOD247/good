//syntax error

//try and catch
try{
let result = 10 / 0;
console.log(result);
undefinedfunction();//this will cause an error!
console.log("This will not Run.");
} catch (error) {
    //this runs only if something goes wrong
    console.log("An error occured: " +error.name , error.message);
}
console.log("The program continues here.");

try{
    let age = 25
    console.log(age.length())
}catch(error){
    console.log("An error occured: " + error.message)
}

function loadUserData(userId){
    console.log("Starting to load data...");
    try{
        if (!userId.startswith("BAD")) {
            throw new Error("User ID must start with BAD");
        }
        Console.log("Data loaded for user: + error.userId");
    }catch(error){
        console.log("Failed: " + error.message);
    }finally{
        console.log("Loading complete. closing connection.");
    }
}
loadUserData("BAD-1234");