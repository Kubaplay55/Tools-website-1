const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
  button.addEventListener('click', e => {
    let value = e.target.value;
    let currentDisplay = display.textContent;

    switch(value) {
      case 'clear':
        display.textContent = '0';
        break;
      case 'backspace':
        display.textContent = currentDisplay.slice(0, -1);
        break;
      case '+':
      case '-':
        if (currentDisplay === '0' || 
            currentDisplay.endsWith('+') || 
            currentDisplay.endsWith('-') || 
            currentDisplay.endsWith('*') || 
            currentDisplay.endsWith('/') ||
            currentDisplay === '') {
          display.textContent += value;
        } else {
          display.textContent = currentDisplay.slice(0, -1) + value;
        }
        break;
      case '*':
      case '/':
        if (currentDisplay === '0' || 
            currentDisplay.endsWith('+') || 
            currentDisplay.endsWith('-') || 
            currentDisplay.endsWith('*') || 
            currentDisplay.endsWith('/')) {
          display.textContent = currentDisplay;
        } else {
          display.textContent += value;
        }
        break;
      case '=':
        try {
          let result = eval(currentDisplay);
          if (isFinite(result)) {
            display.textContent = result;
          } else {
            display.textContent = "Infinity 0 Error";
          }
        } catch (e) {
          display.textContent = "ERROR";
        }
        break;
      default:
        if (currentDisplay === '0') {
          display.textContent = value;
        } else {
          display.textContent += value;
        }
        break;
    }
  });
});
