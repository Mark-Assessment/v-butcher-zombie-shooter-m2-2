const graves = document.querySelectorAll('.grave');
const scoreBoard = document.querySelector('.score');
const zombies = document.querySelectorAll('.zombie');
let lastGrave;
let timeUp = false;
let score = 0;

function randomTime (min, max) { // function to get the zombies to pop up from behind the headstones at random times
    return Math.round(Math.random() * (max - min) + min);
}

function randomGrave(graves) { // function to select a random headstone for the zombie to appear behind
    const idx = Math.floor(Math.random() * graves.length);
    const grave = graves[idx];
    if(grave === lastGrave) { // makes sure the function doesn't select the same hole twice in a row
        console.log("Oops same grave!");
        return randomGrave(graves);
    }
    
    lastGrave = grave; //saves the last grave that the zombie popped up out of
    return grave;
}

function popUp() { // picks the grave and time for the zombie to 'pop up' and stops when time is up
    const time = randomTime(200, 1000);
    const grave = randomGrave(graves);
    grave.classList.add('up');
    setTimeout(() => {
        grave.classList.remove('up');
        if (!timeUp) {
            popUp();
        }
    }, time);
}

function startGame() { //links to start button for user to initiate the game
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    popUp();
    setTimeout(() => {
        timeUp = true;
    }, 10000);
}

function shoot(e) {
    if(!e.isTrusted) return // stops user from "faking" a click
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
}

zombies.forEach(zombie => zombie.addEventListener('click', shoot));