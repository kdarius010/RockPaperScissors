let computerPlay = () => {
    const pick = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * pick.length);
    return pick[random];
}

let playerPlay = () => {
    let selection = prompt("Pick Rock, Paper, or Scissors: ");
    let newSelection = selection.toLowerCase();
    return newSelection;
}


let playRound = (playerSelection, computerSelection) => {
    const won = alert(`Computer selected ${computerSelection}. You win!`);
    const lose = alert (`Computer selected ${computerSelection}. You Lose!`);
    if (playerSelection == "scissors" && computerSelection == "paper") {
        return won;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return won;
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return won;
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return lose;
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return lose;
    }
    else if (playerSelection == "rock" && computerSelection == "paper")  {
        return lose;
    }
    else if (playerSelection == computerSelection) {
        return alert ("Draw. Try again");
    }
}

/* let game = rounds => {
    for (let i = 0; )i < 5; i++){
        
        }
    }
} */