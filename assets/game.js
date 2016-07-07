window.onload = function () {


var songs = ['ridin','tipsy','lollipop','whoa','dilemma'];
var guess = [];
var lives = 10;





    
document.onkeyup = function(n) {
	var keyup = String.fromCharCode(n.keyCode).toLowerCase(); 
	console.log(keyup);
	startGame();
}

var startGame = function() {
		var chosenSong = songs[Math.floor(Math.random() * songs.length)];
	console.log(chosenSong);
	}


// Get elements
  var showLives = document.getElementById("mylives");


  // Select Songs
  var selectsong = function () {
    if (chosenSong === songs[0]) {
      songName.innerHTML = "ridin";
    } else if (chosenSong === songs[1]) {
      songName.innerHTML = "tipsy";
    } else if (chosenSong === songs[2]) {
      songName.innerHTML = "lollipop";
    } else if (chosenSong === songs [3]) {
    	songName.innerHTML = "whoa";
    } else if (chosenSong === songs [4]) {
    	songName.innerHTML = "dilemma";
    }
  }

  var songSpacing = function() {
  	song == chosenSong.length;
  	for (var i = 0; i < chosenSong.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }
  }
}

}