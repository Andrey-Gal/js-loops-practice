const userGuessInput = document.getElementById('userGuess');
const checkGuessBtn = document.getElementById('checkGuess');
const resultOutput = document.getElementById('gameResult');
const guessTitle = document.querySelector('h3');

const show1to10Btn = document.getElementById('show1to10');
const countTo100Btn = document.getElementById('countTo100');
const output = document.getElementById('output');

let min = 1;
let max = 10;
let secretNumber = 0;
let tries = 0;

// Генерация числа
function generateNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Сброс игры и установка нового числа
function resetGame(newMin, newMax, titleText) {
  min = newMin;
  max = newMax;
  secretNumber = generateNumber(min, max);
  tries = 0;
  guessTitle.textContent = titleText;
  resultOutput.textContent = '';
  userGuessInput.value = '';
  console.log(`🎯 Загадано число: ${secretNumber}`);
}

// Проверка угадайки
checkGuessBtn.addEventListener('click', () => {
  const guess = parseInt(userGuessInput.value, 10);

  if (isNaN(guess) || guess < min || guess > max) {
    resultOutput.textContent = `Введите число от ${min} до ${max}!`;
    return;
  }

  tries++;

  if (guess === secretNumber) {
    resultOutput.textContent = `🎉 Верно! Это было ${secretNumber}. Попыток: ${tries}`;
    secretNumber = generateNumber(min, max); // Новое число для следующей игры
    console.log(`🎯 Новое число: ${secretNumber}`);
    tries = 0;
  } else if (guess < secretNumber) {
    resultOutput.textContent = 'Слишком маленькое!';
  } else {
    resultOutput.textContent = 'Слишком большое!';
  }

  userGuessInput.value = '';
});

// Цикл for от 1 до 10
show1to10Btn.addEventListener('click', () => {
  let result = '';
  for (let i = 1; i <= 10; i++) {
    result += i + '\n';
  }
  output.textContent = result;
  resetGame(1, 10, 'Угадай число от 1 до 10');
});

// Цикл while от 10 до 100 по 10
countTo100Btn.addEventListener('click', () => {
  let result = '';
  let i = 10;
  while (i <= 100) {
    result += i + '\n';
    i += 10;
  }
  output.textContent = result;
  resetGame(10, 100, 'Угадай число от 10 до 100');
});

// Первый запуск
resetGame(1, 10, 'Угадай число от 1 до 10');
