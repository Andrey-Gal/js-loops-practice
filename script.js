const output = document.getElementById('output');

// Показать числа от 1 до 10
document.getElementById('show1to10').addEventListener('click', () => {
  let result = '';
  for (let i = 1; i <= 10; i++) {
    result += i + '\n';
  }
  output.textContent = result;
});

// Счёт до 100 шагами по 10 (0, 10, 20...)
document.getElementById('countTo100').addEventListener('click', () => {
  let result = '';
  let i = 0;
  while (i <= 100) {
    result += i + '\n';
    i += 10;
  }
  output.textContent = result;
});

// ==== Угадай число (через input) ====
const userGuessInput = document.getElementById('userGuess');
const checkGuessBtn = document.getElementById('checkGuess');
const resultOutput = document.getElementById('gameResult');

let secretNumber = Math.floor(Math.random() * 10) + 1;
let tries = 0;

checkGuessBtn.addEventListener('click', () => {
  const userGuess = parseInt(userGuessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    resultOutput.textContent = 'Введите число от 1 до 10!';
    return;
  }

  tries++;

  if (userGuess === secretNumber) {
    resultOutput.textContent = `🎉 Угадал! Это было ${secretNumber}. Попыток: ${tries}`;
    secretNumber = Math.floor(Math.random() * 10) + 1;
    tries = 0;
  } else if (userGuess < secretNumber) {
    resultOutput.textContent = 'Слишком маленькое!';
  } else {
    resultOutput.textContent = 'Слишком большое!';
  }

  userGuessInput.value = '';
  userGuessInput.focus();
});
