const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const copyEl = document.getElementById('copy');
const passwordEl = document.querySelector('.password-display');

const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>/?';

function generatePassword() {
  let password = '';
  const characterList = [];
  if (uppercaseEl.checked) {
    characterList.push(...uppercaseLetters);
  }
  if (lowercaseEl.checked) {
    characterList.push(...lowercaseLetters);
  }
  if (numbersEl.checked) {
    characterList.push(...numbers);
  }
  if (symbolsEl.checked) {
    characterList.push(...symbols);
  }
  const maxLength = Math.min(lengthEl.value, 100);
  for (let i = 0; i < maxLength; i++) {
    password += characterList[Math.floor(Math.random() * characterList.length)];
  }
  if (characterList.length === 0) {
    password = '';
  }
  return password;
}

function updatePassword() {
  const password = generatePassword();
  passwordEl.innerText = password;
}

function onLoad() {
  updatePassword();
}

generateEl.addEventListener('click', () => {
  updatePassword();
});

lengthEl.addEventListener('input', () => {
  lengthEl.value = Math.min(lengthEl.value, 100); // limit max length to 100
  updatePassword();
});

uppercaseEl.addEventListener('change', () => {
  updatePassword();
});

lowercaseEl.addEventListener('change', () => {
  updatePassword();
});

numbersEl.addEventListener('change', () => {
  updatePassword();
});

symbolsEl.addEventListener('change', () => {
  updatePassword();
});


window.addEventListener('load', () => {
  updatePassword();
});







copyEl.addEventListener('click', () => {
    const password = passwordEl.innerText;
    if (password) {
      navigator.clipboard.writeText(password);
      copyEl.innerText = 'Password Copied!';
      setTimeout(() => {
        copyEl.innerText = 'Copy Password';
      }, 2000);
    }
  });
