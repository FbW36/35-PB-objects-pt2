//1.Check if a number is within a given range.
function checkRange(num, object) {
  /*   for (const key in object) {
    if (key === "min") {
      if (num < object[key]) {
        return false;
      }
    }
    if (key === "max") {
      if (num > object[key]) {
        return false;
      }
    } else {
      return true;
    }
  } */
  // or simpler
  if (num < object.min) return false;
  if (num > object.max) return false;
  else return true;
}
// console.log(checkRange(4, { min: 6, max: 10 }));

//2. Scrabble.
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
// console.log(calcTilesScore(arrayOfTiles));

//3.Is it an empty object?
function isEmpty(object) {
  return Object.keys(object).length === 0 ? true : false;
}
// console.log(isEmpty({ a: 1 }));

//4.Counting Letters.
function countLetters(string) {
  let result = {};
  string.split("").map((letter) => {
    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  });
  return result;
}
// console.log(countLetters("atalaya"));

//5. Free Shipping
function freeShipping(object) {
  let cost = Object.values(object).reduce((acc, curr) => acc + curr, 0);

  return cost > 50 ? true : false;
}
// console.log(freeShipping({ Sponge: 3.5, Soap: 5.99 }));

//6. Programming Object
const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes: "http://stackoverflow.com/",
  /* addLanguage: function (language) {
    this.languages.push(language);
  }, */
  /* deleteJokes: function () {
    delete this.jokes;
  }, */
  isRewardAndChall: function () {
    return this.isRewarding && this.isChallenging
      ? `Learning the programming languages: "${this.languages.join(
          ", "
        )}"  is rewarding and challenging.`
      : false;
  },
};
programming.languages.push("Go");
programming.difficulty = 7;
delete programming.jokes;
programming.isFun = true;
// programming.languages.map((language) => console.log(language));
// Object.keys(programming).map((key) => console.log(key));
// Object.values(programming).map((value) => console.log(value));
// console.log(programming);
// console.log(programming.isRewardAndChall());
//Bonus
/*
What is printed is the function itself because that is the value of the key.
 */

//Bonus
Object.freeze(programming);

programming.isChallenging = false;
console.log(programming);
