//* 1. Check if a number is within a given range. Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.

// (1) function as method:

const minMaxObject = {
	min: 32,
	max: 64,
	checkRange: function(num) {
		if (num > this.min && num < this.max) {
			return `${num} is within the range!`;
		} else {
			return "no!";
		}
	}
}

console.log(minMaxObject.checkRange(60)); // 60 is within the range!

// (2) external function that takes an object as the second argument:

const minAndMaxObject = {
	min: 32,
	max: 64,
}

const checkRange = (num, obj) => {
	if (num > obj.min && num < obj.max) {
		return `${num} is within the range!`;
	} else {
		return "no!";
	}
}

console.log(checkRange(60, minAndMaxObject)); // 60 is within the range!



//* 2. Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.
// Example: [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ]

const scrabbleTiles = [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ];

const calcScore = tiles => {
	let sum = 0;
	for (let i = 0; i < tiles.length; i++) {
		sum += tiles[i].score;
	}
	return sum;
}

console.log(calcScore(scrabbleTiles)); // 28



//* 3. Is it an empty object? Write a program that returns true if an object is empty, and false if otherwise.

const isObjectEmpty = obj => Object.entries(obj).length === 0;

console.log(isObjectEmpty({a: 1})); // false
console.log(isObjectEmpty({})); // true



//* 4. Counting Letters. Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.
// Example:
// countLetters("tree") ➞ {t: 1, r: 1, e: 2}

let someString = "onomatopoeia";

const letterOccurrenceCounter = string => {
	const occurrencesMap = {};

	for (let i = 0; i < string.length; i++) {
		if (!occurrencesMap[string[i]]) {
			occurrencesMap[string[i]] = 1;
		} else {
			occurrencesMap[string[i]]++;
		}
	}
	
	return occurrencesMap;
}

console.log(letterOccurrenceCounter(someString)); // { o: 4, n: 1, m: 1, a: 2, t: 1, p: 1, e: 1, i: 1 }



//* 5. Free Shipping. Create a function that determines whether an online order should get free shipping. An order gets free shipping if the total cost of items exceeds €50.

const storeItems = {
	"Wool": 13.99,
	"Knitting Needles": 15.50,
	"Bag": 13.99,
}
const freeShipping = obj => {
	const valuesArray = Object.values(obj);
	let sum = valuesArray.reduce((acc, curr) => acc + curr, 0);
	
	// OR a loop:
	// let sum = 0;
	// for (let i = 0; i < valuesArray.length; i++) {
	// 	sum += valuesArray[i];
	// }
	
	return sum > 50 ? "Free shipping" : "Shipping costs apply";
}

console.log(freeShipping(storeItems)); // "Shipping costs apply"



//* 6. Programming Object.

const programming = {
	languages: ["JavaScript", "Python", "Ruby"],
	isChallenging: true,
	isRewarding: true,
	difficulty: 8,
	jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

//? Write the command to add the language "Go" to the end of the languages array.

programming.languages.push("Go");
console.log(programming.languages); // [ 'JavaScript', 'Python', 'Ruby', 'Go' ]

//? Change the difficulty to the value of 7.

programming.difficulty = 7;

//? Using the delete keyword, write the command to remove the jokes key from the programming object.

delete programming.jokes;

//? Write a command to add a new key called isFun and a value of true to the programming object.

programming.isFun = true;

//? Using a loop, iterate through the languages array and console.log all of the languages.

for (let i = 0; i < programming.languages.length; i++) {
	console.log(programming.languages[i]);
}

//? Using a loop, console.log all of the keys in the programming object.

const progKeys = Object.keys(programming);
for (let i = 0; i < progKeys.length; i++) {
	console.log(progKeys[i]);
}

//? Using a loop, console.log all of the values in the programming object.

const progValues = Object.values(programming);
for (let i = 0; i < progValues.length; i++) {
	console.log(progValues[i]);
}

//? Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging. Bonus: In a comment, explain what is printed if we console.log an object method without calling it and why.

const message = function() {
	if (this.isChallenging && this.isRewarding) {
		let languagesStr = "";
		for (let i = 0; i < this.languages.length - 1; i++) {
			languagesStr += this.languages[i] + ", ";
		}
		languagesStr += this.languages[this.languages.length - 1];
		return `Learning the programming languages: "${languagesStr}" is rewarding and challenging.`;
	}
}

programming.message = message;

console.log(programming.message());

console.log(programming);

// Bonus:

// Make sure that any other code cannot delete or change properties of the object.
// Hint: Refer to Object.keys, Object.values, Object.entries, Object.fromEntries, Object.assign and Object.getOwnPropertyNames for these exercises.