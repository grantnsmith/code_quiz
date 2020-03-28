# code_quiz
* A javascript code quiz

## Game Play

* This quiz is comprised of 5 questions. It is a timed quiz. If you get a question wrong, you lose 10 seconds off the timer. Your score at the end is how many seconds are left. You can submit your initials and this is save to the high scores page.

## Current bugs to fix and features to add
 
 * BUG: If you click "High Scores" in the Navbar while the timer is going, it doesn't stop the timer. If you leave the High Scores page up, eventually when the timer runs out it will show the "Submit High Score" card on the screen.

 * BUG: If you click "High Scores" in the Navbar while you are already on the High Scores page, it re-renders the Initials and High Scores, duplicating them.

 * FEATURE: List High Scores highest to lowest (instead of just most recent at top).

 * BUG: On Mobile, the timer turns into a hamburger menu. Need to investigate further to see if the timer is still running in this state.

 * FEATURE: Alert the user at the end if they got the actual high score compared to the currently stored High Scores.

 * BUG: Currently you can put nothing into the initials submit field, and it will just show the high score without initials on the High Score page. Add an if statement that forces users to input text.


