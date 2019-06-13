// the varibles needed
var playerWins = 0;
var playerLosses = 0;
var playerGuesses = 0;
var compChoice = 0;
var gem1 = 0;
var gem2 = 0;
var gem3 = 0;
var gem4 = 0;

// function that creates random number for each gem
function gemPick() {
  gem1 = Math.floor(Math.random() * 12) + 1;
  gem2 = Math.floor(Math.random() * 12) + 1;
  gem3 = Math.floor(Math.random() * 12) + 1;
  gem4 = Math.floor(Math.random() * 12) + 1;
  console.log(gem1, gem2, gem3, gem4);
}

// function that creates random number
function randomCompChoice() {
  compChoice = Math.floor(Math.random() * 102) + 19;
  console.log("Compter choose: " + compChoice);
  $("compTarget").text(compChoice);
}

// adding up the win and loses
function scoreBoard() {
  $("#playerTarget").text(playerGuesses);
  $("#Wins").text(playerWins);
  $("#Losses").text(playerLosses);
}

crystals = {
  onclickFunction: function(clickValue) {
    if (clickValue === "gem1") {
      clickValue = gem1;
    } else if (clickValue === "gem2") {
      clickValue = gem2;
    } else if (clickValue === "gem3") {
      clickValue = gem3;
    } else if (clickValue === "gem4") {
      clickValue = gem4;
    }

    playerGuesses += clickValue;
    console.log("Current total: " + playerGuesses);
    $("#playerTarget").text(playerGuesses);
    check();
  }
};

// adding up the total gems
$(".buttons").on("click", function() {
  idOfInput = $(this).attr("id");
  crystals.onclickFunction(idOfInput);
});

function check() {
  if (playerGuesses === compChoice) {
    playerWins++;
    $("#playerWins").text(playerWins);
    reset();
  } else if (playerGuesses > compChoice) {
    playerLosses++;
    $("#playerLosses").text(playerLosses);
    reset();
  }
}

// start game over
function reset() {
  gemPick();
  randomCompChoice();
  scoreBoard();
  playerGuesses = 0;
}

reset();
