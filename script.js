// === Угадай число ===
const userGuessInput = document.getElementById('userGuess');
const checkGuessBtn = document.getElementById('checkGuess');
const resultOutput = document.getElementById('gameResult');

let secretNumber = Math.floor(Math.random() * 10) + 1;
console.log(`Загадано число: ${secretNumber}`); // Для отладки
let tries = 0;

checkGuessBtn.addEventListener('click', () => {
  const userGuess = parseInt(userGuessInput.value, 10);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    resultOutput.textContent = 'Введите число от 1 до 10!';
    return;
  }

  tries++;

  if (userGuess === secretNumber) {
    resultOutput.textContent = `🎉 Угадал! Это было ${secretNumber}. Попыток: ${tries}`;
    secretNumber = Math.floor(Math.random() * 10) + 1;
    console.log(`Новое число: ${secretNumber}`);
    tries = 0;
  } else if (userGuess < secretNumber) {
    resultOutput.textContent = 'Слишком маленькое!';
  } else {
    resultOutput.textContent = 'Слишком большое!';
  }

  userGuessInput.value = '';
});


// === Показываем числа от 1 до 10 (for) ===
document.getElementById('show1to10').addEventListener('click', () => {
  let result = '';
  for (let i = 1; i <= 10; i++) {
    result += i + '\n';
  }
  document.getElementById('output').textContent = result;
});


// === Счёт до 100 по 10 (while) ===
document.getElementById('countTo100').addEventListener('click', () => {
  let result = '';
  let i = 0;
  while (i <= 100) {
    result += i + '\n';
    i += 10;
  }
  document.getElementById('output').textContent = result;

  // НЕ сбрасываем угадайку
});
