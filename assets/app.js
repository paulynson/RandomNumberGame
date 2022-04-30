const input = document.querySelector('#input');
const result = document.querySelector('.result');
const resultCheck = document.querySelector('.resultCheck');
const showResult = document.querySelector('.showResult');
const content = document.querySelector('.content');
const btn = document.querySelector('.btn');

window.addEventListener('load', () => {
  input.focus();
});

input.addEventListener('change', (e) => {
  e.preventDefault();

  let myInput = input.value;
  const myRandom = parseInt(Math.floor(Math.random() * 10));

  if (myInput.length === 0 && myInput === '' && myInput < 0) {
    resultCheck.textContent = '';
    showResult.textContent = '';
  }

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
    // showResult.clear();
  }
  content.classList.add('active');

  console.log(myRandom);

  input.value = '';
  input.blur();

  // showResult.clear();
});

btn.addEventListener('click', (e) => {
  e.preventDefault();
  content.classList.remove('active');
  resultCheck.classList.remove('win');
  resultCheck.classList.remove('lose');
  input.value = '';
  input.focus();
});

input.addEventListener('keyup', () => {
  if (input.value > 9 || input.value <= -1) {
    input.value = '';
    alert('Input value must be between 0 and 9');
  }
});
