// # Objects: Part 2

// **1. Check if a number is within a given range.**
// Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.

// Examples:

// - 4, { min: 0, max: 5 }) ➞ true
// - 4, { min: 4, max: 5 }) ➞ true
// - 4, { min: 6, max: 10 }) ➞ false
// - 5, { min: 5, max: 5 }) ➞ true

const objToCheck = { min: 0, max: 5 };

function checkRange(num) {
  if (num >= objToCheck.min && num <= objToCheck.max) {
    return true;
  } else {
    return false;
  }
}

console.log("checkRange(4) :>> ", checkRange(4)); //true
console.log("checkRange(6) :>> ", checkRange(6)); //false

// **2. Scrabble.**
// Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.
// Example:
// [
// { tile: "N", score: 1 },
// { tile: "K", score: 5 },
// { tile: "Z", score: 10 },
// { tile: "X", score: 8 },
// { tile: "D", score: 2 },
// { tile: "A", score: 1 },
// { tile: "E", score: 1 }
// ]

// The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28

// const tiles = [
//   { tile: "N", score: 1 },
//   { tile: "K", score: 5 },
//   { tile: "Z", score: 10 },
//   { tile: "X", score: 8 },
//   { tile: "D", score: 2 },
//   { tile: "A", score: 1 },
//   { tile: "E", score: 1 },
// ];

function handScore(tiles) {
  let boxScores = [];
  for (let i = 0; i < tiles.length; i++) {
    const element = tiles[i].score;
    boxScores.push(element);
  }
  boxScoresList = boxScores.toString().split(",").join("+");
  let total = 0;
  for (let i = 0; i < boxScores.length; i++) {
    total += boxScores[i];
  }

  return `The player's maximum score: ${boxScoresList} = ${total}`;
}
console.log(
  "handScore() :>> ",
  handScore([
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 },
  ])
);
// **3. Is it an empty object?**
// Write a program that returns true if an object is empty, and false if otherwise.

// Examples:

// - {} ➞ true
// - {a: 1} ➞ false
let aza = {};
let aza2 = { a: 1 };
function emptyOrNot(object) {
  let objToString = Object.keys(object).length;
  if (objToString > 0) {
    return false;
  } else {
    return true;
  }
}
console.log("emptyOrNot :>> ", emptyOrNot(aza)); //true
console.log("emptyOrNot :>> ", emptyOrNot(aza2)); //false

// **4. Counting Letters.**
// Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.

// Example:

// - countLetters("tree") ➞ {t: 1, r: 1, e: 2}

const countLetters = (word) => {
  const counter = {};
  const letters = word.split("");

  for (var i in letters) {
    counter[letters[i]] = (counter[letters[i]] || 0) + 1;
  }

  return counter;
};
console.log("countLetters :>> ", countLetters("tree"));

// I've cheated....:)

// **5. Free Shipping.**
// Create a function that determines whether an online order should get free shipping. An order gets free shipping if the total cost of items exceeds €50.

// Examples:

// - freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false
// - freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
// - freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false

function freeShipping(orderObj) {
  let getMoney = Object.values(orderObj);
  let addMoney = 0;
  for (let i = 0; i < getMoney.length; i++) {
    addMoney += parseFloat(getMoney[i]);
  }
  if (addMoney >= 50) {
    return true;
  } else {
    return false;
  }
}

console.log("freeShipping :>> ", freeShipping({ Sponge: 3.5, Soap: 5.99 }));
console.log(
  "freeShipping :>> ",
  freeShipping({ "Surround Sound Equipment": 499.99 })
);

// **6. Programming Object.**

// ```javascript
const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};
// ```

// - Write the command to add the language "Go" to the end of the languages array.

programming.languages[3] = "Go";
console.log("programming :>> ", programming);

// - Change the difficulty to the value of 7.
programming.difficulty = 8;
console.log("programming :>> ", programming);

// - Using the delete keyword, write the command to remove the jokes key from the programming object.

delete programming.jokes;
console.log("programming :>> ", programming);
// - Write a command to add a new key called isFun and a value of true to the programming object.

programming.isFun = true;
console.log("programming :>> ", programming);

// - Using a loop, iterate through the languages array and console.log all of the languages.

let languages = Object.values(programming.languages);

console.log("languages :>> ", languages);

// - Using a loop, console.log all of the keys in the programming object.

let keysProgramming = Object.keys(programming);
console.log("keysProgramming :>> ", keysProgramming);

// - Using a loop, console.log all of the values in the programming object.

let valuesProgramming = Object.values(programming);
console.log("valuesProgramming :>> ", valuesProgramming);

// - Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging. **Bonus:** In a comment, explain what is printed if we console.log an object method without calling it and why.

// **Bonus**:
// - Make sure that any other code cannot delete or change properties of the object.

// **Hint:**
// Refer to Object.keys, Object.values, Object.entries, Object.fromEntries, Object.assign and Object.getOwnPropertyNames for these exercises.
