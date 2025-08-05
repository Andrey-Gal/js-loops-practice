let score = 0;
let mistakes = 0;
let a, b;
let timer;
let timeLeft = 30;

function generateTask() {
  clearInterval(timer);
  timeLeft = 30;
  updateTimer();

  const level = Number(document.getElementById('level').value);
  const operation = Math.random() < 0.5 ? 'multiply' : 'divide';

  if (operation === 'multiply') {
    a = Math.floor(Math.random() * level) + 1;
    b = Math.floor(Math.random() * level) + 1;
    document.getElementById('task').textContent = `Сколько будет ${a} × ${b}?`;
    document.getElementById('task').dataset.answer = a * b;
  } else {
    b = Math.floor(Math.random() * level) + 1;
    const result = Math.floor(Math.random() * level) + 1;
    a = b * result;
    document.getElementById('task').textContent = `Сколько будет ${a} ÷ ${b}?`;
    document.getElementById('task').dataset.answer = result;
  }

  document.getElementById('answer').value = '';
  document.getElementById('result').textContent = '';

  timer = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft <= 0) {
      clearInterval(timer);
      handleMistake('⌛ Время вышло!');
    }
  }, 1000);
}

function updateTimer() {
  document.getElementById('timer').textContent = `⏳ ${timeLeft} сек`;
}

function handleMistake(message) {
  const result = document.getElementById('result');
  result.textContent = message;
  result.style.color = 'orange';
  mistakes++;
  score = 0;
  document.getElementById('score').textContent = score;

  if (mistakes >= 3) {
    result.textContent = '⚠️ Ты сделал 3 ошибки подряд. Попробуй ещё раз!';
    mistakes = 0;
  }

  setTimeout(generateTask, 1500);
}

function checkAnswer() {
  const answerInput = document.getElementById('answer');
  const userAnswer = Number(answerInput.value);
  const correctAnswer = Number(document.getElementById('task').dataset.answer);

  if (userAnswer === correctAnswer) {
    document.getElementById('result').textContent = '✅ Верно!';
    score++;
    answerInput.classList.add('correct');
  } else {
    document.getElementById('result').textContent = '❌ Неверно!';
    mistakes++;
    answerInput.classList.add('wrong');
  }

  setTimeout(() => {
    answerInput.classList.remove('correct', 'wrong');
  }, 500);

  document.getElementById('score').textContent = score;
  generateTask();
}

function resetGame() {
  score = 0;
  mistakes = 0;
  document.getElementById('score').textContent = score;
  generateTask();
}
