document.onreadystatechange = function() {
  switch (document.readyState) {
    case 'loading':
      break;
    case 'interactive':
      break;
    case 'complete':
      main();
      break;
  }
}

let currentValue = '';
let result = 0;
let operator = undefined;

function main() {
  const inputElement = document.getElementById('current-value');
  const calculatorElement = document.getElementById('calculator');
  const resultElement = calculatorElement.result;
  calculatorElement.addEventListener('click', function(e) {
    if (e.target.tagName != 'INPUT') {
      return;
    }
    const symbol = e.target.value;
    calc(symbol);
    if (currentValue == '') {
      resultElement.value = result;
    } else {
      resultElement.value = currentValue;
    }
  });
}

function calc(symbol) {
  if ('0123456789.'.includes(symbol)) {
    currentValue += symbol;
  } else if ('+-*/'.includes(symbol)) {
    if (operator == undefined) {
      operator = symbol;
      result = Number(currentValue);
      currentValue = '';
    } else if (currentValue == '') {
      operator = symbol;
    } else {
      result = operate(result, Number(currentValue), operator);
      currentValue = '';
      operator = symbol;
    }
  } else if (symbol == '=' && currentValue != '' && operator != undefined) {
    result = operate(result, Number(currentValue), operator);
    currentValue = '';
    operator = undefined;
  } else if (symbol == 'AC') {
    currentValue = ''
    result = 0;
    operator = undefined;
  }
}

function operate(a, b, operator) {
  let result;
  switch (operator) {
    case '+':
      result = a+b;
      break;
    case '-':
      result = a-b;
      break;
    case '*':
      result = a*b;
      break;
    case '/':
      result = a/b;
      break;
  }
  return result;
}
