// 1) Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.

const scrable = (num, object) => {
    if(num >= object.min && num <= object.max){
        return `Your number ${num} is within the range of ${object.min} and ${object.max}!`;
    }else{
        return `Your number ${num} is not within the range of ${object.min} and ${object.max}`;
    }
};
console.log("scrable ==>", scrable(4, { min: 0, max: 5 }));
console.log("scrable ==>", scrable(4, { min: 4, max: 5 }));
console.log("scrable ==>", scrable(4, { min: 6, max: 10 }));
console.log("scrable ==>", scrable(5, { min: 5, max: 5 })); 

// 2) Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.
// The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28

const scrableArr =[
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 }
    ]; 
const scrable2 = (arr) => {
    let boxSum = 0;
    for(let i = 0; i < arr.length; i++){
        boxSum = arr[i].score += boxSum;
    }
    return boxSum;
};
console.log("scrable2 ==>", scrable2(scrableArr)); // 28

// 3) Write a program that returns true if an object is empty, and false if otherwise.
const isEmptyObject = (object) => {
    if(Object.keys(object).length === 0 ){
        return true;
    }else{
        return false;
    }
};
console.log("isEmptyObject ==>", isEmptyObject({})); //true
console.log("isEmptyObject ==>", isEmptyObject({a : 1})); //false

// 4) Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.
const countLetters = (string) => {
    let letter = {}; 
    string = string.toLowerCase().replace(/\s/g, ''); 
        for(let i = 0; i < string.length; i++){
            const currentLetter = string[i];
            if(currentLetter in letter){
                letter[currentLetter] += 1;
            }else{
                letter[currentLetter] = 1;
            }
        }
        return letter; 
}; 
console.log("countLetters ==>", countLetters("Solen skiner sa Sara")); // { s: 4, o: 1, l: 1, e: 2, n: 2, k: 1, i: 1, r: 2, a: 3 }

// 5) Create a function that determines whether an online order should get free shipping. An order gets free shipping if the total cost of items exceeds €50.
const freeShippingValue = 50; 

function freeShipping(object) {
    let sumOfShopping = 0; 
    const objectToArr = Object.values(object); 
        for(let i = 0; i < objectToArr.length; i++){
            sumOfShopping += objectToArr[i]; 
        }
        //console.log(sumOfShopping) // 9.49, 499.99
            if(sumOfShopping >= freeShippingValue){
                return true; 
            }else{
                return false;
            }
};
console.log("freeShipping ==> ", freeShipping({ "Sponge": 3.50, "Soap": 5.99 })); // false
console.log("freeShipping ==> ", freeShipping({ "Surround Sound Equipment": 499.99 })); // true  
console.log("freeShipping ==> ", freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 })); // false

// 6) Write the command to add the language "Go" to the end of the languages array.
// Change the difficulty to the value of 7.
// Using the delete keyword, write the command to remove the jokes key from the programming object.
// Write a command to add a new key called isFun and a value of true to the programming object.
const programming = {
    languages: [" JavaScript", " Python", " Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes:
      "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
      
  };

  programming.languages.push(" Go");
  programming.difficulty = 7; 
  delete programming.jokes; 
  programming.isFun = true; 

console.log("addLanguage ==> ", programming); // [ 'JavaScript', 'Python', 'Ruby', 'Go' ],   difficulty: 7, isFun: true

// Using a loop, iterate through the languages array and console.log all of the languages.
for(let i = 0; i < programming.languages.length; i ++){
    console.log("Language ==>", programming.languages[i])
}; 

// Using a loop, console.log all of the keys in the programming object.
const objectKeys = Object.keys(programming);
console.log(objectKeys); // [ 'languages', 'isChallenging', 'isRewarding', 'difficulty', 'isFun' ]
for(let i = 0; i < objectKeys.length; i++){
    console.log("objectKeys ==>", objectKeys[i]); 
}; 
/*
objectKeys ==> languages
objectKeys ==> isChallenging
objectKeys ==> isRewarding
objectKeys ==> difficulty
objectKeys ==> isFun
*/

// Using a loop, console.log all of the values in the programming object.
const objectValues = Object.values(programming);
console.log(objectValues); // [ [ 'JavaScript', 'Python', 'Ruby', 'Go' ], true, true, 7, true ]
for(let i = 0; i < objectValues.length; i++){
    console.log("objectValues ==>", objectValues[i]);
}; 
/*
objectValues ==> true
objectValues ==> true
objectValues ==> 7
objectValues ==> true
*/

// Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging.
if(programming.isChallenging === true && programming.isRewarding === true){
    console.log(`Learning the programming languages: "${programming.languages}" is rewarding and challenging!`);
}; 

//! In a comment, explain what is printed if we console.log an object method without calling it and why
// it will give us ==> ReferenceError: isChallengig/isRewarding/languages is not defined 

//! Freeze  ==> this will prevent changing anything to the object. With freeze you are sure it’s not modified anywhere in your code.

Object.freeze(programming); 
// testing to change a property 
programming.languages.push(" Java");
programming.difficulty = 6; 
console.log("is programming frozen? ==>", programming); 
/*
{
  languages: [ ' JavaScript', ' Python', ' Ruby', ' Go', ' Java' ],
  isChallenging: true,
  isRewarding: true,
  difficulty: 7,
  isFun: true
}
*/
//! it still allowed me to push 'Java'

