// # 35-PB-objects-pt2

// # Objects: Part 2

// **1. Check if a number is within a given range.**
// Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.

// Examples:

// - 4, { min: 0, max: 5 }) ➞ true
// - 4, { min: 4, max: 5 }) ➞ true
// - 4, { min: 6, max: 10 }) ➞ false
// - 5, { min: 5, max: 5 }) ➞ true

const minmax = (num, object) => {
  if (num >= object.min && num <= object.max) {
    return true;
  } else {
    return false;
  }
};

console.log(minmax(4, { min: 0, max: 5 }));

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
let scrableScore = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];
const maxScore = () => {
  let score = 0;
  for (let i = 0; i < scrableScore.length; i++) {
    console.log(scrableScore[i].score);
    score = score + scrableScore[i].score;
  }
  return score;
};

console.log(maxScore(scrableScore));

// **3. Is it an empty object?**
// Write a program that returns true if an object is empty, and false if otherwise.

const empty = (object) => {
  if (Object.keys(object).length === 0) {
    return true;
  } else return false;
};
console.log(empty({}));
console.log(empty({ a: 1 }));
// Examples:

// - {} ➞ true
// - {a: 1} ➞ false

// **4. Counting Letters.**
// Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.
const countletter = (str) => {
  let tempArr = str.split("");
  let count = 1;
  let letters = [];
  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i] === tempArr[i + 1]) {
      count++;
      if ((i = tempArr.length)) {
        let value = `${tempArr[i]}:${count}`;
        letters.push(value);
      }
    }
  }
  return letters;
};

console.log(countletter("ffffeeedddf"));

let ourString = "onomatopeia";

const countLetters = (string) => {
  const mapOfOccurrence = {};
  for (let i = 0; i < ourString.length; i++) {
    console.log(mapOfOccurrence[string[i]]);
    if (mapOfOccurrence[string[i]]) {
      mapOfOccurrence[string[i]] += 1;
    } else {
      mapOfOccurrence[string[i]] = 1;
    }
  }
  return mapOfOccurrence;
};

console.log("onomatopeia", countLetters(ourString));

// Example:

// - countLetters("tree") ➞ {t: 1, r: 1, e: 2}

// **5. Free Shipping.**
// Create a function that determines whether an online order should get free shipping. An order gets free shipping if the total cost of items exceeds €50.

const freeShipping = (object) => {
  let arrObj = Object.values(object);
  // console.log(arrObj);

  let sum = 0;
  for (let i = 0; i < arrObj.length; i++) {
    sum = sum + arrObj[i];
  }
  return sum > 50 ? `true:free shipping` : `false:shipping cost applyed`;
};
console.log("shipping ", freeShipping({ Sponge: 3.5, Soap: 5.99 }));
console.log("shipping ", freeShipping({ "Surround Sound Equipment": 499.99 }));
console.log(
  "shipping ",
  freeShipping({ Wool: 13.99, "Knitting Needles": 15.5, Bag: 13.99 })
);
// Examples:

// - freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false
// - freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
// - freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false

// **6. Programming Object.**

const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

// - Write the command to add the language "Go" to the end of the languages array.
programming.languages.push("Go");
console.log(programming.languages);
// - Change the difficulty to the value of 7.
programming.difficulty = 7;
console.log(programming.difficulty);
// - Using the delete keystring, write the command to remove the jokes key from the programming object.
delete programming.jokes;
console.log(programming);
// - Write a command to add a new key called isFun and a value of true to the programming object.
programming.isFun = true;
console.log(programming);
// - Using a loop, iterate through the languages array and console.log all of the languages.
for (let i = 0; i < programming.languages.length; i++) {
  console.log("language", programming.languages[i]);
}
// - Using a loop, console.log all of the keys in the programming object.
const arr = Object.keys(programming);
for (let i = 0; i < arr.length; i++) {
  console.log("keys", arr[i]);
}

// - Using a loop, console.log all of the values in the programming object.
const arr2 = Object.values(programming);
for (let i = 0; i < arr2.length; i++) {
  console.log("values", arr2[i]);
}
// - Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true",
// then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging.

const find = () => {
  if (programming.isChallenging === true && programming.isRewarding) {
    return `Learning the programming languages: "${programming.languages}" is rewarding and challenging.`;
  }
};
console.log(find());

// **Bonus:** In a comment, explain what is printed if we console.log an object method without calling it and why.
console.log();
// **Bonus**:

// - Make sure that any other code cannot delete or change properties of the object.
Object.freeze(programming);
programming.idFun = false;
console.log("fereezed", programming);
// **Hint:**
// Refer to Object.keys, Object.values, Object.entries, Object.fromEntries, Object.assign and Object.getOwnPropertyNames for these exercises.
