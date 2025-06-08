const textarea = document.getElementById('message');
const counter = document.getElementById('counter');
const warning = document.getElementById('warning');
const max = 200;

textarea.addEventListener('input', () => {
  const count = textarea.value.length;
  counter.textContent = `${count} / ${max} characters`;

  if (count >= max) {
    warning.classList.add('hidden');
  } else {
    warning.classList.remove('hidden');
  }
});