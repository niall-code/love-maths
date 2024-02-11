// When HTML has loaded, add event listeners to buttons
document.addEventListener('DOMContentLoaded', function() {
  let buttons = document.getElementsByTagName('button');
  for (let button of buttons) {
    button.addEventListener('click', function() {
      // Feedback when user submits answer
      if (this.getAttribute('data-type') === 'submit') {
        alert('You clicked Submit');
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

  if (gameType === 'addition') {
    displayAdditionQuestion(num1, num2);
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
  document.getElementById('operand1').textContent = operand1;
  document.getElementById('operand2').textContent = operand2;
  document.getElementById('operator').textContent = '-';
}

function displayMultiplyQuestion(operand1, operand2) {
  document.getElementById('operand1').textContent = operand1;
  document.getElementById('operand2').textContent = operand2;
  document.getElementById('operator').textContent = 'x';
}

function displayDivisionQuestion(operand1, operand2) {
  document.getElementById('operand1').textContent = operand1;
  document.getElementById('operand2').textContent = operand2;
  document.getElementById('operator').textContent = '÷';
}

function calculateCorrectAnswer() {

}

function checkAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}