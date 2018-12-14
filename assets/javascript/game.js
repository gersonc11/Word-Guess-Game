var team = ["cowboys", "eagles", "giants", "chiefs", "patriots", "steelers"]
var teamName = "";
var letters = [];
var dashes = [];
var wrongLetters = [];

var num = 0;
var remainingGuesses = 9;
var wins = 0;
var losses = 0;

function begin() {
    teamName = team[Math.floor(Math.random() * team.length)];
    letters = teamName.split("");
    num = teamName.length

    remainingGuesses = 9;
    wrongLetters = [];
    dashes = [];

    for (var i = 0; i < num; i++) {
        dashes.push("");
    }

    document.getElementById("dashes").innerHTML = dashes.join("");
    document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;

};

function checkWord(letter) {

    var letterInTeam = false;

    for (var j = 0; j < num; j++) {

        if (letter == teamName[j]) {
            letterInTeam = true;
        }
    }

    if (letterInTeam) {
        for (var j = 0; j < num; j++) {
            if (teamName[j] == letter) {
                dashes[j] = letter;
            }
        }
    } else {
        wrongLetters.push(letter);
        remainingGuesses--;
    }

};


begin();


function score() {
    document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
    document.getElementById("lettersGuessed").innerHTML = wrongLetters;
    document.getElementById("randomTeam").innerHTML = dashes;

    if (letters.toString() == dashes.toString()) {
        wins++;
        document.getElementById("wins").innerHTML = wins;
        alert("You Win!")
        begin();
    } else if (remainingGuesses === 0) {
        losses++;
        document.getElementById("losses").innerHTML = losses;
        alert("You Lost!")
        begin();
    }

};

if (remainingGuesses == 0) {
    alert("You lost.");
    getElementById("dashes").html("");
}

//display on screen letter user typed
document.onkeypress = function (event) {
    var userTyped = String.fromCharCode(event.keyCode);
    checkWord(userTyped);
    score();
};

