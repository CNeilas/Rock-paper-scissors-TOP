const getComputerChoice = () => {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    switch (randomNum) {
        case 1:
            return "rock";
            break;
        case 2: 
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

const getHumanChoice = () => {
    let choice = prompt("Rock, paper or scissors");
    return choice;
}



const playGame = () => {
    let playerScore = 0;
    let computerScore = 0;
    
    const playRound = (humanChoice, computerChoice) => {

        let casedHumanChoice = humanChoice.toLowerCase();
        let scores = `P:${playerScore}, PC:${computerScore}`;
     if(casedHumanChoice == "rock" && computerChoice == "scissors" || casedHumanChoice == "paper" && computerChoice == "rock" || casedHumanChoice == "scissors" && computerChoice == "paper") {
        playerScore++;
        scores = `P:${playerScore}, PC:${computerScore}`;
        return scores;
    } else if(casedHumanChoice == computerChoice) {
        scores = `P:${playerScore}, PC:${computerScore}`;
        return scores;
    } else {
        computerScore++
        scores = `P:${playerScore}, PC:${computerScore}`;
        return scores;
    }
}
    for(let i = 0; i < 5; i++) {
        console.log(playRound(getHumanChoice(), getComputerChoice()))    }
}

playGame()
