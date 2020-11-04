// 1
/*const givenRange = {
  min: 0,
  max: 5,
  check: function (x) {
    if (x >= givenRange.min && x <= givenRange.max) {
      return true;
    }
    return false;
  },
};
console.log(givenRange.check(6));
*/

// 1 right way
function check(num, obj) {
  if (num >= obj.min && num <= obj.max) {
    return true;
  }
  return false;
}
console.log(check(4, { min: 0, max: 5 }));
console.log(check(4, { min: 4, max: 5 }));
console.log(check(4, { min: 6, max: 10 }));
console.log(check(5, { min: 5, max: 5 }));

// 2
const hand = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];
function counter(tiles) {
  let sum = 0;
  for (let x = 0; x < tiles.length; x++) {
    sum = sum + tiles[x].score;
  }
  return sum;
}
console.log(counter(hand));

// 3
function test(obj) {
  if (Object.entries(obj).length === 0) {
    return true;
  }
  return false;
}
console.log("Object is empty? ", test(1));

// 4
function countLetters(str) {
  const objCount = {};
  for (let x = 0; x < str.length; x++) {
    if (!objCount[str[x]]) {
      objCount[str[x]] = 1;
    } else {
      objCount[str[x]] = objCount[str[x]] + 1;
    }
  }
  return objCount;
}
console.log(countLetters("tree"));
console.log(countLetters("the most difficult exercise so far"));

// 5
function freeShipping(obj) {
  let val = Object.values(obj);
  //  console.log(val);
  for (let x = 0; x < val.length; x++) {
    val = val[x]++;
    if (val > 50) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(freeShipping({ Sponge: 3.5, Soap: 5.99 }));
console.log(freeShipping({ "Surround Sound Equipment": 499.99 }));
console.log(
  freeShipping({ Wool: 13.99, "Knitting Needles": 15.5, Bag: 13.99 })
);

// 6
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

// - Change the difficulty to the value of 7.
programming.difficulty = 7;

// - Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;

// - Write a command to add a new key called isFun and a value of true to the programming object.
programming.isFun = true;
console.log(programming);

// - Using a loop, iterate through the languages array and console.log all of the languages.
for (let i = 0; i < programming.languages.length; i++) {
  console.log(programming.languages[i]);
}

// - Using a loop, console.log all of the keys in the programming object.
const proKeys = Object.keys(programming);
for (let i = 0; i < proKeys.length; i++) {
  console.log(`Key ${i} ==>`, proKeys[i]);
}

// - Using a loop, console.log all of the values in the programming object.
const proValues = Object.values(programming);
for (let i = 0; i < proValues.length; i++) {
  console.log(`Value ${i} ==>`, proValues[i]);
}

// - Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging.
function check() {
  if (this.isChallenging === true && this.isRewarding === true) {
    return `learning the programming languages ${programming.values[0]} is rewarding and challenging`;
  }
}
console.log(check());

//**Bonus:** In a comment, explain what is printed if we console.log an object method without calling it and why.
// The name of the function is printed

// Bonus:
// Make sure that any other code cannot delete or change properties of the object.
// Hint: Refer to Object.keys, Object.values, Object.entries, Object.fromEntries, Object.assign and Object.getOwnPropertyNames for these exercises.
Object.freeze(programming);
programming.isChallenging = false;
console.log(programming);
