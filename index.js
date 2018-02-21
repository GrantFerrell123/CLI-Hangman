var prompt = require('prompt');
var Word = require('./words.js');
var Game = require('./letter.js');
prompt.start();
game = {
 wordBank : Game.wordBank,
 wordsWon : 0,
 guessesRemaining : 10,
 guessedLetters: [],
 currentWrd : null,
 startGame : function(wrd) {
   this.resetGuessesRemaining();
   this.currentWrd = new Word.Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
   this.currentWrd.getLets();
   console.log("Welcome to Hangman!\nTry to guess this word!");
   console.log(this.currentWrd.wordRender() + '\n');
   this.keepPromptingUser();
 },
 resetGuessesRemaining : function(){
   this.guessRemaining = 10;
 },
 keepPromptingUser : function(){
   var self = this;
   prompt.get(['guessLetter'], function(err, result) {
       console.log("");
       console.log('The letter you guessed is: ' + result.guessLetter);
       var findHowManyOfUserGuess = self.currentWrd.checkIfLetterFound(result.guessLetter);
       if (findHowManyOfUserGuess === 0) {
         if (self.guessedLetters.indexOf(result.guessLetter) < 0) {
             self.guessedLetters.push(result.guessLetter);
             self.guessesRemaining--;
             console.log("You guessed the WRONG letter FOOL!");
         } else {
             console.log("You've already guessed this letter!");
         }
       } else {
           if (self.guessedLetters.indexOf(result.guessLetter) < 0) {
             self.guessedLetters.push(result.guessLetter);
             console.log('You finally guessed right!');
           } else {
             console.log('Already guessed that letter, stupidhead');
           }
           if (self.currentWrd.didWeFindTheWord()) {
             console.log('You Win! The word was ' + self.currentWrd.word);
             console.log('WAY TO GO! You Win! Speaking of hangman, Im going to hang myslef');
             return;
           }
         }
       console.log('Guesses remaining: ', self.guessesRemaining);
       console.log(self.currentWrd.wordRender());
       console.log("");
       console.log('Letters you already guessed: ' + self.guessedLetters);
       if ((self.guessesRemaining > 0) && (self.currentWrd.found === false)){
         self.keepPromptingUser();
       } else if(self.guessesRemaining === 0){
           console.log('You lost, Nerf Herder! The word was', self.currentWrd.word);
           console.log('Stop existing!');
       } else{
           console.log(self.currentWrd.wordRender());
       }
   });
 }
};
game.startGame();