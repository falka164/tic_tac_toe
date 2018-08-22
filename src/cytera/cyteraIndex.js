"use strict";

const cross = 'X';
const circle = 'O';
let signCounter = 0;
let win = false;
let sign = "";
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
let winner = document.getElementById('winner');

winner.style.display = "flex";
winner.style.justifyContent = 'center';
winner.style.color = '#1c313a';
winner.style.fontSize = '250%';

const tabOfFields = [one, two, three, four, five, six, seven, eight, nine];
const tabOfScores = [false, false, false,
    false, false, false,
    false, false, false];

class Filed {
    constructor(numberOfField, handle) {
        this.field = numberOfField;
        this.handleToField = handle;
        this.handleToField.addEventListener('click', changeSign);
    }
}

function changeSign() {
    if (signCounter % 2 === 1) {
        sign = cross;
    } else {
        sign = circle;
    }
    this.removeEventListener('click', changeSign);
    this.style.cursor = 'auto';
    this.innerHTML = sign;
    let id = tabOfFields.indexOf(this);
    tabOfScores[id] = sign;
    console.log(tabOfScores.toString());
    signCounter++;
    win = checkWin();
    if (win) endGame();
}

function checkWin() {
    for (let i = 0; i < tabOfScores.length; i += 3) {
        if (tabOfScores[i] !== false && tabOfScores[i] === tabOfScores[i + 1] && tabOfScores[i + 1] === tabOfScores[i + 2]) {
            winner.innerHTML = "WINNER: " + sign;
            return true;
        }
    }
    for (let i = 0; i < 3; i++) {
        if (tabOfScores[i] !== false && tabOfScores[i] === tabOfScores[i + 3] && tabOfScores[i + 3] === tabOfScores[i + 6]) {
            winner.innerHTML = "WINNER: " + sign;
            return true;
        }
    }
    if (tabOfScores[0] !== false && tabOfScores[0] === tabOfScores[4] && tabOfScores[4] === tabOfScores[8]) {
        winner.innerHTML = "WINNER: " + sign;
        return true;
    }
    if (tabOfScores[2] !== false && tabOfScores[2] === tabOfScores[4] && tabOfScores[4] === tabOfScores[6]) {
        winner.innerHTML = "WINNER: " + sign;
        return true;
    }
    if (signCounter === 9) {
        winner.innerHTML = "REMIS";
        return true;
    }
    return false;
}
function endGame() {
    for (let i = 0; i < tabOfFields.length; i++) {
        tabOfFields[i].removeEventListener('click', changeSign);
    }
}

function gettingFiled() {
    let field = [];
    for (let i = 0; i < 9; i++) {
        field[i] = new Filed(i + 1, tabOfFields[i]);
    }
}

gettingFiled();
