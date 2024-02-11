// When HTML has loaded, add event listeners to buttons
document.addEventListener('DOMContentLoaded', function() {
  let buttons = document.getElementsByTagName('button');
  for (let button of buttons) {
    button.addEventListener('click', function() {
      
      // When user submits answer, check it
      if (this.getAttribute('data-type') === 'submit') {
        checkAnswer();
      } else {

        // Allow user to select game mode
        let gameType = this.getAttribute('data-type');
        runGame(gameType);
      }
    })
  }
  // Run ADDITION as the default game mode
  runGame('addition');
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
*/
function runGame(gameType) {
  // Random numbers, from 1 to 25
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;

  // Begin selected game mode; show first or next question
  if (gameType === 'addition') {
    displayAdditionQuestion(num1, num2);
  } else if (gameType === 'subtract') {
    displaySubtractQuestion(num1, num2);
  } else if (gameType === 'multiply') {
    displayMultiplyQuestion(num1, num2);
  } else if (gameType === 'division') {
    displayDivisionQuestion(num1, num2);
  } else {
    
    // Error message
    alert(`Unknown game type: ${gameType}`);
    throw `Unknown game type: ${gameType}. Game stopped`
  }
}

function displayAdditionQuestion(operand1, operand2) {
  document.getElementById('operand1').textContent = operand1;
  document.getElementById('operand2').textContent = operand2;
  document.getElementById('operator').textContent = '+';
}

function displaySubtractQuestion(operand1, operand2) {
  // Ternary operators to avoid negative answer
  document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
  document.getElementById('operand2').textContent = operand2 < operand1 ? operand2 : operand1;
  document.getElementById('operator').textContent = '-';
}

function displayMultiplyQuestion(operand1, operand2) {
  document.getElementById('operand1').textContent = operand1;
  document.getElementById('operand2').textContent = operand2;
  document.getElementById('operator').textContent = 'x';
}

function displayDivisionQuestion(operand1, operand2) {
  // Ternary operators to avoid negative answer
  document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
  document.getElementById('operand2').textContent = operand2 < operand1 ? operand2 : operand1;
  document.getElementById('operator').textContent = '÷';
}

/**
 * Gets the operands and operator (numbers and symbol)
 * from the DOM, and returns the correct answer.
*/
function calculateCorrectAnswer() {
  let operand1 = parseInt(document.getElementById('operand1').innerText);
  let operand2 = parseInt(document.getElementById('operand2').innerText);
  let operator = document.getElementById('operator').innerText;

  // Returns answer and "game mode to continue" in an array
  if (operator === '+') {
    return [operand1 + operand2, 'addition'];
  } else if (operator === '-') {
    return [operand1 - operand2, 'subtract'];
  } else if (operator === 'x') {
    return [operand1 * operand2, 'multiply'];
  } else if (operator === '÷') {
    return [operand1 / operand2, 'division'];
  } else {

    // Error message
    alert(`Unimplemented operator ${operator}`);
    throw `Unimplemented operator ${operator}. Game stopped`;
  }
}

/**
 * Checks the user's answer against the first element in
 * the returned calculateCorrectAnswer array
*/
function checkAnswer() {
  let userAnswer = parseInt(document.getElementById('answer-box').value);
  let calculatedAnswer = calculateCorrectAnswer();
  let isCorrect = userAnswer === calculatedAnswer[0];

  // Feedback whether correct or incorrect and change score counts
  if (isCorrect) {
    alert("Well done. That's the right answer.");
    incrementScore();
  } else {
    alert(`Sorry, ${userAnswer} wasn't the right answer.
    The answer was ${calculatedAnswer[0]}.`);
    incrementWrongAnswer();
  }

  // New game
  runGame(calculatedAnswer[1]);
}

/**
 * Gets current score from DOM and adds 1
*/
function incrementScore() {
  let oldScore = parseInt(document.getElementById('score').innerText);
  document.getElementById('score').innerText = ++oldScore;
}

/**
 * Gets current incorrect answers tally from DOM and adds 1
*/
function incrementWrongAnswer() {
  let oldScore = parseInt(document.getElementById('incorrect').innerText);
  document.getElementById('incorrect').innerText = ++oldScore;
}