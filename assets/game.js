window.onload = function () {

//Array of Song Options
var songs = ['ridin','tipsy','lollipop','whoa','dilemma'];
var chosenSong = "";
var letersInChosenSong = [];
var numBlanks = 0;
var guesses = [];
var wrongGuesses = [];

//Game Counters
var winCounter =0;
var lossCounter =0;
var lives =10;


// Start Game Button
// ================================================================
function startGame() {
		lives = 10;

    chosenSong = songs[Math.floor(Math.random() * songs.length)];
    lettersInChosenSong = chosenSong.split("");

    numBlanks = lettersInChosenSong.length;

    console.log("chosenSong");

    guesses = [];
    wrongGuesses = [];

    for (var i=0; i < numBlanks; i++){
    guesses.push("_");
    }
    console.log("guesses");

    document.getElementById("guessesleft").innerHTML = lives;
    document.getElementById("wordblank").innerHTML = guesses.join (" ");
    document.getElementById("wrongGuesses").innerHTML = wrongGuesses.join (" ");
    }

    //ChecksLetter() function
    function checkLetters(letter){

      var letterInWord = false;

      for (var i = 0; i < numBlanks.length; i++) {
        if (chosenSong[i] ==letter) {
          letterInWord = true;
        }
      }

      if(letterInWord) {
        for (var i=0; i<numBlanks; i++){

          if(chosenSong[i] ==letter); {
            guesses[i] = letter;
          }
        
        }
        console.log("guesses");
      }

        else {
          wrongGuesses.push(letter);
          lives--;
        }
    }

//  StartRound & Complete
//  ======================================================

    function roundComplete(){

      console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);
      
      document.getElementById("guessesLeft").innerHTML= lives;
      document.getElementById("wordblanks").innerHTML = guesses.join(" "); 
      document.getElementById("wrongGuesses").innerHTML = wrongGuesses.join(" "); 

      if (lettersInChosenSong.toString() == guesses.toString()) {
    winCounter++;
    alert("You win!");

    document.getElementById("winCounter").innerHTML= winCounter;
    startGame();

    }

    else if(lives == 0) {
    lossCounter++;   
    alert("You lose");

    document.getElementById("lossCounter").innerHTML= lossCounter;
    startGame();
	}
}

// Start Game Action
// ===========================================================================
startGame();

document.onkeyup = function(event) {
  letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

  checkLetters(letterGuessed);
  roundComplete();

}

}
