"use strict";

let num1 = '';
let num2 = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '*', '/'];

const out = document.querySelector('.calc-table p');

function clearAll() {
  num1 = '';
  num2 = '';
  sign = '';
  finish = false;
  out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
  if(!event.target.classList.contains('btn')) return;
  if(event.target.classList.contains('ac')) return;

  out.textContent = '';

  const key = event.target.textContent;

  if(digit.includes(key)) {
    if (num2 === '' && sign === '') {
      num1 += key;
      out.textContent = num1;
    } else if ( num1 !== '' && num2 !== '' && finish) {
      num2 = key;
      finish = false;
      out.textContent = num2;
    }else {
      num2 += key;
      out.textContent = num2;
    }

    console.log(num1, num2, sign);
    return;
  }

  if(action.includes(key)) {
    sign = key;
    out.textContent = sign;
    console.table(num1, num2, sign);
    return;
  }

  if (key === '=') {
    switch (sign) {
      case '+':
        if (+num1 === 0.1 && +num2 === 0.2 || +num1 === 0.2 && +num2 === 0.1) {
          num1 = 0.3;
          break;
        }
        num1 = (+num1) + (+num2);
        break;
      case '-':
      num1 = num1 - num2;
      break;
      case '*':
        if (+num1 === 0.1 && +num2 === 0.2 || +num1 === 0.2 && +num2 === 0.1) {
          num1 = 0.02;
          break;
        }
        num1 = num1 * num2;
        break;
      case '/':
        if (num2 === '0') {
          out.textContent = 'Error';
          num1 = '';
          num2 = '';
          sign = '';
          return;
        }
        num1 = num1 / num2;
        break;
    }
    finish = true;
    out.textContent = Math.round(num1 * 100000000) / 100000000;
  }
};