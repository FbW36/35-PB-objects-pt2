//1
const minMax ={
    min:0,
    max:5,
}

function range (num){
    if(num>=minMax.min && num<=minMax.max){
        return true;
    } else{
        return false;
    }
}

console.log("1==>",range(4));

//2
const titlesHand={
    N:1,
    K:5,
    Z:10,
    X:8,
    D:2,
    A:1,
    E:1,
}

function maxScore(object){
    const titlesHandArray = Object.values(object);
    let maxScore = 0
        for (i=0;i<titlesHandArray.length;i++){
            maxScore += titlesHandArray[i];
        }
    return maxScore;
}

console.log("2==>",maxScore(titlesHand));


//3
const object1={a:1}
function isEmpty(object){
    return Object.keys(object).length === 0 ?true : false;
}
console.log("3==>",isEmpty(object1));

//4
function countLetter(string){
    let letters = string.split('');
    const letterOccurrence = {};
    
    for ( i= 0; i < letters.length; i++) {
        const letter = letters[i]
        console.log(letterOccurrence[letter]);
        if (letterOccurrence[letter]){
            letterOccurrence[letter]++
           
        }
        else {
            letterOccurrence[letter] = 1
        }
      }
    
    return letterOccurrence;
}

console.log("4==>",countLetter("tree"));


//5
function freeShipping(object){
    const itemsCost = Object.values(object);
    let totalCost = 0;
    for(i=0;i<itemsCost.length;i++){
        totalCost += itemsCost[i]
    }
    if(totalCost>50){
        return true
    }
    else{
        return false
    }
}

const order={ "Wool": 13.99, "Knitting Needles": 25.50, "Bag": 13.99 }

console.log("5==>",freeShipping(order));

//6
const programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes:
      "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
  };

  //a)
  programming.languages.push("Go");
  //b)
  programming.difficulty=7;
  //c)
  delete programming.jokes;
  //d)
  programming["isFun"]= true;

  //e)
  const languages = programming.languages
  let languagesString =""
  for(i=0;i<languages.length;i++){
    languagesString = languagesString + " " + languages[i];
  }
  console.log("Languages log==>",languagesString);

  //f)
  const keys = Object.keys(programming);
  let keysString =""
  for(i=0;i<keys.length;i++){
    keysString = keysString + " " + keys[i];
  }
  console.log("keys log==>",keysString);

  //g)
  const values = Object.values(programming);
  let valuesString =""
  for(i=0;i<values.length;i++){
    valuesString = valuesString + " " + values[i];
  }
  console.log("values log==>",valuesString);

  //h)
if(programming.isChallenging === true && programming.isRewarding === true){
    console.log( `Learning the programming languages: ${programming.languages} is rewarding and challenging.`)
}

//Bonus
Object.seal(programming);
delete programming.languages;
console.log("cannot delete",programming)