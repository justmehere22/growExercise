let moves = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
console.log(moves);
// Use an onclick attribute on a HTML element to call this function

// Determine what the result of the game is

document.getElementById('theyPlayed').innerHTML =
  'Your opponent played' + opponentMove;
document.getElementById('youplayed').innerHTML = 'You played' + moves;

const opponentMove = moves[Math.floor(Math.random() * 5)];

const result = 'win';
/* This is showing the result in the console
  How do we show the result in a HTML element instead? */
console.log(result);

if (moves === 'Rock' && opponentMove === 'Scissors') {
  alert('You win');
} else if (moves === 'Paper' && opponentMove === 'Rock') {
  alert('You win');
} else if (moves === 'Scissors' && opponentMove === 'Paper') {
  alert('You lose');
} else {
  console.log('ignore');
}

//const result = result();
