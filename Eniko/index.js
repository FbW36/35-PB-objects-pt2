// 1. Check if a number is within a given range. Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.
const numbers = {
    min: 2,
    max: 7,
    getRange: function (num) {
        if (num > this.min && num < this.max) {
            return true;
        } else {
            return false;
        }
    },
};
    console.log(numbers.getRange(3));
// Examples:

// 4, { min: 0, max: 5 }) ➞ true
// 4, { min: 4, max: 5 }) ➞ true
// 4, { min: 6, max: 10 }) ➞ false
// 5, { min: 5, max: 5 }) ➞ true
// 2. Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand. Example: [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ]
let arrayOfTiles = [
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 },
  ];
  
  function calcTilesScore(arrTiles) {
    // let max = 0;
    // arrayOfTiles.map((tile) => (max += tile.score));
    // return max
    // or
    return arrayOfTiles.reduce((acc, curr) => {
      return acc + curr.score;
    }, 0);
  }


// The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28

// 3. Is it an empty object? Write a program that returns true if an object is empty, and false if otherwise.
let example1 = {};
let example2 = {a: 1};
console.log(Object.keys(example2).length);
console.log(Object.keys(example1).length);
function isEmpty(obj){
    if(Object.keys(obj).length > 0) {
         return false;
    } else {
       return true;
    }
};
console.log(isEmpty(example1));
console.log(isEmpty(example2));
// Examples:

// {} ➞ true
// {a: 1} ➞ false
// 4. Counting Letters. Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.
let example3 = "trees";
const objectOfCountLetters = {};
function countLetters(str) {
 for (let i = 0; i < str.length; i++) {
    if (objectOfCountLetters[str[i]]) {
        objectOfCountLetters[str[i]] +=1;
    } else {
        objectOfCountLetters[str[i]] = 1;
    }
 }
 return objectOfCountLetters;
}
console.log(countLetters(example3));
// Example:

// countLetters("tree") ➞ {t: 1, r: 1, e: 2}
// 5. Free Shipping. Create a function that determines whether an online order should get free shipping. An order gets free shipping if the total cost of items exceeds €50.

// Examples:
const example4 = {"Sponge": 3.50, "Soap": 5.99 };
const example5 = {"Sponge": 33.50, "Soap": 53.99 };
const freeShipping = (obj) => {
   if (Object.values(obj).reduce((a, b) => a + b, 0) > 50) {
       return "free shipping"
   } else {
       return "shipping costs apply"
   }
    
};
console.log(freeShipping(example4));
console.log(freeShipping(example5));

//--------------Or--------------
// const freeShipping = obj => {
// 	const valuesArray = Object.values(obj);
// 	let sum = valuesArray.reduce((acc, curr) => acc + curr, 0);

// OR a loop:
// let sum = 0;
// for (let i = 0; i < valuesArray.length; i++) {
// 	sum += valuesArray[i];
// }

// 	return sum > 50 ? "Free shipping" : "Shipping costs apply";
// }


// freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false
// freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
// freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false
// 6. Programming Object.

const programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
// Write the command to add the language "Go" to the end of the languages array.
programming.languages.push("go");
console.log(programming);

// Change the difficulty to the value of 7.
programming.difficulty = 7;
console.log(programming);
// Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;
console.log(programming);

// Write a command to add a new key called isFun and a value of true to the programming object.
programming.isfun = true;
console.log(programming);

// Using a loop, iterate through the languages array and console.log all of the languages.
const languages = [];
function getLanguages (arr) {
    for (let i = 0; i < arr.length; i++) {
        languages.push(arr[i]);
    }
    return languages;
}

console.log(getLanguages(programming.languages));
// Using a loop, console.log all of the keys in the programming object.
for (const key in programming) {
    console.log(`keys ${key}`);
}
// Using a loop, console.log all of the values in the programming object.
for (const key in programming) {
    console.log("values", programming[key]);
}
// Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging. Bonus: In a comment, explain what is printed if we console.log an object method without calling it and why.
function isBothTrue () {
    if (programming.isChallenging === true && programming.isRewarding === true) {
        return `Learning the programming languages: "${programming.languages}" is rewarding and challanging.`
    } else {
            return `I give up.`
    }
};
console.log(isBothTrue());

// Bonus: It will be be shown as function, in that case not the function but the typeof the fucntion is called (my guess).

// Make sure that any other code cannot delete or change properties of the object.
// Hint: Refer to Object.keys, Object.values, Object.entries, Object.fromEntries, Object.assign and Object.getOwnPropertyNames for these exercises.