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

// function to display a timer counting down number of seconds left - adapted from countdown tutorial on https://courses.wesbos.com/
// and https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown
function timer() {
    let timeLeft = 20;
    const timerDisplay = document.querySelector('.display-time-left');
    const timer = setInterval(() => {
        if (timeLeft <= 0) {
          clearInterval(timer);
          timerDisplay.innerHTML = "Finished";
        } else {
          timerDisplay.innerHTML = `${timeLeft} second${timeLeft !== 1 ? 's' : ''} remaining`;
        }
        timeLeft -= 1;
      }, 1000);
    }

// function adding a click event to start button for user to initiate the game
function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    timer();
    popUp();
    setTimeout(() => { // sets the time to be up after 20 seconds/20000ms
        timeUp = true;
    }, 20000);
}

// function for "shooting" the zombie when mouse is clicked (event) on zombie picture
function shoot(e) {
    if(!e.isTrusted) return; // stops user from "faking" a click
    score++; // adds a point to score board when zombie is clicked & removes 'up' class so zombie goes back down
    this.classList.remove('up');
    scoreBoard.textContent = score;
}

// event listener to look out for a click on the zombies and then run function shoot
zombies.forEach(zombie => zombie.addEventListener('click', shoot)); 

// plays a sound of a gun shot when the zombies are clicked on - obtained and adapted from tutorial - https://dev.to/shantanu_jana/how-to-play-sound-on-button-click-in-javascript-3m48
zombies.forEach(zombie => {
    zombie.addEventListener("click", () => {
        audio.currentTime = 0; //rewinds to the start of the sound so that it can be hit 
        audio.play();           // multiple times and sound doesn't have to finish before it can be played again
    });
  });