// Defining variables
let height = 0

let topbase = 0

let bottombase = 0

let area = 0

// Event listener for button being clicked
document.getElementById('calc-btn').addEventListener('click', calculateArea)

// Area calculation function
function calculateArea () {
  // Grabbing values from text fields:
  height = parseFloat(document.getElementById('height').value)
  topbase = parseFloat(document.getElementById('top-base').value)
  bottombase = parseFloat(document.getElementById('bottom-base').value)
  // Checking if all variables are numbers
  if (!isNaN(height) && !isNaN(topbase) && !isNaN(bottombase)) {
    // If bases are numbers, check if they are greater than 0.
    if ((height > 0) && (topbase > 0) && (bottombase > 0)) {
      // Calculations
      area = ((topbase + bottombase) / 2) * height
      // Output area in message.
      document.getElementById('answer').innerHTML = `The area is ${area}.`
    // If less than 0, send this message:
    } else {
      document.getElementById('answer').innerHTML = 'Please enter a positive number! (Greater than zero)'
    }
  // If NaN, send this message:
  } else {
    document.getElementById('answer').innerHTML = 'Please enter a number using numerical symbols!'
  }
}
