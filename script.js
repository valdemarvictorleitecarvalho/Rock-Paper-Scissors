function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
};

function getChoiceEmoji(choice) {
    if (choice === "rock") return "✊";
    if (choice === "paper") return "✋";
    return "✌️";
};

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    
    return choice === 0 ? "rock" : choice === 1 ? "paper" : "scissors";
};

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) return `Draw! Both chose ${capitalize(humanChoice)}`;

    const victoryConditions = (humanChoice === "rock" && computerChoice === "scissors") ||
                              (humanChoice === "scissors" && computerChoice === "paper") ||
                              (humanChoice === "paper" && computerChoice === "rock");

    if (victoryConditions) return `You won! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`;
    else return `Computer won! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`;
};

function playGame(humanChoice) {
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    if (result.startsWith("You won")) humanScore++;
    else if (result.startsWith("Computer won")) computerScore++;


    const displayResult = document.querySelector(".result");
    const displayScore = document.querySelector(".score");
    const displayComputerChoice = document.querySelector(".selectors .choice-container .computerchoice #computer");
    
    displayResult.textContent = result;
    displayScore.textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;
    displayComputerChoice.textContent = getChoiceEmoji(computerChoice);

    rounds--;
    
    if (rounds === 0) {
        displayResult.textContent = "Game Over!";
        displayScore.textContent = `Final Score - You: ${humanScore} | Computer: ${computerScore}`;
        humanScore = 0;
        computerScore = 0;
        rounds = 5;
    }
}

let humanScore = 0, computerScore = 0, rounds = 5;

document.querySelectorAll(".selectors .choice-container .humanchoice a").forEach(btn => {
    btn.addEventListener("click", () => {
        if (rounds > 0) playGame(btn.id);
    });
});

const resetButton = document.querySelector(".header .reset");
resetButton.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    rounds = 5;

    const displayResult = document.querySelector(".result");
    const displayScore = document.querySelector(".score");
    const displayComputerChoice = document.querySelector(".selectors .choice-container .computerchoice #computer");
    
    displayResult.textContent = "Game Reset! Choose your move to start again.";
    displayScore.textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;
    displayComputerChoice.textContent = "";
});