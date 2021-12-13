"use strict";

console.log("hi");

const obj1 = {};
const obj2 = new Object();

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

let person = { name: "ellie", age: 3 };
print(person);

//with JavaScript magic (dynamically typed language)
//can add properties later

person.hasJob = true;
console.log(person.hasJob);

delete person.hasJob;
console.log(person.hasJob);
