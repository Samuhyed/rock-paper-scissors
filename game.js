//computerPlay
//playerSelection
//computerSelection
//game
//playRound

//computer randomly selects value from array
const array = ['rock', 'paper', 'scissors']

function computerPlay(arr) {
    const randomSelect = Math.floor(Math.random() * arr.length);
    const item = arr[randomSelect];
    return item;
}
//const result = computerPlay(array);
//console.log(result);

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let tie = 0;
const winningScore = 5;

//logic to determine win condition
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
        return tie++;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log("Player wins, " + playerSelection + " beats " + computerSelection + "!");
        return playerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log("Player wins, " + playerSelection + " beats " + computerSelection + "!");
        return playerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log("Player wins, " + playerSelection + " beats " + computerSelection + "!");
        return playerScore++;
    } else {
        console.log("You lose, " + computerSelection + " beats " + playerSelection + "!");
        return computerScore++;
    }
}

//play rounds until player or computer reaches 5
function game() {
    for (let i = 0; i < 50; i++) {
        if (playerScore === winningScore) {
            console.log("Player wins the game! FINAL SCORE: " + playerScore + ":" + computerScore);
        } else if (computerScore === winningScore) {
            console.log("Computer wins the game! FINAL SCORE: " + computerScore + ":" + playerScore);
        } else {
            playerSelection = prompt("Please select rock, paper, or scissors:").toLowerCase();
            computerSelection = computerPlay(array);
            console.log("Computer chose: " + computerSelection + ". " + "Player chose: " + playerSelection + ".");
            //console.log("Player chose " + playerSelection + ".");
            playRound(playerSelection, computerSelection);
            console.log("Player Score: " + playerScore + " | " + "Computer Score: " + computerScore);
            console.log("-----------------------------------------------")
        }
    }


}

game();
