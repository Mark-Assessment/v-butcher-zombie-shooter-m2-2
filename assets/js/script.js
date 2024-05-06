// Core game code adapted from Whack-A-Mole tutorial on https://courses.wesbos.com/
// Global variables
const graves = document.querySelectorAll('.grave');
const scoreBoard = document.querySelector('.score');
const zombies = document.querySelectorAll('.zombie');
let lastGrave;
let timeUp = false;
let score = 0;
const audio = new Audio("assets/audio/shot.mp3");

// function to get the zombies to pop up from behind the headstones at random times
function randomTime (min, max) { // 
    return Math.round(Math.random() * (max - min) + min);
}

// function to select a random headstone for the zombie to appear behind
function randomGrave(graves) { 
    const idx = Math.floor(Math.random() * graves.length);
    const grave = graves[idx];
    if(grave === lastGrave) { // makes sure the function doesn't select the same hole twice in a row
        console.log("Oops same grave!");
        return randomGrave(graves);
    }
    
    lastGrave = grave; //saves the last grave that the zombie popped up out of
    return grave;
}

// function to randomly pick the grave and time for the zombie to 'pop up' and stops when time is up
function popUp() { 
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

// function adding a click event to start button for user to initiate the game
function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    popUp();
    setTimeout(() => { // sets the time to be up after 10 seconds/10000ms
        timeUp = true;
    }, 10000);
}

// function for "shooting" the zombie when mouse is clicked (event) on zombie picture
function shoot(e) {
    if(!e.isTrusted) return; // stops user from "faking" a click
    score++; // adds a point to score board when zombie is clicked & removes 'up' class so zombie goes back down
    this.classList.remove('up');
    scoreBoard.textContent = score;
}

zombies.forEach(zombie => zombie.addEventListener('click', shoot)); // event listener to look out for a click on the zombies and then run function shoot

// plays a shot of a gun when the zombies are clicked on - obtained and adapted from tutorial - https://dev.to/shantanu_jana/how-to-play-sound-on-button-click-in-javascript-3m48
zombies.forEach(zombie => {
    zombie.addEventListener("click", () => {
        audio.currentTime = 0; //rewinds to the start of the sound so that it can be hit multiple times
        audio.play();
    });
  });