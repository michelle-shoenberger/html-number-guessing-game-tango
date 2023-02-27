function randomNumber(maxNumber) {
  return Math.floor(Math.random() * maxNumber)
}
const answer = randomNumber(100);
let guesses_made = []


let btnSubmit = document.getElementById('submit')
btnSubmit.addEventListener('click', () => {
  let number = document.getElementById('guess').value;
  if (number.length == 0) {
    return alert('Please enter a number!')
  }
  let node = document.createElement('li')
  node.innerHTML = number;
  document.getElementById('number-list').appendChild(node)
  return checkNumber(number)
})

let checkNumber = (number) => {
  if (number == answer) {
    document.getElementById('message').innerHTML = 'You won!'
  } else if (number > answer) {
    document.getElementById('message').innerHTML = 'Pick a lower number'
  } else {
    document.getElementById('message').innerHTML = 'Pick a higher number'
  }
}

let btnReset = document.getElementById('reset')
btnReset.addEventListener('click', () => {
  let lst = document.getElementById('number-list')
  lst.innerHTML = ''
  document.getElementById('message').innerHTML = ''
})