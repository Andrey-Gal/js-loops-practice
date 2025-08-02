// === Получаем элементы ===
const userGuessInput = document.getElementById('userGuess');
const checkGuessBtn = document.getElementById('checkGuess');
const resultOutput = document.getElementById('gameResult');

const show1to10Btn = document.getElementById('show1to10');
const output = document.getElementById('output');

// === Угадайка от 1 до 10 ===
let min = 1;
let max = 10;
let secretNumber = getRandomNumber(min, max);
let tries = 0;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

checkGuessBtn.addEventListener('click', () => {
  const guess = parseInt(userGuessInput.value);

  if (isNaN(guess)) {
    resultOutput.textContent = 'Введите число!';
    return;
  }

  tries++;

  if (guess < secretNumber) {
    resultOutput.textContent = 'Слишком маленькое!';
  } else if (guess > secretNumber) {
    resultOutput.textContent = 'Слишком большое!';
  } else {
    resultOutput.textContent = `Угадал! Это было ${secretNumber}. Попыток: ${tries}`;

    // Перезапуск игры только ПОСЛЕ УГАДЫВАНИЯ
    secretNumber = getRandomNumber(min, max);
    tries = 0;
  }
});

// === Кнопка 1 до 10 (for) ===
show1to10Btn.addEventListener('click', () => {
  let result = '';
  for (let i = 1; i <= 10; i++) {
    result += i + '\n';
  }
  output.textContent = result;
});
