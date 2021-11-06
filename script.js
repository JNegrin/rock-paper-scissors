//Declares the default score count and number of rounds
let userScore = 0;
    compScore = 0;
    round = 0;

//The computer returns a random selection: Rock, Paper, or Scissors
function computerPlay(selection) {
    //Gets random number between 1 and 3
    let randomNum = Math.floor(Math.random() * 3) + 1;
    //Assigns each possible selection to the randomized number and returns a string
    if (randomNum === 1) {
        selection = 'Rock';
    } else if (randomNum === 2) {
        selection = 'Paper';
    } else {
        selection = 'Scissors';
    }
    return selection.toLowerCase();
}

//Plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    //Asks user for input and converts to lower case
        if (playerSelection === 'rock' && computerSelection === 'scissors'
        || playerSelection === 'paper' && computerSelection === 'rock' 
        || playerSelection === 'scissor' && computerSelection === 'rock') {
            return 'You win the round! ' + playerSelection + ' beats ' + computerSelection + '.';
        //Conditions for a user defeat
        } else if (computerSelection === 'rock' && playerSelection === 'scissors'
        || computerSelection === 'paper' && playerSelection === 'rock' 
        || computerSelection === 'scissor' && playerSelection === 'rock') {
            return 'You lose this round :( ' + computerSelection + ' beats ' + playerSelection + '.';
        } else {
            return 'This round\'s a draw!';
        }
}

function game() {
    let computerSelection;
    let playerSelection;
    let userScore = 0;
    let compScore = 0;
    let round = 0;
        playerSelection = prompt('Please select: Rock, Paper, or Scissors').toLowerCase();
        computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);
}

console.log(game());