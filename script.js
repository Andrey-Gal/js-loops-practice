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

// Игра: Угадай число
document.getElementById('guessNumber').addEventListener('click', () => {
  let secret = Math.floor(Math.random() * 10) + 1;
  let guess;
  let attempts = 0;
  let number;

  do {
    guess = prompt('Угадай число от 1 до 10');

    if (guess === null) break;

    number = parseInt(guess);

    if (isNaN(number)) {
      alert('Пожалуйста, введи число!');
      continue;
    }

    attempts++;
  } while (number !== secret);

  if (guess === null) {
    output.textContent = 'Вы отменили игру.';
  } else {
    output.textContent = `🎉 Угадал! Это было ${secret}. Попыток: ${attempts}`;
  }
});
