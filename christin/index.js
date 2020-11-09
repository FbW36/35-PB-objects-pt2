/* 1. Check if a number is within a given range. Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.
Examples:
4, { min: 0, max: 5 }) ➞ true
4, { min: 4, max: 5 }) ➞ true
4, { min: 6, max: 10 }) ➞ false
5, { min: 5, max: 5 }) ➞ true*/

const range = {
  inRange: function (number, min, max) {
    if (number > min && number < max) {
      return true;
    } else {
      return false;
    }
  },
};

console.log("in range:", range.inRange(4, 0, 5)); // true
console.log("in range:", range.inRange(4, 6, 10)); // false

// 2. Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand. Example: [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ]

//The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28

const scrabbleTiles = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];

const maxScoreCounter = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i].score;
  }
  return sum;
};

console.log(maxScoreCounter(scrabbleTiles));

//! 3. Is it an empty object? Write a program that returns true if an object is empty, and false if otherwise.

//Examples:
//{ } ➞ true
//{ a: 1 } ➞ false

const empty = {};
const value = {
  val1: 1,
  val2: 2,
};

function checkObject(object) {
  let objectToArray = Object.entries(object);
  if (objectToArray.length <= 0) {
    return true;
  } else {
    return false;
  }
}

console.log("checkObject", checkObject(value));

/* 4. Counting Letters. Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.
Example:
countLetters("tree") ➞ {t: 1, r: 1, e: 2}*/

let ourString = "thats a string";

const countLetters = (string) => {
  const mapOfOccurrences = {};

  for (i = 0; i < ourString.length; i++) {
    if (mapOfOccurrences[string[i]]) {
      mapOfOccurrences.count += 1;
    } else {
      mapOfOccurrences[string[i]] = 1;
    }
  }
  return mapOfOccurrences;
};

countLetters(ourString);

// 5. 5. Free Shipping. Create a function that determines whether an online order should get free shipping. An order gets free shipping if the total cost of items exceeds €50.

//Examples:

//freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false
//freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
//freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false

freeShipping1 = { "Surround Sound Equipment": 499.99 };
freeShipping2 = { Sponge: 3.5, Soap: 5.99 };

function freeShipping(object) {
  let result = 0;
  const sum = Object.values(object);
  for (i = 0; i < sum.length; i++) {
    result += sum[i];
  }
  if (Math.round(result) >= 50) {
    return "true, shipping is free";
  } else {
    return false;
  }
}

console.log(freeShipping(freeShipping2));

/* 6. Programming Object.

const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

a) - Write the command to add the language "Go" to the end of the languages array.
b) - Change the difficulty to the value of 7.

*/

const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

//a)

function modifyProgrammingLanguage(data) {
  programming.languages.push(data);
  return programming;
}

console.log(modifyProgrammingLanguage("Go"));
//------------------------------------------------

// b)

const modifyProgrammingData = (data) => {
  if (data.language) {
    programming.language = data.language;
  }
  if (data.isChallenging) {
    programming.isChallenging0data.isChallenging;
  }
  if (data.isRewarding) {
    programming.isRewarding = data.isRewarding;
  }
  if (data.difficulty) {
    programming.difficulty = data.difficulty;
  }
  if (data.jokes) {
    programming.joke = data.jokes;
  }
};

modifyProgrammingData({
  difficulty: 7,
});

console.log(programming);

// c) - Using the delete keyword, write the command to remove the jokes key from the programming object.

delete programming.jokes;

//d) - Write a command to add a new key called isFun and a value of true to the programming object.

programming.isFun = true;
console.log(programming);

//e) - Using a loop, iterate through the languages array and console.log all of the languages.

let languages = [];

function getLanguages(obj) {
  for (let key in obj) {
    if (key === "languages") {
      languages = obj[key];
    }
  }
  return languages;
}

getLanguages(programming);
console.log(languages); // [ 'JavaScript', 'Python', 'Ruby', 'Go' ]

//f) - Using a loop, console.log all of the keys in the programming object.

keys = [];

function getKeys(obj) {
  for (let key in obj) {
    keys.push(key);
  }
}

getKeys(programming);
console.log("keys=>", keys); // keys=> [ 'languages', 'isChallenging', 'isRewarding', 'difficulty', 'isFun' ]

//g) - Using a loop, console.log all of the values in the programming object.

let values = [];

function getValues(obj) {
  for (let key in obj) {
    values.push(obj[key]);
  }
}

getValues(programming);
console.log("Values==>", values); // Values==> [ [ 'JavaScript', 'Python', 'Ruby', 'Go' ], true, true, 7, true ]

//h) - Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging. Bonus: In a comment, explain what is printed if we console.log an object method without calling it and why.*/

programming.content = `Learning the programming Languages: "${languages}" is rewarding and challenging`;
console.log(programming);

if (programming.isChallenging === true && programming.isRewarding === true) {
  console.log(programming.content);
}

// Bonus: In a comment, explain what is printed if we console.log an object method without calling it and why.*/
// I dont understand the question, please explain
