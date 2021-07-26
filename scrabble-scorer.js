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
//console.log "Hello World";//

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

  let 
}

function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   
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

