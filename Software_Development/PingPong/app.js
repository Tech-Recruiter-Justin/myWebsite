let p1 = 0;
let p2 = 0;
let game1 = 0;
let game2 = 0;
let status = "normal";
const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");
const p1Plus = document.querySelector("#p1Plus");
const p2Plus = document.querySelector("#p2Plus");
const p1Game = document.querySelector("#p1Game");
const p2Game = document.querySelector("#p2Game");
const p1Win = document.querySelector("#p1Win");
const p2Win = document.querySelector("#p2Win");

//When P1 + 1 button is pressed
p1Plus.addEventListener('click', function(e){
    p1++;
    p1Score.innerText = p1;
    if (status == 'deuce' && p1 == p2 + 2){
        player1Wins();
    } else if (status == 'normal'){
    checkStatus();
        if (p1 === 11){
            player1Wins();
        };
    };
});

//When P2 + 1 button is pressed
p2Plus.addEventListener('click', function(e){
    p2++;
    p2Score.innerText = p2;
    if (status == 'deuce' && p2 == p1 + 2){
        player2Wins();
    } else if (status == 'normal'){
        checkStatus();
            if (p2 === 11){
                player2Wins();
            };
    };
});

//When reset button is pressed
reset.addEventListener('click', function(e){
    gameDone();
    game1 = 0;
    game2 = 0;
    p1Game.innerText = game1;
    p2Game.innerText = game2;
    p1Plus.disabled = false;
    p2Plus.disabled = false;
    p1Win.disabled = false;
    p2Win.disabled = false;
});

//When P1 Win button is pressed
p1Win.addEventListener('click', function(e){
    player1Wins();
});

//When P2 Win button is pressed
p2Win.addEventListener('click', function(e){
    player2Wins();
});

//When one side wins
gameDone = () => {
    p1 = 0;
    p1Score.innerText = p1;
    p2 = 0;
    p2Score.innerText = p2;
    status = "normal";
};

//Check if there is a deuce
checkStatus = () => {
    if (p1 === 10 && p2 === 10){
        status = "deuce";
    } else {
        status = "normal";
    }
};

player1Wins = () => {
    game1 = game1 + 1;
    p1Game.innerText = game1;
    gameDone();
    checkGame();
};

player2Wins = () => {
    game2 = game2 + 1;
    p2Game.innerText = game2;
    gameDone();
    checkGame();
};

checkGame = () => {
    if (game1 === 3){
        disableButtons();
    } else if (game2 ===3){
        disableButtons();
    };
};

disableButtons = () => {
    p1Plus.disabled = true;
    p2Plus.disabled = true;
    p1Win.disabled = true;
    p2Win.disabled = true;
};