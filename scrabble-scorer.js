// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

let scrabbleWord = "";



const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble! Enter a word:");
   scrabbleWord = input.question("enter word to score: ");
  return scrabbleWord
};

function simpleScore(word) {
 return word.length 
};

//let vowelBonusScore;//
function vowelBonusScore(word) {
let score = 0;
let vowel = "aeiou";
for (let i = 0; i < word.length; i++) {
  if (vowel.includes(word[i].toLowerCase())){
    score += 3;
  } else {
    score ++;
  }
}
return score;
};

//let scrabbleScore;//
function scrabbleScore(word) {
word = word.toLowerCase();
let score = 0;
for (let i = 0; i < word.length; i++) {
  score += newPointStruture[word[i]];
}
return score;
}

const scoringAlgorithms = [
{
  name:'Simple Score',
  description:'Each letter is worth 1 point',
  scoringFunction: simpleScore
},
{
  name:'Bonus Vowels',
  description:'Vowels are 3 pts, consonants are 1 pt.',
  scoringFunction: vowelBonusScore
},
{
  name:'Scrabble',
  description:'The traditional scoring algorithm.',
  scoringFunction: scrabbleScore
}

];

function scorerPrompt() {
let scoringMethod = input.question("Which scoring algorithm would you like to use?\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2: ");

  console.log("The entered scoring method is " + scoringMethod);

  scoringMethod = String(scoringMethod);

  let validScoringMethod = false;

  while(validScoringMethod === false)
  {
   if ((scoringMethod === "0") 
     (scoringMethod === "1") 
     (scoringMethod === "2"))
    {
      validScoringMethod = true;
    }
    else
    {
      console.log("Invalid option entered!\n")
    scoringMethod = input.question("Which scoring algorithm would you like to use?\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2: ");
    console.log("The entered scoring method is " + scoringMethod);

    }
  }

  return scoringAlgorithms[scoringMethod];

}

function transform(obj) {
  let letterPoints = {};
  for(key in obj) {
    let eachLetter = obj[key];
    for (let i = 0; eachLetter.length; i++) {
letterPoints[eachLetter[i].toLowerCase()] = Number(key);
    }
  }
  return letterPoints;
};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   initialPrompt();
   scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

