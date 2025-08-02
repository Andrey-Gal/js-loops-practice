const input = document.getElementById('numberInput');
const button = document.getElementById('showBtn');
const output = document.getElementById('output');

button.addEventListener('click', () => {
  const num = parseInt(input.value);

  if (isNaN(num) || num < 1 || num > 20) {
    output.textContent = 'Введите число от 1 до 20.';
    return;
  }

  let result = '';
  for (let i = 1; i <= 10; i++) {
    result += `${num} × ${i} = ${num * i}\n`;
  }

  output.textContent = result;
});
