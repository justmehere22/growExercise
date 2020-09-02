/* eslint-disable */

// This allows us to select an element, using its id attribute
const element = document.getElementById('some-id');

// Once you have an element selected, you can replace its contents
// like this:
element.innerHTML = 'Whatever you like';

// Generating a random number between 0 and 1
Math.random();

// Generating a random whole number between 0, 1 and 2
Math.floor(Math.random() * 3);

// Select randomly between paper scissors rock
const moves = ['paper', 'scissors', 'rock'];
const opponentMove = moves[Math.floor(Math.random() * 2)];
