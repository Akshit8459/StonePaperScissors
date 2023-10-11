const choices = ["rock", "paper", "scissors"];
//random choice for comp
function getComputerChoice() {
    let X = Math.floor(Math.random() * 3)
    return choices[X]
}
//function to take player input
function PlayerSelection() {
    console.log("press 1: Rock, 2:paper OR 3:scissors");
    let choice = prompt("Enter choice:");
    return choices[choice - 1]
}

//function to play a round
function playRound(playerSelection, comp) {
    console.log("you chose:" + playerSelection + "-->computer chose:" + comp);
    if (playerSelection == comp) {
        console.log("DRAW");
        return 0;
    }
    else if ((playerSelection == "rock" && comp == "scissors") || (playerSelection == "paper" && comp == "rock") || (playerSelection == "scissors" && comp == "paper")) {
        console.log("You WIN!");
        return 1;
    }
    else {
        console.log("YOU LOSE");
        return -1;
    }
}
//main Game
function Game() {
    var i = prompt('how many rounds to play?');
    var humanscore = 0, compscore = 0;
    for (var j = 0; j < i; j++) {
        console.log("---------------------------------------------------------------------------")
        console.log("YOU:" + humanscore + "   Computer:" + compscore);
        var compSelection = getComputerChoice();
        var playerSelection = PlayerSelection();
        console.log("---------------------------------------------------------------------------")
        var x = playRound(playerSelection, compSelection)
        if (x == 1) {
            humanscore++;
        }
        else if (x == -1) {
            compscore++;
        }
        else {
            continue;
        }
        console.log("---------------------------------------------------------------------------")
    }
}
//Game();

//button actions
var buttons = document.querySelectorAll("button");
buttons[0].addEventListener("click", () => {
    var compSelection = getComputerChoice();
    var x = playRound("rock", compSelection);
    scoreadder(x);
    score.textContent = us + ":" + them;
})
buttons[1].addEventListener("click", () => {
    var compSelection = getComputerChoice();
    var x = playRound("paper", compSelection);
    scoreadder(x);
    score.textContent = us + ":" + them;
})

buttons[2].addEventListener("click", () => {
    var compSelection = getComputerChoice();
    var x = playRound("scissors", compSelection);
    scoreadder(x);
    score.textContent = us + ":" + them;

})

//score
var us = 0;
var them = 0;
function scoreadder(x) {
    if (x == 1) {
        us++;
        decider();
    }
    else if (x == -1) {
        them++;
        decider();
    }
    else {
        us++;
        them++;
        decider();
    }
}
var scorecontainer = document.querySelector("#container");
var score = document.createElement('div');
score.textContent = us + ":" + them;
container.appendChild(score);
function decider(){
    if(us==5 || them==5){
        if(us==5){
            score.textContent ="YOU WIN!! CONGRATULATIONS!!"
        }else{
            score.textContent ="YOU LOSE!! BETTER LUCK NEXT TIME!!"
        }
    }
}
    