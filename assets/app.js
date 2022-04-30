// Declare all variables

const input = document.querySelector('#input');
const result = document.querySelector('.result');
const resultCheck = document.querySelector('.resultCheck');
const showResult = document.querySelector('.showResult');
const content = document.querySelector('.content');
const btn = document.querySelector('.btn');


// Call a focus method on the input element when the page loads
window.addEventListener('load', () => {
  input.focus();
});

// Declare an Event listerner for a change in the input element which controls the result and functions later in the app
input.addEventListener('change', (e) => {
  e.preventDefault();

  let myInput = input.value;

  // Declare the random generated number and convert all to a number
  const myRandom = parseInt(Math.floor(Math.random() * 10));


// Declare a checker for the condition when entered
  if (myInput.length === 0 && myInput === '' && myInput < 0) {
    resultCheck.textContent = '';
    showResult.textContent = '';
  }

// Test and compare the input number to the random generated number

  if (input.value == myRandom) {
    showResult.textContent = `Your input number is ${myInput} and the random number generated is ${myRandom}`;
    content.style.background = 'green';
    resultCheck.textContent = 'You win';
    resultCheck.classList.add('win');
  } else {
    showResult.textContent = `Your input number is ${myInput} and the random number generated is ${myRandom}`;
    resultCheck.textContent = 'You lose';
    content.style.background = '#ce0d0d';
    resultCheck.classList.add('lose');
  }

// Call a pop up 

  content.classList.add('active');

  console.log(myRandom);

  input.value = '';
  input.blur();

});

// A click event when the button is clicked 

btn.addEventListener('click', (e) => {
  e.preventDefault();
  content.classList.remove('active');
  resultCheck.classList.remove('win');
  resultCheck.classList.remove('lose');
  input.value = '';
  input.focus();
});


// This checks if a unwanted information is entered into the input element
input.addEventListener('keyup', () => {
  const regrex = /\S+@\S+\.\S=/;
  if (input.value > 9 || input.value <= -1 || input.value == regrex) {
    input.value = '';
    alert('Input value must be between 0 and 9');
    input.focus();
    
  }
});
