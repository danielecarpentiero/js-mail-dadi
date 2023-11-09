const humanDiceRoll = Math.floor(Math.random() * 7) + 1;
const computerDiceRoll = Math.floor(Math.random() * 7) + 1;

console.log("all bets are off.");
const playerRoll = `"The human player rolls the dice and ${humanDiceRoll} comes out"`;
const computerRoll = `"Now it's the turn of the computer. He rolls the dice and ${computerDiceRoll} comes out"`;

/* if (humanDiceRoll === 1 || computerDiceRoll === 1) {
  console.log("snake eyes!");
} */
console.log(playerRoll);
console.log(computerRoll);

if (humanDiceRoll > computerDiceRoll) {
  console.log("The user wins!");
} else {
  console.log("Computer wins!");
}
