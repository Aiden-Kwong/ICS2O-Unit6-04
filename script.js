// Defining variables
let height = 0

let topbase = 0

let bottombase = 0

let basesum = 0

let area = 0

// Event listener for button being clicked
document.getElementById('calc-btn').addEventListener('click', calculateArea)

// Area calculation function
function calculateArea () {
  // Grabbing values from text fields:
  height = document.getElementById('height').value
  topbase = document.getElementById('top-base').value
  bottombase = document.getElementById('bottom-base').value
  if (!isNaN(height) && !isNaN(topbase) && !isNaN(bottombase)) {
      if ((height > 0) && (topbase > 0) && (bottombase > 0)) {
        
      } else {
        document.getElementById('answer').innerHTML = 'Please enter a positive number! (Greater than zero)'
      }
  } else {
    document.getElementById('answer').innerHTML = 'Please enter a number using numerical symbols!'
  }
}