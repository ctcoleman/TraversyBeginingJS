/* 
  GAME FUNCTION:
  - Player must guess a number between a min and max
  - Player gets a certain amount of guesses
  - Notify player of guesses remaining
  - Notify player of the correct answer if loose
  - Let player choose to play again
 */

// Game values
let min = 1,
    max = 10,
    winningNum = getRandom(min, max),
    guessesLeft = 3

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message')

// Assign UI min and max
minNum.textContent = min
maxNum.textContent = max

// Listen for play again
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again') {
    window.location.reload()
  }  
})

// Listen for guess
guessBtn.addEventListener('click', function(e){
  let guess = parseInt(guessInput.value)
  
  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red')
  } else {
    // Check if won
    if (guess === winningNum) {
      gameOver(true, `Great Job! ${winningNum} is correct! You Win`)
    } else {
      // Wrong number
      guessesLeft -= 1

      if (guessesLeft === 0) {
        gameOver(false, `What the fuck was that?! ${winningNum} is the winning number! You definitely lost dumb ass.`)
      } else {
        setMessage(`No! ${guess} is not fucking correct. You have ${guessesLeft} guesses left. Don't fuck this up...`, 'red')
        guessInput.style.borderColor = 'red'
      }
    }  
  }
})

// Game over
function gameOver(won, msg) {
  let color

  won === true ? color = 'green' : color = 'red'
  
  // Disable input
  guessInput.disabled = true
  // Change border color
  guessInput.style.borderColor = color
  // Change text color
  message.style.color = color
  // Set message
  setMessage(msg)

  // Play again?
  guessBtn.value = 'Play again?'
  guessBtn.className += 'play-again'
}

// Get the winning number
function getRandom(min, max) {
  return Math.floor((Math.random() * (max - min + 1) + min))
}

// Set message function
function setMessage(msg, color) {
  message.style.color = color
  message.textContent = msg
}