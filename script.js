// Type number

const myNumber = 100;

console.log("typeof myNumber", typeof myNumber);

// Type text

const myText = "Hello world";

console.log("typeof myText", typeof myText);

// Type boolean

const myBoolean = true;

console.log("typeof myBoolean", typeof myBoolean);

// Type undefined

let myUndefined;

console.log("typeof myUndefined", typeof myUndefined);

// Type null

let myNull = null;

console.log("typeof myNull", typeof myNull);




let myName = "Ani";
let myHobby = "Traveling"
let yearOfBirth = 1996;
let currentYear = 2023;

console.log(myName, myHobby,  yearOfBirth, currentYear);

let myAge = currentYear - yearOfBirth;

console.log (myAge);

let result = "My name is " + myName + " I am " + myAge + " years old and " + "my hobby is " + myHobby;

console.log(result);

// Second version

let result2 = `My name is ${myName} I am ${myAge} years old and my hobby is ${myHobby}`;

console.log(result2);

