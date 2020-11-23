let log = console.log;

// Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true

function checkRange(x, min, max) {
  if (x >= min && x <= max) {
    log(`is ${x} in range?:`, true);
  } else {
    log(`is ${x} in range?:`, false);
  }
}
checkRange(10, 5, 10);
// Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.  Example: [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ]
const hand = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];

const countScore = (obj) => {
  sum = 0;
  for (i = 0; i < hand.length; i++) {
    sum = sum + hand[i].score;
  }
  return sum;
};
log("score on hand -->", countScore(hand));

// Write a program that returns true if an object is empty, and false if otherwise
const object = {};
function checkContent(obj) {
  const objToArr = Object.entries(object);
  objToArr.length > 0 ? log(false) : log(true);
}

checkContent(object);

// Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.

let strExample = "Ulaanbaatar";
const letters = {};
const countLetters = (str) => {
  for (i = 0; i < str.length; i++) {
    if (letters[str[i]]) {
      letters[str[i]] += 1;
    } else {
      letters[str[i]] = 1;
    }
  }
  return letters;
};
console.log(countLetters(strExample));

// Create a function that determines whether an online order should get free shipping. An order gets free shipping if the total cost of items exceeds €50
//const order =
const evalOrder = (obj) => {
  sum = 0;
  const prices = Object.values(obj);
  for (i = 0; i < prices.length; i++) {
    sum += prices[i];
  }
  sum > 50 ? log("free shipping-->", true) : log("free shipping-->", false);
};
evalOrder({ Wool: 13.99, "Knitting Needles": 15.5, Bag: 13.99 });

// 6.
const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
    howsLearning: function (obj) {
      if(programming.isChallenging === true && programming.isRewarding === true) {
        return `Learning the programming languages: ${languages} is rewarding and challenging.`
      }
    }
};

// Write the command to add the language "Go" to the end of the languages array
programming.languages[programming.languages.length] = "Go";
// Change the difficulty to the value of 7
programming.difficulty = 7;

//Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming["jokes"];
// Write a command to add a new key called isFun and a value of true to the programming object.
programming["isFun"] = true;

log("programming -->", programming);
// Using a loop, iterate through the languages array and console.log all of the languages.
const languages = [];
for (i = 0; i < programming.languages.length; i++) {
  languages.push(programming.languages[i]);
}
log("programming languages -->", languages);
// Using a loop, console.log all of the keys in the programming object.
const propertiesToArr = Object.keys(programming)
for(i = 0; i < propertiesToArr.length; i++) {
 log(`object property on the index ${i} -->`, propertiesToArr[i])
}
// Using a loop, console.log all of the values in the programming object.
const valuesToArr = Object.values(programming)
for(i = 0; i < valuesToArr.length; i++) {
  log(`object value on the index ${i} -->`, valuesToArr[i])
}
// Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging. Bonus: In a comment, explain what is printed if we console.log an object method without calling it and why.

log(programming.howsLearning())
// if we only log(howsLearning()), we get ReferenceError: howsLearning is not defined -> it's because the method is not recognized in the global scope, unless we prefix it with an objectName

// Bonus:

// Make sure that any other code cannot delete or change properties of the object:

Object.seal(programming)
programming.difficulty = 10
log('programming -->', programming)