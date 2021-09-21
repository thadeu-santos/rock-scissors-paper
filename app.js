let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
let userChoice_img = document.getElementById('user-choice')
let computerChoice_img = document.getElementById('computer-choice')



function getComputerChoice () {
    const choices = ['r', 'p', 's'];
    let randomNumber = Math.floor(Math.random()*3);

    return choices[randomNumber];
    
}


function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";

}


function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_element = document.getElementById(userChoice)
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beat  ${convertToWord(computerChoice)}${smallCompWord}. You win!`
    userChoice_element.classList.add('green-glow');
    setTimeout(function() {userChoice_element.classList.remove('green-glow')})
}

function lose(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_element = document.getElementById(userChoice)
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to computer ${convertToWord(computerChoice)}${smallCompWord}. You lost!`
    userChoice_element.classList.add('red-glow');
    setTimeout(function() {userChoice_element.classList.remove('red-glow')})
}

function draw (userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals  ${convertToWord(computerChoice)}${smallCompWord}. It is a draw!`
}

function jogo(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break
    }
}


function imageInserter(getComputerChoice) {
if (getComputerChoice() === 'r') {
    function imagemPedra () {
        computerChoice_img.innerHTML="<img src=assets/rock-neon-icons.png width=\"80\">"
    };
} else if (getComputerChoice() === 'p') {
    function imagemPapel () { 
        computerChoice_img.innerHTML="<img src=assets/paper-neon-icons.png width=\"80\">"
    };
} else {
    function imagemTesoura () {
        computerChoice_img.innerHTML="<img src=assets/scissors-neon-icons.png width=\"80\">"
    };
}
}


function rockImage() {
    userChoice_img.innerHTML="<img src=assets/rock-neon-icons.png width=\"80\">"
}

function scissorsImage() {
    userChoice_img.innerHTML="<img src=assets/scissors-neon-icons.png width=\"80\">"
}

function paperImage() {
    userChoice_img.innerHTML="<img src=assets/paper-neon-icons.png width=\"80\">"
}

function main(){
rock_div.addEventListener('click', function() {
    jogo("r")
    
});

scissors_div.addEventListener('click', function() {
    jogo("s")
});

paper_div.addEventListener('click', function() {
    jogo("p")
});
}
main();

