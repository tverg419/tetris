## Project #1: Tetris
|  Day | Deliverable | Status |
|---|---|---|
|Jul 29| Planning/Wireframes | Complete |
|Jul 30| Create gameboard and add basic funcs | incomplete|
|Jul 31| Add in game logic. (Game should be almost functioning) | incomplete |
|Aug 1 | Game Logic 2 and finalize | incomplete |
|Aug 2 |  | incomplete |
|Aug 3 |  | incomplete | 
|Aug 4 |  | incomplete |
|Aug 5 | Presentations |   |

***
### Questions
- What images are we going to need? (Tetris title image)
- 
***

### Tasks

#### HTML
- [x] Create base HTML, CSS and JavaScript
- [x] Link CSS and JS and test to make sure they are working
- [ ] Use a canvas/div to hold the whole game board, scoreboard, controls and next piece
- [ ] Start with 100 divs (10x10) grid, expand to 200 (10x20) - 240 (10x24) grid once the functionality is figured out. Can we make this elegant by using a function within the JS? Hard code for the beginning
- [ ] Have a button labeled with id 'start-button'
- [ ] Possibly create a modal container for the Game Over screen?

####Styling
- [ ] Plan a layout so you know the exact pixels before coding 
- [ ] Style a very basic tetris layout and focus on getting the functionality of the game to work
- [ ] Add a border to each square within the grid and each tetrimino
- [ ] Change the font-sizing and font-family of each component of the game.
    - Group 1: Title
    - Group 2: Extras (Controls, Scoreboard, Next Piece)
- [ ] Change the styling of the start button
- [ ] Add a shadow to the game border, scoreboard, next-piece

####JavaScript
- [ ] DOMContentLoaded to ensure canvas is built, but does not play until you hit the start button 
- [ ] Create an array for each tetrimino that contains an original rotation and three other orientations for the piece
    - When building the array, an occupied space should be a 1 and a vacant space should be represented by 0
- [ ] Create an array that stores respective colors for each tetrimino array
- [ ] Create a random function that chooses a random tetrimino and a random orientation
- [ ] Use a setInterval function to automatically move the pieces down every second. Can we add a smoother animation for the moving down effect?
- [ ] Have an array of occupied spaces or a function that checks if the piece is moving into a square that is already occupied at the bottom
- [ ] Add event listeners to four key strokes
    - Move Left: left arrow key
    - Move Right: right arrow key
    - Rotate Clockwise (Right): down arrow key
    - Rotate Counter Clockwise (Left): up arrow key

***

## Organizing
| Task | Priority (H/M/L) | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Planning | H | X hrs| X hrs | X hrs |
| Wireframes | H | X hrs| X hrs | X hrs |
|  |  | X hrs| X hrs | X hrs |
|  |  | X hrs| X hrs | X hrs |
|  |  | X hrs| X hrs | X hrs |
|  |  | X hrs| X hrs | X hrs |
|  |  | X hrs | X hrs  |  X hrs|

***

## Goals

### MVP
- As a player, I want my current score to be displayed on the screen as I play and progress
- As a player, I want to be able to move left/right and rotate clockwise/counterclockwise
- As a player, I want the game to start when I hit the start button
- As a player, I want to be able to restart the game without having to reload the webpage
- As a player, I want to be able to see the next piece that is coming

### Stretch Goals
- As a player, I want to be able to see how much time I have spent playing the current session
- As a player, I want to be able to hold a piece with a keystroke
- As a player, I want to see my next three pieces
- As a player, I want to be able to hear the Tetris theme as I play
- As a player, I want to be able to drop/ soft drop pieces
- As a player, I want the game to tell me how many lines of Tetris I have cleared.
- As a player, I want the game to have a level system that gets increasingly more difficult
- As a player, I want to be able to compete with my friend locally


***

## Resources
- Google Fonts: https://fonts.google.com
- WireFrame: https://wireframe.cc/



