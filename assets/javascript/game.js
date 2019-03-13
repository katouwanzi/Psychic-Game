
var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

var computerGuess = pickLetter();

function pickLetter(){
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

var win = 0;
var losses = 0;
var guessLeft = 10;
var guessSoFar = "";

var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessLeftText = document.getElementById("guessLeft");
var guessSoFarText = document.getElementById("guessSoFar");

document.onkeyup = function(event) {
     var userGuess = event.key.toLowerCase();
     if(computerChoices.indexOf(userGuess) === -1){
         alert("Please choose a letter!");
         return;
     }

     if(userGuess === computerGuess){
         win++;
         guessLeft = 10;
         guessSoFar = "";
         computerGuess = pickLetter();
     }

     else{
         guessLeft--;
         guessSoFar += " " + userGuess;
         if(guessLeft === 0){
             losses++;
             guessLeft = 10;
             guessSoFar = "";
             computerGuess = pickLetter();
         }         
     }

     //display
     winsText.textContent = win;
     lossesText.textContent = losses;
     guessLeftText.textContent = guessLeft;
     guessSoFarText.textContent = guessSoFar;

}



