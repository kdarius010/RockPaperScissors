let computerPlay = () => {
    const pick = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * pick.length);
    return (pick[random]);
}

let playerSelection = () => {
    selection = prompt("Rock, Paper, or Scissors : ");
}

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        alert(`Computer selected ${computerSelection}. You Lose!`);
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        alert(`Computer selected ${computerSelection}. You Win!`);
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        alert(`Computer selected ${computerSelection}. You Win!`);
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        alert(`Computer selected ${computerSelection}. You Lose!`);
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        alert (`Computer selected ${computerSelection}. You Lose!`);
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        alert (`Computer selected ${computerSelection}. You Win!`);
    }
    else if (playerSelection == computerSelection) {
        alert ("Draw. Try again");
    }
}