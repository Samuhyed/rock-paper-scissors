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
const result = computerPlay(array);
console.log(result);

let playerSelection;
let computerSelection = result;

//logic to determine win condition
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
        return 'tie';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log("Player wins, " + playerSelection + " beats " + computerSelection + "!");
        return 'win';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log("Player wins, " + playerSelection + " beats " + computerSelection + "!");
        return 'win';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log("Player wins, " + playerSelection + " beats " + computerSelection + "!");
        return 'win';
    } else {
        console.log("You lose, " + computerSelection + " beats " + playerSelection + "!");
        return 'lose';
    }
}

//play 5 rounds
function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Please select rock, paper, or scissors:").toLowerCase();
        computerPlay(array);
        playRound(playerSelection, computerSelection);
    }
}

game();