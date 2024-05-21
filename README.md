# **Zombie Shooter Game**

![Zombie Shooter Game shown on a variety of screen sizes](/documentation/screenshots/responsive-screenshot.png)

Visit the deployed website: [Zombie Shooter By DeadPixel Games](https://veebee4.github.io/zombie-shooter/)

## **Project Description**

This is a shooting game for my Milestone 2 project, it is based on a whack-a-mole game setup by a fictional games company called DeadPixels. This game has been made to be easy to play so the target audience is anyone, of any age, but it does lean more towards the teen age range and up. It would also appeal more to gamers and users with an interest with first person shooter games. I decided to create this kind of game as zombies are one of my interests/obsessions and I thought it would be fun to play.

## CONTENTS

* [User Experience](#user-experience-ux)
  * [User Stories](#user-stories)

* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Wireframes](#wireframes)
  * [Features](#features)
    * [Future Implementations](#future-implementations)
  * [Accessibility](#accessibility)

* [Technology Used](#technology-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

* [Deployment & Local Development](#deployment--local-development)
  * [Deployment](#deployment)
  * [Local Development](#local-development)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)

* [Testing](#testing)
  * [Solved Bugs](#solved-bugs)
  * [Known Bugs](#known-bugs)
  
* [Credits](#credits)
  * [Code Used](#code-used)
  * [Content](#content)
  * [Acknowledgments](#acknowledgments)

--- 
![Zombie Shooter Game Banner](/documentation/screenshots/banner.png)

## User Experience UX

- ### User Stories

- #### First Time Visitor Goals

  1. As a first time visitor, I want to be able to start the game easily & see how much time I have to do it.
  2. As a first time visitor, I want to have instructions on how to play which are quick and easy to get to.
  3. As a first time visitor, I would like to see some sort of scoring system to see how well I do.

- #### Returning Visitor Goals

  1. As a returning visitor, I want to be able to change the difficulty.

- #### Frequent Visitor Goals

  1. As a frequent visitor, I would like to change the theme/characters in the game.
  2. As a returning visitor, I would like the option to save my score to a leaderboard, to see how well I score against others or to keep a log of my own score.

---

### Design

- #### Colour Scheme

  For this project, I have chosen a palette of purples which fit with the spooky theme of zombies but is also pleasing to the eye and provides enough contrast between all the features to ensure the user has a pleasant time playing the game.
  The navigation bar is a lighter shade of purple, with a darker border at the bottom to really distinguish between the navigation element and the body of the page. Once the user is on a smaller screen size than laptop size, the navigation toggler button appears and this has been assigned a darker colour than the navigation bar so the user can distinguish where the button is. There is also a dark mode so the user can make the colours of the game page, darker. All buttons and menus have a black text colour as the purple on these elements are lighter than the background and this still provides enough contrast. On the How To Play page however, I have had to change the colour of all text on the page to be white to provide enough contrast for the user.


| Website Element                   | Colour           |
| --------------------------------- |:----------------:|
| Background of Navigation          | #c785ec          |
| Background of All Pages           | #634087          |
| Body Text & Icons                 | Black            |
| Button Hover                      | #deb7ff          |
| Dark Mode Navigation & Buttons    | #8549a7          |
| Dark Mode Background              | Black            |
| Dark Mode Button Hover            | #a86add          |
| How To Play Page Text             | White            |



![Zombie Shooter Game Colour Scheme](documentation/colour-palette.png)

- #### Typography

  Google Fonts was used to import the chosen fonts for use on the site.

  - For the Page Title and all text in the body of the website, I have used the google font Rubik due to it being easy to read and I have used the different font weights to change the look of the font for different areas of the site.

  ![Rubik Font Example Bold](documentation/rubik-900-example.png)
  ![Rubik Font Example Light](documentation/rubik-300-example.png)

  I have also named the sans-serif font as a fallback font in case the other chosen fonts do not show for any reason.

- #### Imagery

  - For the headstones which the zombies pop out from behind, I have obtained a graphic from [Hiclipart](https://www.hiclipart.com/). For the zombies, I have downloaded free characters from [Craftpix.net](https://craftpix.net/freebies/free-zombie-villager-chibi-character-sprites/) and I used a favicon from [Favicon.io](https://favicon.io/emoji-favicons/biohazard/) using the biohazard symbol, fits really well with the zombie theme.

- #### Wireframes

  - Home Page Wireframes ![Desktop](/documentation/wireframes/home-desktop.png) ![Tablet](/documentation/wireframes/home-tablet.png) ![Mobile](/documentation/wireframes/home-mobile.png)
  - How To Play Wireframe ![Desktop](/documentation/wireframes/how-to-play.png)
  - Contact Us Wireframe ![Desktop](/documentation/wireframes/contact-us-desktop.png) ![Tablet](/documentation/wireframes/contact-us-tablet.png) ![Mobile](/documentation/wireframes/contact-us-mobile.png)

  The layout on the project has been slightly tweaked from the wireframes for aesthetic reasons.

## Technology Used

This project is written using HTML, CSS and JavaScript with JQuery in Gitpod. I have also used flex-box and bootstrap to make the site responsive, and it is currently being hosted on GitHub.

## Features

The website comprises of a home page, where the main game element is contained and a modal pop-up to display the difficulty setting, along with a how to play page and contact us page with a form that directs to a thank you page which re-directs to the home page automatically.

- Responsive on all devices, using a mobile first approach.
![Mobile, tablet & desktop view](/documentation/screenshots/all-screen-sizes.png)

- Resonsive & Interactive Menu/Toggler and links on all pages, with feedback on text links which are bold when hovered over.
![Menu Toggler](/documentation/screenshots/nav-toggler.png)
![Menu Links](/documentation/screenshots/nav-link.png)

- Form for user feedback/questions with autocomplete enabled on contact us page, it does not allow users to just type in white space to trick the input or to leave any of the inputs empty.
![Form](/documentation/screenshots/form-screenshot.png)

- Text logo on the nav element that also acts as a link back to the home page.
![Text Logo](/documentation/screenshots/banner.png)

- User feedback on button(s) on the navigation element and below the game when hovered over.
![Hover Over Button](/documentation/screenshots/button-hover.png)

- Dark mode button so users can make the homepage darker if they prefer.
![Dark Mode](/documentation/screenshots/dark-mode.png)

- Difficulty button so user can select how easy/hard the game is.
![Difficulty Settings](/documentation/screenshots/difficulty.png)

- Custom alerts for sound warning, scoring points and no points.
![Game Start Alert](/documentation/screenshots/game-start-warning.png)
![Score Alert](/documentation/screenshots/won-points-alert.png)
![Game Lost Alert](/documentation/screenshots/no-points-alert.png)

#### Future Implementations

For future implementations I would like to:

1. Be able to introduce a harmless/victim character that would deduct points if clicked on/shot.
2. Following the above, it would be good to be able to have another character which is special and gains more points when clicked on/shot.
3. Be able to let the user change the theme of the game - this could not be done due to time constraints and skill level.
4. Add more intricacy to the difficulty setting so that it also changes the timings of the zombies popping up - this could not be done due to skill level and time constraints.
5. Add a leaderboard where the user can add and save their own score, and view others.

### Accessibility

I have been trying to make the project and website as accessible as possible. I have been doing this by:

* Using semantic HTML.
* Adding sr-only to the menu links so that screen readers know which page they are on.
* Applying the hover element on all buttons and the navigation toggler button (hamburger menu) on the site so that the user is aware they are hovering over a button.
* Text logos in the navigation bar, turn bold when user hovers over them.
* Appropriate titles of pages have been put onto the browser tabs.
* Ensuring that there is a enough colour contrast throughout the site and the background does not distract from the game or content.
* Displaying appropriate title on page tab, so users can easily see where they are on the site, just by looking at the tab.
* Autocomplete added to inputs on contact page form so it is quicker and easier for user to fill out.

### Languages Used

- HTML5
- CSS3
- Javascript

### Frameworks, Libraries & Programs Used

  + [Bootstrap 5.3.2:](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
    - Bootstrap was used to create a responsive navigation menu to allow for a hamburger menu once the screen size reduced from desktop/
  + [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used by importing the font Rubik, into the style.css file which has been used on all pages within the project.
  + [Font Awesome:](https://fontawesome.com/icons)
    - Font Awesome was used for the icon on the dark mode button and on the contact us page.
  + [SweetAlert2:](https://sweetalert2.github.io/)
    - Sweet Alert 2 was used to have more professional looking alert pop ups.
  + [jQuery:](https://jquery.com/)
    - jQuery comes with Bootstrap and makes the navbar responsive.
  + [Git](https://git-scm.com/)
    - The git command was used for version control via the terminal in Gitpod, to commit to Git and Push to GitHub.
  + [GitHub:](https://github.com/)
    - GitHub is used to save and store the files and projects code after being pushed from Git.
  + [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create wireframes.
  + [Google Developer Tools](https://developers.google.com/web/tools) 
    - To troubleshoot and test features, solve issues with responsiveness and styling.
  + [Am I Responsive?](http://ami.responsivedesign.is/)
    - To show the website home page image on a range of devices.

## Deployment & Local Development

### Deployment

The site is deployed using GitHub Pages - [Zombie Shooter Game](https://veebee4.github.io/zombie-shooter/).

To Deploy the site using GitHub Pages:

1. Login (or signup) to Github.
2. Go to the repository for this project, [veebee4/zombie-shooter](https://github.com/veebee4/zombie-shooter).
3. Click the settings button.
4. Select pages in the left hand navigation menu.
5. From the source dropdown select main branch and press save.
6. The site has now been deployed, please note that this process may take a few minutes before the site goes live.

### Local Development

#### How to Fork

To fork the repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, [veebee4/zombie-shooter](https://github.com/veebee4/zombie-shooter)
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, [veebee4/zombie-shooter](https://github.com/veebee4/zombie-shooter)
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

- - -

## Testing

  Please click [HERE](testing.md) for all testing.

### Solved Bugs

| No   | Bug  | How I solved the issue |
| :--- | :--- | :--- |
| 1 | I tried to implement a custom crosshair cursor | I tried several different .png files which were different sizes, but none worked. As this is not a majorly important part of the project, I opted for the system crosshair cursor which works well |
| 2 | I was having trouble getting the footer to stay at the bottom of the page | I typed my query into google and found an answer of making the body html min-height 100vh, this pushes the footer to the bottom of the page|
| 3 | The custom alerts I have put into the JavaScript code for the warning, winning points and for no points would not display the icon properly | I researched this and managed to find [this Stack Overflow](https://stackoverflow.com/questions/68581215/sweet-alert-2-icon-does-not-render-properly) where someone had answered that it was a problem with a span, I remembered I had previously applied some css styles to just the span tag, so I removed the css styling. |
| 4 | The pictures on the how to play page on the deployed website do not display properly represented by a broken picture [broken pictures on how to play page](/documentation/testing/how-to-play-broken-pictures.png)| I inspected the page with Chrome Dev Tools and found by removing the backslash that was infront of the path name, the picture then appeared so I removed all backslashes from the picture file paths. |

### Known Bugs

* When testing the game, I noticed that you could click on the same zombie more than once and gain extra points. If I had more time on this project, I would look to write extra JavaScript code to solve these issues.

* The user is able to click the start button multiple times (dismissing the pop up each time) and multiple sets of zombies pop up from behind the headstones. With more time and knowledge, I would look to fix this bug.

* When testing was carried out on an iphone 12 mobile, the time section did not display correctly when the time arrived at "Finished". This could be fixed either by replacing Finished with the same format as the countdown, just showing "0 seconds remaining", or by further research and time to remedy it.

  <img src="documentation/testing/mobile-screenshot-finished.png" height="500">

* Once the timer has finished, the time area displays Time: Finished, which changes the size of the container around it. More time and knowledge would have been able to fix this issue.

![Time & Score Area Before](/documentation/testing/time-finished-bug-before.png)
![Time & Score Area After](/documentation/testing/time-finished-bug.png)

* There is also a delay between the game starting and the timer starting, it is only very minor but I would have liked to fix it, if I had more time.

* The gunshot sound added for when a user gets a click on a zombie, comes out at one, loud volume. It would have been good to be able to change this so it starts off quiet and the user can adjust the volume themselves. Instead, I created a warning alert to tell the user so they can adjust their volume prior to the game starting.

- - -

## Credits

### Code Used

* I followed [The Whack-A-Mole tutorial](https://javascript30.com/) and adapted code to suit my project, which got the game set up and the score being logged.
* I learned about how to code a countdown timer from [this tutorial](https://www.freecodecamp.org/news/how-to-create-a-countdown-timer/) for my time area.
* My mentor told me about this [Custom Alert Replacement](https://sweetalert2.github.io/) to make the project alerts look more professional.

### Content

All text content within the project has been written by myself, any images have been taken from royalty free websites and are attributed in the (#imagery) section of the readme.
I have also used audio of a gunshot sound, obtained from [Pixabay](https://pixabay.com/sound-effects/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=6349).

### Acknowledgments

I would like to acknowledge the following people:

* Rachel Furlong - Tutor: For giving great advice and reassurance.
* Jubril Akolade - Mentor: Providing with great guidance, and helpful tips.
* ChatGPT - AI: Helping to develop my understanding of JavaScript.