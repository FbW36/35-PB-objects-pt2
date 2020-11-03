// ! 1. Check if a number is within a given range.**
// Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.

const checksNumInRangeOfObjNums = function (num, object) {
  if (num >= object["min"] && num <= object["max"]) {
    return true;
  } else {
    return false;
  }
};

console.log(checksNumInRangeOfObjNums(4, { min: 0, max: 5 }));
console.log(checksNumInRangeOfObjNums(4, { min: 4, max: 5 }));
console.log(checksNumInRangeOfObjNums(4, { min: 6, max: 10 }));
console.log(checksNumInRangeOfObjNums(5, { min: 5, max: 5 }));

// ! 2. Scrabble.**
// Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.
const scrabbleArr = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];

const convertToScore = (arr) => {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num += arr[i]["score"];
  }
  return num;
};

console.log(convertToScore(scrabbleArr));

// ! 3. Is it an empty object ?**
// Write a program that returns true if an object is empty, and false if otherwise.
const objIsEmpty = function (object) {
  const objToArr = Object.entries(object);
  if (objToArr.length > 0) {
    return false;
  } else {
    return true;
  }
};

const emptyObj = {};
const notEmptyObj = {
  name: "luke",
};

console.log(objIsEmpty(emptyObj)); // true
console.log(objIsEmpty(notEmptyObj)); // false

// ! 4. Counting Letters.**
// Create a function that counts the number of occurrences of each letter in a string.Return an object with key pair values of letters and the number of occurrences for each letter.
function countLetterOccurance(string) {
  let result = {};
  const stringArr = string.split("");
  for (let i = 0; i < stringArr.length; i++) {
    if (result[stringArr[i]] === undefined) {
      result[stringArr[i]] = 1;
    } else {
      result[stringArr[i]] += 1;
    }
  }
  return result;
}

console.log(countLetterOccurance("tree"));

// ! 5. Free Shipping.**
// Create a function that determines whether an online order should get free shipping.An order gets free shipping if the total cost of items exceeds €50.
function getsFreeShipping(obj) {
  let sum = 0;
  const objToArr = Object.entries(obj);
  for (let i = 0; i < objToArr.length; i++) {
    sum += objToArr[i][1];
  }

  if (sum >= 50) {
    return true;
  } else {
    return false;
  }
}

console.log(getsFreeShipping({ Sponge: 3.5, Soap: 5.99 }));
console.log(getsFreeShipping({ "Surround Sound Equipment": 499.99 }));
console.log(
  getsFreeShipping({ Wool: 13.99, "Knitting Needles": 15.5, Bag: 13.99 })
);

// ! 6. Programming Object.**

const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  bothChallengingAndRewarding: function () {
    if (this["isChallenging"] === true && this["isRewarding"] === true) {
      return `${this["languages"]} is rewarding and challenging`;
    }
  },
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

// - Write the command to add the language "Go" to the end of the languages array.
programming["languages"].push("Go");
// console.log(programming);

// - Change the difficulty to the value of 7.
programming["difficulty"] = 7;
// console.log(programming);

// - Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming["jokes"];
// console.log(programming);

// - Write a command to add a new key called isFun and a value of true to the programming object.
programming["isFun"] = true;
// console.log(programming);

// - Using a loop, console.log all of the keys in the programming object.
const programmingKeysArr = Object.keys(programming);
for (let i = 0; i < programmingKeysArr.length; i++) {
  console.log(programmingKeysArr[i]);
}

// - Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging. **Bonus:** In a comment, explain what is printed if we console.log an object method without calling it and why.
console.log(programming.bothChallengingAndRewarding());
console.log(programming.bothChallengingAndRewarding); //[Function: bothChallengingAndRewarding]

// we get the function itself because if we dont call the function it doesn't run, instead we get back the fact that bothChallengingAndRewarding is a function

// - Make sure that any other code cannot delete or change properties of the object.
Object.freeze(programming);
programming["difficulty"] = 6;
console.log(programming);
