// When HTML has loaded, add event listeners to buttons
document.addEventListener('DOMContentLoaded', function() {
  let buttons = document.getElementsByTagName('button');
  for (let button of buttons) {
    button.addEventListener('click', function() {
      // Feedback when user submits answer
      if (this.getAttribute('data-type') === 'submit') {
        alert('You clicked Submit');
      } else {
        // Feedback when user selects game mode
        let gameType = this.getAttribute('data-type');
        alert(`You clicked ${gameType}`);
      }
    })
  }
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame() {
  // Random numbers, from 1 to 25
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;
}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {
  
}

function displayMultiplyQuestion() {
  
}

function displayDivisionQuestion() {
  
}

function calculateCorrectAnswer() {

}

function checkAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}