// the varibles needed
var playerWins = 0;
var playerLosses = 0;
var playerGuesses;
var compChoice;
var gemRand;

// var compPick = function() {
//   compChoice = letters[Math.floor(Math.random() * 102) + 19];
//   console.log("Comp Picked " + compChoice);
// };

// function that creates random number 
function compPick() {
  $("#compChoice").text(Math.floor(Math.random() * 102) + 19);
}

//   var gemPick = function() {
//     gemRand = letters[Math.floor(Math.random() * 11)+1];
//     console.log("Gem Picked " + compChoice);
//   };

// function that creates random number for each gem
function gemPick() {
  $("#gemRand").text(Math.floor(Math.random() * 13) + 1);
}

// adding up the total gems

// adding up the win and loses

