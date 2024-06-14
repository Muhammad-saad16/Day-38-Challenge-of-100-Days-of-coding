"use strict";
//             🚀 Day 38 Challenge: Start Coding! 🚀
Object.defineProperty(exports, "__esModule", { value: true });
// Question 112: 
// Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.
let countries = new Map();
countries.set("Pakistan", "Islamabad");
countries.set("India", "New Delhi");
countries.set("Saudia Arabia", "Madina");
countries.set("Nepal", "Kathmandu");
console.log(countries);
// Question 113: 
// Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
function checkIfMapContainsCanada(map) {
    if (map.has("Canada")) {
        console.log(map.get("Canada"));
    }
    else {
        console.log("Canada is not in the Map");
    }
}
checkIfMapContainsCanada(countries);
// Question 114: 
// Iterate over a Map of student IDs and names, and log each pair to the console.
// Creates a Map to store student IDs (keys) and names (values)
let students = new Map();
students.set(1, "John");
students.set(2, "Jane");
students.set(3, "Mary");
students.forEach((name, ID) => {
    console.log(`Student ID: ${ID}, Name: ${name}`);
});
