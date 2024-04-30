# **Zombie Shooter Game**

![Zombie Shooter Game shown on a variety of screen sizes]()

Visit the deployed website: [Zombie Shooter By DeadPixel Games]()

## **Project Description**

This shooting game is based on a whack-a-mole game setup and has been made to be easy to play for anyone, any age but leans more towards gamers and users with an interest with first person shooter games. I decided to create this kind of game as zombies are one of my interests/obsessions and I thought it would be fun to play.

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
![Zombie Shooter Game Banner]()

## User Experience UX

- ### User Stories

- #### First Time Visitor Goals

  1. As a first time visitor, I want to play the game easily, and have instructions on how to play which are quick and easy to get to.
  2. As a first time visitor, I would like to see some sort of scoring system to see how well I do.
  3. As a first time visitor, I would like to be able to restart the game easily.

- #### Returning Visitor Goals

  1. As a returning visitor, I want to be able to change the difficulty.
  2. As a returning visitor, I would like the option to save my score to a leaderboard, to see how well I score against others or to keep a log of my own score.

- #### Frequent Visitor Goals

  1. As a frequent visitor, I would like to change the theme/characters in the game.
  2. As a frequent visitor, 

---

### Design

- #### Colour Scheme

  For this project, I have chosen a palette of purples which fit with the spooky theme of zombies but is also pleasing to the eye and provides enough contrast between all the features to ensure the user has a pleasant time playing the game.
  The navigation bar is a lighter shade of purple, with a darker border at the bottom to really distinguish between the navigation element and the body of the page. Once the user is on a smaller screen size than laptop size, the navigation toggler button appears and this has been assigned a darker colour than the navigation bar so the user can distinguish where the button is.
  I have put a colours section in my CSS so if anything needed to be adjusted or changed, it would be quick and easy to do.

| Website Element                   | Colour           |
| --------------------------------- |:----------------:|
| Background of Navigation          | #c785ec          |
| Background of All Pages           | #634087          |
|                                   |                  |
| Body Text & Icons                 | Black            |


![Zombie Shooter Game Colour Scheme]()

- #### Typography

  Google Fonts was used to import the chosen fonts for use on the site.

  - For the Page Title and all text in the body of the website, I have used the google font Rubik due to it being easy to read and I have used the different font weights to change the look of the font for different areas of the site.

  ![Rubik Font Example]()

  I have also named the sans-serif font as a fallback font in case the other chosen fonts do not show for any reason.

- #### Imagery

  - For the headstones which the zombies pop out from behind, I have obtained a graphic from [Hiclipart](https://www.hiclipart.com/). For the zombies, I have downloaded free characters from [Craftpix.net](https://craftpix.net/freebies/free-zombie-villager-chibi-character-sprites/) and I used a favicon from [Favicon.io](https://favicon.io/emoji-favicons/biohazard/) using the biohazard symbol, fits really well with the zombie theme.

- #### Wireframes

  - Home Page Wireframes [Desktop]() [Mobile]()
  - How To Play Wireframe [Tablet]()
  - Leaderboard [Desktop]()

## Technology Used

This project is written using HTML, CSS and JavaScript in Gitpod. I have also used flex-box and bootstrap to make the site responsive, and it is currently being hosted on GitHub.

## Features

The website comprises of a homepage, where the main game element is contained, along with a how to play page and a modal pop-up to display the leaderboard.

- Responsive on all devices, using a mobile first approach.
![Mobile, tablet & desktop view]()

- Interactive Menus and links on both pages.
![Menu]()
![Links]()

- Text logo on the nav element that also acts as a link back to the home page.
![Text]()

- User feedback on button(s) on the navigation element and below the game when hovered over.
![Hover Over Button]()


#### Future Implementations

For future implementations I would like to:

1. Be able to introduce a harmless/victim character that would deduct points if clicked on/shot.
2. Following the above, it would be good to be able to have another character which is special and gains more points when clicked on/shot.
3. Be able to let the user change the theme of the game - this could not be done due to time constraints and skill level.

### Accessibility

I have been trying to make the project and website as accessible as possible. I have been doing this by:

* Using semantic HTML.
* Using the hover element on all buttons on the site to make it known to the user that they are hovering over a button.
* Making sure all pictures have an alt attribute.
* Ensuring that there is a enough colour contrast throughout the site and the background (and background image) does not distract from the content.
* Displaying appropriate title on page tab, so users can easily see where they are on the site, just by looking at the tab.

### Languages Used

- HTML5
- CSS3
- Javascript

### Frameworks, Libraries & Programs Used

   + [Bootstrap 5.3.2:](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
      - Bootstrap was used to create a responsive navigation menu to allow for a hamburger menu once the screen size reduced from desktop/
   + [Google Fonts:](https://fonts.google.com/)
      - Google fonts were used by importing the fonts ????????, into the style.css file which has been used on all pages within the project.
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

The site is deployed using GitHub Pages - [Zombie Shooter Game]().

To Deploy the site using GitHub Pages:

1. Login (or signup) to Github.
2. Go to the repository for this project, []().
3. Click the settings button.
4. Select pages in the left hand navigation menu.
5. From the source dropdown select main branch and press save.
6. The site has now been deployed, please note that this process may take a few minutes before the site goes live.

### Local Development

#### How to Fork

To fork the repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, []()
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, []()
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

- - -

## Testing

  Please click [HERE](testing.md) for all testing.

### Solved Bugs

| No   | Bug  | How I solved the issue |
| :--- | :--- | :--- |
| 1 | After reading that Bootstrap was not required for this project on the Slack channels I was trying to work without the bootstrap framework and found it extremely difficult to code a completely HTML and CSS hamburger menu ![CSS hamburger menu not working properly](/documentation/testing/css-hamburger-bug.png)| After speaking with my tutor, she suggested that I could use the bootstrap framework just for the menu and that would be acceptable for the project, I read the documentation on the Bootstrap navigation element and implemented this into my site |
| 2 | For the contact page, I wanted a map to be at the bottom of the content on that page and also for it to be responsive, I had placed an embedded map but it was only one size and did not look good within other device sizes | I typed my query into google and found a good [tutorial](https://www.w3schools.com/howto/howto_css_responsive_iframes.asp) on W3 schools which showed how to style the class for the map|
| 3 | The font for the navigation links would not change to the particular font I wanted | I researched this and managed to find [this article](https://forum.squarespace.com/topic/253132-custom-css-not-overriding-font-styles-site-nav-links/) where I learnt about the !important attribute and fixed this issue. This attribute was then used for other elements |

### Known Bugs

* When testing was carried out on an Iphone 12 mobile, the booking in form does not display correctly; the title is off center, the checkbox is left aligned for some reason and users have to scroll to the right slightly to view the end of the text box. This is all displayed correctly when viewing on a desktop and reducing the screen size either just through the browser or through devtools.

  <img src="documentation/testing/mobile-form-screenshot.png" height="500">

* I noticed the border style that I had applied to the menu links, applies itself to the full width on the hamburger menu but on the full desktop menu, the border is only as long as the navigation link word. This could be rectified just by spending further time on the project.

![Menu bottom border bug](documentation/testing/border-menu-bug.png)

- - -

## Credits

### Code Used

* 
* 
* 
* 
* 
* 
* 
* 
* 
* 

### Content

### Acknowledgments

I would like to acknowledge the following people:

* 