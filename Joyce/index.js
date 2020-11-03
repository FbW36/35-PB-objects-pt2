// 1. Check if a number is within a given range. Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.
const checkObject = (number, object) => {
  if (number >= object.min && number <= object.max) {
    return `${number} is in the range ${object["min"]} to ${object["max"]}`;
  } else {
    return `${number} is not in the range ${object["min"]} to ${object["max"]}`;
  }
};

console.log(checkObject(4, { min: 0, max: 5 }));
console.log(checkObject(10, { min: 4, max: 5 }));
console.log(checkObject(8, { min: 6, max: 10 }));
console.log(checkObject(4, { min: 5, max: 5 }));

// 2. Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand. Example: [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ]
// The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28
const tiles = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];
const checkTiles = () => {
  let score = 0;
  for (let i = 0; i < tiles.length; i++) {
    score = tiles[i].score += score;
  }
  return score;
};
console.log("2. Scrabble==>", checkTiles());

// 3. Is it an empty object? Write a program that returns true if an object is empty, and false if otherwise.
// {} ➞ true
// {a: 1} ➞ false

const emptyObject = (object3) => {
  if (Object.keys(object3).length === 0) {
    return true;
  } else {
    return false;
  }
};
console.log("3. Is it an empty object? ==>", emptyObject({}));
console.log("3. Is it an empty object? ==>", emptyObject({ a: 1 }));

// 4. Counting Letters. Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.
const countLetters = (str) => {
  let howMany = {};
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    howMany[letter] = howMany[letter] + 1 || 1;
  }
  return howMany;
};
console.log("4. Counting Letters ==>", countLetters("javjavscriptttt"));

// 5. Free Shipping. Create a function that determines whether an online order should get free shipping. An order gets free shipping if the total cost of items exceeds €50.
const freeShipping = (object5) => {
  let prices = Object.values(object5);
  for (let i = 0; i < prices.length; i++) {
    prices = prices[i]++;
    if (prices > 50) {
      return true;
    } else {
      return false;
    }
  }
};
console.log("5. Free Shipping ==>", freeShipping({ Sponge: 3.5, Soap: 5.99 }));
console.log(
  "5. Free Shipping ==>",
  freeShipping({ "Surround Sound Equipment": 499.99 })
);
console.log(
  "5. Free Shipping ==>",
  freeShipping({ Wool: 13.99, "Knitting Needles": 15.5, Bag: 13.99 })
);

//6. Programming Object.
const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};
// Write the command to add the language "Go" to the end of the languages array.
programming.languages.push("Go");
console.log('Add the language "Go" ==>', programming);

// Change the difficulty to the value of 7.
programming.difficulty = 7;
console.log("Change the difficulty to the value of 7 ==>", programming);

// Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;
console.log("Delete keyword ==>", programming);

// Write a command to add a new key called isFun and a value of true to the programming object.
programming.isFun = true;
console.log("Add a new key ==>", programming);

// Using a loop, iterate through the languages array and console.log all of the languages.
for (i = 0; i < programming.languages.length; i++) {
  console.log("All of the languages ==>", programming.languages[i]);
}

// Using a loop, console.log all of the keys in the programming object.
const keys = Object.keys(programming);
for (let i = 0; i < keys.length; i++) {
  console.log("All of the keys ==>", keys[i]);
}

// Using a loop, console.log all of the values in the programming object.
const values = Object.values(programming);
for (let i = 0; i < values.length; i++) {
  console.log("All of the values ==>", values[i]);
}

// Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging. Bonus: In a comment, explain what is printed if we console.log an object method without calling it and why.
const checkValue = () => {
  if (programming.isChallenging === true && programming.isRewarding === true) {
    return 'Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging';
  }
};
console.log(checkValue());
console.log(programming); //!The object will be printed, but not the function above

// Bonus:
// Make sure that any other code cannot delete or change properties of the object.
// Hint: Refer to Object.keys, Object.values, Object.entries, Object.fromEntries, Object.assign and Object.getOwnPropertyNames for these exercises.
Object.freeze(programming);
programming.isChallenging = false;
console.log(programming);
