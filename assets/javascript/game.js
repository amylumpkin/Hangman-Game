//Objects with properties and methods within.
//  - Properties are variables assigned to that object.
//  - Methods are functions inside of objects.

//name variables and their starting properties
var wins = 0;
var losses = 0;
var guessesLeft = 12;
var correctLetterGuessed = [];
var wrongLetterGuessed = [];
var computerWord = "";
var wordBank = ["cat", "dog", "bird", "table", "glass", "bottle"];

//computer chooses a random word from word bank 
var randomWord = wordBank[Math.floor(Math.random() * wordBank.lenth)];
function choose(randomWord) {
	console.log(computerWord);
	guessesLeft = 12;
	correctLetterGuessed = [];
	wrongLetterGuessed =[];
};
//create function that an event will occur when letter keys are typed
//this is just naming the function.
randomWord();
document.onkeyup = function(event) {
	var userGuess = event.key;
	console.log(userGuess);
};
//variable to hold array length:
var arrayLength = wordBank.length;
//I'm sure I need a 'for loop', but not sure how to implement...
//something similar to what we did in the lottery with 9 digit numbers, 
//and the hard loop with the farm animals.


for (i=0; i < randomWord.length; ++) {
	//if there are still missing letters in the word then the user
	//will get to keep guessing.
}
//if statements - telling the function what to do. 
//if correct letter is guessed:
		    // - guessesLeft number goes down
			// - letter is added to the correctLetterGuessed array
//if incorrect letter is guessed:
			// - guessesLeft number goes down
			// - letter is added to the wrongLetterGuessed array
//if 12 wrong guesses 
            // - then losses goes up by one
            // - alert says 'You Lose' 
            // - game resets
//if all letters in word are guessed before 12 guesses
    		// - wins goes up by one
    		// - alert says 'you win'
    		// - game resets

if (guessesLeft > 0) {
	console.log(guessesLeft);
	if (userGuess !== wordBank) { 		//if wrong guess 
		guessesLeft--;	
	}				//guesses left goes down by one
		//grabbing some HTML and adding this property/value?
		document.getElementbyId("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
	if (userGuess === wordBank) {
		wins++;
		document.getElementbyId("wins").innerHTML = "Wins: " + wins;
		alert("You Won!");
		randomWord();
	}
	if (guessesLeft == 0) {
		losses++;
		document.getElementbyId("losses").innerHTML = "Losses: " + losses;
		alert("You Lost");
		randomWord();
	};
	};







    

