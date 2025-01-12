let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let player = document.getElementById("player");
let computer = document.getElementById("computer")
let roundsPlayed = 0;
let playerScore = 0;
let computerScore = 0;


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

const playGame = (e) => {
    let humanChoice = e.target.id;
    let computerChoice = getComputerChoice();

     if(humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper") {
        playerScore++
        player.textContent = `Player: ${humanChoice}, ${playerScore}`
        computer.textContent = `Computer: ${computerChoice}, ${computerScore}`
    } else if(humanChoice == computerChoice) {
        player.textContent = `Player: ${humanChoice}, ${playerScore}`
        computer.textContent = `Computer: ${computerChoice}, ${computerScore}`
    } else {
        computerScore++
        player.textContent = `Player: ${humanChoice}, ${playerScore}`
        computer.textContent = `Computer: ${computerChoice}, ${computerScore}`
    }

    roundsPlayed++

            if(roundsPlayed === 4) {
            if(playerScore > computerScore) {
                player.textContent = "Player: You win!!"
                computer.textContent = "Computer: :c"
            } else if(computerScore > playerScore) {
                computer.textContent = "Computer: You lose dumbass ehhehehe!"
                player.textContent = "Player: Kill me :(("
            } else {
                player.textContent = "Player: Draw :/"
                computer.textContent = "Player: Draw :/"
            }
            roundsPlayed = 0
            computerScore = 0
            playerScore = 0
        }
}       


rock.addEventListener("click", playGame)
paper.addEventListener("click", playGame)
scissors.addEventListener("click", playGame)

