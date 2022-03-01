// 1. for loop
var numbers = [ 10, 20, 30, 40, 50] 
for (var i=0; i < numbers.length; i++) {
   console.log(numbers[i])
}

// 2. for in
var person = {
    firstname: "Nithi",
    lastname: "Anbu",
    age: 25
 }; 
 for (let x in person) {
    console.log(x + ": "+ person[x])
 }

//  3.  for each
var names = ["Nithi", "Anbu", "Nivi", "Vidya", "priya"];
names.forEach(function1);
function function1(currentValue, index) {
   console.log("Index in array is: "+index + " ::  Value is: "+currentValue);
}

//  4.  for  in

const student = {
   name: 'Priya',
   class: 12,
   age: 18
}

// using for...in
for ( let key in student ) {

   // display the properties
   console.log(`${key} => ${student[key]}`);
}