/*
Student: BELEN, Mariane
Subject: WEB DEV 1
Activity: WD1-LA4.2   ref.js
Program & Section: BSCS 2B
*/

//Let Variables to put values
let a = 25;
let b = "26";
let c = 105.65;
let d = 104.62;
let name = "alicia";
let last = "galicia";
let bday = "February";
let day = 30;

//3 methods to display
console.log(
  `The name is ${name} ${last}, born on ${bday} ${day} 2075.`
);
console.log("The name is", name, last, ",born on", bday, day, "2075");
console.log("The name is", + name + " " + last + " is born on " + bday + " " + day + " 2075");

//Summation
let sum = a + b;
console.log("Sum:", sum); //Sum: 2526

//Subtraction
let dif = a-c;
console.log("Subtraction:", dif); //Subtraction: -80.65

//Division
let div = d / b;
console.log("Division:", div); //Division: 4.023846153846154

//Multiplication
let mul = c * b;
console.log("Multiplication:", mul); //Multiplication: 2746.9

//Modulo
let mod = (a%(b+c)/d)
console.log("Modulo:", mod); //Modulo: 0.2389600458803288

//Comparison
console.log(a > b); //is a > b    false
console.log(a < b); //is a < b    true
console.log(a >= b); //is a >= b   false
console.log(a <= b); //is a <= b   true
console.log(a == b); //is a == b   false
console.log(a != b); //is a != b   true
console.log(a === b); //is a === b   false

console.log(name > last); // is name > last  false
console.log(name < last); // is name < last  true
console.log(name >= last); // is name >= last  false
console.log(name <= last); // is name <= last  true
console.log(name == last); // is name == last  false
console.log(name != last); // is name != last  true
console.log(name === last); // is name === last  false

console.log(c > day); //is c > day  true
console.log(c < day); //is c < day  false
console.log(c >= day); //is c >= day  true
console.log(c <= day); //is c <= day  false
console.log(c == day); //is c == day  false
console.log(c != day); //is c != day  true
console.log(c === day); //is c === day  false