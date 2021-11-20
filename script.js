//Declares the default score count and number of rounds
let userScore = 0;
    compScore = 0;
    roundScore = 0;
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
    let playerWin = playerSelection > computerSelection;
        computerWin = computerSelection > playerSelection;
        draw = playerSelection === computerSelection;
    if (playerSelection === 'rock' && computerSelection === 'scissors' 
    || playerSelection === 'paper' && computerSelection === 'rock' 
    || playerSelection === 'scissor' && computerSelection === 'rock') {
        return playerWin;
     //   return 'You win the round! ' + playerSelection + ' beats ' + computerSelection + '.';
    //Conditions for a user defeat
    } else if (computerSelection === 'rock' && playerSelection === 'scissors' 
    || computerSelection === 'paper' && playerSelection === 'rock' 
    || computerSelection === 'scissor' && playerSelection === 'rock') {
        return computerWin;
     //   return 'You lose this round :( ' + computerSelection + ' beats ' + playerSelection + '.';
    } else {
        return draw;
     //   return 'This round\'s a draw!';
    }  
    
}

function winOrLose() {
    if (userScore >= 2 && userScore > compScore && round >= 5) {
    alert('You win the game! ' + playerSelection + ' beats ' + computerSelection + '.')
} else if (compScore >= 2 && compScore > userScore && round >= 5) {
    alert('You lose the game :( ' + playerSelection + ' beats ' + computerSelection + '.')
} else if (userScore >= 1 && userScore === compScore && round === 5){
    alert('It\'s a draw.');
}
}

function game() {
    //Asks user for input and converts to lower case
    playerSelection = prompt('Please select: Rock, Paper, or Scissors', 'Rock').toLowerCase();
    computerSelection = computerPlay();
    result = playRound(playerSelection, computerSelection);
    if (result == playerSelection > computerSelection) {
        ++userScore;
        ++round;
        console.log(userScore, compScore);
        alert('You win the round! ' + playerSelection + ' beats ' + computerSelection + '.');
    } else if (result == computerSelection > playerSelection) {
        ++compScore;
        ++round;
        console.log(userScore, compScore);
        alert('You lose this round :( ' + computerSelection + ' beats ' + playerSelection + '.');
    } else {
        ++round;
        console.log(userScore, compScore);
        alert('This round\'s a draw!');
    } 
    winOrLose();
}




   
for (roundScore = 0; roundScore < 5; ++roundScore) {
    game();
}