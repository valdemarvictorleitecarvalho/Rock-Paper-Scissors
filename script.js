function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
};

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    
    return choice === 0 ? "rock" : choice === 1 ? "paper" : "scissors";
};

function getHumanChoice() {
    let answer = prompt("Choice your play!");

    switch (answer.toLowerCase()) {
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
        default:
            return null;
    }
};

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) return `Draw! Both chose ${capitalize(humanChoice)}`;

    const victoryConditions = (humanChoice === "rock" && computerChoice === "scissors") ||
                              (humanChoice === "scissors" && computerChoice === "paper") ||
                              (humanChoice === "paper" && computerChoice === "rock");

    if (victoryConditions) return `You won! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`;
    else return `Computer won! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`;
};

function playGame() {
    let humanScore = 0, computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        const result = playRound(humanSelection, computerSelection);
        
        if (result.startsWith("Y")) humanScore++;
        else if (result.startsWith("C")) computerScore++;

        console.log(result);
        console.log(`You: ${humanScore} - Computer: ${computerScore}`);
    }
}

playGame();