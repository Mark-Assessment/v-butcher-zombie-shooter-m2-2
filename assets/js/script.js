// Core game code adapted to suit from Whack-A-Mole tutorial on https://courses.wesbos.com/
// Global variables & audio
const graves = document.querySelectorAll('.grave');
const scoreBoard = document.querySelector('.score');
const zombies = document.querySelectorAll('.zombie');
const audio = new Audio("assets/audio/shot.mp3");
let lastGrave;
let timeUp = false;
let score = 0;


// function to get a random time for the zombies to pop up
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

/*
function to select a random headstone for the zombie to appear behind 
making sure the function doesn't use the same grave twice in a row
and saves the last grave that the zombie popped up out of
*/
function randomGrave(graves) {
    const idx = Math.floor(Math.random() * graves.length);
    const grave = graves[idx];
    if(grave === lastGrave) {
        console.log("Oops same grave!");
        return randomGrave(graves);
    }
    lastGrave = grave;
    return grave;
}

// function adding a click event to start button for user to initiate the game with warning pop up message
function startGame() {
    Swal.fire({
        title: "Warning!",
        text: "This game contains loud sound! Make sure your volume is at an appropriate level",
        icon: "warning",
        allowOutsideClick: false,
    }).then(() => {
    setTimeout(() => {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    timer();
    popUp();
    setTimeout(() => {
        timeUp = true;
            }, 20000);
        }, 2000);
    });
}

// function for the zombie to 'pop up' using randomTime and randomGrave functions and stops when time is up
function popUp() {
    const time = randomTime(500, 1000);
    const grave = randomGrave(graves);
    grave.classList.add('up');
    setTimeout(() => {
        grave.classList.remove('up');
        if (!timeUp) {
            popUp();
        } else {
            gameOver();
        }
    }, time);
}

/*
function to display a timer counting down number of seconds left in the game 
adapted from countdown tutorial on https://courses.wesbos.com/
and https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown
*/
function timer() {
    let timeLeft = 20;
    const timerDisplay = document.querySelector('.display-time-left');
    const interval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(interval);
            timerDisplay.innerHTML = "Finished";
        } else {
            const remainingSeconds = (timeLeft !== 1) ? 's' : '';
            timerDisplay.innerHTML = `${timeLeft} second${remainingSeconds} remaining`;
        }
        timeLeft -= 1;
    }, 1000);
}

/*
function for "shooting" the zombie when mouse is clicked (event) on zombie picture
checks the click is not being "faked" by the user using script, then increments the score and adds it to the scoreboard
*/
function shoot(e) {
    if(!e.isTrusted) {
        return;
    }
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
}

// function to show modal for user to select/change difficulty setting
function changeDifficulty() {
    const difficultyBtn = document.getElementsByClassName('difficulty');
    const openModalDifficulty = document.getElementById('open-modal2');
    const closeModalDifficulty = document.getElementById('close-modal2');
    const modalContainerDifficulty = document.getElementById('modal-container-difficulty');

    openModalDifficulty.addEventListener('click', () => {
    modalContainerDifficulty.classList.add('show');
    });

    closeModalDifficulty.addEventListener('click', () => {
    modalContainerDifficulty.classList.remove('show');
    });
}



function displayDifficulty(difficulty) {
        alert(`Difficulty set to ${difficulty}.`);
    }

function gameOver() {
    if(timeUp) {
        if(score > 0) {
        Swal.fire({
            title: "Winner!",
            text: "You got " + score + " Points!",
            icon: "success"
          });
        } else {
            Swal.fire({
                title: "Bad Luck!",
                text: "You didn't score any points!",
                icon: "error"
            });
        }
    }
}

function darkMode() {
    const dark = document.body;
    dark.classList.toggle('dark-mode');
}

// Event Listeners

 // Event listener to look out for a click on the zombies and then run function shoot
zombies.forEach((zombie) => {
    zombie.addEventListener('click', shoot);
});

/*
plays a sound of a gun shot when the zombies are clicked on
obtained and adapted from tutorial - https://dev.to/shantanu_jana/how-to-play-sound-on-button-click-in-javascript-3m48
it also rewinds to the start of the sound so that it can be hit multiple times and sound doesn't have to finish before 
it can be played again
*/
zombies.forEach((zombie) => {
    zombie.addEventListener('click', () => {
        audio.currentTime = 0;
        audio.play();
    });
});
