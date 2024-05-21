# Zombie Shooter Game - Testing

![Zombie Shooter Game shown on a variety of screen sizes](/documentation/screenshots/responsive-screenshot.png)

Visit the deployed website: [Zombie Shooter by DeadPixels](https://veebee4.github.io/zombie-shooter/)

- - -

# CONTENTS

* [Testing Introduction](#testing-introduction)
* [MANUAL TESTING](#manual-testing)
  * [Testing User Stories](#testing-user-stories)
    * [First Time Visitor](#first-time-visitor)
    * [Returning Visitor](#returning-visitor)
    * [Frequent Visitor](#frequent-visitor)
  * [Full Testing](#full-testing)
    * [Home Page](#home-page)
    * [Meet The Artists](#meet-the-artists)
    * [FAQs](#faqs)
    * [Contact Us](#contact-us)
    * [Book In](#book-in)
* [AUTOMATED TESTING](#automated-testing)
  * [W3C Validator](#w3c-validator)
  * [JavaScript Validator](#javascript-validator)
  * [Chrome DevTools Audit Report](#chrome-devtools-audit-report)

  - - -

  I carried out testing throughout the project, by using Chrome developer tools I was able to troubleshoot as the project was being built.
  All pages have been viewed in the Chrome developer tools to ensure each page is responsive on different device and screen sizes.

  - - - 

## Testing Introduction

To carry out testing, there are two methods; Automated and Manual testing.

### Automated Testing (TDD)
    Test Driven Development is carried out by writing tests in Jest that do not pass and then writing the least amount of code to get the test to pass. This ensures the code you are writing is robust and working at every step of the coding process. 
    I have not used this testing in my project due to time constraints but I can see how beneficial writing tests in Jest could have been throughout the project to carry out testing of the code to pick up errors early in development, at every step of the project . Otherwise you could write all of your code and arrive at the finished product with lots of bugs and some features not working.
    This kind of testing only performs well if the right and well thoughtout questions are asked, and it does not test what a user would experience either.

### Manual Testing (BDD)
    Behaviour Driven Development is the expected outcome of a particular action. This is used to test against the user stories that are written for our projects in a format of; Given, When and Then. For example, **given** that a user wants to play a game, **when** the start button is pressed, **then** the game will initialise - This is testable and repeatable but each test must only be for one thing. 

## MANUAL TESTING

### Testing User Stories

- #### First Time Visitor

    1. As a first time visitor, I want to be able to start the game easily & see how much time I have to do it.
        * Once the home page has fully loaded, the user is greeted with a clear, simple layout which shows a control area underneath the game board. This consists of a clearly marked start button which the user can press to initialise the game and also to the left of this button, there is a time area where the user can see the amount of time they have to complete the game.
        * Once the start button is pressed, an alert pops up to warn the user about the loud sound in the game. The user then has to click the 'start game' button in order to proceed with the game.
        * When the user returns to the game area after closing the alert, there is a two second delay before the game starts and the timer starts counting down the number of seconds left in the game.
    
    ![User Story 1](/documentation/testing/user-stories/user-story-1-screenshot.png)

    2. As a first time visitor, I want to have instructions on how to play which are quick and easy to get to.
      * When the user has loaded the homepage, there is a clear link in the navigation bar, or within the hamburger menu called "How To Play".
      * Once the user clicks this link, they are taken to the how to play page where all instructions for the game and all buttons are listed.

    ![User Story 2](/documentation/testing/user-stories/user-story-2-screenshot.png)

    3. As a first time visitor, I would like to see some sort of scoring system to see how well I do.
      * There is a score board area clearly marked on the home page, underneath the timer, beneath the game area. The score changes as the user "shoots" more zombies during the game.
      * After the game has finished, there is a custom alert that will pop up to tell the user how many points they have scored, even if they haven't scored any points with a bad luck message.

    ![User Story 3](/documentation/testing/user-stories/user-story-3-screenshot.png)
    ![User Story Alerts](/documentation/testing/user-stories/user-story-3-screenshot2.png)


- #### Returning Visitor

  1. As a returning visitor, I want to be able to change the difficulty.
    * Underneath the game area and start button, there is a clearly marked "Change Difficulty" button.
    * When the user clicks this button, a modal appears with 4 options; Easy, Normal (default), Hard and Super Hard.
    * Once a difficulty setting button has been pressed, a custom alert appears to confirm their choice and the user then has to click the close button to go back to the game enabling them to change their mind before they go back to the game.

    ![Returning User Story - Button](/documentation/screenshots/difficulty.png)
    ![Returning User Story - Button](/documentation/testing/user-stories/returning-user-story-screenshot.png)
    ![Returning User Story - Button](/documentation/testing/user-stories/returning-user-story-screenshot2.png)

- #### Frequent Visitor Testing

  1. As a frequent visitor, I would like to change the theme/characters in the game.
  2. As a returning visitor, I would like the option to save my score to a leaderboard, to see how well I score against others or to keep a log of my own score.

  Neither of the above could be completed due to time constraints and skill level.

  #### Full Testing

  ##### Home Page

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Site Text Logo | Link directs the user back to the home page | Clicked text title | Home page reloads | Pass |
| Navigation Links | Links take user to appropriate page | Clicked each link | Each link takes user to correct page | Pass |
| Start Button | Produces a pop up alert to warn the user about sound and starts the game after a two second delay | Clicked on start button | Alert appears, start game button on alert pressed, two second delay passes and the zombies start popping up from behind the headstones | Pass |
| Change Difficulty Button | Button initiates a modal containing all difficulty settings, user selects difficulty, alert confirming choice appears, user needs to clear alert and modal to go back to game | Click button, select each difficulty | Button shows modal, all difficulty settings make the confirmation alert appear and each time the time of the game is changed to the correct amount | Pass |
| Button Hover Effect | All buttons turn (including menu toggler) to a lighter shade of purple when user hovers over it | Hover over all buttons | Buttons show correct colour when hovering over it | Pass |
| Dark Mode Button | Changes colours on home page to darker colours | Clicked on button | Page background changes to black, nav and buttons all change to a darker shade of purple than they were previously | Pass |
| Timer and Scoreboard | Updates when game is in progress | Started a game | Timer counts down and score number is added to when user clicks on a zombie | Pass |

  ##### How To Play

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Site Text Link | Link directs the user back to the home page | Clicked text title | Home page reloads | Pass |
| Navigation Links | Links take user to appropriate page | Clicked each link | Each link takes user to correct page | Pass |

  ##### Contact Us

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Site Mini Logo's | Link directs the user back to the home page | Clicked text title | Home page reloads | Pass |
| Navigation Links | Links take user to appropriate page | Clicked each link | Each link takes user to correct page | Pass |
| Form | User is required to complete all input boxes | Filled in first name only, press submit | "Please fill out this field" appears on the next input box | Pass |
| Form | User cannot use white space to skip filling out any of the input fields | Type in two spaces in each input field and press submit | Page just scrolls back to the top of the form | Pass |
| Form | Clear Form button resets any information that has been inputted | Typed something into each input box and clicked clear form button | All information removed and replaced with placeholders | Pass |


## AUTOMATED TESTING

### W3C Validator

  [W3C](https://validator.w3.org/) was used to validate all HTML & CSS code.

  * index.html - Passed - [Result](/documentation/testing/validators/w3c-index.png)
  * how-to-play.html - Passed - [Result](/documentation/testing/validators/w3c-how-to-play.png)
  * contact.html - Passed - [Result](/documentation/testing/validators/w3c-contact.png)
  * style.css - Passed - [Result]( /documentation/testing/validators/w3c-css.png)    

### JavaScript Validator

[jshint](https://jshint.com/) was used to validate the Javascript within the project - Passed
![JavaScript Validator Results]()

### Chrome DevTools Audit Report

  The Google Page-speed Services/Lighthouse was used to assess the accessibiity of the project to ensure the site met expected accessible standards on desktop and mobile. From this result,

  ![Lighthouse Result]()

- #### Browser Testing

  - The Website has been tested on Google Chrome, Safari, and Microsoft Edge.
  - The website was tested on my iPhone 12 mobile and 27" Microsoft PC devices. All other responsive testing was completed online.
  - Testing has been completed to ensure that all pages were linking correctly and external links opened in a new tab.