let targ = document.querySelector(".target_big");
let field = document.getElementById("playfield1");
let point = document.querySelector(".score_screen");
let menu = document.querySelector(".game_menu");
let timecount = document.querySelector(".time");
let resultStat = document.querySelector(".result_bar");
let recordDisplay = document.querySelector(".record"); 
const audio = new Audio("aimaud.mp3");
let sum = 0;

function getRecord(difficulty) {
    return parseInt(localStorage.getItem(`record_${difficulty}`)) || 0;
}

function updateRecord(difficulty, score) {
    let currentRecord = getRecord(difficulty);
    if (score > currentRecord) {
        localStorage.setItem(`record_${difficulty}`, score);
        return true; 
    }
    return false;
}

function moving() {
    point.style.display = "none";
    let x = (field.offsetWidth - targ.offsetWidth) * Math.random();
    let y = (field.offsetHeight - targ.offsetHeight) * Math.random();
    targ.style.top = y + "px";
    targ.style.left = x + "px";
}

function hit1(event) {
    event.stopPropagation();
    sum += 20;
    updateScore(20);
    audio.currentTime = 0;
    audio.play();
}

function hit2(event) {
    event.stopPropagation();
    sum += 60;
    updateScore(60);
    audio.currentTime = 0;
    audio.play();
}

function hit3(event) {
    event.stopPropagation();
    sum += 100;
    updateScore(100);
    audio.currentTime = 0;
    audio.play();
}


function updateScore(points) {
    document.querySelector(".score").textContent = sum;
    point.style.display = "flex";
    point.textContent = points;
}

function startGame(difficulty, interval) {
    resultStat.style.display = "none";
    document.querySelector(".score").innerHTML = "0";
    sum = 0;
    timecount.innerHTML = "30";
    menu.style.display = "none";
    let count = 30;

    const moveInterval = setInterval(moving, interval);

    const timerInterval = setInterval(() => {
        count--;
        if (timecount) {
            timecount.innerHTML = "time: " + count;
        }
        if (count <= 0) {
            clearInterval(moveInterval);
            clearInterval(timerInterval);
            resultStat.style.display = "flex";
            document.querySelector(".result_numb").innerHTML = sum;

            const isRecord = updateRecord(difficulty, sum);
            const record = getRecord(difficulty);
            recordDisplay.textContent = isRecord
                ? `New Record: ${record}`
                : `Record: ${record}`;
        }
    }, 1000);
}

function easy() {
    startGame("easy", 1200);
}

function medium() {
    startGame("medium", 1000);
}

function hard() {
    startGame("hard", 700);
}

function restart() {
    resultStat.style.display = "none";
    menu.style.display = "flex";
    recordDisplay.textContent = ""; 
}
